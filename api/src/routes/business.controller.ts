import { Request, Response } from 'express';
import { Router } from 'express';

class BusinessController {
  all(_: Request, res: Response): void {
    res.json();
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    res.json(id);
  }

  create(req: Request, res: Response): void {
    const newBusiness = req.body;
    res.json(newBusiness);
  }
}

const businessController = new BusinessController();
const businessRouter = Router()
  .post('/', businessController.create)
  .get('/', businessController.all)
  .get('/:id', businessController.byId);

export default businessRouter;
