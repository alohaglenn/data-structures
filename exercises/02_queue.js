/*
Create a Queue class WITHOUT using an array and WITHOUT implementing any JavaScript array methods (Array.prototype.push, Array.prototype.shift, etc). Use an object for storage instead.

The Queue class should have the following methods:
enqueue - adds a value to the back of the queue
dequeue - removes the value from the front of the queue
peek - tells us what value was first added to the queue
getSize - tells us how many values are currently in the queue
reset - removes all values from the queue

Examples:

queue.enqueue('The');
queue.enqueue('Miseducation');
queue.storage = { 0: 'The', 1: 'Miseducation' }
queue.enqueue('of');
queue.enqueue('Lauryn Hill');
queue.storage = { 0: 'The', 1: 'Miseducation', 2: 'of', 3: 'Lauryn Hill' }
queue.peek() => return 'The'
queue.dequeue() => return 'The'
queue.storage = { 1: 'Miseducation', 2: 'of', 3: 'Lauryn Hill' }
queue.getSize => return 3
queue.reset()
queue.storage = {}
 */

class Queue {}

export default Queue;
