function callSplice() {
    let kota = ['paris','roma','london'];

    console.log(kota)
    kota.splice(2,0,'bandung')
    return kota
}
console.log(callSplice())
