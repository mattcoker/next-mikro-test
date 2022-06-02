import type { NextApiRequest, NextApiResponse } from "next";

import { getEM } from "../../db";
import { User } from "../../db/entities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await getEM().find(User, {});

  res.status(200).json({ users });
}
