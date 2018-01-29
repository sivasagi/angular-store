import { Action, ActionReducer } from '@ngrx/store';
import { mainState } from '../states/main-state';
import{ load_sample, load_sample_success, load_sample_failure, loadSample, loadSampleSuccess, loadSampleFailure} from '../actions/main-actions';
export const mainStoreData: ActionReducer<any> = (state: mainState, action: Action) => {
	switch(action.type){
		case load_sample:
			const newStateLoadSample = Object.assign({}, state);
            newStateLoadSample.isLoading = true;
            return newStateLoadSample;
        case load_sample_success:
        	const newStateLoadSampleSuccess = Object.assign({},state);
        	newStateLoadSampleSuccess.isLoading = false;
        	newStateLoadSampleSuccess.data = action.payload;
        	return newStateLoadSampleSuccess;
        case load_sample_failure:
        	const newStateLoadSampleFailure = Object.assign({},state);
        	newStateLoadSampleFailure.isLoading = false;
        	return newStateLoadSampleFailure;
	}
}