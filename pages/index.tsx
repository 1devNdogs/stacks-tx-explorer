import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { WalletConnectButton } from "../components/wallet-connect-button";
import { UserCard } from "../components/user-card";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <UserCard />
        <WalletConnectButton />
      </main>
    </div>
  );
};

export default Home;
