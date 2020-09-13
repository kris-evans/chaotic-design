import React from 'react'
import Card from 'react-bootstrap/Card'

const UnderConstruction = () =>
  (
      <Card style={{ marginTop: 15}}>
        <Card.Body>
          <div style={{textAlign: 'center'}}>
            <div style={{ padding: 15 }}>
              <img src="https://media.giphy.com/media/H35u4OABcAESpAc8RD/giphy.gif" alt=""/>
            </div>
            <Card.Title style={{ padding: 15, marginLeft: 50}}>
              <h3>Under Construction</h3>
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
  )

export default UnderConstruction