import { action } from "typesafe-actions";
import * as defaultActionTypes from '../../../model/default/default';


export const welcomeSaga	=	(__name)		=>	action(defaultActionTypes.WELCOME_SAGA, __name);
export const updateGreeting	=	(__greeting)	=>	action(defaultActionTypes.UPDATE_GREETING, __greeting);
export const updateControls	=	(__data)		=>	action(defaultActionTypes.UPDATE_CONTROLS, __data);
export const signUp			=	(__data)		=>	action(defaultActionTypes.SEND_SIGN_UP, __data);
export const signUpFail		=	(__data)		=>	action(defaultActionTypes.SEND_SIGN_UP_FAIL, __data);
export const signUpSuccess	=	(__data)		=>	action(defaultActionTypes.SEND_SIGN_UP_SUCCESS, __data);