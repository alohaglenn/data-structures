import Graph from '../exercises/07_graph';

describe('ES6 Class', () => {
  test('has a Graph class', () => {
    expect(typeof Graph).toEqual('function');
    const graph = new Graph();
    expect(graph).toBeInstanceOf(Graph);
  });
});

describe('Graph constructor', () => {
  test('has a vertices property that is initialized to an empty array', () => {
    const graph = new Graph();
    expect(graph.vertices).toEqual([]);
  });

  test('has a adjList property that is initialized to an empty object', () => {
    const graph = new Graph();
    expect(graph.adjList).toEqual({});
  });
});

describe('addVertex', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.addVertex).toEqual('function');
  });

  test('pushes a vertex to end of the vertices list', () => {
    const graph = new Graph();
    graph.addVertex('N.Y.');
    graph.addVertex('State');
    graph.addVertex('of');
    graph.addVertex('Mind');
    expect(graph.vertices).toEqual(['N.Y.', 'State', 'of', 'Mind']);
  });

  test('assigns a key to the adjList which has a value of an empty array', () => {
    const graph = new Graph();
    graph.addVertex('N.Y.');
    graph.addVertex('State');
    graph.addVertex('of');
    graph.addVertex('Mind');
    expect(graph.adjList['N.Y.']).toEqual([]);
    expect(graph.adjList['State']).toEqual([]);
    expect(graph.adjList['of']).toEqual([]);
    expect(graph.adjList['Mind']).toEqual([]);
  });
});

describe('addEdge', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.addEdge).toEqual('function');
  });

  test('creates an edge from a given source to a given destination and vice versa', () => {
    const memoryLane = new Graph();
    memoryLane.addVertex('Nas');
    memoryLane.addVertex('DJ Premier');
    memoryLane.addEdge('Nas', 'DJ Premier');
    expect(memoryLane.adjList['Nas']).toEqual(['DJ Premier']);
    expect(memoryLane.adjList['DJ Premier']).toEqual(['Nas']);
  });
});

describe('contains', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.contains).toEqual('function');
  });

  test("returns a boolean based on a given vertex's presence in the graph", () => {
    const memoryLane = new Graph();
    memoryLane.addVertex('Nas');
    memoryLane.addVertex('DJ Premier');
    expect(memoryLane.vertices).toContain('Nas');
    expect(memoryLane.vertices).toContain('DJ Premier');
    expect(memoryLane.vertices).not.toContain('Puff Daddy');
  });
});

describe('breadth_first_search', () => {
  test('breadth_first_search is a method', () => {
    const graph = new Graph();
    expect(typeof graph.bfs).toEqual('function');
  });
});

describe('toString', () => {
  test('is a method', () => {
    const graph = new Graph();
    expect(typeof graph.toString).toEqual('function');
  });

  test('returns a string with the proper data on vertices and edges', () => {
    const memoryLane = new Graph();
    memoryLane.addVertex('Nas');
    memoryLane.addVertex('DJ Premier');
    memoryLane.addEdge('Nas', 'DJ Premier');
    console.log(memoryLane.toString());
    expect(typeof memoryLane.toString()).toEqual('string');
    expect(memoryLane.toString().indexOf('Nas')).toBeGreaterThanOrEqual(0);
    expect(memoryLane.toString().indexOf('DJ Premier')).toBeGreaterThanOrEqual(0);
    expect(memoryLane.toString().indexOf('Puff Daddy')).toBe(-1);
  });
});
