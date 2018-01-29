import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {mainState} from '../store/states/main-state';
import{ loadSample } from '../store/actions/main-actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private store: Store<mainState>){
  	this.store.dispatch(new loadSample() );
  	this.store.select(state => state.data).subscribe(
  		(data) => {
  			console.log('siva' + data);
  		}
  	);
  	this.store.select(state => state.isLoading).subscribe(
  		(data) => {
  			console.log('siva1' + data);
  		}
  	);
  }
}
