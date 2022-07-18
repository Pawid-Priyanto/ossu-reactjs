import React, {useState} from 'react';
import './App.css'
const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  const handleClickLeft = () => {
    // cara 1
      // const newClicks = {
      //   left: clicks.left + 1,
      //   right: clicks.right
      // } 
      // setClicks(newClicks)
      
      /**cara 2 */
      // const newClicks = {
      //   ...clicks, left: clicks.left + 1
      // }
      // setClicks(newClicks)
      setClicks({...clicks, left: clicks.left + 1})
  }

  const handleClickRight = () => {
    // cara 1
    // const newClicks = {
    //   left: clicks.left,
    //   right: clicks.right + 1
    // }
    // setClicks(newClicks)

    /**cara 2 */
    // const newClicks = {
    //   ...clicks, right: clicks.right + 1
    // }
    // setClicks(newClicks)

    setClicks({...clicks, right: clicks.right + 1})
  }

  return(
    <div className="App-header">
      <div className='box-btn'>
      {clicks.left}
      <button className='btn-app' onClick={handleClickLeft}>
        left
      </button>
      <button className='btn-app' onClick={handleClickRight}>
        right
      </button>
      {clicks.right}
      </div>
    </div>
  )
}

export default App;