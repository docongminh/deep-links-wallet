import bs58 from 'bs58'
import { Transaction } from '@solana/web3.js'

export type Encode = 'base58' | 'base64' | 'buffer';

export function encodeTransaction(transaction: Transaction, type: Encode): string | Buffer {

  return ''
}

export function decodeTransaction(transaction: string | Buffer): Transaction{

  
}