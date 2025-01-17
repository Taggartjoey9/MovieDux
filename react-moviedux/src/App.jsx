import Header from "./components/Header"
import Footer from "./components/Footer"
import MoviesGrid from "./components/MoviesGrid"
import WatchList from "./components/WatchList"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
              </ul>
          </nav>
            <Routes>
              <Route path="/" element={<MoviesGrid/>}></Route>
              <Route path="/watchlist" element={<WatchList/>}></Route>
            </Routes>
        </Router>        
      </div>
      <Footer />
    </div>
  )
}

export default App
