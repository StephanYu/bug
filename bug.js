// 1. Define a function that deletes all elements of the array a = [4,7,8,'x'] that are not numbers between 6 and 9. 
// Assumptions: number elements contained in array are integers and whole numbers only

function removeElement(array) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] < 6 || array[i] > 9 || isNaN(array[i]) == true ) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}
// 2. Define a function that prints all permutations of an array. 
function permutationsOf(array) { 
  var perm_array = []; 

  function swap(a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }

  function generate(n) {
    if (n == 1) {
      perm_array.push(array.join());
    } else {
      for (var i = 0; i < n; i++) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }

  generate(array.length);
  return perm_array;
}    


// 3. Define a function that creates a 5 x 5 array and randomly fills each cell with "Yes", "No" or "Maybe". 

function createRandomArray(rows, cols){
  var arr = [];
  var answers = ['Yes', 'No', 'Maybe']; 

  function randomAnswer() {
    return answers[Math.floor(Math.random() * answers.length)];
  }; 
 
  for(var i = 0; i < rows; i++){
    arr.push(new Array(cols));

    for(var j = 0; j < cols; j++){
      arr[i][j] = randomAnswer();
    }
  }
  return arr;
}

//  4. Using the bookingbug API, find the list of services for company where the company_id=114784. Inside the JSON response will be a list of services. Print names of the last two services returned in response. 

$.ajax({
  url: "https://www.bookingbug.com/api/v1/114784/services?page=1&per_page=300",
  beforeSend: function(xhr) {
    xhr.setRequestHeader('App-Id', '9c0bf9d1');
    xhr.setRequestHeader('App-Key', '12e5ba26ece8cbfd5336d57147b9219c');
  },
  success: function(data) {
    console.log(data._embedded.services[data.total_entries-2].name);
    console.log(data._embedded.services[data.total_entries-1].name);
    // console.log(data);
  },
  error: function() {
    console.log("An error has occurred");
  }
});

  







