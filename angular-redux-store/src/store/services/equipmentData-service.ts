import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class EquipmentDataService {
 

    constructor(private http: Http) {

    }

    loadEquipmentData() {
        // return this.httpClient.get(`/api/vdp/v1.0/vehicle/equipment/statement/${vehicleId}`)
        return this.http.get(`https://api.myjson.com/bins/uxtft`)
            .retry(3)
            .map(res => res.json())
            // .map(res => res)
            .catch((error: any, o: any) => {
                return Observable.throw(error);
            });
    }
}
