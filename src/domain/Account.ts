import Wallet from "./Wallet";

export default class Account {
    private Wallets: Wallet[] = [];
    constructor(readonly Id: string, readonly AccountName: string) {}

    get name() { return this.AccountName };
    get wallets() { return this.Wallets };

    addWallets(wallets: Wallet[]) {
        wallets.map(wallet => this.Wallets.push(wallet));
    }
}