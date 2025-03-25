import BookController from "../controllers/book.controller.js"
import {Router} from "express"

const router=Router()

router.route("/Book")
    .post(BookController.create)
    .get(BookController.ReadAll)

router.route("/Book/:id")
    .get(BookController.ReadOne)
    .put(BookController.update)
    .delete(BookController.DeleteOne)



export default router