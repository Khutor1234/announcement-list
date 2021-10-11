import React from 'react';
import './announcement-list-item.css';
import { connect } from 'react-redux';
import { announcementRemovedFromCart, onShowDetails, onChangeItem } from '../../actions';

const AnnouncementListItem = ({announcement, onDelete, onShowDetails, onChangeItem}) => {
  const {title, data, coverImage, id} = announcement;

  return (
    <div className="announcement-list-item">
      <img className="announcement-cover" src={coverImage} alt="cover" />
      <div className="announcement-details">
        <div className="announcement-header">
          <span className="announcement-title">{title}</span>
          <div className="announcement-date">{data}</div>
        </div>
        <div className="announcement-buttons">
          <button className="btn" onClick={() => onShowDetails(announcement)}>Learn more</button>
          <button className="btn" onClick={() => onDelete(id)}>Delete</button>
          <button className="btn" onClick={() => onChangeItem(announcement)}>Edit</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(announcementRemovedFromCart(id)), 
    onShowDetails: (announcement) => dispatch(onShowDetails(announcement)),
    onChangeItem: (announcement) => dispatch(onChangeItem(announcement))
  }
}

export default connect(null, mapDispatchToProps)(AnnouncementListItem);

