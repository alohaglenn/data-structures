/*
Create a Graph class that contains properties for its vertices and adjacent list. It should the vertices in a list and the adjacent list should be implemented as an object.

The Graph class should have the following methods:
addVertex - creates a vertex with a given value and adds it to the vertices list and adjacent list
addEdge - takes in two vertices and creates a relationship between them
contains - returns a boolean based on if a given vertex is present in the adjacent list
bfs - performs a breadth-first traversal of the graph based on a starting vertex
toString -gets the values in the adjacent list and transforms it into a string

Example:

const artistsGraph = new Graph();
let artists = ['Nas', 'DJ Premier', 'Pete Rock', 'Large Professor', 'Q-Tip', 'L.E.S.'];
artists.forEach(artist => artistsGraph.addVertex(artist));
artistsGraph.addEdge('Nas', 'DJ Premier');
artistsGraph.addEdge('Nas', 'L.E.S.');
artistsGraph.addEdge('Nas', 'Pete Rock');
artistsGraph.contains('Nas'); => return true
artistsGraph.bfs('Nas'); => traverses all nodes in artistsGraph from this vertex
artistsGraph.toString(); => return 'Nas => DJ Premier, L.E.S., Pete Rock\nDJ Premier => Nas\nPete Rock => Nas\nLarge Professor => \nQ-Tip => \nL.E.S. => Nas'
*/

class Graph {}

export default Graph;
