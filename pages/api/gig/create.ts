import connect from "../../../utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import gigModel from "../../../database/gig";

connect();

export default async function (req: NextApiRequest, res: NextApiResponse ) {
  try {
    const gig = new gigModel({name: 'test'});
    gig.save(function (err: any) {
      if (err) return console.log(err);
    });

    res.status(201).json({ success: true });

  } catch(e) {
    res.status(500)
    res.json({error: "Couldn't Create"})
  }
}
