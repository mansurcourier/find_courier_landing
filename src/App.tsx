import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Main'
import Home from './views/Home'
import Documents from './views/Documents'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/docs' element={<Documents />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
