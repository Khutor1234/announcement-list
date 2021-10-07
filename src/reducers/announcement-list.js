import { announcementsData } from "../announcement-list-data";

const updateAnnouncementList = (state, action) => {
  const {type, payload} = action;

    if (state === undefined) {
      return {
        announcements: announcementsData,
        open: false,
        newAnnouncement: {},
      };
    }

    switch (type) {
      case 'ANNOUNCEMENT_REMOVED_FROM_CART':
        const itemIndex = state.announcementList.announcements.findIndex(item => item.id === payload);
        console.log(itemIndex)
            return {
                ...state.announcementList,
                announcements: [
                    ...state.announcementList.announcements.slice(0, itemIndex),
                    ...state.announcementList.announcements.slice(itemIndex + 1)
                ]
            }

      case 'SEARCH':
        const filteredAnnouncement = state.announcementList.announcements.filter(element => {
          return element.title.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        })
        return{
            ...state.announcementList,
            foundAnnouncements: filteredAnnouncement
        }

      case'ANNOUNCEMENT_ADDED':
      console.log(payload)
      return{
        ...state.announcementList,
        announcements: [
          ...state.announcementList.announcements,
          payload
        ]
      }

      case 'MODAL_OPEN':
        return{
          ...state.announcementList,
          open: true
        }

      case 'MODAL_CLOSED':
        return{
          ...state.announcementList,
          open: false
        }
      case 'TITLE_CHANGE':
        return {
          ...state.announcementList,
          newAnnouncement: {
                ...state.announcementList.newAnnouncement,
                title: payload, 
            }
        }

      case 'IMG_CHANGE':
        return {
          ...state.announcementList,
          newAnnouncement: {
                ...state.announcementList.newAnnouncement,
                img: payload, 
            }
        }

      case 'DESCRIPTION_CHANGE':
        return {
          ...state.announcementList,
          newAnnouncement: {
                ...state.announcementList.newAnnouncement,
                description: payload, 
            }
        }
  
      default:
        return state.announcementList;
    }
  };
  
  export default updateAnnouncementList
  