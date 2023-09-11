import { Button, Card, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import {
  RegisterStartMutationVariables,
  useRegisterFinishMutation,
  useRegisterStartMutation,
} from "./graphql.generated";
import { Base64 } from "js-base64";
import { CallToAction, LogoCard } from "../components";
import { LoginCard } from "../components/login-card";

export const Register = () => {
  const { register, handleSubmit } = useForm<RegisterStartMutationVariables>();
  const [registerStart] = useRegisterStartMutation();
  const [registerFinish] = useRegisterFinishMutation();

  const onSubmit = (data: RegisterStartMutationVariables) => {
    registerStart({
      variables: data,
      onCompleted: async (register_start_mutation) => {
        const ccr = register_start_mutation.register_start as CredentialCreationOptions;

        if (ccr?.publicKey) {
          const credential = await navigator.credentials.create({
            publicKey: {
              ...ccr.publicKey,
              challenge: Base64.toUint8Array(
                (ccr.publicKey?.challenge as unknown) as string
              ),
              user: {
                ...ccr.publicKey?.user,
                id: Base64.toUint8Array(
                  (ccr.publicKey?.user?.id as unknown) as string
                ),
              },
            },
          });

          if (credential instanceof PublicKeyCredential) {
            const jsonCredential = {
              id: credential.id,
              type: credential.type,
              rawId: Base64.fromUint8Array(
                new Uint8Array(credential.rawId),
                true
              ),
              extensions: credential.getClientExtensionResults(),
              response: {
                clientDataJSON: Base64.fromUint8Array(
                  new Uint8Array(credential.response.clientDataJSON),
                  true
                ),
                attestationObject: Base64.fromUint8Array(
                  new Uint8Array(
                    ((credential.response as unknown) as Record<
                      string,
                      ArrayBuffer
                    >).attestationObject as ArrayBuffer
                  ),
                  true
                ),
              },
            };
            registerFinish({
              variables: {
                identifier: data.identifier,
                public_key: JSON.stringify(jsonCredential),
              },
            });
          }
        }
      },
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <CallToAction />
        <LogoCard />
        <LoginCard />
        <Card className="col-span-3 md:col-span-2">
          <h1 className="text-2xl">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>Username</Label>
            <TextInput {...register("identifier")} />
            <div className="mt-4 flex justify-end">
              <Button type="submit">Register</Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};
