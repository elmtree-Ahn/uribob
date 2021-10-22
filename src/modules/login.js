// 초기값 설정
const initialState = {
  email: ``,
  nickname: ``,
  thumnail_url: ``,
  gender: ``,
}

// 액션 타입 만들기
const SET_EMAIL = "login/SET_EMAIL";
const SET_NICKNAME = "login/SET_NICKNAME";
const SET_THUMNAIL_URL = "login/SET_THUMNAIL_URL";
const SET_GENDER = "login/SET_GENDER";


// 액션 생성함수 만들기
export const setEmail = email => ({type: SET_EMAIL, email});
export const setNickame = nickname => ({type: SET_NICKNAME, nickname});
export const setThumnailUrl = thumnail_url => ({type: SET_THUMNAIL_URL, thumnail_url});
export const setGender = gender => ({type: SET_GENDER, gender});


// 리듀서 선언 
export default function login(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case SET_NICKNAME:
      return {
        ...state,
        nickname: action.nickname
      }
    case SET_THUMNAIL_URL:
      return {
        ...state,
        thumnail_url: action.thumnail_url
      }
    case SET_GENDER :
      return {
        ...state,
        gender: action.gender
      }
    default:
      return state;
  }
}