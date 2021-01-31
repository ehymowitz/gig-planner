import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../utils/db";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connect();

    const collections = await db.listCollections().toArray();

    const gigNames = collections.map((collection) => collection.name);

    res.json(gigNames);
    res.status(201);
  } catch (e) {
    res.status(500);
    res.json({ error: "Couldn't Read" });
  }
}
