import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import Reset from './page/Reset';
import Register from './page/Register';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {

  return (
    <Router>
     <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} exact/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     </div>
    </Router>
  )
}

export default App
