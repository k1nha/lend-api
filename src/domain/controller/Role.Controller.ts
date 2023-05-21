import { Request, Response } from 'express';
import { PrismaRoleRepository } from '../repositories/prisma';
import prisma from '../../infra/db/prisma';

const PrismaRole = new PrismaRoleRepository(prisma);

export class RoleController {
  async create(req: Request, res: Response) {
    try {
      const body = req.body;

      await PrismaRole.create(body);

      return res.status(200).json({
        data: {
          message: 'Role created successfully',
        },
      });
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const allRole = await PrismaRole.findAll();

      return res.status(200).json(allRole);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      await PrismaRole.delete(id);

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
      const body = req.body;
      const id = req.params.id;
      
      await PrismaRole.update(id, body);

      return res.status(200).json({
        data: {
          message: 'Updated successfully',
        },
      });
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}
