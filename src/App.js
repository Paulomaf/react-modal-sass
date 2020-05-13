import React, { useState } from 'react'
import Modal from './components/modal'
import './index.css'

function App() {

  const [ isModalVisible, setIsModalVisible ] = useState(false)

  return (
    <div className="App">
      <button onClick={ () => setIsModalVisible(true) }>Open</button>
      { isModalVisible ? (
        <Modal onClose={ () => setIsModalVisible(false) }>
          <h2>Modal do App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Fusce dictum pretium luctus. Donec ullamcorper arcu at ornare ornare. 
            Ut mauris purus, sollicitudin at sem non, mollis sodales mauris. 
            Nam nulla orci, blandit ut purus ac, posuere pellentesque enim. 
            Nulla semper, nisl eu tincidunt vehicula, nunc magna ornare elit, nec pharetra orci dolor id ligula. 
            Proin in nisl id metus consequat commodo. Nullam rutrum commodo leo. 
            Phasellus ex ante, mattis quis vulputate varius, feugiat nec mauris. 
            Vestibulum feugiat mi dolor, at euismod magna imperdiet quis. 
            Nulla faucibus fringilla risus, quis faucibus ligula elementum quis. 
            Sed ac fringilla mauris. Morbi rutrum a risus vitae finibus. 
            Donec ultricies odio tellus, id auctor purus volutpat non.
          </p>
        </Modal>
        ) : null }
    </div>
  )
}

export default App
