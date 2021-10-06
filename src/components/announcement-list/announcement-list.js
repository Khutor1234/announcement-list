import AnnouncementListItem from '../announcement-list-item';

import { connect } from 'react-redux';

import './announcement-list.css';

const AnnouncementList = () => {
  const announcements = [
    {
      id: 1,
      title: 'Новый год 2020',
      description: 'Пройдет на площади',
      data: '31.03.2020',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'Новый год 2020',
      description: 'Пройдет на площади',
      data: '31.03.2020',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 3,
      title: 'Новый год 2020',
      description: 'Пройдет на площади',
      data: '31.03.2020',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 4,
      title: 'Новый год 2020',
      description: 'Пройдет на площади',
      data: '31.03.2020',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
  ]
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

const mapStateToProps = () => {};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementList);
