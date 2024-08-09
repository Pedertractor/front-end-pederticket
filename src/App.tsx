import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VisitorRegistrationWrapper } from './components/visitorRegistration/VisitorRegistrationWrapper';
import Informations from './pages/familyWeek/Informations';
import Welcome from './pages/familyWeek/Welcome';
import ConfirmationTicket from './pages/visitorRegistration/ConfirmationTicket';
import RegisterList from './pages/admin/registerList';
import Home from './pages/admin/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/sobre' element={<Informations />} />
        <Route path='/cadastrar/*' element={<VisitorRegistrationWrapper />} />
        <Route
          path='/ingresso/:publicTicketId'
          element={<ConfirmationTicket />}
        />
        <Route path='/admin/all-registers' element={<RegisterList />} />
        <Route path='/admin/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
