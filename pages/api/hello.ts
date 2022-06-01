import type { NextApiRequest, NextApiResponse } from "next";

import { em } from "../../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stateCount = await em.findAndCount("State", {});
  console.log({ stateCount });

  res.status(200).json({ stateCount });
}
