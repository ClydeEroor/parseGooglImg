const fs = require("fs")
for (let step = 0; step < 5;) {

let start = fs.readFileSync(`apart${step}.json`);
let student = JSON.parse(start);
console.log(student)
student.map((elem) => {
    return fs.appendFileSync('file.json', `\n{"original" : "${elem.original}"},`);

})
    console.log(`Цикл номер ${step} был выполнен`)
    step++
}

// var str = '{a:123,b:"string"}'
//
// var obj = JSON.Parse(str)
// console.log(obj.a) // 123
// console.log(obj.b) // "string"




// fs.readdir('apart0.json', "original:") => ()





