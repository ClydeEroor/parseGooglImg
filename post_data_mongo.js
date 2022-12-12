const mongoose = require('mongoose');
const {Schema} = require("mongoose");


main().catch(err => {
    if (err) {
        console.log(err)
    } else {console.log("Подключение к БД прошло успешно !!!")}

});
async function main() {
    await mongoose.connect('mongodb+srv://clyde:lp123321@cluster0.tdecpl3.mongodb.net/test');
    console.log("Подключение к БД прошло успешно !!!")

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

