import { useEffect } from "react"
import amplitude from 'amplitude-js'


const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY ?? ''

const useAmplitudeInit = () => {
  useEffect(() => {
    amplitude.getInstance().init(AMPLITUDE_API_KEY)
  }, [])
}

export default useAmplitudeInit