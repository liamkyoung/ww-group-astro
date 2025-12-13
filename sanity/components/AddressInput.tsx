// components/AddressInput.tsx
import React, {useEffect, useState, useCallback} from 'react'
import type {ObjectInputProps} from 'sanity'
import {set} from 'sanity'

const API_KEY = 'AIzaSyBOy1x6ivH-pBi3zVDK_jZWmo9cqwrD8dA'
// ^ In real life, move this to SANITY_STUDIO_GOOGLE_MAPS_KEY env var

// ---------- Helpers ----------

type LocationValue = {
  address?: string
  streetAddress?: string
  neighborhood?: string
  city?: string
  county?: string
  state?: string
  zipCode?: string
  latitude?: number
  longitude?: number
}

type GeocoderResult = google.maps.GeocoderResult

// Simple hook to load Google Maps JS once
function useLoadGoogleMaps(apiKey: string | undefined) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!apiKey) return
    if (typeof window === 'undefined') return

    if ((window as any).google?.maps) {
      setLoaded(true)
      return
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-sanity-google-maps="true"]',
    )
    if (existing) {
      existing.addEventListener('load', () => setLoaded(true))
      return
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
    script.async = true
    script.dataset.sanityGoogleMaps = 'true'
    script.onload = () => setLoaded(true)
    document.head.appendChild(script)
  }, [apiKey])

  return loaded
}

// ---------- Custom Input ----------

export function AddressInput(props: ObjectInputProps<LocationValue>) {
  const {value, onChange, schemaType, readOnly} = props

  const [query, setQuery] = useState(value?.address || '')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [results, setResults] = useState<GeocoderResult[]>([])
  const mapsLoaded = useLoadGoogleMaps(API_KEY)

  const DEBOUNCE_MS = 500

  // Keep input in sync if value.address changes outside this component
  useEffect(() => {
    setQuery(value?.address || '')
  }, [value?.address])

  // Debounce user input
  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS)
    return () => clearTimeout(id)
  }, [query])

  // Call Geocoder when debounced query changes
  useEffect(() => {
    if (!mapsLoaded || !debouncedQuery) {
      setResults([])
      return
    }

    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({address: debouncedQuery}, (res, status) => {
      if (status === 'OK' && res) {
        setResults(res)
      } else {
        setResults([])
      }
    })
  }, [mapsLoaded, debouncedQuery])

  const handleSelectAddress = useCallback(
    (addr: GeocoderResult) => {
      const parts = addr.address_components

      const get = (type: string) => parts.find((p) => p.types.includes(type))?.long_name ?? ''

      const streetNumber = get('street_number')
      const route = get('route')
      const streetAddress =
        streetNumber && route ? `${streetNumber} ${route}` : value?.streetAddress

      const neighborhood = get('neighborhood') || value?.neighborhood
      const city = get('locality') || get('postal_town') || value?.city
      const county = get('administrative_area_level_2') || value?.county
      const state = get('administrative_area_level_1') || value?.state
      const zip = get('postal_code') || value?.zipCode

      const lat = addr.geometry.location.lat()
      const lng = addr.geometry.location.lng()

      const next: LocationValue = {
        ...(value || {}),
        address: addr.formatted_address,
        streetAddress,
        neighborhood,
        city,
        county,
        state,
        zipCode: zip,
        latitude: lat,
        longitude: lng,
      }

      onChange(set(next))
      setQuery(addr.formatted_address)
      setResults([])
    },
    [onChange, value],
  )

  const handleClear = useCallback(() => {
    const cleared: LocationValue = {
      address: '',
      streetAddress: '',
      neighborhood: '',
      city: '',
      county: '',
      state: '',
      zipCode: '',
      latitude: undefined,
      longitude: undefined,
    }

    onChange(set(cleared))
    setQuery('')
    setResults([])
  }, [onChange])

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
      {value?.address ? (
        <div
          style={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <span>Address Selected: {value.address}</span>
          {!readOnly && (
            <button
              type="button"
              onClick={handleClear}
              style={{
                border: 'none',
                background: 'transparent',
                color: 'red',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Clear
            </button>
          )}
        </div>
      ) : (
        <div style={{fontWeight: 'bold'}}>Search for an address below…</div>
      )}

      <input
        type="text"
        disabled={readOnly}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="123 Main St, Tampa, FL"
        style={{padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc'}}
      />

      {!mapsLoaded && <div style={{fontSize: '0.85rem', color: '#777'}}>Loading Google Maps…</div>}

      {results.length > 0 && (
        <div
          style={{
            marginTop: '0.5rem',
            borderRadius: 4,
            border: '1px solid #ddd',
            maxHeight: 240,
            overflowY: 'auto',
          }}
        >
          {results.map((r) => (
            <div
              key={r.place_id}
              onClick={() => handleSelectAddress(r)}
              style={{
                padding: '0.5rem 0.75rem',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
            >
              {r.formatted_address}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
