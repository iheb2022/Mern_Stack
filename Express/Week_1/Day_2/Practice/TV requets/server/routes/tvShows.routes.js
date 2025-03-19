import { Router } from 'express';
import tvShowsController from '../controllers/tvShows.controller.js';

const router = Router();

router.route('/tvShows')
    .get(tvShowsController.ReadAll)
    .post(tvShowsController.create);

router.route('/tvShows/:year')
    .get(tvShowsController.ReadYear);

router.route('/tvShows/:title')
    .delete(tvShowsController.delete)
    .patch(tvShowsController.update);

export default router;
