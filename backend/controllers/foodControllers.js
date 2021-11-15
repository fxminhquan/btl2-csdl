import Food from '../models/Food.js'
import asyncHandler from 'express-async-handler'

const getAllFood = asyncHandler(async (req, res) => {
    const food = await Food.find()

    res.json(food)
})

export {
    getAllFood
}