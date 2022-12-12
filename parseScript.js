// const SerpApi = require('google-search-results-nodejs');
// const search = new SerpApi.GoogleSearch("661009a1f6e054fb232408b503aa2c5270833e0452fdfa8b02c885d9d325a501");
// const fs = require('fs')
//
// for (let step = 0; step < 5;) {
//
//
//     const start = (step) => {
//
//
//         const params = {
//             q: "Картинки квартир Киев",
//             tbm: "isch",
//             ijn: `${step}`
//         };
//         const callback = function (data) {
//             console.log(data["images_results"]);
//
//             fs.writeFile(`apart${step}.json`, JSON.stringify(data["images_results"]), function (error) {
//                 if (error) {
//                     console.log(error)
//                     console.log("ФАЙЛ НЕ БЫЛ ЗАПИСАН !!!!!!")
//                 } else {
//                     console.log('Все прошло гладко')
//                 }
//             })
//         };
//
//         search.json(params, callback);
//     }
//
//     start(step)
//     step++
//     console.log(step);
// }
//
