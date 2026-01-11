import React from 'react';
import { Minus, Square, X } from 'lucide-react';

const TitleBar = () => {
    const handleMinimize = () => window.electron.minimize();
    const handleMaximize = () => window.electron.maximize();
    const handleClose = () => window.electron.close();

    return (
        <div style={{
            height: 'var(--titlebar-height)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--blur-md)',
            borderBottom: '1px solid var(--glass-border)',
            WebkitAppRegion: 'drag', // Allow dragging
            userSelect: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
            paddingLeft: 'var(--space-4)'
        }}>
            {/* App Title / Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <div style={{
                    width: 12, height: 12, borderRadius: '50%',
                    background: 'var(--gradient-text)',
                    boxShadow: '0 0 8px var(--accent-glow)'
                }} />
                <span style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: 'var(--text-secondary)'
                }}>
                    AiSA
                </span>
            </div>

            {/* Window Controls */}
            <div style={{
                display: 'flex',
                height: '100%',
                WebkitAppRegion: 'no-drag' // Buttons must be clickable
            }}>
                <ControlBtn onClick={handleMinimize} icon={<Minus size={14} />} />
                <ControlBtn onClick={handleMaximize} icon={<Square size={12} />} />
                <ControlBtn onClick={handleClose} icon={<X size={14} />} isClose />
            </div>
        </div>
    );
};

const ControlBtn = ({ onClick, icon, isClose }) => {
    const [hover, setHover] = React.useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                border: 'none',
                background: hover ? (isClose ? '#ef4444' : 'rgba(255,255,255,0.1)') : 'transparent',
                color: isClose && hover ? 'white' : 'var(--text-secondary)',
                width: 46,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
                outline: 'none'
            }}
        >
            {icon}
        </button>
    );
};

export default TitleBar;
