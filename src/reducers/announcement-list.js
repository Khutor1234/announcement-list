const updateAnnouncementList = (state, action) => {

    if (state === undefined) {
      return {
        announcements: [],
      };
    }
  
    switch (action.type) {
  
      default:
        return state.announcementList;
    }
  };
  
  export default updateAnnouncementList
  