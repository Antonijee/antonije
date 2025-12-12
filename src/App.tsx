import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import CompanyPage from './pages/Company';

const App = () => {
  const prefix = '/antonije/';
  return (
    <Routes>
      <Route path={prefix} element={<Homepage />} />
      <Route path={`${prefix}about`} element={<About />} />
      <Route path={`${prefix}contact`} element={<Contact />} />
      <Route path={`${prefix}company/:name`} element={<CompanyPage />} />
    </Routes>
  );
};

export default App;
