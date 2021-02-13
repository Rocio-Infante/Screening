import React from 'react';
import './styles/style.scss';

/* Main app component renders an H1 tag that changes value from 'development' to 'production'
 depending on environment
*/

const App = () => {
  return (
    <div className='main-container'>
      <h1>This app is running in {process.env.NODE_ENV.toUpperCase()} mode</h1>
    </div>
  )
};


export default App;