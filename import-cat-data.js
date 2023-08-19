const fs = require('fs')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })
const Cat = require('./catModel.js')



const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log('DB connection successful!')
})

//READ JSON FILE
const cats = JSON.parse(fs.readFileSync(`${__dirname}/cat-data.json`, 'utf-8'))

//IMPORT DATA FROM DB
const importData = async () => {
    try{
        await Cat.create(cats)
        console.log('Data successfully loaded')
    } catch (err){
        console.log(err)
    }process.exit();
   
}

//DELETE ALLDATA FROM DB
const deleteData = async() => {
    try{
        await Cat.deleteMany();
        console.log('Data successfully deleted')
    } catch(err){
        console.log(err)
    } process.exit();
}

//deleteData();
importData();
