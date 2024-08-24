import {
  CLEAR_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  NEW_PASSWORD_REQUEST,
  FORGOT_PASSWORD_FAIL,
  NEW_PASSWORD_FAIL,
  NEW_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
} from "../constants/userConstants.js";

export const authReducer = (
  state = {
    user: null,
    loading: false,
    isAuthenticaed: false,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
    case LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        errpr: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userReducer=(state={},action)=>{
  switch(action.type){
    case UPDATE_PROFILE_REQUEST:
      case UPDATE_PASSWORD_REQUEST:
      return{
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      case UPDATE_PASSWORD_SUCCESS:
      return {
       ...state,
       loading:false,
       isUpdtated:action.payload
      } ;
      case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
      
        return {
          ...state,
          isUpdated:false,
        };
        case UPDATE_PROFILE_FAIL:
          return {
            ...state,
            error:null,
          };
          case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
        default :
        return state;
           
          
  }

};
export const forgotPassword = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
    case NEW_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,  // Setting success to true instead of message
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case FORGOT_PASSWORD_FAIL:
    case NEW_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
