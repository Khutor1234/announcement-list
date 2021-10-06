import React from 'react';
import './announcement-list-item.css';

const AnnouncementListItem = ({announcement}) => {
  const {title, description, data, coverImage} = announcement
  return (
    <div className="announcement-list-item">
      <img className="announcement-cover" src={coverImage} alt="cover" />
      <div className="announcement-details">
        <div className="announcement-header">
          <span className="announcement-title">{title}</span>
          <div className="announcement-date">{data}</div>
        </div>
        <div className="announcement-description">{description}</div>
        <button
          className="btn">
          Delete to cart
        </button>
      </div>
    </div>
  );
};

export default AnnouncementListItem;
