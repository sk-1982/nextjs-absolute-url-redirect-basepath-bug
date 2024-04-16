'use server';

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export async function absoluteUrl() {
  const url = `http://${headers().get('host')}/web/test`
  console.log('server action: redirecting to absolute url', url);
  redirect(url);
}

export async function relativeUrl() {
  const url = `/test`
  console.log('server action: redirecting to relative url', url);
  redirect(url);
}
