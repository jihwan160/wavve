import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './api_1/Detail';
import Detail2 from './api_2/Detail2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Detail' element={<Detail />} />
        <Route path='/Detail2' element={<Detail2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
