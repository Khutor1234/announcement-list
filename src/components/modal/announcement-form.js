import { connect } from 'react-redux';
import {onImgChange, onTitleChange, onDescriptionChange, onAddedToAnnouncement, modalClosed} from '../../actions'
import './modal.css';

const AnnouncementForm= ({modalClosed, errorModal, modal, onTitleChange, onDescriptionChange, onImgChange, onAddedToAnnouncement, newAnnouncement}) => {
  const error = errorModal ? <div className='error'>Ошибка! Вы ввели не все данные</div> : null
  
  if(modal === 'form'){
    return (
      <form className="form">
          <div className = 'cross' onClick={() => modalClosed()}></div>
          <h2 className="form-header">Add a new announcement</h2>
          <input label="Announcement name" className="form-title" placeholder='Announcement title' onChange={e => onTitleChange(e)}/>
          <input label="Picture path" className="form-img" placeholder='Picture path'onChange={e => onImgChange(e)}/>
          <textarea label="Description" className="form-description" placeholder='Description' onChange={e => onDescriptionChange(e)}/>
          {error}
          <button className="form-btn" onClick ={(e) => onAddedToAnnouncement(e, newAnnouncement)}>Add</button>
      </form>
    );
  }

  return null
};

const mapStateToProps = ({announcementList: {modal, newAnnouncement, errorModal}}) => {
  return{
    modal,
    newAnnouncement,
    errorModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onImgChange: (e) => dispatch(onImgChange(e.target.value)),
      onTitleChange: (e) => dispatch(onTitleChange(e.target.value)),
      onDescriptionChange: (e) => dispatch(onDescriptionChange(e.target.value)),
      onAddedToAnnouncement: (e, newAnnouncement) => onAddedToAnnouncement(dispatch)(e, newAnnouncement),
      modalClosed: () => dispatch(modalClosed())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementForm);
