import * as ActionTypes from './ActionTypes';

export const addComment = (tourId,rating,author,comment) =>({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		dishId: tourId,
		rating: rating,
		author: author,
		comment: comment
	}
});