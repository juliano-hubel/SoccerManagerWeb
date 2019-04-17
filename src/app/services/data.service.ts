import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

@Injectable()
export class DataService {
    private serviceUrl : string = "http://localhost:4200/api/";
    //private serviceUrl : string = "https://localhost:44364/";
    constructor(private http: Http) {

    }

    createUser(data: any) {
        console.log(data);
    }

    getStudents() {
        return this.http
            .get(this.serviceUrl +  'students')
            .map((res: Response) => res.json());
    }

    getStudent(id : any)
    {
        return this.http
        .get(this.serviceUrl  + 'students/' + id)
        .map((res: Response) => res.json())
    }
    createStudent(data: any)
    {
        return this.http.post(this.serviceUrl + 'students', data)
        .map((res: Response) => res.json());;
    }
    updateStudent(data: any)
    {
        return this.http.put(this.serviceUrl + 'students/', data)
                .map((res:Response) => res.json());
    }

}