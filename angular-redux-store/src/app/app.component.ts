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
  div1Color = 'red';
  div2Color = 'green';
  div3Color = 'blue';
  constructor(private store: Store<mainState>){
  	
  }
  dispatch(){
  	this.store.dispatch(new loadSample() );
  	this.store.select(state => state.data).subscribe(
  		(data) => {
  			console.log('siva' + data);
  			this.div1Color = data.div1Color;
  			this.div2Color = data.div2Color;
  			this.div3Color = data.div3Color;
  		}
  	);
  	this.store.select(state => state.isLoading).subscribe(
  		(data) => {
  			console.log('siva1' + data);
  		}
  	);
  }
}
