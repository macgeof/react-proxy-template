import { call, put } from 'redux-saga/effects';
import { signUpSuccess, signUpFail } from '../../actions';

export function* signUp(__action)
{
	const __name = __action.payload.name;
	const __email = __action.payload.email;
	const __password = __action.payload.password;
	try
	{
		const __response = yield call(callFetch, __name, __email, __password);
		yield put(signUpSuccess(__response));
	}
	catch (__err)
	{
		yield put(signUpFail(__err));
	}
}

export function callFetch(__name, __email, __password)
{
	return fetch(`/api/greeting?name=${__name}&email=${__email}&password=${__password}`)
	  .then(__response => __response.json())
}