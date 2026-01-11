import React, { useState } from 'react';
import { MessageSquare, Layout, Settings, Mic } from 'lucide-react';

const Sidebar = () => {
    const [active, setActive] = useState('chat');

    return (
        <div style={{
            width: 'var(--sidebar-width)',
            height: '100%',
            background: 'var(--bg-secondary)',
            borderRight: '1px solid var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 'calc(var(--titlebar-height) + var(--space-4))',
            zIndex: 900
        }}>
            <NavItem
                icon={<Layout size={20} />}
                isActive={active === 'dashboard'}
                onClick={() => setActive('dashboard')}
            />
            <NavItem
                icon={<MessageSquare size={20} />}
                isActive={active === 'chat'}
                onClick={() => setActive('chat')}
            />
            <div style={{ flex: 1 }} />
            <div style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'var(--accent-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-4)',
                cursor: 'pointer',
                border: '1px solid var(--accent-primary)'
            }}>
                <Mic size={20} color='white' />
            </div>
            <NavItem
                icon={<Settings size={20} />}
                isActive={active === 'settings'}
                onClick={() => setActive('settings')}
            />
            <div style={{ height: 'var(--space-4)' }} />
        </div>
    );
};

const NavItem = ({ icon, isActive, onClick }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-2)',
                cursor: 'pointer',
                color: isActive ? 'var(--accent-secondary)' : (hover ? 'var(--text-primary)' : 'var(--text-muted)'),
                background: isActive ? 'rgba(139, 92, 246, 0.15)' : (hover ? 'rgba(255,255,255,0.05)' : 'transparent'),
                transition: 'all 0.2s ease',
                position: 'relative'
            }}
        >
            {isActive && (
                <div style={{
                    position: 'absolute',
                    left: -12,
                    width: 3,
                    height: 20,
                    background: 'var(--accent-secondary)',
                    borderTopRightRadius: 3,
                    borderBottomRightRadius: 3,
                    boxShadow: '0 0 8px var(--accent-secondary)'
                }} />
            )}
            {icon}
        </div>
    );
};

export default Sidebar;
