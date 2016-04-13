# jv-remove
---

Remove elements from an array without Array.prototype.splice

### Usage

```
var remove = require('jv-remove')
remove(arr, startOffset, length)
```
`arr`: Array need to be handled  
`startOffset`: start offset of the array, must less the length of array  
`length`: number of the elements to be removed, default to 1

```
var remove = require('jv-remove')
var arr = [1, 2, 3, 4, 5]
var ret = remove(arr, 1, 2)
console.log('arr==>', arr)
console.log('ret==>', ret)
```

### MIT


### Referer
I got this inspiration from [mafintosh's repo](https://github.com/mafintosh/unordered-array-remove). Just want to enhance this idea to make it powerful.

