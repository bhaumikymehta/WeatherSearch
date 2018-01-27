import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){
  console.log("action recieved : ",action);
  switch (action.type) {
    case FETCH_WEATHER:
    {
      //both do the same thing
      return state.concat([action.payload.data ]);
      // return [action.payload.data, ...state];
    }
  }

  return state;

}
