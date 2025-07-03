const fs = require("fs")


const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data21.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }

}



const saveData = (allData) => {

    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data21.json", allDataJson)

}

/////////////////////////////  ADD  //////////////////////////////////////


const addPerson = (id, fname, lname, age, city) => {
    const allData = loadInfo()

    const dublicatedData = allData.filter((obj) => {
        return obj.id === id

    })

    if (dublicatedData == 0) {


        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
    } else {
        console.log("ERROR DUBLICATED DATA")
    }

    saveData(allData)

}



///////////////////////////////  DELETE  ///////////////////////////////////////





const deleteData = (id) => {
    const allData = loadInfo()
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })
    saveData(dataToKeep)
}



///////////////////////////////  DELETE ALL  ///////////////////////////////////////





const deleteAllData = () => {
   saveData([])

}

////////////////////////////////  READ ALL  //////////////////////////////////////////




const readAllData = () => {
    const allData = loadInfo()

    for (var i = 1; i <= allData.length; i++) {

        const itemNeeded = allData.find((obj) => {
            return obj.id === i
        })


        if (itemNeeded) {
            console.log(itemNeeded)

        }
        else {
            console.log(`ID ${i} not found`)
        }
    }
}

///////////////////////////////  READ  /////////////////////////////////////


const readData = (id) => {
    const allData = loadInfo()
    const itemNeeded = allData.find((obj) => {
        return obj.id === id
    })
    if (itemNeeded) {
        console.log(itemNeeded)

    }
    else {
        console.log("ID not found")
    }
}




///////////////////////////////   LIST    /////////////////////////////////////



const listData = () => {
    const allData = loadInfo()
    allData.forEach((obj) => {
        console.log(obj.fname, obj.lname, obj.city)

    });
}




















module.exports = {
    addPerson,
    deleteData,
    readData,
    readAllData,
    listData,
    deleteAllData
}










