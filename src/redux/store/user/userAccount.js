const save = localStorage.getItem('account') || '{}'
let initial = JSON.parse(save)


const storeAccount = (state = initial, action) => {
     const { type, payload } = action;

     let account;

     switch (type) {
          case 'SIGN_IN':
               account = payload;
               localStorage.setItem('userID_laten', account._id);
               break;
          case 'SIGN_OUT':
               account = {}
               localStorage.removeItem('userID_laten')
               break;
          case 'UPDATE_USER_CART':
               account = {
                    ...state,
                    usercart: payload
               }
               break;
          default:
               return state;
     }

     return account
}
export default storeAccount