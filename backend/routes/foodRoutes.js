import express from 'express'
const Router = express.Router()
import { getAllFood } from '../controllers/foodControllers.js'

Router.get('/', getAllFood)

export default Router