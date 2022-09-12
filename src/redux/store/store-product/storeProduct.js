let initial = [];

const storeProduct = (state = initial, action) => {

     const { type, payload } = action;
     switch (type) {
          case "GET_PRODUCT":
               return state = payload;
          default:
               return state;
     }

}

export default storeProduct