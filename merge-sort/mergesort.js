/**
 * Created by suzanne on 4/27/17.
 */
function merge(left, right) {
  //console.log("Merging L & R ", left, right)
  var result=[]
  while (left.length && right.length) {
    result.push((left[0]<=right[0]) ? left.shift() : right.shift() )
  }

  while (left.length) {
    result.push(left.shift())
  }
  while (right.length){
    result.push(right.shift())
  }
  console.log("merge", result)
  return result
}

function mergeSort(arr) {
  let len = arr.length
  if (len===1) {
    return arr
  }

  let midPoint = Math.floor(len/2)
  let leftSplit = arr.slice(0,midPoint)
  let rightSplit = arr.slice(midPoint, len)


  return merge(mergeSort(leftSplit), mergeSort(rightSplit))
}


//merge([2,3],[1,5])

var start =  [34, 203, 3, 746, 200, 984, 198, 764, 9];
var answer = mergeSort(start);
console.log(answer)