import React from 'react';
import Header from '../header';
import AnnouncementList from '../announcement-list';
import { AnnouncementDetails, AnnouncementForm, AnnouncementChanges } from '../modal';

import './app.css';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <AnnouncementList/>
      <AnnouncementDetails/>
      <AnnouncementForm/>
      <AnnouncementChanges/>
    </React.Fragment>
  );
};

export default App;
