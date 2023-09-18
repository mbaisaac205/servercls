import react from "react"
import {RouterProvider} from "react-router-dom"
import styled from "styled-components"
import {mainRouter} from "./Components/Router/MainRouter"

const App = () =>{
  return(
    <div>
      <RouterProvider
        router={mainRouter}
      />
    </div>
  )
}
export default App;