import { connect } from 'react-redux';
import {modalClosed} from '../../actions'

import './modal.css';

const SimilarAnnouncement = ({data}) => {
  const similarAnnouncements = data ? 
  <ul className="announcement-similar">
    {
      data.map((announcement) => {
        return (
          <li key={announcement.id} className="announcement-similar-item">
              <img className="announcement-similar-cover" src={announcement.coverImage} alt="cover" />
              <div className="announcement-similar-title">{announcement.title}</div>
          </li>
        );
      })
    }
  </ul>: 
  <div className='announcement-warning'>Нечего не найдено</div>

  return(
    <div className='form-similar-item'>
      <h3>Похожие обьявления:</h3>
      {similarAnnouncements}
    </div>
  )
}

const AnnouncementDetails= ({modalClosed, modal, selectedItem, similarItem}) => {
  if(modal === 'details'){
    const {title, coverImage, data, description} = selectedItem
    return (
      <form className="form form-details">
          <div className = 'cross' onClick={() => modalClosed()}></div>
          <img className="form-details-cover" src={coverImage} alt="cover" />
          <div className='form-details-wrapper'>
            <h2 className="form-details-header">{title}</h2>
            <div className="form-details-date">{data}</div>
            <div className="form-details-description">{description}</div>
          </div>
          <SimilarAnnouncement data={similarItem}/>
      </form>
    );
  }
  return null
};

const mapStateToProps = ({announcementList: {modal, selectedItem, similarItem}}) => {
  return{
    modal,
    selectedItem,
    similarItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modalClosed: () => dispatch(modalClosed())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementDetails);
