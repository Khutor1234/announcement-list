import { announcementsData } from "../announcement-list-data";

const updateAnnouncementList = (state, action) => {
  const {type, payload} = action;

    if (state === undefined) {
      return {
        announcements: announcementsData,
        modal: null,
        newAnnouncement: {},
        errorModal: false
      };
    }

    console.log(type)

    switch (type) {
      case 'ANNOUNCEMENT_REMOVED_FROM_CART':
        const itemIndex = state.announcementList.announcements.findIndex(item => item.id === payload);
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
      const date = new Date()
      const newItem = {
        ...payload,
        data: date.toLocaleDateString(),
        id: Date.now()
      }
      console.log(newItem, 'newItem')
      return{
        ...state.announcementList,
        announcements: [
          ...state.announcementList.announcements,
          newItem
        ]
      }
      case 'ERROR_ADDING':
        return{
          ...state.announcementList,
          errorModal: true
        }

      case 'MODAL_OPEN':
        return{
          ...state.announcementList,
          modal: 'form'
        }

      case 'MODAL_CLOSED':
        return{
          ...state.announcementList,
          newAnnouncement: {},
          errorModal: false,
          modal: null
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
                coverImage: payload, 
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

        case 'SHOW_DETAILS':
          const str = payload.title.split(" ");
          let filteredItems = [];
          for(let i = 0; i < str.length; i++){
            const items = state.announcementList.announcements.filter(element => {
              return element.title.toLowerCase().indexOf(str[i].toLowerCase()) !== -1 && element.id !== payload.id 
            })
            filteredItems.push(...items)
          }
          const uniqueIngredients = filteredItems.filter((set => item => !set.has(item.title) && set.add(item.title))(new Set()))
          return{
            ...state.announcementList,
            modal: 'details',
            selectedItem: payload,
            similarItem: uniqueIngredients
          }

          case 'CHANGE_ITEM':
            console.log(payload, 'pay')
            return{
              ...state.announcementList,
              modal: 'changes',
              changedItem: payload
            }

          case 'NEW_IMG':
            return{
              ...state.announcementList,
              changedItem: {
                ...state.announcementList.changedItem,
                coverImage: payload
              }
            }
          case 'NEW_DESCRIPTION':
            return{
              ...state.announcementList,
              changedItem: {
                ...state.announcementList.changedItem,
                description: payload
              }
            }
          case 'NEW_TITLE':
            return{
              ...state.announcementList,
              changedItem: {
                ...state.announcementList.changedItem,
                title: payload
              }
            }
          case 'SAVE_CHANGE':
            console.log(payload)
            const index = state.announcementList.announcements.findIndex(item => item.id === payload.id);
            return {
              ...state.announcementList,
              announcements: [
                  ...state.announcementList.announcements.slice(0, index),
                  payload,
                  ...state.announcementList.announcements.slice(index + 1)
              ]
          }
  
      default:
        return state.announcementList;
    }
  };
  
  export default updateAnnouncementList
  