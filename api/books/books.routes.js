const express = require("express");
const upload = require("../../middlewears/multer");
const router = express.Router();
const {
  booksGet,
  booksUpdate,
  booksDelete,
  booksCreate,
  booksGetOne,
} = require("./books.controllers");

router.get("/", booksGet);
router.get("/:id", booksGetOne);

router.post("/", upload.single("image"), booksCreate);

router.delete("/:id", booksDelete);

router.put("/:id", booksUpdate);

module.exports = router;
