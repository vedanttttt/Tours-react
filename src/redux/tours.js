import * as ActionTypes from './ActionTypes';

export const Tours = (state= {
		isLoading : true,
		errMess: null,
		tours: []
	},action) => {
	switch(action.type){
		case ActionTypes.ADD_TOURS:
			return {...state,isLoading:false,errMess:null,tours:action.payload};

		case ActionTypes.TOURS_LOADING:
			return {...state,isLoading:true,errMess: null,tours: []};

		case ActionTypes.TOURS_FAILED:
			return {...state,isLoading:false,errMess:action.payload,tours:[]};

		default:
			return state;
	}
}