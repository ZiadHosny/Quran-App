import { useEffect } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { Bounce, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './app.scss'
import { clientId, domain } from "./utils/envs"
import { Router } from './Router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useAppSelector } from './store/hooks';

export const App = () => {
  const isBrowser = typeof window !== "undefined"
  const theme = useAppSelector(state => state.settings.theme);
  const lang = useAppSelector(state => state.settings.lang);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

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
        theme={theme === 'dark' ? 'dark' : 'light'}
        autoClose={1000}
        transition={Bounce}
      />
    </Auth0Provider>
  );
}
