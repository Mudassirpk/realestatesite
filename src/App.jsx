import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
