import { Text, Link, Button } from '@vercel/examples-ui'
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
        About page
      </Text>
      <Text className="text-lg mb-4">This is the original about page</Text>
      <Text className="mb-4">
        You&apos;re currently on <b>/about</b>
      </Text>
      <Button onClick={logButtonClicked}>Click Me check Amplitude event</Button>
      <Link href="/">Go back to /</Link>
    </>
  )
}

About.Layout = ConfigcatLayout
