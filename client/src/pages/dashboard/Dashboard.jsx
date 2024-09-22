import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/UI/Header';
import { UserProfileContainer } from '../../components/UserProfile/UserProfileContainer';
import { Map } from '../../components/Map';
import Footer from '../../components/Footer/Footer';
import { useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../app/service/apiSlice";

const Dashboard = () => {
  // IMP: user data from BE comes from state (from one place).
  const { isAuthenticated, isLoading, user } = useSelector(state => state.auth);
  // const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  // const [protectedData, setProtectedData] = useState('');
  // const [action, setAction] = useState('Sign Up');
  // const navigate = useNavigate();
  const { logout } = useAuth0();
  const { data, error } = useGetUserDataQuery();

  const [action, setAction] = useState("");

  const returnToUri = import.meta.env.VITE_AUTH0_RETURN_TO_URI;

  const onClickHandler = () => {
    // logout({ logoutParams: { returnTo: window.location.origin } });
    logout({ logoutParams: { returnTo: returnToUri } });
  };

  useEffect(() => {
    setAction(isAuthenticated ? "Log Out" : "Sign In/Up");
  }, [isAuthenticated]);

  // Data from ./../app/service/apiSlice - useGetUserDataQuery()
  // WORKING - data is from dummyjson baseurl - /products
  console.log("DATA: ", data);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate('/');
  //     return;
  //   }

  //   const fetchProtectedData = async () => {
  //     try {
  //       const accessToken = await getAccessTokenSilently();
  //       const response = await fetch(
  //         'https://be-v50-tier3-team-28.onrender.com/api/dashboard',
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       setProtectedData(data?.user);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   fetchProtectedData();
  // }, [isAuthenticated, getAccessTokenSilently, navigate]);

  return (
    <section>
      <section className='bg-[#9BC25B]'>
        <section className='max-w-7xl mx-auto'>
          <Header action={action} onClickHandler={onClickHandler} />
        </section>
      </section>

      {/* TODO: test dark mode and see if the following border-transparent is needed or not */}
      <main className='dark:bg-black dark:text-white border-2 border-transparent'>
        {/* IMP: If team wants to see how the user data structure looks on BE to pass the data into FE, please uncomment the following section block to see the user data */}
        {/* <section className='max-w-7xl mx-auto'>
          <h2 className='font-bold text-red-600'>
            You are successfully authenticated to Dashboard
          </h2>

          {user && <p>Hello, {user?.nickname}, you are logged in. {JSON.stringify(user)}</p>}
        </section> */}

        <section className='max-w-7xl mx-auto'>
          <UserProfileContainer data={user} />
          {/* <UserProfileContainer data={protectedData} /> */}
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
