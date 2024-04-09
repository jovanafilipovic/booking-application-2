import React from 'react'
import { Panel } from 'rsuite'
import '../styles.css';
import '../homepage.css'


export const Card = () => {
  return (
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 }}>
        <span className='sport-object-name'>Naziv objekta</span>
        <img src="https://via.placeholder.com/240x240" height="240" width="300" alt='' />
        <Panel header="RSUITE">
            <p>
                <small>
                A suite of React components, sensible UI design, and a friendly development experience.
                </small>
            </p>
        </Panel>
  </Panel>
  )
}
