import { NextResponse } from "next/server";

const MAILERLITE_API_URL = "https://connect.mailerlite.com/api/subscribers";
const MAILERLITE_GROUP_ID = "181388364324275286";
const MAILERLITE_API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNGMwMWNhYTg0MDk5Y2FkZGI2ODNmOGVkYzY5MzA0NDAwZDEyZjEzYjEzODczOGQyNjcxMGRjN2Q5ZjU1ODZlYTdkNjc4MjgzMmVjNzU2MDIiLCJpYXQiOjE3NzI5ODUzMTYuNTA0NDMzLCJuYmYiOjE3NzI5ODUzMTYuNTA0NDM2LCJleHAiOjQ5Mjg2NTg5MTYuNDk2MTQzLCJzdWIiOiIyMTkxMzI1Iiwic2NvcGVzIjpbXX0.k2gvaQj_Dz3luiTMSoch6YQmYw9CKzvdRw5I75rOHKmJ5v6Ux1zn7ykQWXw4krWFdE7rEB-KaPpP7RYhI9UbzARLAPn_YGhDYqUYdnnVMcotxmWgBO_-5J5VABvYEZqgByIEaLN0f-14Mq3jNanNhnE_NBaiZ6mWPtneLCAsaDugQgsDtIEJHAoUDpKlVvYnqMtqdxzCRDPiiwAA6u8oZug8u2wm_tyQBdMgdoV3zTNahHFJUu2o46xG2DOlCBZ-FcdqiXcxiwCmS_wf5EWBfpBVunGj_eBUTPgVsUB6wNfdWjLDh5xhRMI4xgNtsuqKykg1YR6c8zXL9CLjoOI2kaCAw37TVZmZ2zFVQP3szyW2IhLtaBxphVMLEJgfmvzQRhm3_gSdfvyK_fRK6V5K0Fdb0GRPVF_zpvyNM24RbZn5IFKL2LO5j4yz_kkXXZqB_JVbAw5pKQcmMZKA1vobbkImwIOC05ftZ94BujGWonwuVrWduddUM6wiuIIZS-7FKZnxF6TXR1C4adcPIrGKPpnJfjYLaEI5GASoHmWnbvp_kXSgH1AYs8NjJQnR3eJIO-dHRO8s6u42lZ8YxUHC4jZVH18iXLd58zuSs8RrJ_5z19gr9r32esyLutX2bzr0a-v--GwD9C-5NR5H4ricmOs_3TaNSdus2st1XOpr0hg";

export async function POST(request: Request) {
  try {
    const { name, email, role, challenge, volume } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const body: Record<string, unknown> = {
      email,
      fields: {
        name: name || "",
        role: role || "",
        challenge: challenge || "",
        volume: volume || "",
      },
      groups: [MAILERLITE_GROUP_ID],
    };

    const response = await fetch(MAILERLITE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("MailerLite API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: response.status >= 500 ? 502 : 422 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist signup error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
