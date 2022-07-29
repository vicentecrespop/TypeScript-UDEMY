import {Router, Request, Response} from 'express'
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from './controllers/movieControllers'

// validations
import {validate} from './middleware/handleValidation'
import { movieCreateValidation } from './middleware/movieValidation'

const router = Router()

router.get('/teste', (req, res) => {
    return res.status(200).send('Router está funcionando!')
})

router.post('/movie', movieCreateValidation(), validate, createMovie)

router.get('/movie/:id', findMovieById)

router.get('/movies', getAllMovies)

router.delete('/movie/:id', removeMovie)

router.patch('/movie/:id', movieCreateValidation(), validate, updateMovie)
export default router