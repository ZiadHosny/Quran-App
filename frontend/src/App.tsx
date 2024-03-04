import { Auth0Provider } from '@auth0/auth0-react';
import { Bounce, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './app.scss'
import { clientId, domain } from "./utils/envs"
import { Router } from './Router';
import { Loading } from './components/Loading';
import { Navbar } from './components/Navbar';
import { useLoading } from './hooks/useLoading';



export const App = () => {
  const isBrowser = typeof window !== "undefined"
  const { loading } = useLoading()

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      cacheLocation='localstorage'
      authorizationParams={{
        redirect_uri: isBrowser ? window.location.origin : '/'
      }}>
      <Navbar />
      <main>
        <div className='container'>
          <Router />
        </div>
      </main>
      <ToastContainer
        theme={'light'}
        autoClose={1000}
        transition={Bounce}
      />
      {loading ? <Loading /> : <></>}
    </Auth0Provider>
  );
}
