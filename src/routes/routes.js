const express = require("express")
const router = express.Router()
const booksController = require("../controllers/booksController")

router.get("/api", (req, res) => res.send({ status: "API ready" }))
router.get("/api/books", async (req, res) => booksController.all(req, res))
router.get("/api/books/:id", async (req, res) => booksController.find(req, res))
router.get("/api/books/isbn/:isbn", async (req, res) =>
  booksController.findByIsbn(req, res)
)
router.post("/api/books", async (req, res) =>
  booksController.create(req, res, req.body, req.files[0])
)
router.put("/api/books/:id", async (req, res) =>
  booksController.update(req, res, req.body, req.files[0])
)
router.delete("/api/books/:id", async (req, res) =>
  booksController.delete(req, res)
)

module.exports = router
