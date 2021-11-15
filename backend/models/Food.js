import mongoose from 'mongoose'

const foodSchema = mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number },
    img: { type: String },
    type: { type: String },
    amount: { type: Number }
})

const Food = mongoose.model('Food', foodSchema)
export default Food