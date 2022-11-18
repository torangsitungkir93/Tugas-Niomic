

function tugas22(){

    const data = `Saya ingin belajar bersama`;
    const string = data.split(" ");
    

    string.forEach(function(item,index){
        console.log(`Item : ${item} Index ke ${index}`);   
    })

}

tugas22();