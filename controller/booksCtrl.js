import mongoose from "mongoose"
import { setError } from "../middleware/setError.js"
import Books from "../model/booksModel.js"
import { validate } from "../utils/validate.js"

export const getBooks = async (req, res, next) => {
    try {
        const books = await Books.find({})
        res.status(200).json({ success: true, books: books })
    } catch (error) {
        next(error)
    }
}
export const postBook = async (req, res, next) => {
    try {

        const { valid, error } = await validate(req.body)

        if (valid) {
            const { title, author, isbn, pub_year } = req.body
            const newBook = await Books.create({ title, author, isbn, pub_year })
            if (newBook) {
                res.status(201).json({ success: true, books: 'New book recorded' })
            }

        }

        else {

            return next(setError(error, 400))
        }
    } catch (error) {
        next(error)
    }

}
export const editBook = async (req, res, next) => {
    try {
        const { title, author, isbn, pub_year } = req.body
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return next(setError('Invalid ID', 401))
        }
        const book1 = await Books.findById(req.params.id)

        if (!book1) {
            return next(setError('No book found with this ID', 401))
        }
        const book = await Books.findOne({ title: title })

        if (book) {
            return next(setError('Book exist with this title', 401))
        }
        const editedBook = await Books.findByIdAndUpdate(req.params.id, { title, author, isbn, pub_year }, { new: true })
        if (editedBook) {
            return res.status(201).json({ success: true, books: 'Book edited' })
        }
    } catch (error) {
        next(error)
    }
}
export const deleteBook = async (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return next(setError('Invalid ID', 401))
    }
    const book1 = await Books.findById(req.params.id)

    if (!book1) {
        return next(setError('No book found with this ID', 401))
    }
    await book1.deleteOne()
    return res.status(201).json({ success: true, books: 'Book deleted' })
}
export const recommBooks = async (req, res, next) => {
    try {
        const books = await Books.find({})
        let len = books.length
        console.log(`len: ${len}`)
        let num = Math.floor(Math.random()*len)
        console.log(`ran: ${num}`)
        res.status(200).json({ success: true, recommBook: books[num] })
    } catch (error) {
        next(error)
    }
}
export const favBook = async (req, res, next) => {
    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return next(setError('Invalid ID', 401))
        }
        const book1 = await Books.findById(req.params.id)

        if (!book1) {
            return next(setError('No book found with this ID', 401))
        }
        if (book1.fav == true) {
            return next(setError('Already favorited', 401))
        }

        const editedBook = await Books.findByIdAndUpdate(req.params.id, { fav: true }, { new: true })
        if (editedBook) {
            return res.status(201).json({ success: true, books: 'Book favorited' })
        }
    } catch (error) {
        next(error)
    }
}
export const unfavBook = async (req, res, next) => {
    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return next(setError('Invalid ID', 401))
        }
        const book1 = await Books.findById(req.params.id)

        if (!book1) {
            return next(setError('No book found with this ID', 401))
        }

        if (book1.fav == false) {
            return next(setError('Already unfavorited', 401))
        }
        const editedBook = await Books.findByIdAndUpdate(req.params.id, { fav: false }, { new: true })
        if (editedBook) {
            return res.status(201).json({ success: true, books: 'Book unfavorited' })
        }
    } catch (error) {
        next(error)
    }
}
export const getfavBooks = async (req, res, next) => {
    try {
        const books = await Books.find({ fav: true })
        res.status(200).json({ success: true, favBooks: books })
    } catch (error) {
        next(error)
    }
}