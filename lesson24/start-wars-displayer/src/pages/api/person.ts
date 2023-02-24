// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Person = {
  name: string;
  height: number;
  mass: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Person>
) {
  try {
    const response = await fetch("https://swapi.dev/api/people/1");
    const json = (await response.json()) as Person;

    res.status(200).json(json);
  } catch (err) {
    console.log("Error!", err);
  }
}
