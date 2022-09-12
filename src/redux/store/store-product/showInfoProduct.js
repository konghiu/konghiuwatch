const initial = {};

const showInfoProduct = (state = initial, action) => {
     const { type, payload } = action;
     
     switch (type) {
          case 'SHOW_INFO_PRODUCT':
               return state = payload;               
          case 'REMOVE_INFO_PRODUCT':
               return state = {};               
          default:
               return state;
     }
}

export default showInfoProduct