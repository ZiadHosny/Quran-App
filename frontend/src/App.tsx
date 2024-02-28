import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { clientId, domain } from "./utils/envs"
import { Router } from './Router';
import './app.scss'
import { useAppSelector } from './store/hooks';
import { Loading } from './components/Loading';


export const App = () => {
  const isBrowser = typeof window !== "undefined"
  const loading = useAppSelector((state) => state.loading.loading);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      cacheLocation='localstorage'
      authorizationParams={{
        redirect_uri: isBrowser ? window.location.origin : ''
      }}>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {loading ? <Loading /> : <></>}
    </Auth0Provider>
  );
}
