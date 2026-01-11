import React from 'react';

function App() {
    return (
        <div className="app-container" style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
            color: 'white',
            fontFamily: 'sans-serif'
        }}>
            <div className="content" style={{ textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: '700',
                    background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    margin: 0
                }}>
                    AiSA
                </h1>
                <p style={{ opacity: 0.7, marginTop: '1rem' }}>Always Intelligent Support Assistant</p>
            </div>
        </div>
    );
}

export default App;
