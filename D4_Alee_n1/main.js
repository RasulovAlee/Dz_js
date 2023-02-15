
var i = 0
var calcInc = () => {
    num.style.color = 'green'
    return(i ++)
}
var calcDec = () => {
    num.style.color = 'red'
    if (i < 1) {
        i = 0
    }
    return(i --)
}

var num = document.getElementById('num')
function incRem(){
    document.getElementById('num').innerHTML = calcInc(i)
}
function decRem(){
    document.getElementById('num').innerHTML = calcDec(i)
}