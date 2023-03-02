import { NextApiRequest, NextApiResponse } from 'next'

export default async function OAuthGoogleLoginPage(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const url = req.query.url as string
  if (!url) return res.status(404)

  return res.redirect(url)
}
