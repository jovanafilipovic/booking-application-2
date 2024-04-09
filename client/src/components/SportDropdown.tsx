import React from 'react'
import { Dropdown } from 'rsuite';

export const SportDropdown = () => {
  return (
    <Dropdown title="Sport">
      <Dropdown.Item>Fudbal</Dropdown.Item>
      <Dropdown.Item>Mali fudbal</Dropdown.Item>
      <Dropdown.Item>Košarka</Dropdown.Item>
      <Dropdown.Item>Odbojka</Dropdown.Item>
      <Dropdown.Item>Tenis</Dropdown.Item>
  </Dropdown>
  )
}
