import { BrowserSessionStorageType, Client } from "@gadget-client/cli-connection-demo";

export const api = new Client({
  authenticationMode: {
    browserSession: {
      storageType: BrowserSessionStorageType.Temporary,
    },
  },
});
