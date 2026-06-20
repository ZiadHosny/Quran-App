import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import './navbar.scss';
import { Search } from './Search';
import { Settings } from '../Settings';
import { useTranslation } from '../../hooks/useTranslation';

export const Navbar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { t, lang } = useTranslation();

  const onClickLogin = async () => {
    await loginWithRedirect();
  };

  const clickHomeIcon = () => {
    navigate('/');
  };

  return (
    <>
      <nav className="flex-center-sb" dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ zIndex: 3 }}>
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
          {!isAuthenticated && (
            <button onClick={onClickLogin} className="login">
              {t('login')}
            </button>
          )}
        </div>
      </nav>
      <Settings isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
};
