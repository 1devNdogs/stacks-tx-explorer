# Stacks Development Introduction

## References
* [Hiro Wallet](https://wallet.hiro.so/)
* [Microstacks](https://micro-stacks.dev/)
* [Api URL](https://stacks-node-api.testnet.stacks.co)
* [Stacks API + Faucet](https://docs.hiro.so/api#tag/Faucets)
* [Mempool Transactions](https://docs.hiro.so/api#tag/Transactions/operation/get_mempool_transaction_list)
* [Transaction by ID](https://docs.hiro.so/api#tag/Transactions/operation/get_transaction_by_id)
* [Websockets](hhttps://docs.hiro.so/get-started/stacks-blockchain-api#websocket-sample)


## Prompt

* Download Hiro wallet and create an account.
* Using the Microstacks template, build a Next.js page with wallet login.
* Call the Faucet endpoint on the stacks API using your new wallet testnet address as an argument, to receive testnet STX (feel free to use Postman for this).
* Create a table that displays all transactions and their states when a user has authenticated with their wallet.
* Use websockets to update the states of transactions in the transaction table from pending state to confirmed.

NOTE: Stacks blocks take about 10 min to propagate, so transactions will be pending for around this time after called. 
