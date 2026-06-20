import { BsSun, BsMoon } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import { BiSolidPlaylist } from 'react-icons/bi';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../hooks/useSettings';
import { useTranslation } from '../../hooks/useTranslation';
import './settings.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const Settings = ({ isOpen, onClose }: Props) => {
    const { theme, lang, toggleTheme, setLang } = useSettings();
    const { t } = useTranslation();
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    const { isAuthenticated, user, logout } = useAuth0();
    const isDark = theme === 'dark';

    const onLogout = () => {
        onClose();
        logout({ logoutParams: { returnTo: window.location.origin } });
    };

    return (
        <>
            {isOpen && <div className="settings-overlay" onClick={onClose} />}
            <div className={`settings-panel ${isOpen ? 'open' : ''}`} dir={dir}>
                <div className="settings-header">
                    <h3>{t('settings')}</h3>
                    <button className="settings-close" onClick={onClose} aria-label="Close settings">
                        <IoClose size={22} />
                    </button>
                </div>

                <div className="settings-body">
                    {isAuthenticated && user && (
                        <>
                            <div className="settings-account">
                                <img src={user.picture} alt="profile" className="settings-avatar" />
                                <div>
                                    <p className="settings-name">{user.name}</p>
                                    <p className="settings-email">{user.email}</p>
                                </div>
                            </div>

                            <p className="settings-section-label">{t('account')}</p>
                            <Link to="/myPlaylist" className="settings-row settings-link" onClick={onClose}>
                                <div className="settings-label">
                                    <BiSolidPlaylist size={18} />
                                    <span>{t('myPlaylist')}</span>
                                </div>
                            </Link>
                            <div className="settings-row settings-logout" onClick={onLogout}>
                                <div className="settings-label">
                                    <FiLogOut size={18} />
                                    <span>{t('logout')}</span>
                                </div>
                            </div>

                            <div className="settings-divider" />
                        </>
                    )}

                    <p className="settings-section-label">{t('appearance')}</p>
                    <div className="settings-row">
                        <div className="settings-label">
                            {isDark ? <BsMoon size={18} /> : <BsSun size={18} />}
                            <span>{isDark ? t('darkMode') : t('lightMode')}</span>
                        </div>
                        <button
                            className={`theme-toggle ${isDark ? 'active' : ''}`}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            <span className="toggle-thumb" />
                        </button>
                    </div>

                    <div className="settings-divider" />

                    <p className="settings-section-label">{t('language')}</p>
                    <div className="lang-switcher">
                        <button
                            className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
                            onClick={() => setLang('ar')}
                        >
                            <span className="lang-flag">🇸🇦</span>
                            <span>العربية</span>
                        </button>
                        <button
                            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                            onClick={() => setLang('en')}
                        >
                            <span className="lang-flag">🇺🇸</span>
                            <span>English</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
