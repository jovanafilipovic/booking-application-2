import React from 'react'
import { Dropdown } from 'rsuite';

export const LocationDropdown = () => {
  return (
    <Dropdown title="Lokacija">
      <Dropdown.Item>Vračar</Dropdown.Item>
      <Dropdown.Item>Voždovac</Dropdown.Item>
      <Dropdown.Item>Zvezdara</Dropdown.Item>
      <Dropdown.Item>Stari Grad</Dropdown.Item>
      <Dropdown.Item>Palilula</Dropdown.Item>
      <Dropdown.Item>Čukarica</Dropdown.Item>
      <Dropdown.Item>Rakovica</Dropdown.Item>
  </Dropdown>
  )
}
