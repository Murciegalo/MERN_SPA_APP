import {
  FETCH_TOURS_STARTS, 
  FETCH_TOURS_SUCCESS, 
  FETCH_TOURS_FAILED,
  FETCH_TOUR_STARTS,
  FETCH_TOUR_SUCCESS,
  FETCH_TOUR_FAILED,
  GRAB_BOOKED_TOURS_START,
  GRAB_BOOKED_TOURS_SUCCESS,
  GRAB_BOOKED_TOURS_FAILED
} from './types'

const INITIAL_STATE = {
  tours: null ,
  tour: null,
  bookedTours: null,
  loading: false, 
  error: null
};


const toursReducer = (state = INITIAL_STATE, action) => {
  const { type , payload } = action
  switch (type) {
    case FETCH_TOURS_STARTS:
      return {
        ...state,
        tour: null,
        loading: true,
        error: null
      }
    case FETCH_TOUR_STARTS:
      return {
        ...state,
        tour: null,
        loading: true,
        error: null
      }
    case FETCH_TOURS_SUCCESS:
      return {
        ...state,
        loading: false,
        tours: payload
      }
    case FETCH_TOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        tour: payload.data
      }
    case FETCH_TOURS_FAILED:
    case FETCH_TOUR_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case GRAB_BOOKED_TOURS_START:
      return {
        ...state,
        loading: true,
        bookedTours: null
      }
    case GRAB_BOOKED_TOURS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookedTours: payload
      }
    case GRAB_BOOKED_TOURS_FAILED:
      return {
        ...state,
        loading: false,
        bookedTours: null,
        error: payload
      }   
    default:
      return state;
  }
};

export default toursReducer;
