import type { NextApiRequest, NextApiResponse } from 'next';
import { compare } from 'bcrypt';
import prisma from '../../../lib/prisma';

// POST /api/auth/login
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(200).json({
        success: false,
        message: 'User not found',
      });
    }

    // find if user password match
    const match = await compare(password, user.password);

    if (!match) {
      return res.status(200).json({
        success: false,
        message: 'Incorrect credentials',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Successful',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error, try again later',
    });
  }
}
