import Wallet from "../src/domain/Wallet";


test('should create a wallet and get balance', () => {
    const account_id = "3921";
    const wallet = new Wallet(account_id, 1000);
    expect(wallet.balance).toBe(1000);
});

test('should increase amount into wallet balance', () => {
    const account_id = "3213";
    const wallet = new Wallet(account_id);
    wallet.receive(1000);
    expect(wallet.balance).toBe(1000);
});

test('should debit amount from wallet', () => {
    const account_id = "3213";
    const wallet = new Wallet(account_id, 1000);
    wallet.pay(450);
    expect(wallet.balance).toBe(550);
});