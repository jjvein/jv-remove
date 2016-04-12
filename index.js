"use strict"

module.exports = function(arr, i, count){
    if(!arr.length) return arr
    var lg = console.log
    count = ~~count > 0 ? ~~count : 1
    var len = arr.length

    if(len < count) return arr

    var tmp=[], ret = []

    for(var j=0; j<count; j++) {
      tmp.push(arr[i+j])  
    }
    var retReserve = (len - i - count) > 0 ? (len - i - count) : 0
    var max = count > retReserve ? count : retReserve
    for(var k=0; k<max; k++) {
        ret.push(arr.pop())
    }
    for(var l=0; l<retReserve; l++) {
      arr[l+i]  = ret[l]
    }

    return tmp
}
