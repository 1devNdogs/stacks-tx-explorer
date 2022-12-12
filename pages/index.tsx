import type { NextPage, GetServerSidePropsContext } from "next";
import styles from "../styles/Home.module.css";
import { WalletConnectButton } from "../components/wallet-connect-button";
import { UserCard } from "../components/user-card";
import { getDehydratedStateFromSession } from "../common/session-helpers";
import { TransactionTable } from "../components/transaction-table";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      dehydratedState: await getDehydratedStateFromSession(ctx),
    },
  };
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <UserCard />
        <WalletConnectButton />
        <TransactionTable/>
      </main>
    </div>
  );
};

export default Home;
