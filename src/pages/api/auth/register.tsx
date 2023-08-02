import type { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';
import prisma from '../../../lib/prisma';

// POST /api/auth/login
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password: enteredPassword, firstName, lastName } = req.body;
  try {
    if (!email) {
      return res.status(200).json({
        success: false,
        message: 'Email is required',
      });
    }
    if (!enteredPassword) {
      return res.status(200).json({
        success: false,
        message: 'Email is required',
      });
    }

    if (!firstName || !lastName) {
      return res.status(200).json({
        success: false,
        message: 'First name and Last name is required',
      });
    }

    // hash password
    const hashedPassword = await hash(enteredPassword, 10);

    const user = await prisma.user.create({
      data: { ...req.body, password: hashedPassword },
    });
    if (!user) {
      return res.status(200).json({
        success: false,
        message: 'Error creating a user',
      });
    }

    return res.status(201).json({
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
