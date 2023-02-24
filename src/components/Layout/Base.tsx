import { PropsWithChildren } from 'react'

export default function BaseLayout({ children }: PropsWithChildren) {
  return <div className="inner">{children}</div>
}
