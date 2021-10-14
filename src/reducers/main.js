const foodNameState = {
  name: '양꼬치'
}

export const foodNameAction = (data) => {
  return {
    type: 'FOODNAME',
    data: data
  }
}

const foodNameReducer = (state = foodNameState, action) => {
  switch (action.type) {
    case 'CHANGE' : {
      return {
        ...state,
        name: action.data.name
      }
    }
    default: {
      return {
        ...state
      }
    }
  }

}

export default foodNameReducer;