// 초기값 설정
const initialSate = {
  onOff: false,
  foodName: '',
}

// 액션 타입 만들기
const MODAL_ONOFF = "modalOnOff/MODAL_ONOFF";
const CHANGE_FOODNAME = "modalOnOff/CHANGE_FOODNAME";

// 액션 생성함수 만들기
export const modalOnOff = () => ({type: MODAL_ONOFF});
export const changeFoodname = foodName => ({type: CHANGE_FOODNAME, foodName});

// 리듀서 선언
export default function modal(state = initialSate, action) {
  switch (action.type) {
    case MODAL_ONOFF:
      return {
        ...state,
        onOff: !state.onOff
      };
    case CHANGE_FOODNAME:
      return{
        ...state,
        foodName: action.foodName
      };
    default:
      return state;
  }
}