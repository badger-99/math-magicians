/**
 * @jest-environment jsdom
 */
import { fireEvent } from '@testing-library/react';
import calculate from './calculate';

describe('Testing the calculator functionality', () => {
  test('User performing addition on a calculator app using "calculate"', () => {
    // calculator object
    let obj = {
      total: 0,
      next: null,
      operation: null,
    };

    // click event handler
    const handleClick = (e) => {
      obj = calculate(obj, e.target.name);
    };

    // first number
    const num1 = document.createElement('button');
    num1.setAttribute('name', '5');
    num1.onclick = handleClick;

    // operand
    const operand = document.createElement('button');
    operand.setAttribute('name', '+');
    operand.onclick = handleClick;

    // second number
    const num2 = document.createElement('button');
    num2.setAttribute('name', '9');
    num2.onclick = handleClick;

    // equal
    const equal = document.createElement('button');
    equal.setAttribute('name', '=');
    equal.onclick = handleClick;

    // user clicks
    fireEvent.click(num1);
    fireEvent.click(operand);
    fireEvent.click(num2);
    fireEvent.click(equal);

    expect(obj.total).toBe('14');
  });

  test('User performing multiplication on a calculator app using "calculate"', () => {
    // calculator object
    let obj = {
      total: 0,
      next: null,
      operation: null,
    };

    // click event handler
    const handleClick = (e) => {
      obj = calculate(obj, e.target.name);
    };

    // first number
    const num1 = document.createElement('button');
    num1.setAttribute('name', '5');
    num1.onclick = handleClick;

    // operand
    const operand = document.createElement('button');
    operand.setAttribute('name', 'x');
    operand.onclick = handleClick;

    // second number
    const num2 = document.createElement('button');
    num2.setAttribute('name', '5');
    num2.onclick = handleClick;

    // equal
    const equal = document.createElement('button');
    equal.setAttribute('name', '=');
    equal.onclick = handleClick;

    // user clicks
    fireEvent.click(num1);
    fireEvent.click(operand);
    fireEvent.click(num2);
    fireEvent.click(equal);

    expect(obj.total).toBe('25');
  });

  test('User performing subtraction on a calculator app using "calculate"', () => {
    // calculator object
    let obj = {
      total: 0,
      next: null,
      operation: null,
    };

    // click event handler
    const handleClick = (e) => {
      obj = calculate(obj, e.target.name);
    };

    // first number
    const num1 = document.createElement('button');
    num1.setAttribute('name', '5');
    num1.onclick = handleClick;

    // operand
    const operand = document.createElement('button');
    operand.setAttribute('name', '-');
    operand.onclick = handleClick;

    // second number
    const num2 = document.createElement('button');
    num2.setAttribute('name', '9');
    num2.onclick = handleClick;

    // equal
    const equal = document.createElement('button');
    equal.setAttribute('name', '=');
    equal.onclick = handleClick;

    // user clicks
    fireEvent.click(num1);
    fireEvent.click(operand);
    fireEvent.click(num2);
    fireEvent.click(equal);

    expect(obj.total).toBe('-4');
  });

  test('User performing division on a calculator app using "calculate"', () => {
    // calculator object
    let obj = {
      total: 0,
      next: null,
      operation: null,
    };

    // click event handler
    const handleClick = (e) => {
      obj = calculate(obj, e.target.name);
    };

    // first number
    const num1 = document.createElement('button');
    num1.setAttribute('name', '8');
    num1.onclick = handleClick;

    // operand
    const operand = document.createElement('button');
    operand.setAttribute('name', '÷');
    operand.onclick = handleClick;

    // second number
    const num2 = document.createElement('button');
    num2.setAttribute('name', '4');
    num2.onclick = handleClick;

    // equal
    const equal = document.createElement('button');
    equal.setAttribute('name', '=');
    equal.onclick = handleClick;

    // user clicks
    fireEvent.click(num1);
    fireEvent.click(operand);
    fireEvent.click(num2);
    fireEvent.click(equal);

    expect(obj.total).toBe('2');
  });

  test('User performing division by zero on a calculator app using "calculate"', () => {
    // calculator object
    let obj = {
      total: 0,
      next: null,
      operation: null,
    };

    // click event handler
    const handleClick = (e) => {
      obj = calculate(obj, e.target.name);
    };

    // first number
    const num1 = document.createElement('button');
    num1.setAttribute('name', '5');
    num1.onclick = handleClick;

    // operand
    const operand = document.createElement('button');
    operand.setAttribute('name', '÷');
    operand.onclick = handleClick;

    // second number
    const num2 = document.createElement('button');
    num2.setAttribute('name', '0');
    num2.onclick = handleClick;

    // equal
    const equal = document.createElement('button');
    equal.setAttribute('name', '=');
    equal.onclick = handleClick;

    // user clicks
    fireEvent.click(num1);
    fireEvent.click(operand);
    fireEvent.click(num2);
    fireEvent.click(equal);

    expect(obj.total).toBe("Can't divide by 0.");
  });

  test('User looking for modulus on a calculator app using "calculate"', () => {
    // calculator object
    let obj = {
      total: 0,
      next: null,
      operation: null,
    };

    // click event handler
    const handleClick = (e) => {
      obj = calculate(obj, e.target.name);
    };

    // first number
    const num1 = document.createElement('button');
    num1.setAttribute('name', '5');
    num1.onclick = handleClick;

    // operand
    const operand = document.createElement('button');
    operand.setAttribute('name', '%');
    operand.onclick = handleClick;

    // second number
    const num2 = document.createElement('button');
    num2.setAttribute('name', '4');
    num2.onclick = handleClick;

    // equal
    const equal = document.createElement('button');
    equal.setAttribute('name', '=');
    equal.onclick = handleClick;

    // user clicks
    fireEvent.click(num1);
    fireEvent.click(operand);
    fireEvent.click(num2);
    fireEvent.click(equal);

    expect(obj.total).toBe('1');
  });

  test('User looking for modulus by zero on a calculator app using "calculate"', () => {
    // calculator object
    let obj = {
      total: 0,
      next: null,
      operation: null,
    };

    // click event handler
    const handleClick = (e) => {
      obj = calculate(obj, e.target.name);
    };

    // first number
    const num1 = document.createElement('button');
    num1.setAttribute('name', '5');
    num1.onclick = handleClick;

    // operand
    const operand = document.createElement('button');
    operand.setAttribute('name', '%');
    operand.onclick = handleClick;

    // second number
    const num2 = document.createElement('button');
    num2.setAttribute('name', '0');
    num2.onclick = handleClick;

    // equal
    const equal = document.createElement('button');
    equal.setAttribute('name', '=');
    equal.onclick = handleClick;

    // user clicks
    fireEvent.click(num1);
    fireEvent.click(operand);
    fireEvent.click(num2);
    fireEvent.click(equal);

    expect(obj.total).toBe("Can't find modulo as can't divide by 0.");
  });

  test('User clearing input on a calculator app using "calculate"', () => {
    // calculator object
    let obj = {
      total: 0,
      next: null,
      operation: null,
    };

    // click event handler
    const handleClick = (e) => {
      obj = calculate(obj, e.target.name);
    };

    // first number
    const num1 = document.createElement('button');
    num1.setAttribute('name', '5');
    num1.onclick = handleClick;

    // operand
    const operand = document.createElement('button');
    operand.setAttribute('name', '%');
    operand.onclick = handleClick;

    // second number
    const num2 = document.createElement('button');
    num2.setAttribute('name', '3');
    num2.onclick = handleClick;

    // equal
    const equal = document.createElement('button');
    equal.setAttribute('name', 'AC');
    equal.onclick = handleClick;

    // user clicks
    fireEvent.click(num1);
    fireEvent.click(operand);
    fireEvent.click(num2);
    fireEvent.click(equal);

    expect(obj.total).toBe(null);
  });

  test('User changing number sign from + to - calculator app using "calculate"', () => {
    // calculator object
    let obj = {
      total: 0,
      next: null,
      operation: null,
    };

    // click event handler
    const handleClick = (e) => {
      obj = calculate(obj, e.target.name);
    };

    // first number
    const num1 = document.createElement('button');
    num1.setAttribute('name', '5');
    num1.onclick = handleClick;

    // operand
    const operand = document.createElement('button');
    operand.setAttribute('name', '+/-');
    operand.onclick = handleClick;

    // operand 2
    const operand2 = document.createElement('button');
    operand2.setAttribute('name', '+');
    operand2.onclick = handleClick;

    // second number
    const num2 = document.createElement('button');
    num2.setAttribute('name', '0');
    num2.onclick = handleClick;

    // equal
    const equal = document.createElement('button');
    equal.setAttribute('name', '=');
    equal.onclick = handleClick;

    // user clicks
    fireEvent.click(num1);
    fireEvent.click(operand);
    fireEvent.click(operand2);
    fireEvent.click(num2);
    fireEvent.click(equal);

    expect(obj.total).toBe('-5');
  });

  test('User adding decimal point a calculator app using "calculate"', () => {
    // calculator object
    let obj = {
      total: 0,
      next: null,
      operation: null,
    };

    // click event handler
    const handleClick = (e) => {
      obj = calculate(obj, e.target.name);
    };

    // first number
    const num1 = document.createElement('button');
    num1.setAttribute('name', '5');
    num1.onclick = handleClick;

    // operand
    const operand = document.createElement('button');
    operand.setAttribute('name', '.');
    operand.onclick = handleClick;

    // second number
    const num2 = document.createElement('button');
    num2.setAttribute('name', '5');
    num2.onclick = handleClick;

    // operand 2
    const operand2 = document.createElement('button');
    operand2.setAttribute('name', '+');
    operand2.onclick = handleClick;

    // third number
    const num3 = document.createElement('button');
    num3.setAttribute('name', '0');
    num3.onclick = handleClick;

    // equal
    const equal = document.createElement('button');
    equal.setAttribute('name', '=');
    equal.onclick = handleClick;

    // user clicks
    fireEvent.click(num1);
    fireEvent.click(operand);
    fireEvent.click(num2);
    fireEvent.click(operand2);
    fireEvent.click(num3);
    fireEvent.click(equal);

    expect(obj.total).toBe('5.5');
  });
});
