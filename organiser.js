
const fs = require("fs");
const ext = require("./ext");
const path=require("path")

//read the file in the given loc


//check weather filr or folder
function isfolder(path_string) {
    return fs.lstatSync(path_string).isDirectory()
}

//increasing count according to the extension and increaseing count
function getitorganised(loc){
    let extinsions=path.extname(loc).split(".")[1]
    let filename=path.basename(loc)
    console.log(filename);
    if(ext.audio.extensions.includes(extinsions)){
        fs.copyFileSync(loc,`./oragnised_folder/audio/${filename}`)
        ext.audio.count++
    }else if(ext.document.extensions.includes(extinsions)){
        fs.copyFileSync(loc,`./oragnised_folder/document/${filename}`)
        ext.document.count++
    }else if(ext.videos.extensions.includes(extinsions)){
        fs.copyFileSync(loc,`./oragnised_folder/videos/${filename}`)
        ext.videos.count++
    }else{
        fs.copyFileSync(loc,`./oragnised_folder/others/${filename}`)
        ext.others.count++
    }
}

//read the folder and extinsions
function readfolder(loc) {
    
    //if it is a folder then call function again
    let files = fs.readdirSync(loc)
    files.forEach(file => {
        if (isfolder(loc + "/" + file)) {
            readfolder(loc + "/" + file)
        } else {
            // console.log(loc + "/" + file);
            getitorganised(loc + "/" + file)
        }
    });
}

// readfolder(__dirname + "/" + "files")

module.exports={readfolder}
    