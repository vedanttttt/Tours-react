import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';
import {Tours} from './tours';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback} from './forms';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			tours: Tours,
			comments:Comments,
			promotions: Promotions,
			leaders: Leaders,
			...createForms({
				feedback: InitialFeedback
			})
		}),
		applyMiddleware(thunk,logger)
		);

	return store;
}