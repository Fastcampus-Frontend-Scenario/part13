import { useCallback } from "react"
import amplitude from 'amplitude-js'

import Cookies from "js-cookie"
const useAmplitudeAboutEvents = () => {
  const logVisited = useCallback(() => {
    const value = Cookies.get('flag-newAboutPage')
    const identity = new amplitude.Identify();
    identity.set('flag-newAboutPage', value === '1')

    amplitude.getInstance().identify(identity);
    amplitude.getInstance().logEvent('visited')
  }, [])

  const logButtonClicked = useCallback(() => {
    amplitude.getInstance().logEvent('button_clicked')
  }, [])
  return { logVisited, logButtonClicked }
}

export default useAmplitudeAboutEvents