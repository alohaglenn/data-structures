import Stack from '../exercises/01_stack';

describe('ES6 Class', () => {
  test('has a Stack class', () => {
    expect(typeof Stack).toEqual('function');
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });
});

describe('Stack constructor', () => {
  test('has a size property that initialized to 0', () => {
    const stack = new Stack();
    expect(stack.size).toEqual(0);
  });

  test('Stack has a storage property that is initialized to an empty object', () => {
    const stack = new Stack();
    expect(stack.storage).toMatchObject({});
  });
});

describe('push', () => {
  test('is a method', () => {
    const stack = new Stack();
    expect(typeof stack.push).toEqual('function');
  });

  test('adds a value to the top of the stack', () => {
    const stack = new Stack();
    stack.push('good');
    expect(stack.storage).toMatchObject({ '0': 'Frank' });
    stack.push('kid');
    expect(stack.storage).toMatchObject({ '0': 'Frank', '1': 'Ocean' });
    stack.push('maad');
    expect(stack.storage).toMatchObject({ '0': 'Frank', '1': 'Ocean', '2': 'Channel' });
    stack.push('city');
    expect(stack.storage).toMatchObject({ '0': 'Frank', '1': 'Ocean', '2': 'Channel', '3': 'Orange' });
  });
});

describe('pop', () => {
  test('is a method', () => {
    const stack = new Stack();
    expect(typeof stack.pop).toEqual('function');
  });

  test('removes the value at the top of stack', () => {
    const stack = new Stack();
    stack.push('Frank');
    stack.push('Ocean');
    stack.push('Channel');
    stack.push('Orange');
    stack.pop();
    expect(stack.storage).toMatchObject({ '0': 'Frank', '1': 'Ocean', '2': 'Channel' });
    stack.pop();
    expect(stack.storage).toMatchObject({ '0': 'Frank', '1': 'Ocean' });
    stack.pop();
    expect(stack.storage).toMatchObject({ '0': 'Frank' });
    stack.pop();
    expect(stack.storage).toMatchObject({});
  });
});

describe('peek', () => {
  test('is a method', () => {
    const stack = new Stack();
    expect(typeof stack.peek).toEqual('function');
  });

  test("returns the value at top of the stack, but doesn't alter storage", () => {
    const stack = new Stack();
    stack.push('Frank');
    stack.push('Ocean');
    stack.push('Channel');
    stack.push('Orange');
    expect(stack.peek()).toEqual('Orange');
    expect(stack.pop()).toEqual('Orange');
    expect(stack.peek()).toEqual('Channel');
    expect(stack.pop()).toEqual('Channel');
    expect(stack.peek()).toEqual('Ocean');
    expect(stack.pop()).toEqual('Ocean');
    expect(stack.peek()).toEqual('Frank');
    expect(stack.pop()).toEqual('Frank');
  });
});

describe('getSize', () => {
  test('is a method', () => {
    const stack = new Stack();
    expect(typeof stack.getSize).toEqual('function');
  });

  test('returns the correct number of values in storage', () => {
    const stack = new Stack();
    expect(stack.getSize()).toEqual(0);
    stack.push('Frank');
    expect(stack.getSize()).toEqual(1);
    stack.push('Ocean');
    expect(stack.getSize()).toEqual(2);
    stack.pop();
    expect(stack.getSize()).toEqual(1);
    stack.pop();
    expect(stack.getSize()).toEqual(0);
  });
});

describe('reset', () => {
  test('is a method', () => {
    const stack = new Stack();
    expect(typeof stack.reset).toEqual('function');
  });

  test('empties the storage object', () => {
    const stack = new Stack();
    stack.push('Frank');
    stack.push('Ocean');
    stack.push('Channel');
    stack.push('Orange');
    stack.reset();
    expect(stack.storage).toMatchObject({});
  });
});
