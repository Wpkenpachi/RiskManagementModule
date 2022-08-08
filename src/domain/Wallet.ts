export default class Wallet {
    private Id: string;
    private Balance: number;

    constructor(readonly id: string, balance: number = 0){
        this.Id = id;
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