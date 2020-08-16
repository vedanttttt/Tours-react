import {TOURS} from '../shared/tours';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

export const initialState = {
	tours: TOURS,
    comments: COMMENTS,
    leaders:LEADERS,
    promotions:PROMOTIONS
};

export const Reducer = (state = initialState ,action) => {
	return state;
};