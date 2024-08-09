import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import Solutions from '../components/UI/Solutions';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/solutions' element={<Solutions />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
