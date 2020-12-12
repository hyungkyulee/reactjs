import { DISHES } from '../common/dishes'
import { COMMENTS } from '../common/comments'
import { PROMOTIONS } from '../common/promotions'
import { LEADERS } from '../common/leaders'

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS, 
  leaders: LEADERS, 
  promotions: PROMOTIONS
}

export const Reducer = (state = initialState, action) => {
  return state
}