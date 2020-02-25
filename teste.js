const colors = ["5", "7", "8", "A", "B", "D", ]
var a = ""
for (value of colors) {
    a=a+value
}
//console.log(a)
i = 0; i < 9; i++

req = {body:{
    novoNome: {}
}}
const {novoNome} = req.body
console.log(novoNome)
