import { Text, Code, Link, Button } from '@vercel/examples-ui'
import ConfigcatLayout from '@components/layout'
import useAmplitudeAboutEvents from '@lib/useAmplitudeAboutEvents'
import { useEffect } from 'react'

export default function About() {
  const { logVisited, logButtonClicked } = useAmplitudeAboutEvents()

  useEffect(() => {
    logVisited()
  }, [])

  return (
    <>
      <Text variant="h2" className="mb-6">
        About Variant
      </Text>
      <Text className="text-lg mb-4">
        You&apos;re currently looking at the variant of the about page under{' '}
        <Code>pages/about/b.tsx</Code>
      </Text>
      <Button onClick={logButtonClicked}>Click Me check Amplitude event - variant B</Button>
      <Link href="/">Go back to /</Link>
    </>
  )
}

About.Layout = ConfigcatLayout
