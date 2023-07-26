import type { NextApiRequest, NextApiResponse } from 'next';
import { compare } from 'bcrypt';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  // const session = await getSession({ req });
  // const result = await prisma.post.create({
  //   data: {
  //     title: title,
  //     content: content,
  //     author: { connect: { email: req?.body.email } },
  //   },
  // });
  // res.json(result);
  console.log(prisma.user);
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    console.log('found', user);
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
