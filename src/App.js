import React, {useState} from 'react';
import './App.css'
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0
  // })
  const [allClicks, setAll] = useState([])

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
      // setClicks({...clicks, left: clicks.left + 1})
      // setAll(allClicks.concat('L'))
      allClicks.push('L')
      setLeft(left + 1)
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

    // setClicks({...clicks, right: clicks.right + 1})
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }

  // debugger

  return(
    <div className="App-header">
      <div className='box-btn'>
      {left}
      <Button text="left" handleClick={handleClickLeft}/>
      <Button text="right" handleClick={handleClickRight}/>
      {right}
      </div>
      <History allClicks={allClicks} className="bottom"/>
    </div>
  )
}

const History = (props) => {
  if(props.allClicks.length === 0){
    return (
      <div>
         the app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      button pressed history:{props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => {
  console.log(props, 'this is props')
  const {text, handleClick} = props
  return(
  <button onClick={handleClick} className="btn-app">
    {text}
  </button>

  )
}

export default App;