import { setTokenInAxiosInstance } from '@/api/axios'
import { PATH } from '@/constants/path'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

interface WrappedComponentProps {
  token?: string
}

type ComponentType = (props?: any) => JSX.Element
export const withAuth = (WrappedComponent: ComponentType) => {
  const Component = ({ token, ...props }: WrappedComponentProps) => {
    if (token) {
      setTokenInAxiosInstance({ accessToken: token })
    }
    return <WrappedComponent {...props} />
  }

  return Component
}

type GetServerSidePropsCallback = (
  context: GetServerSidePropsContext,
) => InferGetServerSidePropsType<any>
export const withAuthGetServerSideProps =
  (callback?: GetServerSidePropsCallback) =>
  async (context: GetServerSidePropsContext) => {
    const gsspRes = await callback?.(context)
    const isServer = !!context?.req
    let token = ''
    if (isServer) {
      if (context.req?.headers?.authorization) {
        token = context.req.headers.authorization
      } else {
        return {
          redirect: {
            destination: PATH.login,
            permanent: false,
          },
        }
      }
    }

    return {
      ...gsspRes,
      props: {
        ...gsspRes?.props,
        token,
      },
    }
  }
