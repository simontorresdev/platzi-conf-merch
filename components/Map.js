import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export const Map = ({ data }) => {
  const MapStyles = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyB_xnetjXPXS0OJG-6K6d2Kg7KKfN892BQ'>
      <GoogleMap
        mapContainerStyle={MapStyles}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}
