import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ClientProvider } from "@micro-stacks/react";
import { destroySession, saveSession } from "../common/fetchers";
import { useCallback } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientProvider
      appName="Nextjs + Microstacks"
      appIconUrl="/vercel.png"
      dehydratedState={pageProps?.dehydratedState}
      onNoWalletFound={useCallback(async () => {
        alert("Install hiro wallet from: https://wallet.hiro.so/wallet/install-web")
      }, [])}
      onPersistState={useCallback(async (dehydratedState: string) => {
        await saveSession(dehydratedState);
      }, [])}
      onSignOut={useCallback(async () => {
        await destroySession();
      }, [])}
    >
      <Component {...pageProps} />
    </ClientProvider>
  );
}

export default MyApp;
