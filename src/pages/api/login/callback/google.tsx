import { NextApiRequest, NextApiResponse } from 'next'
import qs from 'query-string'

import { authAPI } from '@/api'
import { BASE_URL } from '@/constants/urls'
import { PATH } from '@/constants/path'

export default async function OAuthGoogleLoginPage(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const code = req.query.code as string
  if (!code) return res.status(404)

  try {
    const { data } = await authAPI.loginCallback({ code })
    return res.redirect(
      BASE_URL + `${PATH.loginCallback}?${qs.stringify(data)}`,
    )
  } catch {
    return res.status(404)
  }
}
