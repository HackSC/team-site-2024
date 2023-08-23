import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const folderPath = path.join(process.cwd(), "/public/companies"); // Update this with the actual path to your folder.
    const files = fs.readdirSync(folderPath);
    return NextResponse.json(files);
  } catch (error) {
    console.error(error);
    return NextResponse.json([]);
  }
}
