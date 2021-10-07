import { connect } from 'react-redux';
import {onImgChange, onTitleChange, onDescriptionChange, onAddedToAnnouncement} from '../../actions'

import './announcement-form.css';

const AnnouncementForm= ({open, onTitleChange, onDescriptionChange, onImgChange, onAddedToAnnouncement, newAnnouncement}) => {
console.log(newAnnouncement, 'newAnn')

  if(!open){
    return null
  }

  return (
    <form className="form">
        <h2 className="form-header">Добавить новое событие</h2>
        <input label="Название события" className="form-title" placeholder='Название события' onChange={e => onTitleChange(e)}/>
        <input label="Путь к картинке" className="form-img" placeholder='Путь к картинке'onChange={e => onImgChange(e)}/>
        <textarea label="Описание" className="form-description" placeholder='Описание' onChange={e => onDescriptionChange(e)}/>
        <button className="form-btn" onClick ={(e) => onAddedToAnnouncement(e, newAnnouncement)}>Добавить</button>
    </form>
  );
};

const mapStateToProps = ({announcementList: {open, newAnnouncement}}) => {
  return{
    open,
    newAnnouncement
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onImgChange: (e) => dispatch(onImgChange(e.target.value)),
      onTitleChange: (e) => dispatch(onTitleChange(e.target.value)),
      onDescriptionChange: (e) => dispatch(onDescriptionChange(e.target.value)),
      onAddedToAnnouncement: (e, newAnnouncement) => onAddedToAnnouncement(dispatch)(e, newAnnouncement),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementForm);
