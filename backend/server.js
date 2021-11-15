import express from 'express'
import foodRoute from './routes/foodRoutes.js'
import connectDB from './config/db.js'

const app = express()

connectDB()

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

app.use('/api/food', foodRoute)
app.use('/', (req, res, next) => {
    res.send('Hi!!!')
})

app.use(notFound)
app.use(errorHandler)


app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000')
})