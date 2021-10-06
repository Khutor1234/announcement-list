import React from 'react';
import Header from '../header';
import AnnouncementList from '../announcement-list';

import './app.css';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <AnnouncementList/>
    </React.Fragment>
  );
};

export default App;
