import Gale from "../src/domain/Gale";

test('should create a gale', () => {
    const gale = new Gale({
        initialBalance: 100,
        maxGales: 2,
        maxDrawdownValue: 20,
        drawdownType: "relative"
    });

    expect(gale.config).toEqual({
        initialBalance: 100,
        maxGales: 2,
        maxDrawdownValue: 20,
        drawdownType: "relative"
    });
});

test('should calculate gale value amount', () => {
    const gale = new Gale({
        initialBalance: 100,
        maxGales: 2,
        maxDrawdownValue: 20,
        drawdownType: "relative"
    });
    expect(gale.calculate(2)).toBe(4); 
});

test('should overflow max gales', () => {
    const gale = new Gale({
        initialBalance: 100,
        maxGales: 2,
        maxDrawdownValue: 20,
        drawdownType: "relative"
    });
    gale.execute();
    gale.execute();
    expect(() => gale.calculate(8)).toThrowError("Max number of Gales reached");
});

test('should gale in infinity gales config', () => {
    const gale = new Gale({
        initialBalance: 100,
        maxGales: 0,
        maxDrawdownValue: 20,
        drawdownType: "relative"
    });
    expect(gale.calculate(2)).toBe(4);
});


test('should reach absolute max drawdown value', () => {
    const gale = new Gale({
        initialBalance: 10,
        maxGales: 0,
        maxDrawdownValue: 0,
        drawdownType: "absolute"
    });
    expect(() => gale.calculate(2)).toThrowError("Max drawdown value reached");
});