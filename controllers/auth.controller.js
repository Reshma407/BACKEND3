// controllers/auth.controller.js  (ESM)

let books = [
  { id: 1, title: "Book One", author: "Author A" },
  { id: 2, title: "Book Two", author: "Author B" },
];

export const createBook = (req, res) => {
  try {
    const { title, author } = req.body || {};
    if (!title || !author) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    return res.status(201).json(newBook);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getBook = (_req, res) => {
  return res.status(200).json(books);
};

export const getBookById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const book = books.find((b) => b.id === id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  return res.json(book);
};

export const updateBook = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const book = books.find((b) => b.id === id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  const { title, author } = req.body || {};
  if (!title || !author) {
    return res.status(400).json({ message: "All fields are required" });
  }
  book.title = title;
  book.author = author;
  return res.json(book);
};

export const deleteBook = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const exists = books.some((b) => b.id === id);
  if (!exists) return res.status(404).json({ message: "Book not found" });

  books = books.filter((b) => b.id !== id);
  return res.json({ message: "Book deleted" });
};
