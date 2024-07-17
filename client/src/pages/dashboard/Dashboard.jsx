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
        const response = await fetch('http://localhost:3003/api/dashboard', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setProtectedData(data.message);
      } catch (e) {
        console.log(e);
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
