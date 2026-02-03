import { NextResponse } from "next/server";
import { success } from "zod";

export async function POST() {
  console.log("Hello from the server");

  return NextResponse.json({ success: true });
}
