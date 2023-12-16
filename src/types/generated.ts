export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate_finish: Authenticate_Success;
  authenticate_start: Scalars['String']['output'];
  create_notification: Notification;
  create_notification_message: Notification_Message;
  create_todo: Todo;
  create_todo_access: Todo_Access;
  create_todo_history: Todo_History;
  create_user: User;
  create_user_connection: User_Connection;
  register_finish: Scalars['Boolean']['output'];
  register_start: Scalars['String']['output'];
  update_notification_messages: Array<Notification_Message>;
  update_notifications: Array<Notification>;
  update_todo_accesss: Array<Todo_Access>;
  update_todo_historys: Array<Todo_History>;
  update_todos: Array<Todo>;
  update_user_connections: Array<User_Connection>;
  update_users: Array<User>;
};


export type MutationAuthenticate_FinishArgs = {
  identifier: Scalars['String']['input'];
  public_key: Scalars['String']['input'];
};


export type MutationAuthenticate_StartArgs = {
  identifier: Scalars['String']['input'];
};


export type MutationCreate_NotificationArgs = {
  create_notification_input: Create_Notification_Input;
};


export type MutationCreate_Notification_MessageArgs = {
  create_notification_message_input: Create_Notification_Message_Input;
};


export type MutationCreate_TodoArgs = {
  create_todo_input: Create_Todo_Input;
};


export type MutationCreate_Todo_AccessArgs = {
  create_todo_access_input: Create_Todo_Access_Input;
};


export type MutationCreate_Todo_HistoryArgs = {
  create_todo_history_input: Create_Todo_History_Input;
};


export type MutationCreate_UserArgs = {
  create_user_input: Create_User_Input;
};


export type MutationCreate_User_ConnectionArgs = {
  create_user_connection_input: Create_User_Connection_Input;
};


export type MutationRegister_FinishArgs = {
  identifier: Scalars['String']['input'];
  public_key: Scalars['String']['input'];
};


export type MutationRegister_StartArgs = {
  identifier: Scalars['String']['input'];
};


export type MutationUpdate_Notification_MessagesArgs = {
  update_notification_messages_input: Update_Notification_Messages_Input;
};


export type MutationUpdate_NotificationsArgs = {
  update_notifications_input: Update_Notifications_Input;
};


export type MutationUpdate_Todo_AccesssArgs = {
  update_todo_accesss_input: Update_Todo_Accesss_Input;
};


export type MutationUpdate_Todo_HistorysArgs = {
  update_todo_historys_input: Update_Todo_Historys_Input;
};


export type MutationUpdate_TodosArgs = {
  update_todos_input: Update_Todos_Input;
};


export type MutationUpdate_User_ConnectionsArgs = {
  update_user_connections_input: Update_User_Connections_Input;
};


export type MutationUpdate_UsersArgs = {
  update_users_input: Update_Users_Input;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  get_notification: Notification;
  get_notification_message: Notification_Message;
  get_notification_messages: Array<Notification_Message>;
  get_notifications: Array<Notification>;
  get_todo: Todo;
  get_todo_access: Todo_Access;
  get_todo_accesss: Array<Todo_Access>;
  get_todo_history: Todo_History;
  get_todo_historys: Array<Todo_History>;
  get_todos: Array<Todo>;
  get_user: User;
  get_user_connection: User_Connection;
  get_user_connections: Array<User_Connection>;
  get_users: Array<User>;
};


export type QueryGet_NotificationArgs = {
  get_notification_input: Get_Notification_Input;
};


export type QueryGet_Notification_MessageArgs = {
  get_notification_message_input: Get_Notification_Message_Input;
};


export type QueryGet_Notification_MessagesArgs = {
  get_notification_messages_input: Get_Notification_Messages_Input;
};


export type QueryGet_NotificationsArgs = {
  get_notifications_input: Get_Notifications_Input;
};


export type QueryGet_TodoArgs = {
  get_todo_input: Get_Todo_Input;
};


export type QueryGet_Todo_AccessArgs = {
  get_todo_access_input: Get_Todo_Access_Input;
};


export type QueryGet_Todo_AccesssArgs = {
  get_todo_accesss_input: Get_Todo_Accesss_Input;
};


export type QueryGet_Todo_HistoryArgs = {
  get_todo_history_input: Get_Todo_History_Input;
};


export type QueryGet_Todo_HistorysArgs = {
  get_todo_historys_input: Get_Todo_Historys_Input;
};


export type QueryGet_TodosArgs = {
  get_todos_input: Get_Todos_Input;
};


export type QueryGet_UserArgs = {
  get_user_input: Get_User_Input;
};


export type QueryGet_User_ConnectionArgs = {
  get_user_connection_input: Get_User_Connection_Input;
};


export type QueryGet_User_ConnectionsArgs = {
  get_user_connections_input: Get_User_Connections_Input;
};


export type QueryGet_UsersArgs = {
  get_users_input: Get_Users_Input;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type Authenticate_Success = {
  __typename?: 'authenticate_success';
  token: Scalars['String']['output'];
  user_identifier: Scalars['String']['output'];
  user_uuid: Scalars['String']['output'];
};

export type Create_Notification_Input = {
  values: Create_Notification_Values_Input;
};

export type Create_Notification_Message_Input = {
  values: Create_Notification_Message_Values_Input;
};

export type Create_Notification_Message_Values_Input = {
  identifier: Scalars['String']['input'];
  message: Scalars['String']['input'];
};

export type Create_Notification_Values_Input = {
  notification_message: Scalars['Int']['input'];
  read: Scalars['Boolean']['input'];
};

export type Create_Todo_Access_Input = {
  values: Create_Todo_Access_Values_Input;
};

export type Create_Todo_Access_Values_Input = {
  edit: Scalars['Boolean']['input'];
  manage: Scalars['Boolean']['input'];
  revoked: Scalars['Boolean']['input'];
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Todo_History_Input = {
  values: Create_Todo_History_Values_Input;
};

export type Create_Todo_History_Values_Input = {
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Todo_Input = {
  values: Create_Todo_Values_Input;
};

export type Create_Todo_Values_Input = {
  completed: Scalars['Boolean']['input'];
  description: Scalars['String']['input'];
  goal_date?: InputMaybe<Scalars['String']['input']>;
  is_encrypted?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};

export type Create_User_Connection_Input = {
  values: Create_User_Connection_Values_Input;
};

export type Create_User_Connection_Values_Input = {
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  user_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Create_User_Input = {
  values: Create_User_Values_Input;
};

export type Create_User_Values_Input = {
  identifier: Scalars['String']['input'];
  last_active?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Notification_Input = {
  query: Get_Notification_Query_Input;
};

export type Get_Notification_Message_Input = {
  query: Get_Notification_Message_Query_Input;
};

export type Get_Notification_Message_Query_Input = {
  AND?: InputMaybe<Array<Get_Notification_Message_Query_Input>>;
  OR?: InputMaybe<Array<Get_Notification_Message_Query_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Notification_Messages_Input = {
  query: Get_Notification_Messages_Querys_Input;
};

export type Get_Notification_Messages_Querys_Input = {
  AND?: InputMaybe<Array<Get_Notification_Messages_Querys_Input>>;
  OR?: InputMaybe<Array<Get_Notification_Messages_Querys_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Notification_Query_Input = {
  AND?: InputMaybe<Array<Get_Notification_Query_Input>>;
  OR?: InputMaybe<Array<Get_Notification_Query_Input>>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  notification_message?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Get_Todo_Query_Input>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Notifications_Input = {
  query: Get_Notifications_Querys_Input;
};

export type Get_Notifications_Querys_Input = {
  AND?: InputMaybe<Array<Get_Notifications_Querys_Input>>;
  OR?: InputMaybe<Array<Get_Notifications_Querys_Input>>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  notification_message?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Get_Todo_Query_Input>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Access_Input = {
  query: Get_Todo_Access_Query_Input;
};

export type Get_Todo_Access_Query_Input = {
  AND?: InputMaybe<Array<Get_Todo_Access_Query_Input>>;
  OR?: InputMaybe<Array<Get_Todo_Access_Query_Input>>;
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  manage?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Accesss_Input = {
  query: Get_Todo_Accesss_Querys_Input;
};

export type Get_Todo_Accesss_Querys_Input = {
  AND?: InputMaybe<Array<Get_Todo_Accesss_Querys_Input>>;
  OR?: InputMaybe<Array<Get_Todo_Accesss_Querys_Input>>;
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  manage?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_History_Input = {
  query: Get_Todo_History_Query_Input;
};

export type Get_Todo_History_Query_Input = {
  AND?: InputMaybe<Array<Get_Todo_History_Query_Input>>;
  OR?: InputMaybe<Array<Get_Todo_History_Query_Input>>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Historys_Input = {
  query: Get_Todo_Historys_Querys_Input;
};

export type Get_Todo_Historys_Querys_Input = {
  AND?: InputMaybe<Array<Get_Todo_Historys_Querys_Input>>;
  OR?: InputMaybe<Array<Get_Todo_Historys_Querys_Input>>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Input = {
  query: Get_Todo_Query_Input;
};

export type Get_Todo_Query_Input = {
  AND?: InputMaybe<Array<Get_Todo_Query_Input>>;
  OR?: InputMaybe<Array<Get_Todo_Query_Input>>;
  access?: InputMaybe<Get_Todo_Access_Query_Input>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  is_encrypted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todos_Input = {
  query: Get_Todos_Querys_Input;
};

export type Get_Todos_Querys_Input = {
  AND?: InputMaybe<Array<Get_Todos_Querys_Input>>;
  OR?: InputMaybe<Array<Get_Todos_Querys_Input>>;
  access?: InputMaybe<Get_Todo_Access_Query_Input>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  is_encrypted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_User_Connection_Input = {
  query: Get_User_Connection_Query_Input;
};

export type Get_User_Connection_Query_Input = {
  AND?: InputMaybe<Array<Get_User_Connection_Query_Input>>;
  OR?: InputMaybe<Array<Get_User_Connection_Query_Input>>;
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  connected_user?: InputMaybe<Get_User_Query_Input>;
  created_by?: InputMaybe<Get_User_Query_Input>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  revoked_by?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_by?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_User_Connections_Input = {
  query: Get_User_Connections_Querys_Input;
};

export type Get_User_Connections_Querys_Input = {
  AND?: InputMaybe<Array<Get_User_Connections_Querys_Input>>;
  OR?: InputMaybe<Array<Get_User_Connections_Querys_Input>>;
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  connected_user?: InputMaybe<Get_User_Query_Input>;
  created_by?: InputMaybe<Get_User_Query_Input>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  revoked_by?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_by?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_User_Input = {
  query: Get_User_Query_Input;
};

export type Get_User_Query_Input = {
  AND?: InputMaybe<Array<Get_User_Query_Input>>;
  OR?: InputMaybe<Array<Get_User_Query_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Users_Input = {
  query: Get_Users_Querys_Input;
};

export type Get_Users_Querys_Input = {
  AND?: InputMaybe<Array<Get_Users_Querys_Input>>;
  OR?: InputMaybe<Array<Get_Users_Querys_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Notification = {
  __typename?: 'notification';
  created_at: Scalars['String']['output'];
  created_by: User;
  notification_message: Notification_Message;
  read: Scalars['Boolean']['output'];
  todo?: Maybe<Todo>;
  updated_at: Scalars['String']['output'];
  user: User;
  uuid: Scalars['String']['output'];
};


export type NotificationCreated_ByArgs = {
  created_by: Get_User_Input;
};


export type NotificationNotification_MessageArgs = {
  notification_message: Get_Notification_Message_Input;
};


export type NotificationTodoArgs = {
  todo: Get_Todo_Input;
};


export type NotificationUserArgs = {
  user: Get_User_Input;
};

export type Notification_Message = {
  __typename?: 'notification_message';
  identifier: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Todo = {
  __typename?: 'todo';
  access: Array<Todo_Access>;
  completed: Scalars['Boolean']['output'];
  completed_at?: Maybe<Scalars['String']['output']>;
  completed_by?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['String']['output'];
  created_by?: Maybe<User>;
  description: Scalars['String']['output'];
  goal_date?: Maybe<Scalars['String']['output']>;
  history: Array<Maybe<Todo_History>>;
  is_encrypted?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  updated_by: Scalars['Int']['output'];
  uuid: Scalars['String']['output'];
};


export type TodoAccessArgs = {
  access: Get_Todo_Accesss_Input;
};


export type TodoCreated_ByArgs = {
  created_by: Get_User_Input;
};


export type TodoHistoryArgs = {
  history: Get_Todo_Historys_Input;
};

export type Todo_Access = {
  __typename?: 'todo_access';
  created_at: Scalars['String']['output'];
  created_by: User;
  edit: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  manage: Scalars['Boolean']['output'];
  revoked: Scalars['Boolean']['output'];
  todo: Todo;
  updated_at: Scalars['String']['output'];
  updated_by: User;
  user: User;
  uuid: Scalars['String']['output'];
};


export type Todo_AccessCreated_ByArgs = {
  created_by: Get_User_Input;
};


export type Todo_AccessTodoArgs = {
  todo: Get_Todo_Input;
};


export type Todo_AccessUpdated_ByArgs = {
  updated_by: Get_User_Input;
};


export type Todo_AccessUserArgs = {
  user: Get_User_Input;
};

export type Todo_History = {
  __typename?: 'todo_history';
  created_at: Scalars['String']['output'];
  created_by: User;
  id: Scalars['Int']['output'];
  new_value?: Maybe<Scalars['String']['output']>;
  old_value?: Maybe<Scalars['String']['output']>;
  property: Scalars['String']['output'];
  todo: Scalars['Int']['output'];
  uuid: Scalars['String']['output'];
};


export type Todo_HistoryCreated_ByArgs = {
  created_by: Get_User_Input;
};

export type Update_Notification_Messages_Input = {
  query: Update_Notification_Messages_Query_Input;
  values: Update_Notification_Messages_Values_Input;
};

export type Update_Notification_Messages_Query_Input = {
  AND?: InputMaybe<Array<Update_Notification_Messages_Query_Input>>;
  OR?: InputMaybe<Array<Update_Notification_Messages_Query_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Notification_Messages_Values_Input = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Notifications_Input = {
  query: Update_Notifications_Query_Input;
  values: Update_Notifications_Values_Input;
};

export type Update_Notifications_Query_Input = {
  AND?: InputMaybe<Array<Update_Notifications_Query_Input>>;
  OR?: InputMaybe<Array<Update_Notifications_Query_Input>>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  notification_message?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Notifications_Values_Input = {
  notification_message?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Todo_Accesss_Input = {
  query: Update_Todo_Accesss_Query_Input;
  values: Update_Todo_Accesss_Values_Input;
};

export type Update_Todo_Accesss_Query_Input = {
  AND?: InputMaybe<Array<Update_Todo_Accesss_Query_Input>>;
  OR?: InputMaybe<Array<Update_Todo_Accesss_Query_Input>>;
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  manage?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todo_Accesss_Values_Input = {
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  manage?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todo_Historys_Input = {
  query: Update_Todo_Historys_Query_Input;
  values: Update_Todo_Historys_Values_Input;
};

export type Update_Todo_Historys_Query_Input = {
  AND?: InputMaybe<Array<Update_Todo_Historys_Query_Input>>;
  OR?: InputMaybe<Array<Update_Todo_Historys_Query_Input>>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todo_Historys_Values_Input = {
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todos_Input = {
  query: Update_Todos_Query_Input;
  values: Update_Todos_Values_Input;
};

export type Update_Todos_Query_Input = {
  AND?: InputMaybe<Array<Update_Todos_Query_Input>>;
  OR?: InputMaybe<Array<Update_Todos_Query_Input>>;
  access?: InputMaybe<Array<Scalars['Int']['input']>>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  is_encrypted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todos_Values_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_User_Connections_Input = {
  query: Update_User_Connections_Query_Input;
  values: Update_User_Connections_Values_Input;
};

export type Update_User_Connections_Query_Input = {
  AND?: InputMaybe<Array<Update_User_Connections_Query_Input>>;
  OR?: InputMaybe<Array<Update_User_Connections_Query_Input>>;
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  connected_user?: InputMaybe<Scalars['Int']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  revoked_by?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_by?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_User_Connections_Values_Input = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Users_Input = {
  query: Update_Users_Query_Input;
  values: Update_Users_Values_Input;
};

export type Update_Users_Query_Input = {
  AND?: InputMaybe<Array<Update_Users_Query_Input>>;
  OR?: InputMaybe<Array<Update_Users_Query_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Users_Values_Input = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'user';
  authentication_state?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  last_active?: Maybe<Scalars['String']['output']>;
  passkey?: Maybe<Scalars['String']['output']>;
  profile_img?: Maybe<Scalars['String']['output']>;
  registration_state?: Maybe<Scalars['String']['output']>;
  share_active?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type User_Connection = {
  __typename?: 'user_connection';
  accepted: Scalars['Boolean']['output'];
  accepted_at?: Maybe<Scalars['String']['output']>;
  connected_user?: Maybe<User>;
  created_at: Scalars['String']['output'];
  created_by: User;
  id: Scalars['Int']['output'];
  identifier: Scalars['String']['output'];
  revoked: Scalars['Boolean']['output'];
  revoked_at?: Maybe<Scalars['String']['output']>;
  revoked_by?: Maybe<Scalars['Int']['output']>;
  status: Scalars['Boolean']['output'];
  updated_at: Scalars['String']['output'];
  updated_by?: Maybe<Scalars['Int']['output']>;
  user: User;
  user_uuid?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['String']['output'];
};


export type User_ConnectionConnected_UserArgs = {
  connected_user: Get_User_Input;
};


export type User_ConnectionCreated_ByArgs = {
  created_by: Get_User_Input;
};


export type User_ConnectionUserArgs = {
  user: Get_User_Input;
};
