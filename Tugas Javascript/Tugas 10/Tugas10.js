

let nilai=0;
const penampung=[]; 
for (let i = 1; i <= 10; i++) {
    penampung.push(`${nilai+=i}`);
}

for (const iterator of penampung) {
    console.log(iterator);
}

