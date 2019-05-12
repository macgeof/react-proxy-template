import * as actionTypes from '../../../model/default/default';
import * as actions from './default';

describe('ACTIONS', () => {
   it('should create a welcome saga action with correct type', () => {
      const __expectedAction = {
              type: actionTypes.WELCOME_SAGA
             }
      expect(actions.welcomeSaga()).toEqual(__expectedAction)
  });
   it('should create an update greeting action with correct type', () => {
	   const __greeting = 'some test greeting';
      const __expectedAction = {
			  type: actionTypes.UPDATE_GREETING,
			  payload:__greeting
             }
      expect(actions.updateGreeting(__greeting)).toEqual(__expectedAction)
  });
})