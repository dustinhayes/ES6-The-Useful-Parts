// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// function shuffle(arr) {
//     return arr.reduce((base, curr, indx) => {
//         var key = Math.floor(Math.random() * arr.length);
        
//         [base[indx], base[key]] = [base[key], base[indx]];

//         return base;
//     }, arr.slice());
// }

// console.log(shuffle([1,2,3,4]));
