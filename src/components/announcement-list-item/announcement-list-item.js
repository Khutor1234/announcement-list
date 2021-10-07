import React from 'react';
import './announcement-list-item.css';
import { connect } from 'react-redux';
import { announcementRemovedFromCart } from '../../actions';

const AnnouncementListItem = ({announcement, onDelete}) => {
  const {title, description, data, coverImage, id} = announcement;

  return (
    <div className="announcement-list-item">
      <img className="announcement-cover" src={coverImage} alt="cover" />
      <div className="announcement-details">
        <div className="announcement-header">
          <span className="announcement-title">{title}</span>
          <div className="announcement-date">{data}</div>
        </div>
        <div className="announcement-description">{description}</div>
        <div className="announcement-buttons">
          <button className="btn" onClick={() => onDelete(id)}>Удалить</button>
          <button className="btn">Редактировать</button>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = ({announcementList: {announcements}}) => {
//   return{
//     announcements
//   }
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(announcementRemovedFromCart(id)), 
  }
}

export default connect(null, mapDispatchToProps)(AnnouncementListItem);

