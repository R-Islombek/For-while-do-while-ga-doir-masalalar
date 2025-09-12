// 1-Masala;

// let n = prompt("n sonini kiriting");

// for (let i = 0; i < n; i++){
//       console.log("k");
// }

// 2-Masala;

// let n = prompt("0 bilan 1 bilan orasidagi son kiriting");

// let sum = 200;

// for( i = 0.1; i < n ; i ++){
//     sum *= i;
//     console.log(sum);
// }

// 3-Masala;

let n = parseInt(prompt("n ni kiriting (n > 0):"));

let S = 0;
for (let i = n; i <= 2 * n; i++) {
  S += i ** 2;
}

console.log("Natija:", S)

