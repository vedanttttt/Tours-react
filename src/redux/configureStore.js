import {createStore,combineReducers} from 'redux';
import {Tours} from './tours';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			tours: Tours,
			comments:Comments,
			promotions: Promotions,
			leaders: Leaders
		})
		);

	return store;
}