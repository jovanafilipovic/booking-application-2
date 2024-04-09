import React from 'react'
import { SportDropdown } from './SportDropdown.tsx'
import { LocationDropdown } from './LocationDropdown.tsx'
import { Card } from './Card.tsx'
import '../homepage.css'
import { Button } from 'rsuite'

export const HomePage = () => {
  return (
    <div className='homepage'>
        <div className='dropdowns-section'>
            <SportDropdown />
            <LocationDropdown />
            <Button appearance="primary">Uloguj se</Button>
        </div>
        <div className='cards-section'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}
