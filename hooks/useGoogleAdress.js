import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGoogleAddress = address => {
  const [map, setMap] = useState({})
  const api = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC6wUTBrPetTiAsK_z1ziBq5gcsIx-j4gs`

  useEffect(async () => {
    const response = await axios(api)
    console.log(response)
    setMap(response.data.results[0].geometry.location)
  }, [])
  return map
}
