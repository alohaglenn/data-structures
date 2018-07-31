import Set from '../exercises/03_set';

describe('ES6 Class', () => {
  test('has a Set class', () => {
    expect(typeof Set).toEqual('function');
    const set = new Set();
    expect(set).toBeInstanceOf(Set);
  });
});

describe('Set constructor', () => {
  test('has a storage property that is initialized as an empty object', () => {
    const set = new Set();
    expect(set.storage).toMatchObject({});
  });

  test('has a size property that is initialized to 0', () => {
    const set = new Set();
    expect(set.size).toEqual(0);
  });
});

describe('has', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.has).toEqual('function');
  });

  test('returns a boolean based on whether a given value exists in storage', () => {
    const set = new Set();
    expect(set.has('All Falls Down')).toBeFalsy();
    set.add('All Falls Down');
    expect(set.has('All Falls Down')).toBeTruthy();
  });
});

describe('add', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.add).toEqual('function');
  });

  test('adds a given value to the set and increments size', () => {
    const set = new Set();
    set.add('Spaceship');
    set.add('Slow Jamz');
    expect(set.has('Spaceship')).toBeTruthy();
    expect(set.has('Slow Jamz')).toBeTruthy();
    expect(set.getSize()).toEqual(2);
  });
});

describe('delete', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.delete).toEqual('function');
  });

  test('deletes a given value from the set and decrements size', () => {
    const set = new Set();
    set.add('Touch the Sky');
    set.add('We Major');
    expect(set.has('Touch the Sky')).toBeTruthy();
    expect(set.has('We Major')).toBeTruthy();
    expect(set.getSize()).toEqual(2);
    set.delete('Touch the Sky');
    expect(set.getSize()).toEqual(1);
    expect(set.has('Touch the Sky')).toBeFalsy();
    set.delete('We Major');
    expect(set.getSize()).toEqual(0);
    expect(set.has('We Major')).toBeFalsy();
  });
});

describe('clear', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.clear).toEqual('function');
  });

  test('deletes all values from the set and resets size to 0', () => {
    const set = new Set();
    set.add('Flashing Lights');
    set.add('I Wonder');
    expect(set.has('Flashing Lights')).toBeTruthy();
    expect(set.has('I Wonder')).toBeTruthy();
    expect(set.getSize()).toEqual(2);
    set.clear();
    expect(set.has('Flashing Lights')).toBeFalsy();
    expect(set.has('I Wonder')).toBeFalsy();
    expect(set.getSize()).toEqual(0);
  });
});

describe('values', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.values).toEqual('function');
  });

  test('returns an array of all values in the set', () => {
    const set = new Set();
    const tracks = ['Stronger','Good Life','Everything I Am'];
    tracks.forEach(track => set.add(track));
    expect(Array.isArray(set.values())).toBeTruthy();
    expect(set.values()).toEqual(expect.arrayContaining(tracks));
    set.clear();
    expect(set.values()).toEqual([]);
  });
});

describe('getSize', () => {
  test('is a method', () => {
    const set = new Set();
    expect(typeof set.getSize).toEqual('function');
  });

  test('returns the size of the set', () => {
    const set = new Set();
    const tracks = ['Stronger','Good Life','Everything I Am'];
    tracks.forEach(track => set.add(track));
    expect(set.getSize()).toEqual(tracks.length);
    set.clear();
    expect(set.getSize()).toEqual(0);
  });
});
