import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import Solutions from '../components/UI/Solutions';
import { useAuthListener } from '../components/auth/useAuthListener';
import { ProtectedRoute } from '../components/protectedRoute';

const AppRoutes = () => {
	const auth = useAuthListener();

	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomeLayout />} />
				{/* <Route path='/dashboard' element={<Dashboard />} /> */}
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute auth={auth}>
							{' '}
							<Dashboard />{' '}
						</ProtectedRoute>
					}
				/>
				<Route path="/solutions" element={<Solutions />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
