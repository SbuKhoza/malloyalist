import React, { useState } from 'react';
import Login from './components/Login';

function Log() {
    const [user, setUser] = useState(null);

    const handleLogin = (loggedInUser) => {
        setUser(loggedInUser);
        // Any other logic you need after login
    };

    return (
        <div>
            <Login onLogin={handleLogin} />
        </div>
    );
}

export default Log;
