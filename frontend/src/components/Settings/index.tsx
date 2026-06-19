import { BsSun, BsMoon } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { useSettings } from '../../hooks/useSettings';
import './settings.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const Settings = ({ isOpen, onClose }: Props) => {
    const { theme, toggleTheme } = useSettings();
    const isDark = theme === 'dark';

    return (
        <>
            {isOpen && <div className="settings-overlay" onClick={onClose} />}
            <div className={`settings-panel ${isOpen ? 'open' : ''}`}>
                <div className="settings-header">
                    <h3>Settings</h3>
                    <button className="settings-close" onClick={onClose} aria-label="Close settings">
                        <IoClose size={22} />
                    </button>
                </div>

                <div className="settings-body">
                    <p className="settings-section-label">Appearance</p>
                    <div className="settings-row">
                        <div className="settings-label">
                            {isDark ? <BsMoon size={18} /> : <BsSun size={18} />}
                            <span>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
                        </div>
                        <button
                            className={`theme-toggle ${isDark ? 'active' : ''}`}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            <span className="toggle-thumb" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
