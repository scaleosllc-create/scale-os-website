import { NextRequest, NextResponse } from "next/server";
import { validateForm, FormData } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();
    const errors = validateForm(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // TODO: Send email via Resend, store in DB, or forward to webhook
    // For now, just log and return success
    console.log("New application received:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
