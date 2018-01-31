import { MainDomain } from '../domain/main-domain';
export interface mainState{
	data: MainDomain;
	isLoading: boolean;
}

export const main_app_state : mainState = {
	data : {},
	isLoading: true
}