import React, { useState } from 'react';

const SignInButt = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    // Your sign-in logic here
    // For example, you might call an API or set a login state.
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    // Your sign-out logic here
    // For example, reset the login state or call an API to log the user out.
    setIsLoggedIn(false);
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const signInButtonStyle = {
    marginRight: '100px',
  };

  return (
    <div style={buttonContainerStyle}>
      {isLoggedIn ? (
        <>
          <button style={signInButtonStyle} onClick={handleSignOut}>Sign Out</button>
          {/* Add other content if needed */}
        </>
      ) : (
        <button style={signInButtonStyle} onClick={handleSignIn}>Sign In</button>
      )}
      {/* Add other content if needed */}
    </div>
  );
};

export default SignInButt;
