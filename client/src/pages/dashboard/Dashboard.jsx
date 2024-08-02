import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/UI/Header";
import { UserProfileContainer } from "../../components/UserProfile/UserProfileContainer";
import { Map } from "../../components/Map";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [protectedData, setProtectedData] = useState('');
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();
  const { logout } = useAuth0();

  const onClickHandler = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  useEffect(() => {
    setAction(isAuthenticated ? "Log Out" : "Sign Up");
  }, [isAuthenticated]);


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
    <section>
      <section className="bg-[#9BC25B]">
        <section className="max-w-7xl mx-auto">
          <Header action={action} onClickHandler={onClickHandler} />
        </section>
      </section>

      <main className="dark:bg-black dark:text-white">
        <section className="max-w-7xl mx-auto">
          <h2 className="font-bold text-red-600">You are successfully authenticated to Dashboard</h2>
          <p>{protectedData}</p>
        </section>

        <section className="max-w-7xl mx-auto">
          <UserProfileContainer />
        </section>

        <section className="flex justify-center m-2">
          <Map />
        </section>
      </main >

      <Footer />
    </section >
  );
};

export default Dashboard;
