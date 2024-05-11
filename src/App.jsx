import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'


const App = () => <Routes>
  <Route index element={<Home/>}/>
</Routes>
    


export default App
