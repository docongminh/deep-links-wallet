import { Transaction } from "@solana/web3.js";

export type TransactionSignature = string;
export type DeepLinkOptions = {};
export interface WalletDeepLink {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  sendTransaction(): Promise<TransactionSignature>;
  signTransaction(transaction: Transaction): Transaction;
  signAllTransactions(transactions: Transaction[]): Transaction[];
  signMessage(message: string): string;
}
