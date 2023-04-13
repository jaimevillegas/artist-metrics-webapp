import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/details" element={<Details />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
