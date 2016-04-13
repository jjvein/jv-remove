var remove = require('../')

var arr = [1, 2, 3, 4, 5]
var ret = remove(arr, 1, 2)

var arr = [1, 2, 3, 4, 5]
remove(arr, 1, 1)

var arr = [1, 2, 3, 4, 5]
remove(arr, 0, 2)

var arr = [1, 2, 3, 4, 5, 6, 7]
remove(arr, 3, 4)

var arr = [1, 2, 3, 4, 5, 6, 7]
remove(arr, 6, 4)

var arr = [1, 2, 3, 4, 5, 6, 7]
remove(arr, 2, 8)


