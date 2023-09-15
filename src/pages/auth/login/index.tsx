import { Button, Label, TextInput, Card } from "flowbite-react";
import { useForm } from "react-hook-form";
import { isLoggedInVar } from "src/state";
import { appRoutes } from "src/routes";
import { useNavigate } from "react-router-dom";
import { CallToAction, LogoCard, RegisterCard } from "../components";
import { useToaster } from "src/utils/useToaster";
import { Base64 } from "js-base64";
import {
  AuthenticateStartMutationVariables,
  useAuthenticateFinishMutation,
  useAuthenticateStartMutation,
} from "./graphql.generated";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<AuthenticateStartMutationVariables>();
  const [authenticateStart] = useAuthenticateStartMutation();
  const [authenticateFinish] = useAuthenticateFinishMutation();
  const toaster = useToaster();

  const onSubmit = (data: AuthenticateStartMutationVariables) => {
    authenticateStart({
      variables: data,
      onCompleted: async (authenticate_start_mutation) => {
        const credentialRequestOptions = (authenticate_start_mutation.authenticate_start as unknown) as CredentialRequestOptions;

        const credential = await navigator.credentials.get({
          publicKey: {
            ...credentialRequestOptions.publicKey,
            challenge: Base64.toUint8Array(
              (credentialRequestOptions.publicKey
                ?.challenge as unknown) as string
            ),
            allowCredentials: credentialRequestOptions.publicKey?.allowCredentials?.map(
              (c) => ({
                ...c,
                id: Base64.toUint8Array((c.id as unknown) as string),
              })
            ),
          },
        });

        if (credential instanceof PublicKeyCredential) {
          const response = credential.response as AuthenticatorAssertionResponse;

          if (!response.userHandle) {
            toaster.addToast("error", "User handle is missing!");
            return;
          }

          const jsonCredential = {
            id: credential.id,
            type: credential.type,
            rawId: Base64.fromUint8Array(
              new Uint8Array(credential.rawId),
              true
            ),
            extensions: credential.getClientExtensionResults(),
            response: {
              authenticatorData: Base64.fromUint8Array(
                new Uint8Array(response.authenticatorData),
                true
              ),
              clientDataJSON: Base64.fromUint8Array(
                new Uint8Array(response.clientDataJSON),
                true
              ),
              signature: Base64.fromUint8Array(
                new Uint8Array(response.signature),
                true
              ),
              userHandle: Base64.fromUint8Array(
                new Uint8Array(response.userHandle),
                true
              ),
            },
          };

          authenticateFinish({
            variables: {
              public_key: JSON.stringify(jsonCredential),
              identifier: data.identifier,
            },
            onCompleted: (authenticate_finish_mutation) => {
              localStorage.setItem("username", data.identifier);
              localStorage.setItem(
                "user_id",
                authenticate_finish_mutation.authenticate_finish.user_id
              );
              localStorage.setItem(
                "token",
                authenticate_finish_mutation.authenticate_finish.token
              );
              isLoggedInVar(true);
              navigate(appRoutes.dashboard.path);
              toaster.addToast("info", "Logged in successfully!");
            },
          });
        } else {
          toaster.addToast("error", "Something went wrong!");
          isLoggedInVar(false);
          reset();
        }
      },
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CallToAction />
        <LogoCard />
        <RegisterCard />
        <Card className="col-span-3 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl">Login</h1>
            <Label>Username</Label>
            <TextInput {...register("identifier")} />
            <div className="flex flex-row justify-end pt-4 mt-4">
              <Button type="submit" color="info">
                Login
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};
