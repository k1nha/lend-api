import { Request, Response } from 'express';
import { PrismaOrderRepository } from '../repositories/prisma/PrismaOrder.repository';
import prisma from '../../infra/db/prisma';

const PrismaOrder = new PrismaOrderRepository(prisma);

export class OrderCategory {
  async findAll(req: Request, res: Response) {
    try {
      const rep = await PrismaOrder.findAll();
      return res.status(200).json(rep);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async create(req: Request, res: Response) {}

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}
