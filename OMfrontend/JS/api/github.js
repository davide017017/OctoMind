import { API_BASE_URL } from "../../config.js";

export async function fetchUserSummary(username) {
  const res = await fetch(`${API_BASE_URL}/users/${username}/summary`);

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message ?? "Unexpected error");
  }

  return res.json();
}
