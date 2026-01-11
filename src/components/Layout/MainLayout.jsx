import React from 'react';
import TitleBar from './TitleBar';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            background: 'var(--gradient-main)'
        }}>
            <TitleBar />
            <Sidebar />
            <main style={{
                flex: 1,
                marginTop: 'var(--titlebar-height)',
                padding: 'var(--space-6)',
                overflowY: 'auto',
                position: 'relative'
            }}>
                {/* Content Container with slight glass effect */}
                <div style={{
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: 16,
                    height: '100%',
                    border: '1px solid var(--glass-border)',
                    padding: 'var(--space-6)',
                    backdropFilter: 'blur(4px)'
                }}>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
