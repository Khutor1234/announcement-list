import { connect } from 'react-redux';
import {newImg, newTitle, newDescription, onSaveChange, modalClosed} from '../../actions'

import './modal.css';

const AnnouncementChanges= ({changedItem, modal, modalClosed, newTitle, newImg, newDescription, onSaveChange}) => {
  console.log(changedItem)
  
  if(modal === 'changes'){
    const {title, coverImage, description} = changedItem
    return (
      <form className="form">
          <div className = 'cross'  onClick={() => modalClosed()}></div>
          <h2 className="form-header">Редактировать событие</h2>
          <input label="Название события" value = {title} className="form-title" placeholder='Название события' onChange={e => newTitle(e)}/>
          <input label="Путь к картинке" value = {coverImage} className="form-img" placeholder='Путь к картинке'onChange={e => newImg(e)}/>
          <textarea label="Описание" value={description} className="form-description" placeholder='Описание' onChange={e => newDescription(e)}/>
          <button className="form-btn" onClick ={(e) => onSaveChange(e,changedItem)}>Сохранить</button>
      </form>
    );
  }

  return null
};

const mapStateToProps = ({announcementList: {changedItem, modal}}) => {
  return{
    changedItem,
    modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      newImg: (e) => dispatch(newImg(e.target.value)),
      newTitle: (e) => dispatch(newTitle(e.target.value)),
      newDescription: (e) => dispatch(newDescription(e.target.value)),
      onSaveChange: (e, changedItem) => onSaveChange(dispatch)(e, changedItem),
      modalClosed: () => dispatch(modalClosed())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementChanges);
