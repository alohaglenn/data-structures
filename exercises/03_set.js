/* Create a Set class WITHOUT using an array and WITHOUT using any JavaScript array methods (Array.prototype.push, Array.prototype.includes, etc). Use an object for storage instead.

The Set class should have the following methods:
add - adds a value to the set if it doesn't already have it
delete - deletes a value from the set if it has it
has - checks to see if a given value exists in the set
clear - deletes all values from the set
values - returns an array containing the set's values
getSize - returns how many values exist in the set

Example:
const set = new Set();
set.add('College Dropout');
set.has('College Dropout'); => return true
set.add('Late Registration');
set.getSize(); => return 2
set.delete('College Dropout');
set.add('Graduation');
set.values(); => return ['Late Registration', 'Graduation']
set.getSize(); => return 2
set.clear();
set.values(); => return []
set.getSize(); => return 0
*/

class Set {}

export default Set;
