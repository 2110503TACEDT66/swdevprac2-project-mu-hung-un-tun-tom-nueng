import React from 'react';

export default async function createCompany({
  name,
  address,
  website,
  desc,
  tel,
  picture,
}: {
  name: string;
  address: string;
  website: string;
  desc: string;
  tel: string;
  picture?: string | null;
}) {
  const response = await fetch(
    'https://job-fair-frontend-but-backend.vercel.app/company',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        address: address,
        website: website,
        desc: desc,
        tel: tel,
        picture: picture,
      }),
    }
  );
  if (!response.ok) {
    throw new Error('Creating company failed');
  }
  return response.json();
}
