import { gigSchema } from "./interfaces";

// CREATE Gig

export async function createGig(gigName: gigSchema) {
  const response = await fetch("/api/gig/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gigName),
  });
  const data = await response.json()
  return data
}

// createGig({name: 'test'})
