import { Node, LinkedList } from '../exercises/04_linked_list';

describe('ES6 Classes', () => {
  test('has a Node class', () => {
    expect(typeof Node).toEqual('function');
    const node = new Node();
    expect(node).toBeInstanceOf(Node);
  });

  test('has a LinkedList class', () => {
    expect(typeof LinkedList).toEqual('function');
    const ll = new LinkedList();
    expect(ll).toBeInstanceOf(LinkedList);
  });
});

describe('Node constructor', () => {
  test('has a property equal to a given value', () => {
    const node = new Node('The Low End Theory');
    expect(node.value).toEqual('The Low End Theory');
  });

  test('has a next property that is initialized to null', () => {
    const node = new Node('Midnight Marauders');
    expect(node.next).toEqual(null);
  });
});

describe('LinkedList constructor', () => {
  test('has ahead property that is initialized to null', () => {
    const ll = new LinkedList();
    expect(ll.head).toEqual(null);
  });

  test('has a length property that is initialized to 0', () => {
    const ll = new LinkedList();
    expect(ll.length).toEqual(0);
  });
});

describe('add', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.add).toEqual('function');
  });

  test('inserts a node with a given value at the end of the list', () => {
    const ll = new LinkedList();
    ll.add('The Low End Theory');
    ll.add('Midnight Marauders');
    expect(ll.head.value).toEqual('The Low End Theory');
    expect(ll.head.next.value).toEqual('Midnight Marauders');
    expect(ll.head.next.next).toEqual(null);
  });
});

describe('remove', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.remove).toEqual('function');
  });

  test("takes a given value's node out of the list and reassigns pointer accordingly", () => {
    const ll = new LinkedList();
    ll.add("Buggin' Out");
    ll.add('Check the Rhime');
    ll.add("Jazz (We've Got)");
    ll.add('Scenario');
    expect(ll.toArray()).toEqual(["Buggin' Out", 'Check the Rhime', "Jazz (We've Got)", 'Scenario']);
    expect(ll.head.value).toEqual("Buggin' Out");
    expect(ll.head.next.value).toEqual('Check the Rhime');
    expect(ll.head.next.next.value).toEqual("Jazz (We've Got)");
    expect(ll.head.next.next.next.value).toEqual('Scenario');
    ll.remove("Jazz (We've Got)");
    ll.remove('Check the Rhime');
    expect(ll.toArray()).toEqual(["Buggin' Out", 'Scenario']);
    expect(ll.head.value).toEqual("Buggin' Out");
    expect(ll.head.next.value).toEqual('Scenario');
  });
});

describe('contains', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.contains).toEqual('function');
  });

  test("returns a boolean based on a given value's presence in the list", () => {
    const ll = new LinkedList();
    ll.add('Award Tour');
    ll.add('Electric Relaxation');
    expect(ll.contains('Award Tour')).toBeTruthy();
    expect(ll.contains('Electric Relaxation')).toBeTruthy();
    expect(ll.contains('Oh My God')).toBeFalsy();
    expect(ll.contains('Lyrics to Go')).toBeFalsy();
    expect(ll.head.value).toEqual('Award Tour');
    expect(ll.head.next.value).toEqual('Electric Relaxation');
    expect(ll.length).toEqual(2);
    ll.remove('Award Tour');
    expect(ll.contains('Award Tour')).toBeFalsy();
    expect(ll.head.value).toEqual('Electric Relaxation');
    expect(ll.length).toEqual(1);
    ll.remove('Electric Relaxation');
    expect(ll.contains('Electric Relaxation')).toBeFalsy();
    expect(ll.head).toEqual(null);
    expect(ll.length).toEqual(0);
  });
});

describe('indexOf', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.indexOf).toEqual('function');
  });

  test('returns the position in the list for a given value', () => {
    const ll = new LinkedList();
    ll.add('Award Tour');
    ll.add('Electric Relaxation');
    ll.add('Oh My God');
    ll.add('Lyrics to Go');
    expect(ll.indexOf('Award Tour')).toEqual(0);
    expect(ll.indexOf('Electric Relaxation')).toEqual(1);
    expect(ll.indexOf('Oh My God')).toEqual(2);
    expect(ll.indexOf('Lyrics to Go')).toEqual(3);
    expect(ll.remove('Award Tour'));
    expect(ll.remove('Electric Relaxation'));
    expect(ll.indexOf('Award Tour')).toEqual(-1);
    expect(ll.indexOf('Electric Relaxation')).toEqual(-1);
    expect(ll.indexOf('Oh My God')).toEqual(0);
    expect(ll.indexOf('Lyrics to Go')).toEqual(1);
  });
});

describe('size', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.size).toEqual('function');
  });

  test('returns the correct length of the list', () => {
    const ll = new LinkedList();
    expect(ll.size()).toEqual(0);
    ll.add("Buggin' Out");
    expect(ll.size()).toEqual(1);
    ll.add('Check the Rhime');
    expect(ll.size()).toEqual(2);
    ll.add("Jazz (We've Got)");
    expect(ll.size()).toEqual(3);
    ll.add('Scenario');
    expect(ll.size()).toEqual(4);
    ll.remove("Jazz (We've Got)");
    expect(ll.size()).toEqual(3);
    ll.remove('Scenario');
    expect(ll.size()).toEqual(2);
  });
});

describe('toArray', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.toArray).toEqual('function');
  });

  test("creates an array based on the list's values", () => {
    const ll = new LinkedList();
    expect(ll.toArray()).toEqual([]);
    ll.add('Excursions');
    expect(ll.toArray()).toEqual(['Excursions']);
    ll.add('Show Business');
    ll.add('Vibes and Stuff');
    ll.add('Skypager');
    expect(ll.toArray()).toEqual(['Excursions', 'Show Business', 'Vibes and Stuff', 'Skypager']);
    ll.remove('Excursions');
    ll.remove('Show Business');
    expect(ll.toArray()).toEqual(['Vibes and Stuff', 'Skypager']);
  });
});

describe('toString', () => {
  test('is a method', () => {
    const ll = new LinkedList();
    expect(typeof ll.toString).toEqual('function');
  });

  test("creates a string based on the list's values", () => {
    const ll = new LinkedList();
    expect(ll.toString()).toEqual('');
    ll.add('8 Million Stories');
    expect(ll.toString()).toEqual('8 Million Stories');
    ll.add('Midnight');
    ll.add('Clap Your Hands');
    ll.add('We Can Get Down');
    expect(ll.toString()).toEqual('8 Million Stories, Midnight, Clap Your Hands, We Can Get Down');
    ll.remove('8 Million Stories');
    ll.remove('Midnight');
    expect(ll.toString()).toEqual('Clap Your Hands, We Can Get Down');
  });
});
