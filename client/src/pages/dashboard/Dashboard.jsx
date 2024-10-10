import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/UI/Header';
import { Map } from '../../components/Map';
import Footer from '../../components/Footer/Footer';
import { UserProfileNew } from "../../components/UserProfile/UserProfileNew";

const Dashboard = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [protectedData, setProtectedData] = useState({});
  // const [protectedData, setProtectedData] = useState('');

  // const [action, setAction] = useState('Sign Up');
  // const navigate = useNavigate();

  // IMP: Pass data from child component to parent (this) component
  const [updateUserContactNumber, setupdateUserContactNumber] = useState("");
  const [requestToDeleteUserContactNumber, setRequestToDeleteUserContactNumber] = useState('');

  const { logout } = useAuth0();

  const [action, setAction] = useState('');

  const isDevelopment = import.meta.env.VITE_NODE_ENV === 'development';

  const apiUrl = isDevelopment ? 'http://localhost:3003/api' : 'https://be-v50-tier3-team-28.onrender.com/api';

  const onClickHandler = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  function handleUpdateUserContactNumber(data) {
    setupdateUserContactNumber(data);
    console.log("updateUserContactNumber:", updateUserContactNumber, typeof updateUserContactNumber);
    handleAddOrUpdateUserContactNumber();
  }

  function handleRequestToDeleteUserContactNumber(data) {
    setRequestToDeleteUserContactNumber(data);
    handleDeleteUserContactNumber();
  }

  const handleAddOrUpdateUserContactNumber = async () => {
    try {
      const token = await getAccessTokenSilently();

      // TODO: Remove following console.log once BE update works properly
      console.log("TEST - updateUserContactNumber:", updateUserContactNumber, typeof updateUserContactNumber);

      const response = await fetch(
        `${apiUrl}/user/metadata`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // metadata: { contactNumber: tempContactNumber },
            metadata: { contactNumber: updateUserContactNumber },
          }),
        });

      if (response.ok) {
        console.log('Contact number added/updated successfully');
      } else {
        const errorData = await response.json();
        console.error('Failed to add/update contact number', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteUserContactNumber = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${apiUrl}/user/metadata`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metadata: { contactNumber: '' }, // Setting to an empty string to delete
            // metadata: { contactNumber: requestToDeleteUserContactNumber }, // Setting to an empty string to delete
          }),
        });

      if (response.ok) {
        console.log('Contact number deleted successfully');
      } else {
        const errorData = await response.json();
        console.error('Failed to delete contact number', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    setAction(isAuthenticated ? 'Log Out' : 'Sign In/Up');
  }, [isAuthenticated]);

  useEffect(() => {
    // if (!isAuthenticated) {
    //   navigate('/');
    //   return;
    // }

    const fetchProtectedData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(
          // 'https://be-v50-tier3-team-28.onrender.com/api/dashboard',
          `${apiUrl}/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        console.log("DATA: ", data);
        console.log("DATA: user -  ", data?.user);
        setProtectedData(data?.user);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProtectedData();
  }, [apiUrl, getAccessTokenSilently]);

  return (
    <section>
      <section className='bg-[#9BC25B]'>
        <section className='max-w-7xl mx-auto'>
          <Header action={action} onClickHandler={onClickHandler} />
        </section>
      </section>

      <main className='dark:bg-black dark:text-white border-2 border-transparent'>
        <section className='max-w-7xl mx-auto'>
          <UserProfileNew data={protectedData} sendUpdateUserContactNumber={handleUpdateUserContactNumber} sendDeleteRequestOfUserContactNumber={handleRequestToDeleteUserContactNumber} />
        </section>

        {/* TODO: Following section will be deleted once BE logic is fixed */}
        <section>
          <p>User contact number from UserProfileNew COMPONENT : {updateUserContactNumber} </p>
          {/* <p> {JSON.stringify(protectedData)} </p> */}
        </section>

        <section className='flex justify-center p-2'>
          <Map />
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default Dashboard;
