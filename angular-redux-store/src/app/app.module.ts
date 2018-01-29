import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActionReducer, combineReducers, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { main_app_state } from '../store/states/main-state';
import { mainStoreData } from '../store/reducers/main-reducer';
import { EffectsModule } from '@ngrx/effects';
import { mainEffects } from '../store/effects/main-effects';
import { EquipmentDataService} from '../store/services/equipmentData-service';
export function mainReducer(state: any = main_app_state, action: any) {
    return mainStoreData(state, action);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    StoreModule.provideStore(mainReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(mainEffects)
  ],
  providers: [EquipmentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
