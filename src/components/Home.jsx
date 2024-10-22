import React from 'react';

const Home = () => {
  const styles = {
    container: {
      backgroundColor: 'red', // Background color (can act as fallback)
      backgroundImage: 'url("https://thumbs.dreamstime.com/b/blood-donation-209359943.jpg")',
      backgroundSize: 'cover', // Make the image cover the entire area
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: 'no-repeat', // Prevent image repetition
      height: '100vh', // Full viewport height
      width: '100vw', // Full viewport width
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return <div style={styles.container}></div>;
};

export default Home;
