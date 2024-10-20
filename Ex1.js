///1ere methode simple avec la methode map 
// let nums = [2,5,8,7,3];
// let nouvNums = nums.map(num => num * 3); //par fonction fléchés

// console.log(nouvNums)

//2eme methode en utilisant la fonction fleches et la methode map

// let nums = [2,5,8,7,3];
// let result=()=>{
//     console.log(nums.map(numero=>numero*3)); 
// }

// result();

/// 3eme methode en mentionnant les valeurs de la methode map 
// let result=()=>{
//     let res = nums.map((valeur,index)=>valeur*3); 
//     console.log(res);
// }
// result();

/// 4eme methode en utilisant une boucle foreach

// var res=[];
// let result=()=>{
//     nums.forEach(element=>{res.push(element*3)});
//     console.log(res);
// }
// result();
// let nums = [2,5,8,7,3];
// let nouvNums = nums.map(function(num){
//     return num * 3
// }); //par fonction fléchés

// console.log(nouvNums)

const inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS', frais: 500 },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS', frais: 650 },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS', frais: 700 },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS', frais: 750 }   
];

const totalfrais = inscriptions.reduce(function(total, pers){
    return total+= pers.frais},0)

console.log(totalfrais)
