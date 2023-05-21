import { Request, Response } from 'express';
import prisma from '../../infra/db/prisma';
import PrismaEmployeeRepository from '../repositories/prisma/PrismaEmployee.repository';

const PrismaEmployee = new PrismaEmployeeRepository(prisma);

export class EmployeeController {
  async create(req: Request, res: Response) {
    try {
      const body = req.body;

      await PrismaEmployee.create(body);

      return res.status(201).json({
        data: {
          message: 'Employee created successfully',
        },
      });
    } catch (e) {
      res.status(400).send(e);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const rep = await PrismaEmployee.findAll();
      return res.status(200).json(rep);
    } catch (e) {
      res.status(400).send(e);
    }
  }
}
