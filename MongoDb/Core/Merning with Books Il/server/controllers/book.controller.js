import Book from "../models/book.model.js"

const BookController={
    create: async(req,res)=>{
        try{
            const newBook=await Book.create(req.body)
            res.json(newBook)
        }catch(err){
            console.log(err)
            res.status(400).json(err)
        }
    },
    ReadAll:async(req,res)=>{
        try{
            const allBooks=await Book.find()
            res.json(allBooks)
        }catch(err){
            console.log(err)
            res.status(400).json(err)
        }
    },
    ReadOne: async (req, res) => {
        try {
            const OneBook = await Book.findById(req.params.id)
            res.json(OneBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    update: async (req, res) => {
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updatedBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    DeleteOne: async (req, res) => {
        try {
            const OneBook = await Book.findByIdAndDelete(req.params.id)
            res.json({ response: " ok " })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }
}

export default BookController