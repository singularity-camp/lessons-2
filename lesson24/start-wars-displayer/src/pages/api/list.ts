// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Person = {
  name: string;
  height: number;
  mass: number;
};

type Data = {
  count: number;
  results: Person[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    const json = (await response.json()) as Data;

    res.status(200).json(json);
  } catch (err) {
    console.log("Error!", err);
  }
}
