import Books from "../model/booksModel.js"
export const validate = async (data) => {
    let error = []

    if (!data?.title) {
        error.push('Title is required')
    }
    const book = await Books.findOne({ title: data.title })
   
    if (book) {
        error.push('This Book is already exist')
    }
    if (!data?.pub_year) {
        error.push('Published year is required')
    } if (!data?.isbn) {
        error.push('ISBN is required')
    } if (!data?.author) {
        error.push('Author is required')
    }
    if (isNaN(data?.pub_year)){
        error.push('Year must be a number')
    }
    if (!/^[0-9- ^w]+$/.test(data?.isbn)) {
        error.push('Invalid ISBN')
    }
    if (error.length == 0) {
        return { valid: true }
    }

    else {

        return { valid: false, error: error }
    }
}