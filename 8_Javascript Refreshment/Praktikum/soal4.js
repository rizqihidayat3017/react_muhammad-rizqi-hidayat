let bdays = ['10-17', '05-19', '20-19'];
let temp = [];

for (let i = 0; i < bdays.length; i++) {
    var change = bdays[i].replace(/-/g, "/");
    temp.push(change);
}

console.log(temp);