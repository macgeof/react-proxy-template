import { takeLatest } from 'redux-saga/effects';
import { WELCOME_SAGA } from '../../model/default/default';
import { sendWelcome } from './default/default';

export function* watchDefaultSagas()
{
	yield takeLatest(WELCOME_SAGA, sendWelcome);
}