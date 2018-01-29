import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { EquipmentDataService } from '../services/equipmentData-service';
import{ load_sample, load_sample_success, load_sample_failure, loadSample, loadSampleSuccess, loadSampleFailure} from '../actions/main-actions';

@Injectable()
export class mainEffects {
	constructor(private equipmentDataService: EquipmentDataService,
				private actions$: Actions,){

	}
	@Effect() equipmentData$: Observable<Action> = this.actions$
        .ofType(load_sample)
        .switchMap((action) => this.equipmentDataService.loadEquipmentData())
        .publishReplay(1).refCount()
        .map(equipmentData => new loadSampleSuccess(equipmentData))
        .catch((error) => Observable.of(new loadSampleFailure(error)));
}