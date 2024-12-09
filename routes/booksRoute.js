import express from 'express'
import { deleteBook, editBook,favBook, getfavBooks, getBooks, postBook, recommBooks, unfavBook } from '../controller/booksCtrl.js'
import { authenticate, isAdmin } from '../utils/auth.js'
const router = express.Router()

router.get('/',authenticate, isAdmin, getBooks)
router.post('/',authenticate,postBook)
router.put('/:id',authenticate,editBook)
router.delete('/:id',authenticate,deleteBook)
router.get('/recommendation',authenticate,recommBooks)
router.put('/fav/:id',authenticate,favBook)
router.put('/unfav/:id',authenticate,unfavBook)
router.get('/fav',authenticate,getfavBooks)


export default router;
