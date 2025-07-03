const fs = require("fs")
const yargs = require("yargs")
const data7 = require("./data7")


/////////////////////////////  ADD  //////////////////////////////////////
yargs.command({
    command: "add",
    describe: "Added item",
    builder: {
        fname: {
            demandOption: true,
            type: "string"
        },
        lname: {
            demandOption: true,
            type: "string"
        },
        age: {
            demandOption: true,
            type: "string"
        }

    },
    handler: (x) => {
        data7.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }
})



///////////////////////////////  DELETE  ///////////////////////////////////////


yargs.command({
    command: "delete",
    describe: "deleted item",
    builder: {
        id: {
            describe: "dele",
            demandOption: true,

        }
    },
    handler: (x) => {
        data7.deleteData(x.id)
    }
})
///////////////////////////////  DELETE All  ///////////////////////////////////////


yargs.command({
    command: "deleteAll",
    describe: "deleted item",
   
    handler: () => {
        data7.deleteAllData()
    }
})


///////////////////////////////  READ  /////////////////////////////////////


yargs.command({
    command: "read",
    builder: {
        id: {

            demandOption: true,

        }
    },
    handler: (x) => {
        data7.readData(x.id)
    }
})

////////////////////////////////  READ ALL  //////////////////////////////////////////

yargs.command({
    command: "readAll",

    handler: () => {
        data7.readAllData()
    }
})



///////////////////////////////   LIST    /////////////////////////////////////

yargs.command({
    command: "list",

    handler: () => {
        data7.listData()

    }

})






yargs.parse()