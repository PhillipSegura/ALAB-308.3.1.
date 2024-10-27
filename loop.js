// Part 1 //
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Part 2 //
let n = 9;
let isPrime;
while (true) {
    isPrime = true;
    n++;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n);
        break;
    }
}

// Part 3 //
let data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
// Loop through characters in string
// Loop through characters in string
let cell = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let cellNum = 1;
// For each character
for (let i = 0; i < data.length; i++) {
    let char = data[i];

    if (char == "," || char == "\n") {
      switch (cellNum) {
          case 1:
              cell1 = cell;
              break;
          case 2:
              cell2 = cell;
              break;
          case 3:
              cell3 = cell;
              break;
          case 4:
              cell4 = cell;
              break;
      }
      if (cellNum == 4){
          cellNum = 1;
      }
      else {
          cellNum += 1;
      }
      cell = "";
  } else {
      cell += char;
  }
    if (char == "\n"){
        console.log(cell1, cell2, cell3, cell4);
        cell = "";
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    }
}