const fs =require("fs")
let ext=require("./ext.js")
let {readfolder}=require("./organiser.js")
let folder_to_be_organised="files"

//create folder 
fs.mkdir("./oragnised_folder",err=>{
    if(err){
        console.log("already created");
        organize(folder_to_be_organised)
    }else{
        organize(folder_to_be_organised)
    }
})

//call the object making folder for file showing
function organize(loc){
    Object.keys(ext).forEach(type=>{
        console.log(type);
        try {
            fs.mkdirSync(`./oragnised_folder/${type}`)
            console.log("folder created");
        } catch (err) {
            console.log("already created");
        }
    })

    readfolder(__dirname+"/"+loc)


    //here we have make a file where report is made
    fs.writeFileSync("./report.txt",JSON.stringify(ext))
}


