import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ClientProvider } from "@micro-stacks/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientProvider appName="Nextjs + Microstacks" appIconUrl="/vercel.png">
      <Component {...pageProps} />
    </ClientProvider>
  );
}

export default MyApp;
