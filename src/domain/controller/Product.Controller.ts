import prisma from '../../infra/db/prisma';
import { Response, Request } from 'express';
import { PrismaProductRepository } from '../repositories/prisma/PrismaProduct.repository';

const PrismaProduct = new PrismaProductRepository(prisma);

export class ProductController {
  async create(req: Request, res: Response) {
    try {
      const body = req.body;

      const rep = await PrismaProduct.create(body);

      return res.status(200).json({
        data: {
          message: 'Product created successfully',
        },
      });
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const rep = await PrismaProduct.findAll();

      return res.status(200).json(rep);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const rep = await PrismaProduct.delete(id);

      return res.status(200).json(rep);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const body = req.body;
      const id = req.params.id;

      const rep = await PrismaProduct.update(id, body);

      return res.status(200).json(rep);
    } catch (e) {
      return res.status(400).send(e);
    }
  }
}
