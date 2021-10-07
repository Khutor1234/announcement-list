const updateForm = (state, action) => {
  const {type, payload} = action;

    if (state === undefined) {
      return {
        open: false,
        newAnnouncement: {
          title:'hello'
        },
      };
    }
  
    switch (type) {
      case 'MODAL_OPEN':
        return{
          ...state.form,
          open: true
        }

      case 'MODAL_CLOSED':
        return{
          ...state.form,
          open: false
        }
      case 'TITLE_CHANGE':
        return {
          ...state.form,
          newAnnouncement: {
                ...state.form.newAnnouncement,
                title: payload, 
            }
        }

      case 'IMG_CHANGE':
        return {
          ...state.form,
          newAnnouncement: {
                ...state.form.newAnnouncement,
                img: payload, 
            }
        }

      case 'DESCRIPTION_CHANGE':
        return {
          ...state.form,
          newAnnouncement: {
                ...state.form.newAnnouncement,
                description: payload, 
            }
        }
    
      default:
        return state.updateForm;
    }
  };
  
  export default updateForm
  