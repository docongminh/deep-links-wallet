import { WalletDeepLink } from "./types";
import type { DeepLinkOptions} from "./types"
import { Connection, Transaction } from "@solana/web3.js";


export class DemoWalletDeepLink implements WalletDeepLink {

  constructor(opts?: DeepLinkOptions){}
  // connect
  async connect(): Promise<void> {
    
  }
  //
  async disconnect(): Promise<void> {
    
  }

  async sendTransaction(): Promise<string> {
    
    return ''
  }

  signTransaction(transaction: Transaction): Transaction {
    
  }

  signAllTransactions(transactions: Transaction[]): Transaction[] {
    
  }

  signMessage(message: string): string {
    
  }

}