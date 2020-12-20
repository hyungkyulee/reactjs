import * as ActionTypes from './actionTypes'

export const Feedbacks = (state = {errorMessage: null, feedbacks: []}, action) => {
  switch(action.type) {
    case ActionTypes.ADD_FEEDBACK:
        var feedback = action.payload
        return { ...state, feedbacks: state.feedbacks.concat(feedback)}

    default:
      return state
  }
}