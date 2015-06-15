// 1. Define a function that deletes all elements of the array a = [4,7,8,'x'] that are not numbers between 6 and 9. 
//   Assumptions: 
//     number elements contained in array are integers and whole numbers only
array = [4, 5, 7, 8, 10, 'x'];

function removeValue(array) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] < 6 || array[i] > 9 || isNaN(array[i]) == true ) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}
// 2. Define a function that prints all permutations of an array. 
function printPermutations(array) {

}

// Option 1
function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

// Option 2
function permute(input) {
  var permArr = [];
  var usedChars = [];

  return (function main() {
    for (var i = 0; i < input.length; i++) {
      var ch = input.splice(i, 1)[0];
      usedChars.push(ch);

      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      main();
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  })();
}
// 3. Define a function that creates a 5 x 5 array and randomly fills each cell with "Yes", "No" or "Maybe". 

function createRandomArray(rows, cols){
  var arr = [];
  var answers = ['Yes', 'No', 'Maybe']; 
  function randomAnswer() {
    return answers[Math.floor(Math.random() * answers.length)];
  }; 
 
  for(var i = 0; i < rows; i++){
    arr.push( new Array(cols));

    for(var j = 0; j < cols; j++){
      arr[i][j] = randomAnswer();
    }
  }
  return arr;
}

// 4. 
// Synchronous HTTP GET Request using XMLHttpRequest API

var url = "https://www.bookingbug.com/api/v1/114784/services?page=1&per_page=300";

var client = new XMLHttpRequest();
client.open("GET", url, false);
client.setRequestHeader("Content-Type", "text/plain");

client.onreadystatechange = function() {
  if (client.readyState == 4 && client.status == 200) {
    console.log("Request successful!\n The response status is: " + client.status + ".");
    var myObj = eval ( client.responseText );
    console.log(myObj);
  } else {
    console.log("The request did not succeed!\n\nThe response status was: " + client.status + " " + client.statusText + ".");
  }
};

client.send();

"App-Id:9c0bf9d1"
"App-Key:12e5ba26ece8cbfd5336d57147b9219c"

// Asynchronous HTTP GET Request using jQuery $.ajax
$.ajax({
   url: "https://www.bookingbug.com/api/v1/114784/services?page=1&per_page=300",
   data: {
      format: 'json',
      App-Id: '9c0bf9d1',
      App-Key: '12e5ba26ece8cbfd5336d57147b9219c'
   },
   dataType: 'jsonp',
   success: function(data) {
      console.log(data);
      // console.log(data[_embedded][services][-2]);
   },
   error: function() {
      console.log("An error has occurred");
   }
});










