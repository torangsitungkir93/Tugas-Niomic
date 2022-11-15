

let array= [28,34,61,42,38,79,58,92,35,33,77];


//Menggunakan For Biasa
for(let i=0;i<10;i++){
    console.log(array[i]);
}

console.log("-------------");

// Menggunakna ForOff
for (const angka of array) {
    console.log(angka);
    
}

console.log("-------------");

// Menggunakan ForIn
for (const nilai in array) {
    console.log(nilai);
    
}

// Bedanya kita tidak usah membuat berapa kali kita ingin melakukan perulangan