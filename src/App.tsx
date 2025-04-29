import { Routes, Route } from 'react-router-dom';
import ListingPage from './pages/ListingPage';
import DetailsPage from './pages/DetailsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Layout><ListingPage /></Layout>} />
      <Route path="/listings/:id" element={<Layout><DetailsPage /></Layout>} />
    </Routes>
  );
}

export default App;