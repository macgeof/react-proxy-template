import { action } from "typesafe-actions";
import * as defaultActionTypes from '../../../model/default/default';


export const welcomeSaga	=	(__name)		=>	action(defaultActionTypes.WELCOME_SAGA, __name);
export const updateGreeting	=	(__greeting)	=>	action(defaultActionTypes.UPDATE_GREETING, __greeting);