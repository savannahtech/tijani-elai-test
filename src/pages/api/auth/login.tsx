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
  const { email, enteredPassword } = req.body;

  // const session = await getSession({ req });
  // const result = await prisma.post.create({
  //   data: {
  //     title: title,
  //     content: content,
  //     author: { connect: { email: req?.body.email } },
  //   },
  // });
  // res.json(result);

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return null;
  }

  // find if user password match
  const match = await compare(enteredPassword, user.dbPassword);

  if (!match) {
    return null;
  }

  return user;
}
