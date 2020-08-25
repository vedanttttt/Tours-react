import * as ActionTypes from './ActionTypes';
//import {TOURS} from '../shared/tours';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (comment) =>({
	type: ActionTypes.ADD_COMMENT,
	payload: comment
});

export const postComment = (tourId,rating,author,comment) => (dispatch) => {
	const newComment = {
		dishId: tourId,
		rating: rating,
		author: author,
		comment: comment
	}
	newComment.date = new Date().toISOString();

	return fetch(baseUrl + 'comments',{
		method: 'POST',
		body: JSON.stringify(newComment),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
	.then(response => {
			if(response.ok){
				return response;
			}
			else{
				var error = new Error('Error: ' + response.status + ' : ' + response.statusText);
				error.response=response;
				throw error;
			}
		},
		error => {
			var error = new Error(error.message);
			throw error;
		})
		.then(response=> response.json())
		.then(response => dispatch(addComment(response)))
		.catch(error => {console.log('POST comments', error.message)
			alert('Your comment could not be postedError: '+ error.message)})	
}

export const fetchTours = () => (dispatch) => {
	dispatch(toursLoading(true));

	return fetch(baseUrl + 'tours')
		.then(response => {
			if(response.ok){
				return response;
			}
			else{
				var error = new Error('Error: ' + response.status + ' : ' + response.statusText);
				error.response=response;
				throw error;
			}
		},
		error => {
			var error = new Error(error.message);
			throw error;
		})
		.then(response => response.json())
		.then(tours => dispatch(addTours(tours)))
		.catch(error => dispatch(toursFailed(error.message)));
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
		.then(response => {
				if(response.ok){
					return response;
				}
				else{
					var error = new Error('Error: ' + response.status + ' : ' + response.statusText);
					error.response=response;
					throw error;
				}
			},
			error => {
				var error = new Error(error.message);
				throw error;
		})
		.then(response => response.json())
		.then(comments => dispatch(addComments(comments)))
		.catch(error => dispatch(commentsFailed(error.message)));
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
		.then(response => {
				if(response.ok){
					return response;
				}
				else{
					var error = new Error('Error: ' + response.status + ' : ' + response.statusText);
					error.response=response;
					throw error;
				}
			},
			error => {
				var error = new Error(error.message);
				throw error;
		})
		.then(response => response.json())
		.then(promos => dispatch(addPromos(promos)))
		.catch(error => dispatch(promosFailed(error.message)));
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