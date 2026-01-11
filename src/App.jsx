import React from 'react';
import MainLayout from './components/Layout/MainLayout';

function App() {
    return (
        <MainLayout>
            <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', paddingTop: '10vh' }}>
                <h1 style={{
                    fontSize: '3rem',
                    marginBottom: 'var(--space-4)',
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 10px rgba(129, 140, 248, 0.3))'
                }}>
                    Good Evening, Jeff
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    lineHeight: 1.6
                }}>
                    I'm listening. How can I help you today?
                </p>

                {/* Placeholder for future Waveform/Orb */}
                <div style={{
                    marginTop: 'var(--space-8)',
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4
                }}>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} style={{
                            width: 4,
                            height: 20 + Math.random() * 20,
                            background: 'var(--accent-primary)',
                            borderRadius: 2,
                            animation: `pulse 1s infinite ${i * 0.1}s ease-in-out alternate`
                        }} />
                    ))}
                </div>
                <style>{`
            @keyframes pulse {
                0% { height: 10px; opacity: 0.5; }
                100% { height: 40px; opacity: 1; box-shadow: 0 0 10px var(--accent-glow); }
            }
        `}</style>

            </div>
        </MainLayout>
    );
}

export default App;
