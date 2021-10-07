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

export const modalOpen = () => {
  return{
      type: 'MODAL_OPEN',
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

export const errorAdding = () => {
  return{
      type: 'ERROR',
  }
}

const modalClosed = () => {
  return{
    type: 'MODAL_CLOSED'
  }
}

export const onAddedToAnnouncement = (dispatch) => (e, newAnnouncement) => {
  e.preventDefault();
  dispatch(modalClosed()) 
  dispatch(successfulAdding(newAnnouncement))
  // if(newAnnouncement.title && newAnnouncement.description && newAnnouncement.img){
  //     dispatch(successfulAdding(newAnnouncement)) }
  // } else {
  //     dispatch(successfulAdding(newAnnouncement))
  // }
}

