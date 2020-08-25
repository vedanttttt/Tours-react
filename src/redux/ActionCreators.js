import * as ActionTypes from './ActionTypes';
import {TOURS} from '../shared/tours';
import {baseUrl} from '../shared/baseUrl';

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

	return fetch(baseUrl + 'tours')
		.then(response => response.json())
		.then(tours => dispatch(addTours(tours)));
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

export const fetchComments = () => (dispatch) => {
	return fetch(baseUrl + 'comments')
		.then(response => response.json())
		.then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
	type : ActionTypes.COMMENTS_FAILED,
	payload: errmess
});

export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments
});

export const fetchPromos = () => (dispatch) => {
	dispatch(promosLoading(true));

	return fetch(baseUrl + 'promotions')
		.then(response => response.json())
		.then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
	type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
	type: ActionTypes.PROMOS_FAILED,
	payload: errmess
});

export const addPromos = (promos) => ({
	type: ActionTypes.ADD_PROMOS,
	payload: promos
})