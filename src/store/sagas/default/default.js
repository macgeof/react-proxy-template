import { call, put } from 'redux-saga/effects';
import { updateGreeting } from '../../actions';

export function* sendWelcome(__action)
{
	let __greeting = null;
	const __name = yield __action.payload;
	if (__name)
	{
		try
		{
			__greeting = yield call(callFetch, __name);
		}
		catch (__err)
		{
			// do nothing
		}
	}
	yield put(updateGreeting(__greeting));
}

export function callFetch(__name)
{
	return fetch(`/api/greeting/?name=${__name}`)
	  .then(__response => __response.json())
	  .then(__json => __json.greeting);
}