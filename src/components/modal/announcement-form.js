import { connect } from 'react-redux';
import {onImgChange, onTitleChange, onDescriptionChange, onAddedToAnnouncement, modalClosed} from '../../actions'

import './modal.css';

const AnnouncementForm= ({modalClosed, errorModal, modal, onTitleChange, onDescriptionChange, onImgChange, onAddedToAnnouncement, newAnnouncement}) => {
  console.log(newAnnouncement)
  const error = errorModal ? <div className='error'>Ошибка! Вы ввели не все данные</div> : null
  
  if(modal === 'form'){
    return (
      <form className="form">
          <div className = 'cross' onClick={() => modalClosed()}></div>
          <h2 className="form-header">Добавить новое событие</h2>
          <input label="Название события" className="form-title" placeholder='Название события' onChange={e => onTitleChange(e)}/>
          <input label="Путь к картинке" className="form-img" placeholder='Путь к картинке'onChange={e => onImgChange(e)}/>
          <textarea label="Описание" className="form-description" placeholder='Описание' onChange={e => onDescriptionChange(e)}/>
          {error}
          <button className="form-btn" onClick ={(e) => onAddedToAnnouncement(e, newAnnouncement)}>Добавить</button>
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
