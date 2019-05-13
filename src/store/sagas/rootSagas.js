import { takeLatest } from 'redux-saga/effects';
import { SEND_SIGN_UP } from '../../model/default/default';
import { signUp } from './default/default';

export function* watchDefaultSagas()
{
	yield takeLatest(SEND_SIGN_UP, signUp)
}