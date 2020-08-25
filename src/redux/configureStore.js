import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Tours} from './tours';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			tours: Tours,
			comments:Comments,
			promotions: Promotions,
			leaders: Leaders
		}),
		applyMiddleware(thunk,logger)
		);

	return store;
}