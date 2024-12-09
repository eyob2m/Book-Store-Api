
# InterTechHub Stage 2: Backend Task - Book Store API

## 📚 Description  
This project is a backend task provided by **InterTech Hub** as part of Stage 2. It is a simple API built with **Express.js** to manage a book store.

---

## 🚀 Installation Instructions  
Follow these steps to set up the project in your development environment:

1. **Install all dependencies:**  
   ```bash
   npm install
   ```

2. **Start the server locally:**  
   ```bash
   node index.js
   ```

---

## 🛠️ Features  

### **API Endpoints**
| Method   | Endpoint                    | Description                                   |
|----------|-----------------------------|-----------------------------------------------|
| `GET`    | `/books`                    | Retrieve all books from the store.           |
| `POST`   | `/books`                    | Add a new book to the store.                 |
| `PUT`    | `/books/:id`                | Edit book information by ID.                 |
| `DELETE` | `/books/:id`                | Delete a book by ID.                         |
| `PUT`    | `/books/fav/:id`            | Add a book to favorites by ID.               |
| `PUT`    | `/books/unfav/:id`          | Remove a book from favorites by ID.          |
| `GET`    | `/books/fav`                | Retrieve all favorite books.                 |
| `GET`    | `/books/recommendation`     | Get a random book as a recommendation.       |

> Note : all endpoints with prefix `/api/` like `{host}:{port}/api/{endpoint}`
>

## Stage 3 Updates
- user login and sign up at /api/auth/login and /api/auth/signup
- /api/books -> Only can accessd by admin
- User need to be autorized to access all routes


> EXample: to get all books use `GET` method to `https://book-store-api-a3gy.onrender.com/api/books`
### **Request/Response Examples:**

#### Add a new book:
**POST** `/books`  
Request body:
```json
{
    "title": "Title ",
    "author": "Mr author",
    "isbn": "9780743273565",
    "pub_year": 1925
}
```
Response:
```json
{
    "success": true,
    "books": "New book recorded"
}
```

#### Edit book information:
**PUT** `/books/:id`  
Request body:
```json
{
    "title": "Title",
    "author": "Ms author",
    "isbn": "9780743273565",
    "pub_year": 1926
}
```
Response:
```json
{
    "success": true,
    "books": "Book updated successfully"
}
```

#### Retrieve all books:
**GET** `/books`  
Response:
```json
[
    {
        "id": "1",
        "title": "Title",
        "author": "Mr author",
        "isbn": "9780743273565",
        "pub_year": 1925
    },
    {
        "id": "2",
        "title": "1984",
        "author": "Ms author",
        "isbn": "9780451524935",
        "pub_year": 1949
    }
]
```

---

### **Schema**  

```javascript
const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    pub_year: {
        type: Number,
        required: true,
    },
});

```

---

## 📞 Contact  
If you need help or have recommendations, feel free to reach out:  
[Telegram: eyob2m](https://t.me/eyob2m)
