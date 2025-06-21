import { DefaultWalletType } from "@saberhq/use-solana";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { BraveWalletAdapter } from "@solana/wallet-adapter-brave";
import { Coin98WalletAdapter } from "@solana/wallet-adapter-coin98";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import { SolletWalletAdapter } from "@solana/wallet-adapter-sollet";
type WalletName = any;
/** @dev The function to get wallet name. */
export const getWalletName = (name: string): WalletName => {
  switch (name) {
    case DefaultWalletType.Phantom:
      return new PhantomWalletAdapter().name as WalletName;
    case DefaultWalletType.BraveWallet:
      return new BraveWalletAdapter().name as WalletName;
    case DefaultWalletType.Coin98:
      return new Coin98WalletAdapter().name as WalletName;
    case DefaultWalletType.Solflare:
      return new SolflareWalletAdapter().name as WalletName;
    case DefaultWalletType.Sollet:
      return new SolletWalletAdapter().name as WalletName;
  }
};
