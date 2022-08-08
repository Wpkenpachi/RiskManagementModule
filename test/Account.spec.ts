import Account from "../src/domain/Account";
import Wallet from "../src/domain/Wallet";

test('should create an account', () => {
    const account = new Account( String(Math.floor( Math.random() * 10000 )) , "Wesley");
    expect(account).toBeInstanceOf(Account);
    expect(account.name).toBe("Wesley");
    expect(account.wallets).toHaveLength(0);
});

test('should add some wallets to account', () => {
    const wallets = [
        new Wallet("1234"),
        new Wallet("4321", 500)
    ];
    const account = new Account( String(Math.floor( Math.random() * 10000 )) , "Wpkenpachi");
    account.addWallets(wallets);
    expect(account.wallets).toHaveLength(2);
});

