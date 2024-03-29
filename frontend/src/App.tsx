import { Auth0Provider } from '@auth0/auth0-react';
import { Bounce, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './app.scss'
import { clientId, domain } from "./utils/envs"
import { Router } from './Router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const App = () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      cacheLocation='localstorage'
      authorizationParams={{
        redirect_uri: isBrowser ? window.location.origin : '/'
      }}>
      <Navbar />
      <main style={{ position: 'relative' }}>
        <div className='container'>
          <Router />
        </div>
      </main>
      <Footer />
      <ToastContainer
        theme={'light'}
        autoClose={1000}
        transition={Bounce}
      />
    </Auth0Provider>
  );
}
