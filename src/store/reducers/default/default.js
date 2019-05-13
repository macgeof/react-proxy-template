import * as actionTypes from '../../../model/default/default'; 

export const initialState = {
	controls: {
		name: {
			elementType: 'input',
			elementConfig: {
				type: 'text',
				placeholder: 'Mail Address'
			},
			value: '',
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		email: {
			elementType: 'input',
			elementConfig: {
				type: 'email',
				placeholder: 'Mail Address'
			},
			value: '',
			validation: {
				required: true,
				isEmail: true
			},
			valid: false,
			touched: false
		},
		password1: {
			elementType: 'input',
			elementConfig: {
				type: 'password',
				placeholder: 'Password'
			},
			value: '',
			validation: {
				required: true,
				minLength: 6
			},
			valid: false,
			touched: false
		},
		password2: {
			elementType: 'input',
			elementConfig: {
				type: 'password',
				placeholder: 'Password'
			},
			value: '',
			validation: {
				required: true,
				minLength: 6
			},
			valid: false,
			touched: false
		}
	},
	name:null,
	email:null,
	password:null,
	isValid:false,
	signupResponse:null
}

export const defaultReducer = (__state = initialState, __action) => {
	let __updateState = {...__state};
	const __actionType = __action.type;
	switch (__actionType)
	{
		case actionTypes.UPDATE_CONTROLS :
		{
			__updateState.controls = __action.payload;
			__updateState.name = __updateState.controls.name.value;
			__updateState.email = __updateState.controls.email.value;
			const __passwordValid = (__updateState.controls.password1.value === __updateState.controls.password2.value);
			if (__passwordValid)
			{
				__updateState.password = __updateState.controls.password1.value
			}
			else
			{
				__updateState.password = null;
			}
			__updateState.isValid = (__updateState.controls.name.valid && __updateState.controls.email.valid && __passwordValid);
			break;
		}
		case actionTypes.SEND_SIGN_UP_FAIL :
		case actionTypes.SEND_SIGN_UP_SUCCESS :
		{
			__updateState.signupResponse = __action.payload;
			break;
		}
		default :
		{
			__updateState = __state;
		}
	}
	return __updateState;
}