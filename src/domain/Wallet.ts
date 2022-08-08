export default class Wallet {
    private AccountId: string;
    private Balance: number;

    constructor(readonly account_id: string, balance: number = 0){
        this.AccountId = account_id;
        this.Balance = balance;
    }

    get balance() { return this.Balance };

    pay(amount: number) {
        if(this.Balance < amount) throw new Error("No funds enough to debit amount")
        this.Balance -= amount;
    }

    receive(amount: number) {
        this.Balance += amount;
    }
}