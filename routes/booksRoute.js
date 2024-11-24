import express from 'express'
import { deleteBook, editBook,favBook, getfavBooks, getBooks, postBook, recommBooks, unfavBook } from '../controller/booksCtrl.js'
const router = express.Router()

router.get('/', getBooks)
router.post('/',postBook)
router.put('/:id',editBook)
router.delete('/:id',deleteBook)
router.get('/recommendation',recommBooks)
router.put('/fav/:id',favBook)
router.put('/unfav/:id',unfavBook)
router.get('/fav',getfavBooks)


export default router;
