import { NextApiRequest, NextApiResponse } from "next";
import * as process from "process";

async function fetchUser(username: string) {
  const headers = new Headers();
  headers.set("Accept", "application/vnd.github+json");
  headers.set("Authorization", `Bearer ${process.env.GITHUB_TOKEN}`);
  headers.set("X-GitHub-Api-Version", "2022-11-28");

  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers,
  });
  return res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { username } = req.query;
    const un = Array.isArray(username) ? username[0] : username;
    const user = await fetchUser(un || "");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
