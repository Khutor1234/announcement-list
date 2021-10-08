import AnnouncementListItem from '../announcement-list-item';
import { connect } from 'react-redux';

import './announcement-list.css';

const AnnouncementList = ({announcements}) => {
  return (
    <ul className="announcement-list">
      {
        announcements.map((announcement) => {
          return (
            <li key={announcement.id}>
              <AnnouncementListItem
                announcement={announcement}
                />
            </li>
          );
        })
      }
    </ul>
  );
};

const AnnouncementListContainer = ({announcements, foundAnnouncements}) => {
  if(foundAnnouncements){
    return <AnnouncementList announcements = {foundAnnouncements}/>
  }

  return <AnnouncementList announcements = {announcements}/>
}

const mapStateToProps = ({announcementList: {announcements, foundAnnouncements}}) => {
  return{
    announcements,
    foundAnnouncements
  }
};


export default connect(mapStateToProps, null)(AnnouncementListContainer);
