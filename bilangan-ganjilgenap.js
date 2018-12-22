
function panggilbilganjil() {
    let bilganjil = []
    for (let i  = 1; i  < 30;i++){
        if(i%2 ===1){
            bilganjil.push(i)
        }
        
    }
    return bilganjil
}
function panggilbilgenap() {
    let bilgenap = []
    for (let i = 1; i < 30; i++) {
        if(i%2 ===0){
            bilgenap.push(i)
        }
        
    }
    return bilgenap
}
function kelipatan5() {
    let data = []
for (let i = 1; i < 50; i++){
    if (i%5 === 0) {
        data.push(i)
    }  
}
return data;
} 
console.log(panggilbilgenap())
console.log(panggilbilganjil())
console.log(kelipatan5())
