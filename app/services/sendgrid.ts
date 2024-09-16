/**
 * Adds user email to Sendgrid mailing list
 * @param email user's email
 * @returns results from the Sendgrid API
 */
export const saveContactToList = async (email: string) => {
  const res = await fetch("/api/mailing-list", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email }),
  });
  const json = await res.json();
  return json;
};
