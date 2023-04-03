import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = {
    name: "Harry Potter",
    school: "Hogwards",
  };
  return NextResponse.json(data);
}
