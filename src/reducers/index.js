import announcementList from './announcement-list'

const reducer = (state, action) => {
  return {
    announcementList: announcementList(state, action)
  };
};

export default reducer;
