// const multer = require("multer");

// const storage=multer.diskStorage({
//     destination:function(req,res,cb){
//         cb(null,'/uploads');
//     },
//     filename:function(req,file,cb){
//         cb(null,Date.now()+ "-"+ file.originalname)
//     }
// })
// const image=multer({storage:storage}).single('image');

// module.exports=image;

const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create uploads folder if not exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const image = multer({ storage: storage }).single('image');

module.exports = image;
