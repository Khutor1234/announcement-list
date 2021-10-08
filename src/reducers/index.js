import updateAnnouncementList from './announcement-list'

const reducer = (state, action) => {
  return {
    announcementList: updateAnnouncementList(state, action),
  };
};

export default reducer;
