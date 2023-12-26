import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './api_1/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
