import React from 'react'
import AddBox from '../containers/AddBox'
import ViewBoxList from '../containers/ViewBoxList'

const App = () => (
  <div>
    <h1>Fun Application</h1>
    <AddBox />
    <h2>See below for boxes!</h2>
    <ViewBoxList />
  </div>
)

export default App
