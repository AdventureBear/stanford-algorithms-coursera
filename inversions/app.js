/**
 * Created by suzanne on 4/26/17.
 */
console.log("Ready!")

function readBlob(opt_startByte, opt_stopByte) {

  var files = document.getElementById('files').files;
  if (!files.length) {
    alert('Please select a file!');
    return;
  }

  var file = files[0];
  var start = parseInt(opt_startByte) || 0;
  var stop = parseInt(opt_stopByte) || file.size - 1;

  var reader = new FileReader();

// If we use onloadend, we need to check the readyState.
  reader.onloadend = function(evt) {
    if (evt.target.readyState == FileReader.DONE) { // DONE == 2

      document.getElementById('byte_content').textContent = evt.target.result;
      document.getElementById('byte_range').textContent =
        ['Read bytes: ', start + 1, ' - ', stop + 1,
          ' of ', file.size, ' byte file'].join('');

      var textArr = evt.target.result.split(/\r\n|\r|\n/g);
      var sortArr = textArr.map(function(num) {
        return parseInt(num)
      })

      console.log(sortArr.slice(0,9))
      inversions = 0
      //mergeSort(sortArr.slice(0,9))
      console.log(mergeSort(sortArr))
      console.log("Inversions: ", inversions)

    }
  };

  var blob = file.slice(start, stop + 1);
  reader.readAsText(blob);
}

document.querySelector('.readBytesButtons').addEventListener('click', function(evt) {
  if (evt.target.tagName.toLowerCase() == 'button') {
    var startByte = evt.target.getAttribute('data-startbyte');
    var endByte = evt.target.getAttribute('data-endbyte');
    readBlob(startByte, endByte);
  }
}, false);

//==========
  function merge(left, right) {
    //console.log("Merging L & R ", left, right)
    var result=[]
    while (left.length && right.length) {
      if (left[0]<=right[0]){
        result.push(left.shift())
      } else {
        result.push(right.shift())
        inversions +=1
      }

    }

    while (left.length) {
      result.push(left.shift())
     // console.log("Pushing left remains")
    }
    while (right.length){
      result.push(right.shift())
      //console.log("Pushing right remains")
    }
    //console.log("merge", result)
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
let inversions = 0
var start =  [34, 203, 3, 746, 200, 984, 198, 764, 9];
//var start = [1,3,2,4,5]
var answer = mergeSort(start);
console.log(answer)
console.log("Inversions: ", inversions)
