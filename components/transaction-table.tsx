import { useAccount } from "@micro-stacks/react";
import { useEffect, useState } from "react";
import { connectWebSocketClient } from "@stacks/blockchain-api-client";

const socketUrl = "https://stacks-node-api.testnet.stacks.co/";

export const TransactionTable = () => {
  const { stxAddress } = useAccount();
  const [transactions, setTransactions] = useState(Array<any>);

  const socketInitializer = async () => {
    if (stxAddress) {
      const client = await connectWebSocketClient(socketUrl);

      await client.subscribeMempool((event) => {
        console.log("subscribeMempool event:", event.tx_id);
        setTransactions((transactions) => [...transactions, event]);

        client.subscribeTxUpdates(event.tx_id, (event) => {
          console.log("subscribeTxUpdates event:", event);
          setTransactions((transactions) => [...transactions, event]);
        });
      });
    }
  };

  useEffect(() => {
    socketInitializer();
  }, [stxAddress]);

  return (
    <>
      {transactions &&
        transactions.map((tx: any) => {
          return tx.tx_id;
        })}
    </>
  );
};
