import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  useNavigate 
} from 'react-router-dom';

import Home from './pages/Home.page.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home navigate={useNavigate}/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
