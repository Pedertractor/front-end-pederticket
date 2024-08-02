import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VisitorRegistrationWrapper } from './components/visitorRegistration/VisitorRegistrationWrapper';
import Informations from './pages/familyWeek/Informations';
import Welcome from './pages/familyWeek/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/sobre' element={<Informations />} />
        <Route path='/cadastrar/*' element={<VisitorRegistrationWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
