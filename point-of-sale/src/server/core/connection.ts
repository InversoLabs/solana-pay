import { Connection } from '@solana/web3.js';
import { CLUSTER_ENDPOINT } from './env';

export const connection = new Connection(CLUSTER_ENDPOINT || 'https://api.mainnet-beta.solana.com', 'confirmed');
