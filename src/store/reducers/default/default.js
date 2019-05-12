import * as actionTypes from '../../../model/default/default'; 

export const initialState = {
	greeting	:	null
}

export const defaultReducer = (__state = initialState, __action) => {
	let __updateState = {...__state};
	const __actionType = __action.type;
	switch (__actionType)
	{
		case actionTypes.UPDATE_GREETING :
		{
			__updateState.greeting = __action.payload;
			break;
		}
		default :
		{
			__updateState = __state;
		}
	}
	return __updateState;
}