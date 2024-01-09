import Home from './Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Detail from './api_1/Detail';
import Detail2 from './api_2/Detail2';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Detail' element={<Detail />} />
        <Route path='/Detail2' element={<Detail2 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
