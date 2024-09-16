const SENDGRID_BASE_URL = "https://api.sendgrid.com/v3";

/**
 * Adds user email to Sendgrid mailing list
 * @param email user's email
 * @returns results from the Sendgrid API
 */
export async function POST(request: Request) {
  const { email } = await request.json();

  const res = await fetch(`${SENDGRID_BASE_URL}/marketing/contacts`, {
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify({
      list_ids: [process.env.SENDGRID_CONTACTS_LIST_ID],
      contacts: [{ email }],
    }),
  });

  return res;
}
