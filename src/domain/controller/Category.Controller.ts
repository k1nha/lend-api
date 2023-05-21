import { Request, Response } from 'express';
import prisma from '../../infra/db/prisma';
import { PrismaCategoryRepository } from '../repositories/prisma';

const PrismaCategory = new PrismaCategoryRepository(prisma);

export class CategoryController {
  async findAll(req: Request, res: Response) {
    try {
      const rep = await PrismaCategory.findAll();
      return res.status(200).json(rep);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      await PrismaCategory.delete(id);

      return res.status(200).json({
        data: {
          message: 'Delete successfully',
        },
      });
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const body = req.body;

      await PrismaCategory.update(id, body);

      return res.status(200).json({
        data: {
          message: 'Update successfully',
        },
      });
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const body = req.body;

      await PrismaCategory.create(body);

      return res.status(200).json({
        data: {
          message: 'Category created successfully',
        },
      });
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}
