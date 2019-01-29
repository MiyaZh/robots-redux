import { 
	CHANGE_SEARCH_FIELD, 
	REQUEST_ROBOTS_PENDING, 
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED 
} from './constants.js'; 

const intialState = {
	searchField: ''
}

export const searchRobots = (state=intialState, action={}) => {
	//console.log(action.type)//have a default when redux initiates. when you type in something it always show CHANGE_SEARCH_FIELD
							//because the reducer on every action gets run, and says - did CHANGE-SEARCH_FIELD action happen? 
							//If that's the case I'm going to return a new state.
	switch(action.type) {
 		case CHANGE_SEARCH_FIELD:
 			return Object.assign({}, state, { searchField: action.payload });
 		  //return { ...state, searchField: action.payload}   
         // this has the same meaning as previous line.
 		default:
 			return state;
	}
}

const intialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=intialStateRobots, action={}) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: action.payload, isPending: false })
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false})
		default:
			return state;
	}
}