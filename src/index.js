module.exports = function toReadable (number) {
    const mas0_9 = ['','one','two','three','four','five','six','seven','eight','nine']
    const mas10_19 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const mas20_90 = ['ten','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    if (number==0) return 'zero'
    nstr = String(number).split('').map(Number)
    lstr = nstr.length
    //console.log(nstr, lstr)
    rez = ''
    if (lstr>2) rez += mas0_9[nstr[0]] + ' hundred'
    des = number%100
    if (des>9 & des<20) {
        rez += ' '+ mas10_19[nstr.at(-1)];
        return rez.trim()
    }    
    if (des>19) rez += ' '+ mas20_90[nstr.at(-2)]
    if(nstr.at(-1)>0) rez += ' '+ mas0_9[nstr.at(-1)]
    return rez.trim()
}