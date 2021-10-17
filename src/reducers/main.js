// 음식이름 변경

const searchModal = {
  name: "양꼬치",
  open: false
};

const CHANGE_FOODNAME = 'CHANGE_FOODNAME';
const CHANGE_OPEN = 'CHANGE_OPEN';

const changeFoodname = (data) => ({
  type: CHANGE_FOODNAME,
  data: data
});

const changeOpen = (data) => ({
  type: CHANGE_OPEN,
  data: data
})


function searchModalReducer(state = searchModal, action) {
  switch (action.type) {
    case CHANGE_FOODNAME:
      return {
        ...state,
        name: action.data.name
      };
    case CHANGE_OPEN:
      return {
        ...state,
        open: action.data.open
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default searchModalReducer;