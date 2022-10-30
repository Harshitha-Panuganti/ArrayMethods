# ArrayMethods

splice():
The splice() method changes the contents of an array.

Using splice() method, we can
1)Remove existing items
2)Replace existing items
3)Add new items

Removing existing items:
Syntax: arr.splice(Start, Delete Count)

Start: Starting Index
Delete Count: Number of items to be removed, starting from the given index

Adding new items
Syntax: arr.splice(Start, Delete Count, Item1, Item2 ... )

Here the Item1, Item2 ... are the items to be added, starting from the given index.


findIndex()
The findIndex() method returns the first item's index that satisfies the provided testing function. If no item is found, it returns -1.

Syntax: arr.findIndex(Testing Function)

includes()
The includes() method returns true if the provided item exists in the array. If no item is found, it returns false.

Syntax: arr.includes(item)

indexOf()
The indexOf() method returns the first index at which a given item can be found in the array. If no item is found, it returns -1.

Syntax: arr.indexOf(item)

lastIndexOf()
The lastIndexOf() method returns the last index at which a given item can be found in the array. If no item is found, it returns -1.

Syntax: arr.lastIndexOf(item)

find()
The find() method returns the first item's value that satisfies the provided testing function. If no item is found, it returns undefined.

Syntax: arr.find(Testing Function)

unshift()
The unshift() method adds one or more items to the beginning of an array and returns the new array length.

Syntax: arr.unshift(item1,item2, ..., itemN)

shift()
The shift() method removes the first item from an array and returns that removed item.

Syntax: arr.shift()

 concat()
The concat() method can be used to merge two or more arrays.

This method does not change the existing arrays but instead returns a new array.


slice()
The slice() method returns a portion between the specified start index and end index(end index not included) of an array into a new array.

Syntax: arr.slice(startIndex, endIndex)


join()
The join() method creates and returns a new string by concatenating all of the items in an array, separated by commas or a specified separator string.

If the array has only one item, then it will be returned without using the specified separator.

Syntax: arr.join(separator)

Here separator is a string used to separate each item of the array. If omitted, the array items are separated with a comma.


sort()
The sort() method sorts the items of an array and returns the sorted array. The default sort order is ascending.

Syntax: arr.sort()
