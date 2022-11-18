

function tugas26(){
    const array1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    for(let i =0;i<array1.length;i++){

        if(isFinite(array1[i])){
            console.log(`Angka ${array1[i]} NOT Infinity`)
        }else{
            console.log(`Angka ${array1[i]} Infinity`)
        }
    }
}

tugas26();