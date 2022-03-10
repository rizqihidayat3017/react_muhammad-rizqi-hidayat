let arr = [1.5, 2.56, 5.1, 12.33];
let temp = [];

for (let i = 0; i < arr.length; i++) {
    var nilai = Math.round(arr[i]);
    temp.push(nilai);
}

console.log(temp);