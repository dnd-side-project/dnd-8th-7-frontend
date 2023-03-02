export const BASE_URL = process.env.NEXT_PUBLIC_APP_URL
export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export const S3_URL = process.env.NEXT_PUBLIC_S3_URL

export const DOCS_URL = {
  termsOfUse: BASE_URL + '/doc/policy_of_use.html',
  privacyPolicy: BASE_URL + '/doc/privacy_policy.html',
}

export const DEFAULT_PROFILE_IMAGE_URL =
  S3_URL + 'onboarding/default_profile_image.png'
