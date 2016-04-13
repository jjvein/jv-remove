var tape = require('tape')
var remove = require('./')

tape('Test', function(t){
  var arr = [1, 2, 3, 4, 5]
  var ret = remove(arr, 1, 0)
  t.same(arr.sort(), [1, 3, 4, 5])
  t.same(ret, [2])


  arr = [1, 2, 3, 4, 5, 6]
  ret = remove(arr, 3, 2)
  t.same(arr.sort(), [1, 2, 3, 6])
  t.same(ret, [4, 5])
  t.end()
})

tape('Error', function(t) {
  var arr = [1, 2, 3, 4, 5]
  var ret = remove(arr, 5, 1)
  t.false()

  ret = remove(arr, 2, 6)
  t.same(arr.sort(), [1, 2])
  t.end()

})
