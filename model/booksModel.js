import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    'title': {
        type: String,
        unique: true,
        required: true
    },
    'author': {
        type: String,
        
        required: true
    },
    'isbn': {
        type: String,
        
        required: true
    },
    'pub_year': {
        type: Number,
        
        required: true
    },
    'fav': {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


const booksModel = mongoose.model('Books', booksSchema)
export default booksModel;