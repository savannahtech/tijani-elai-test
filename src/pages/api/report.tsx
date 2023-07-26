import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

// POST /api/report
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { banner_title } = req.body;
    const isExist = await prisma.report.findUnique({ where: { banner_title } });

    if (!isExist) {
      const user = await prisma.report.create({
        data: { ...req.body, count: 1 },
      });
      console.log('saved', user);
      if (!user) {
        return res.status(200).json({
          success: false,
          message: 'Error saving report',
        });
      }
    } else {
      await prisma.report.update({
        where: { banner_title },
        data: { count: { increment: 1 } },
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Report saved',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error, try again later',
    });
  }
}
