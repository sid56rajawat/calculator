const calculator = require('./calculator');

describe('add', () => {
	test('adds 0 and 0', () => {
		expect(calculator.operate("0 + 0")).toBe(0);
	});

	test('adds 2 and 2', () => {
		expect(calculator.operate("2 + 2")).toBe(4);
	});

	test('adds positive numbers', () => {
		expect(calculator.operate("2 + 6")).toBe(8);
	});
});

describe('subtract', () => {
	test('subtracts numbers 10,4', () => {
		expect(calculator.operate("10 - 4")).toBe(6);
	});

    test('subtracts numbers 5,10', () => {
		expect(calculator.operate("5 - 10")).toBe(-5);
	});
});

describe('multiply', () => {
	test('multiplies two numbers', () => {
		expect(calculator.operate("2 * 4")).toBe(8);
	});
});

describe('divide', () => {
    test('divides two positive numbers', () => {
        expect(calculator.operate("10 / 2")).toBe(5);
    });

    test('divides positive number by negative number', () => {
        expect(calculator.operate("10 / -2")).toBe(-5);
    });

    test('divides negative number by positive number', () => {
        expect(calculator.operate("-10 / 2")).toBe(-5);
    });

    test('divides two negative numbers', () => {
        expect(calculator.operate("-10 / -2")).toBe(5);
    });
    
    test('devisor 0 returns Infinity', () => {
        expect(calculator.operate("10 / 0")).toBe(Infinity);
    });
});
