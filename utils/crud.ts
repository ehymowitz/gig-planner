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
  const data = await response.json();
  return data.name;
}

// createGig({name: 'test'})

export async function gigLogin(gigName: gigSchema) {
  const response = await fetch("/api/gig/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const loggedInAs = data[data.indexOf(gigName.name)];
  return loggedInAs;
}

// gigLogin({name: 'test'})
