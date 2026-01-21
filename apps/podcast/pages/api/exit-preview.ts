import { NextApiRequest, NextApiResponse } from "next";
import { exitPreview } from "@prismicio/next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return await exitPreview({ req, res });
}
