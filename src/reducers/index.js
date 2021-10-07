import updateAnnouncementList from './announcement-list'
import updateForm from './announcement-form'

const reducer = (state, action) => {
  return {
    announcementList: updateAnnouncementList(state, action),
    // form: updateForm(state, action)
  };
};

export default reducer;
