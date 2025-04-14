import BookController from "../controllers/book.controller.js"
import {Router} from "express"

const router=Router()

router.route("/Book")
    .post(BookController.create)
    .get(BookController.ReadAll)

router.route("/Book/:id")
    .put(BookController.update)
    .delete(BookController.DeleteOne)

router.route("/Book/:id/details")
    .get(BookController.ReadOne)



export default router