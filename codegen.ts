import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.API_URL,
  documents: ["./src/**/*.graphql"],
  overwrite: true,
  generates: {
    "./src/types/generated.ts": {
      plugins: ["typescript"],
    },
    "./src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "./types/generated.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: "@apollo/client",
        scalars: {
          ObjectID: "string",
        },
      },
    },
  },
};

export default config;
