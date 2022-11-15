

let tinggi1 = 165;
let tinggi2 = 170;
let tinggi3 = 150;

function badanTertinggi(){
    let tertinggi=0;
    if(tinggi1>tertinggi){
        tertinggi =tinggi1;
    }
    if(tinggi2>tertinggi){
        tertinggi =tinggi2;
    }
    if(tinggi3>tertinggi){
        tertinggi=tinggi3;
    }
    return tertinggi;
};

console.log(badanTertinggi());