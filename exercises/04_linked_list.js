/*
Implement a singly linked list using two classes. The Node class should take in a value and track the next node in the list. The Linked List class should have reference to its head and overall list length.

The Linked List class should also have the following methods:
add - appends a given value to the end of the list
remove - deletes a given value from the list
contains - traverses the list and returns a boolean based on if a given value is present
size - returns the length of the list
toArray - gets the values in the list and transforms it into an array
toString - gets the values in the list and transforms it into a string

Example:
const tourStops = new LinkedList();
tourStops.add('Seattle');
tourStops.add('Portland');
tourStops.add('Oakland');
tourStops.add('Los Angeles');
tourStops.remove('Portland');
tourStops.toArray(); => return ['Seattle', 'Oakland', 'Los Angeles']
tourStops.add('San Diego');
tourStops.add('Phoenix');
tourStops.size(); => return 5
tourStops.remove('Seattle');
tourStops.contains('Los Angeles'); => return true
tourStops.contains('Seattle'); => return false
tourStops.toArray(); => return ['Oakland', 'Los Angeles', 'San Diego', 'Phoenix']
tourStops.size(); => return 4
*/

class Node {}

class LinkedList {}

export { Node, LinkedList };
