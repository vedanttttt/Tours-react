import * as ActionTypes from './ActionTypes';
import {TOURS} from '../shared/tours';

export const addComment = (tourId,rating,author,comment) =>({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		dishId: tourId,
		rating: rating,
		author: author,
		comment: comment
	}
});

export const fetchTours = () => (dispatch) => {
	dispatch(toursLoading(true));

	setTimeout(()=> {
		dispatch(addTours(TOURS));
	},2000);
}

export const toursLoading = () => ({
	type:ActionTypes.TOURS_LOADING
});

export const toursFailed = (errmess) => ({
	type: ActionTypes.TOURS_FAILED,
	payload: errmess
});

export const addTours = (tours) => ({
	type: ActionTypes.ADD_TOURS,
	payload: tours
});