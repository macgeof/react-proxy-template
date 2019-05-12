// import { put, take } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
// import test from 'tape';
import { sendWelcome, callFetch } from './default';
import { welcomeSaga } from '../../actions';
import * as actionTypes from '../../../model/default/default';
import { call } from 'redux-saga/effects';

const __name = 'Test Name';
let __action = welcomeSaga(__name);
let __generator = sendWelcome(__action);

test('should have action with the required properties', () => {
	expect(__action.type).toEqual(actionTypes.WELCOME_SAGA);
	expect(__action.payload).toEqual(__name);
});
test('should have first state value of action payload', () => {
	expect(__generator.next().value).toEqual(__name);
});
test('it should call service with name',  () => {
	expect(__generator.next()).toMatchObject(call(callFetch, __name));
});