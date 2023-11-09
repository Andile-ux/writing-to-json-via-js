// import fs from 'fs';

const hlelwa ={
    name : 'Hlelwa',
    age : 3,
    course : 'Dip in ICT',
    module : 'App Dev'
};
 
const fs = require('fs');

function writeData(){
    fs.readFile('./students.json', 'utf-8', (err,jsonString) => {
        if(err){
            console.log(err)
        }
        else{
            let obj = JSON.parse(jsonString);
            obj.students.push(hlelwa );
            fs.writeFileSync("./Users/damacm1135/Desktop/Andile Nsele DA/fund&OOP/try/students.json", JSON.stringify(obj));
            
        }
    }
    );
}

writeData();


