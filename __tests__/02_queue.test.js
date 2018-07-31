import Queue from '../exercises/02_queue';

describe('ES6 Class', () => {
  test('has a Queue class', () => {
    expect(typeof Queue).toEqual('function');
    const queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
  });
});

describe('Queue constructor', () => {
  test('has front and back properties that are initialized to 0', () => {
    const queue = new Queue();
    expect(queue.front).toEqual(0);
    expect(queue.back).toEqual(0);
  });

  test('has a storage property that initialized to an object', () => {
    const queue = new Queue();
    expect(queue.storage).toMatchObject({});
  });
});

describe('enqueue', () => {
  test('is a method', () => {
    const queue = new Queue();
    expect(typeof queue.enqueue).toEqual('function');
  });

  test('adds values to the back of the queue', () => {
    const queue = new Queue();
    queue.enqueue('The');
    expect(queue.storage).toMatchObject({ '0': 'The' });
    queue.enqueue('Miseducation');
    expect(queue.storage).toMatchObject({ '0': 'The', '1': 'Miseducation' });
    queue.enqueue('of');
    expect(queue.storage).toMatchObject({ '0': 'The', '1': 'Miseducation', '2': 'of' });
    queue.enqueue('Lauryn Hill');
    expect(queue.storage).toMatchObject({ '0': 'The', '1': 'Miseducation', '2': 'of', '3': 'Lauryn Hill' });
  });
});

describe('dequeue', () => {
  test('is a method', () => {
    const queue = new Queue();
    expect(typeof queue.dequeue).toEqual('function');
  });

  test('removes values from the front of the queue', () => {
    const queue = new Queue();
    queue.enqueue('The');
    queue.enqueue('Miseducation');
    queue.enqueue('of');
    queue.enqueue('Lauryn Hill');
    queue.dequeue();
    expect(queue.storage).toMatchObject({ '1': 'Miseducation', '2': 'of', '3': 'Lauryn Hill' });
    queue.dequeue();
    expect(queue.storage).toMatchObject({ '2': 'of', '3': 'Lauryn Hill' });
    queue.dequeue();
    expect(queue.storage).toMatchObject({ '3': 'Lauryn Hill' });
    queue.dequeue();
    expect(queue.storage).toMatchObject({});
  });
});

describe('peek', () => {
  test('is a method', () => {
    const queue = new Queue();
    expect(typeof queue.peek).toEqual('function');
  });

  test("returns the value at the front of the queue, but doesn't alter storage", () => {
    const queue = new Queue();
    queue.enqueue('Lost Ones');
    queue.enqueue('To Zion');
    queue.enqueue('Everything is Everything');
    queue.enqueue('Doo Wop (That Thing)');
    expect(queue.peek()).toEqual('Lost Ones');
    expect(queue.dequeue()).toEqual('Lost Ones');
    expect(queue.peek()).toEqual('To Zion');
    expect(queue.dequeue()).toEqual('To Zion');
    expect(queue.peek()).toEqual('Everything is Everything');
    expect(queue.dequeue()).toEqual('Everything is Everything');
    expect(queue.peek()).toEqual('Doo Wop (That Thing)');
    expect(queue.dequeue()).toEqual('Doo Wop (That Thing)');
  });
});

describe('getSize', () => {
  test('is a method', () => {
    const queue = new Queue();
    expect(typeof queue.getSize).toEqual('function');
  });

  test('retuns the number of values in storage', () => {
    const queue = new Queue();
    expect(queue.getSize()).toEqual(0);
    queue.enqueue('Every Ghetto');
    expect(queue.getSize()).toEqual(1);
    queue.enqueue('Every City');
    expect(queue.getSize()).toEqual(2);
    queue.dequeue();
    expect(queue.getSize()).toEqual(1);
    queue.dequeue();
    expect(queue.getSize()).toEqual(0);
  });
});

describe('reset', () => {
  test('is a method', () => {
    const queue = new Queue();
    expect(typeof queue.reset).toEqual('function');
  });

  test('empties the storage object', () => {
    const queue = new Queue();
    queue.enqueue('The');
    queue.enqueue('Miseducation');
    queue.enqueue('of');
    queue.enqueue('Lauryn Hill');
    queue.reset();
    expect(queue.storage).toMatchObject({});
  });
});
