import {defaultReducer, initialState} from "./default";
import * as actionTypes from '../../../model/default/default';

test('should return the initial state', () => {
	expect(defaultReducer(undefined, {})).toEqual(initialState)
})
test('should handle "UPDATE_GREETING" action', () => {
	const __greeting = 'Hello World'
	expect(defaultReducer({}, {
		type: actionTypes.UPDATE_GREETING,
		payload:__greeting
	}))
	.toEqual({
		greeting: __greeting
	})
});