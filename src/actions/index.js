export const announcementRemovedFromCart = (announcementId) => {
    return {
      type: 'ANNOUNCEMENT_REMOVED_FROM_CART',
      payload: announcementId
    };
  };

export const onSearch = (e) => {
    return{
        type: 'SEARCH',
        payload: e
    }
}

export const onImgChange = (img) => {
  return{
      type: 'IMG_CHANGE',
      payload: img
  }
}

export const onTitleChange = (title) => {
  return{
      type: 'TITLE_CHANGE',
      payload: title
  }
}

export const onDescriptionChange = (description) => {
  return{
      type: 'DESCRIPTION_CHANGE',
      payload: description
  }
}

const successfulAdding = (newAnnouncement) => {
  return{
      type: 'ANNOUNCEMENT_ADDED',
      payload: newAnnouncement
  }
}

const errorAdding = () => {
  return{
      type: 'ERROR_ADDING',
  }
}

export const modalClosed = () => {
  return{
    type: 'MODAL_CLOSED'
  }
}

export const modalOpen = () => {
  return{
      type: 'MODAL_OPEN'
  }
}

export const onShowDetails = (announcement) => {
  return{
    type: 'SHOW_DETAILS',
    payload: announcement
  }
}

export const onChangeItem = (announcement) => {
  return{
    type: 'CHANGE_ITEM',
    payload: announcement
  }
}

export const newImg = (img) => {
  return{
      type: 'NEW_IMG',
      payload: img
  }
}

export const newTitle = (title) => {
  return{
      type: 'NEW_TITLE',
      payload: title
  }
}

export const newDescription = (description) => {
  return{
      type: 'NEW_DESCRIPTION',
      payload: description
  }
}

export const saveChange = (changedItem) => {
  return{
      type: 'SAVE_CHANGE',
      payload: changedItem
  }
}

export const onAddedToAnnouncement = (dispatch) => (e, newAnnouncement) => {
  e.preventDefault();
  if(newAnnouncement.title && newAnnouncement.description && newAnnouncement.coverImage){
    dispatch(modalClosed()) 
    dispatch(successfulAdding(newAnnouncement))
  } else {
    dispatch(errorAdding(newAnnouncement))
  }
}

export const onSaveChange = (dispatch) => (e, changedItem) => {
  e.preventDefault();
  dispatch(modalClosed())
  dispatch(saveChange(changedItem))
}

