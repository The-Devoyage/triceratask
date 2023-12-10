import { forwardRef, useRef, useState } from "react";
import { userIdentifierVar, userUuidVar } from "src/state";
import { AddConnection, Connection, EmptyConnections } from "./components";
import { useListConnectionsQuery } from "./graphql.generated";
import { Badge, Card, Tabs, TabsRef } from "flowbite-react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbUserBolt } from "react-icons/tb";
import { Get_User_Connection_Input } from "src/types/generated";
import { ConnectionTabs } from "..";
import { useNewConnectionsSidebarQuery } from "src/views/sidebar/graphql.generated";

export const MyConnections = () => {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(ConnectionTabs.Connections);
  const { data } = useNewConnectionsSidebarQuery({
    variables: {
      get_user_connections_input: {
        query: {
          connected_user: { uuid: userUuidVar() },
          accepted: false,
          revoked: false,
        },
      },
    },
  });

  const setActiveTabByIndex = (index: number) => {
    tabsRef.current?.setActiveTab(index);
  };

  return (
    <div className="grid grid-cols-6 gap-4 mb-3">
      <div className="col-span-6 md:col-span-4">
        <Card>
          <Tabs.Group
            style="fullWidth"
            ref={tabsRef}
            theme={{
              tablist: {
                base: "overflow-x-auto",
              },
            }}
            onActiveTabChange={(index) => {
              const tab: ConnectionTabs = Object.values(ConnectionTabs)[index];
              setActiveTab(tab);
            }}
          >
            <Tabs.Item title={ConnectionTabs.Connections} icon={TbUserBolt}>
              <ConnectionList
                ref={usernameInputRef}
                activeTab={activeTab}
                setActiveTab={setActiveTabByIndex}
                tab={ConnectionTabs.Connections}
                getUserConnectionsInput={{
                  query: {
                    OR: [
                      {
                        connected_user: { uuid: userUuidVar() },
                        accepted: true,
                        revoked: false,
                      },
                      {
                        created_by: {
                          uuid: userUuidVar(),
                        },
                        accepted: true,
                        revoked: false,
                      },
                    ],
                  },
                }}
              />
            </Tabs.Item>
            <Tabs.Item
              icon={HiOutlineUserGroup}
              title={
                <>
                  <span>{ConnectionTabs.Invites}</span>
                  <Badge className="ml-2" size="xs" color="gray">
                    {data?.get_user_connections?.length}
                  </Badge>
                </>
              }
            >
              <ConnectionList
                ref={usernameInputRef}
                activeTab={activeTab}
                setActiveTab={setActiveTabByIndex}
                tab={ConnectionTabs.Invites}
                getUserConnectionsInput={{
                  query: {
                    OR: [
                      {
                        connected_user: { uuid: userUuidVar() },
                        accepted: false,
                        revoked: false,
                      },
                      {
                        identifier: userIdentifierVar(),
                        accepted: false,
                        revoked: false,
                      },
                    ],
                  },
                }}
              />
            </Tabs.Item>
            <Tabs.Item icon={HiOutlineUserGroup} title={ConnectionTabs.Invited}>
              <ConnectionList
                ref={usernameInputRef}
                activeTab={activeTab}
                setActiveTab={setActiveTabByIndex}
                tab={ConnectionTabs.Invited}
                getUserConnectionsInput={{
                  query: {
                    created_by: { uuid: userUuidVar() },
                    accepted: false,
                  },
                }}
              />
            </Tabs.Item>
          </Tabs.Group>
        </Card>
      </div>
      <div className="col-span-6 md:col-span-2 order-first md:order-last">
        <AddConnection
          className="mb-3 w-full"
          setActiveTab={setActiveTabByIndex}
          ref={usernameInputRef}
        />
      </div>
    </div>
  );
};

const ConnectionList = forwardRef<
  HTMLInputElement,
  {
    getUserConnectionsInput: Get_User_Connection_Input;
    activeTab: ConnectionTabs;
    tab: ConnectionTabs;
    setActiveTab: (index: number) => void;
  }
>(({ getUserConnectionsInput, activeTab, tab, setActiveTab }, ref) => {
  const { data } = useListConnectionsQuery({
    variables: {
      get_user_connections_input: getUserConnectionsInput,
      get_user_input: { query: {} },
      get_connected_user_input: { query: {} },
    },
    skip: tab !== activeTab,
  });

  if (!data?.get_user_connections?.length)
    return <EmptyConnections ref={ref} />;

  return data.get_user_connections?.map((connection, index) => (
    <Connection
      key={connection.uuid ?? index}
      connection={connection}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  ));
});
