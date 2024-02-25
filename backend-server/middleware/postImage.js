var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/posts/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split(".")[file.originalname.split(".").length - 1];
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + fileExtension);
  },
});

const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

var postImage = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limiting file size to 5 MB
  },
  fileFilter: fileFilter,
});

module.exports = postImage;
