export const toggleTimer = () => {
  return {
    type: 'TOGGLE_TIMER'
  };
}
export const setTimer = time => {
  return {
    type: 'SET_TIMER',
    time
  };
}
export const updateTimer = (time, seconds) => {
  return {
    type: 'UPDATE_TIMER',
    time,
    seconds
  };
}

const timer = (state = {}, action) =>{
  switch (action.type) {
    case 'TOGGLE_TIMER':
      return {
        ...state,
        showing: !state.showing
      };
    // case 'TOGGLE_ACTIVE':
    case 'SET_TIMER':
    return {
      ...state,
      time: action.time
    }
    // case 'STOP_TIMER':
    case 'UPDATE_TIMER':
      return {
        ...state,
        active: true,
        time: action.time,
        seconds: action.seconds
      };
    default:
      return state;
  }
};



export default timer;