// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = { runtime: 'edge' };

export default function handler(req, res) {
  return new Response(JSON.stringify([]));
}
