import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Leaders } from './leaders'
import { Promotions } from './promotions'
import { createForms } from 'react-redux-form'
import { InitialContactForm } from './forms'
import { Feedbacks } from './feedback'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions,
      ...createForms({
        contactForm: InitialContactForm
      }),
      feedbacks: Feedbacks
    }),
    applyMiddleware(thunk, logger)
  )
  return store
}