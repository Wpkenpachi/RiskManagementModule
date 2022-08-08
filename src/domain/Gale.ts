export default class Gale {
    private currentGaleNumber: number = 1;
    private galeFactor = 2;
    private currentDrawdownValue: number = 0;

    constructor(readonly config: Config) {}

    calculate(lastEntryAmount: number): number {
        if(!this.hasGaleSlots()) throw new Error("Max number of Gales reached");
        if (this.hasReachedMaxDrawdown()) throw new Error("Max drawdown value reached")
        const calculatedAmount = (this.galeFactor * lastEntryAmount * 100) / 100;
        return calculatedAmount;
    }

    execute(): void {
        this.currentGaleNumber += 1;
    }

    private hasReachedMaxDrawdown() {
        return this.config.drawdownType === "absolute" ?
                this.currentDrawdownValue >= this.config.maxDrawdownValue :
                (this.currentDrawdownValue / this.config.initialBalance) * 100 >= this.config.maxDrawdownValue
    }

    private hasGaleSlots(): boolean {
        if(!this.config.maxGales) return true;
        return this.currentGaleNumber <= this.config.maxGales;
    }
}

export type Config = {
    initialBalance: number;
    maxGales?: number;
    maxDrawdownValue: number;
    drawdownType: "relative" | "absolute";
}