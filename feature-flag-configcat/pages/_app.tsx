import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'
import useAmplitudeInit from '@lib/useAmplitudeInit'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)
  // Amplitude init
  useAmplitudeInit()

  return (
    <Layout
      title="AB testing with ConfigCat"
      path="feature-flag-configcat"
      deployButton={{ env: ['NEXT_PUBLIC_CONFIGCAT_SDK_KEY'] }}
    >
      <Component {...pageProps} />
    </Layout>
  )
}
