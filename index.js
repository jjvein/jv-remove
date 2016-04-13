"use strict"

module.exports = function(arr, i, count){

    //start offset must be the index of an array
    if(!arr.length || arr.length <= i) return false

    count = ~~count > 0 ? ~~count : 1
    var len = arr.length

    var tmp=[], ret = []
    var left = len - i - count
    var retReserve = left > 0 ? (left < count ? left : count) : 0
    var loop = left > 0 ? count : (len-i)

    for(var j=0; j<loop; j++) {
      tmp.push(arr[i+j])  
    }

    while(loop--) {
        ret.push(arr.pop())
    }

    for(var l=0; l<retReserve; l++) {
      arr[l+i]  = ret[l]
    }
    return tmp
}
