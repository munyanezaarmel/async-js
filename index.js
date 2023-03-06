const fs = require("fs")
const { resolve } = require("path")
const readFilePromise = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject("i can not find this file sorrry")
            resolve(data)
        })
    })
}
const writeFilePromise = (file,data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile((file,data) => {
            if (err) reject("sorry file doesnt exit")
            resolve("success")
       })
   }) 
}
//IEFF
(async() => {
    
})()

//promises
// readFilePromise("dog.txt").then((data) => {
//     console.log(`Bread:${data}`)
// })

// async-await
const readAsyc = async () => {
    try {
          const data = await readFilePromise("dog.txt");
  console.log(`Bread:${data}`);
    }
    catch(err) {
        console.log(err)
    }

}
readAsyc()
