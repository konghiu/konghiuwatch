export const SIGN_IN = (payload) => {
     return {
          type: "SIGN_IN",
          payload
     }
}

export const SIGN_OUT = (payload) => {
     return {
          type: "SIGN_OUT",
          payload
     }
}

export const GET_PRODUCT = payload => {
     return {
          type: 'GET_PRODUCT',
          payload
     }
}

export const SHOW_INFO_PRODUCT = payload => {
     return {
          type: 'SHOW_INFO_PRODUCT',
          payload
     }
}

export const REMOVE_INFO_PRODUCT = payload => {
     return {
          type: 'REMOVE_INFO_PRODUCT',
          payload
     }
}

export const UPDATE_USER_CART = payload => {
     return {
          type: "UPDATE_USER_CART",
          payload
     }
}
