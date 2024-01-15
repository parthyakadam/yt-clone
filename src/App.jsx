import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Box } from '@mui/material'
import PageNotFound from './pages/PageNotFound'
import { Feed, VideoDetails, ChannelDetails, SearchFeed, Navbar} from './components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Box sx={{ backgroundColor: "#000"}}>
          <Navbar />
          <Routes>
            <Route path='' element={<Feed />}/>
            <Route path='/video/:id' element={<VideoDetails />} />
            <Route path='/channel/:id' element={<ChannelDetails />} />
            <Route path='/search/:term' element={<SearchFeed />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Box>
      </Router>
    </>
  )
}

export default App
