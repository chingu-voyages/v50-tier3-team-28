import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import Dashboard from '../pages/dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
