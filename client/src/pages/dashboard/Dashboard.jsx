import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../../components/UI/LogoutButton';

const Dashboard = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [protectedData, setProtectedData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      return;
    }
    const fetchProtectedData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(
          'https://be-v50-tier3-team-28.onrender.com/api/dashboard',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            credentials: 'include', // Include credentials (cookies) in requests
          }
        );

        console.log('Response Status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProtectedData(data.message);
      } catch (e) {
        console.error('Error fetching protected data:', e);
        setError('Failed to fetch protected data. Please try again.');
      }
    };

    fetchProtectedData();
  }, [isAuthenticated, getAccessTokenSilently, navigate]);

  return (
    <div>
      <LogoutButton />
      <h2>You are successfully authenticated to Dashboard</h2>
      <p>{protectedData}</p>
    </div>
  );
};

export default Dashboard;
// const fetchProtectedData = async () => {
//   try {
//     const accessToken = await getAccessTokenSilently();
//     const response = await fetch(
//       'https://be-v50-tier3-team-28.onrender.com/api/dashboard',
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const data = await response.json();
//     setProtectedData(data.message);
//   } catch (e) {
//     console.log(e);
//   }
// };
