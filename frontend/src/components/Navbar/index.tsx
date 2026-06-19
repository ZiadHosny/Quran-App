import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import './navbar.scss';
import { AccountMenu } from './AccountMenu';
import { Search } from './Search';
// import { useProgress } from '../../hooks/useProgress';
// import { UseNotification } from '../../hooks/UseNotification';
import { Settings } from '../Settings';

export const Navbar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navigate = useNavigate();
  // const { sendNotification } = UseNotification()
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  // const { getProgress } = useProgress()
  // const { getIdTokenClaims } = useAuth0()

  const onClickLogin = async () => {
    await loginWithRedirect();
  };

  const clickHomeIcon = async () => {
    navigate('/');
  };

  return (
    <>
      <nav className="flex-center-sb" style={{ zIndex: 3 }}>
        <img
          className="logo"
          src={'/images/quran512.png'}
          alt="quranImg"
          onClick={clickHomeIcon}
        />
        <div className="search-container">
          <Search />
        </div>
        <div className="nav-right">
          <button
            className="settings-btn"
            onClick={() => setSettingsOpen(true)}
            aria-label="Open settings"
          >
            <IoSettingsOutline size={22} color="white" />
          </button>
          {isAuthenticated ? (
            <AccountMenu />
          ) : (
            <button onClick={onClickLogin} className="login">
              Login
            </button>
          )}
        </div>
      </nav>
      <Settings isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
};
