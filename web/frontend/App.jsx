import { AppType, Provider as GadgetProvider } from "@gadgetinc/react-shopify-app-bridge";
import { api } from "./api";

// additional imports

export default function App() {
  // additional setup

  return (
    <GadgetProvider type={AppType.Embedded} shopifyApiKey="f711b5c7fd4d85ce3f30a01beed5fc94" api={api}>
      {/* // <PolarisProvider />, routing, components, ... */}
      <h1>TEST!!</h1>
    </GadgetProvider>
  );
}
