import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    console.log(name, email);

    return NextResponse.json({ success: true, message: "Data Received" });
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request) {
  try {
    const users = [
      { name: "John Doe", email: "john@example.com" },
      { name: "Jane Smith", email: "jane@example.com" },
    ];

    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
  }
}
