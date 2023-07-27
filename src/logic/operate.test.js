import operate from './operate';

describe('Testing the math operations', () => {
  test('addition', () => {
    const num1 = '5';
    const num2 = '7';
    const operand = '+';
    expect(operate(num1, num2, operand)).toBe('12');
  });

  test('subtraction', () => {
    const num1 = '7';
    const num2 = '5';
    const operand = '-';
    expect(operate(num1, num2, operand)).toBe('2');
  });

  test('multiplication', () => {
    const num1 = '7';
    const num2 = '5';
    const operand = 'x';
    expect(operate(num1, num2, operand)).toBe('35');
  });

  test('division', () => {
    const num1 = '21';
    const num2 = '7';
    const operand = '÷';
    expect(operate(num1, num2, operand)).toBe('3');
  });

  test('division by 0', () => {
    const num1 = '5';
    const num2 = '0';
    const operand = '÷';
    expect(operate(num1, num2, operand)).toBe("Can't divide by 0.");
  });

  test('modulo', () => {
    const num1 = '5';
    const num2 = '3';
    const operand = '%';
    expect(operate(num1, num2, operand)).toBe('2');
  });

  test('modulo when dividing by 0', () => {
    const num1 = '5';
    const num2 = '0';
    const operand = '%';
    expect(operate(num1, num2, operand)).toBe(
      "Can't find modulo as can't divide by 0."
    );
  });
});
