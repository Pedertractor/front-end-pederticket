import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VisitorRegistrationWrapper } from './components/visitorRegistration/VisitorRegistrationWrapper';
import Informations from './pages/familyWeek/Informations';
import Welcome from './pages/familyWeek/Welcome';
import ConfirmationTicket from './pages/visitorRegistration/ConfirmationTicket';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
