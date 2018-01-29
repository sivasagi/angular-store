import { Action } from '@ngrx/store';

export const load_sample = 'Loading sample';
export const load_sample_success = 'Loading sample success';
export const load_sample_failure = 'Loading sample failure';

export class loadSample implements Action{
	readonly type: string = load_sample;
	constructor() {

    }

}

export class loadSampleSuccess implements Action{
	readonly type: string = load_sample_success;
	constructor(public payload?: any) {

    }
	
}

export class loadSampleFailure implements Action{
	readonly type: string = load_sample_failure;
	constructor(public payload?: any) {

    }
}