import { NextResponse } from "next/server";

const data = [
  { name: "Astana", country: "KZ" },
  { name: "Dublin", country: "IE" },
  { name: "Tel-Aviv", country: "IZ" },
];

export async function GET(request: Request) {
  return NextResponse.json(data);
}
