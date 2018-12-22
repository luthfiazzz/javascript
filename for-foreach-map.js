// perulangan for
// function panggilperulangan() {
//     let kota = ['bandung','cimahi','padalarang']
// for (let i = 0; i< kota.length; i++){
//     console.log(kota[i]);
//     console.log(i);
//     console.log(kota);
// }
// }
// panggilperulangan();

// perulangan forEach
// function panggilperulangan() {
//     let kota = ['bandung','cimahi','padalarang']
// kota.forEach((item,index,array)=>{
//     console.log(item);
//     console.log(index);
//     console.log(array);
// });
// }
// panggilperulangan();

// perulangan Map
function panggilmap() {
    let kota = ['bandung','cimahi','padalarang']
    kota.map((item,index,array)=>{
        console.log(item);
        console.log(index);
        console.log(array);
    })
}
panggilmap();