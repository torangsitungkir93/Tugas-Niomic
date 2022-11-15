

const universitas = {
    nama : "ITB",
    akreditasi : "B",
    alamat : "Bandung",
    gedung : {
        gedung1 : "FakultasABC",
        gedung2 : "FakultasDEF"
    }
};

console.log(universitas);

for (data in universitas){
    console.log(universitas[data]);
}

