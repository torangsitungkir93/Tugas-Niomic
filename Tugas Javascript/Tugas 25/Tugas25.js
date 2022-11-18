

function tugas25(){
    const angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya  : "+angka.join(","));
    angka.sort();
    console.log(`Ascending   : ${angka}`);
    angka.reverse()
    console.log(`Descending  : ${angka}`);
    filter=angka.filter(number => number>10);
    console.log(`Filter > 10 : ${filter}`)
}

tugas25();