import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

@Injectable()
export class DataService {

    private serviceUrl: string = "http://localhost:4200/api/";
    //private serviceUrl : string = "https://localhost:44364/";    
    public authenticateOptions: RequestOptions;

    constructor(private http: Http) {
        this.LoadAuthenticate();
    }

    private LoadAuthenticate() {
        var token = localStorage.getItem('soccermanager.token');
        let headers = new Headers({ 'Authorization': 'Bearer ' + token });
        this.authenticateOptions = new RequestOptions({ headers: headers });
    }

    createUser(data: any) {
        console.log(data);
    }

    authenticate(data: any) {
        var dt = "grant_type=password&email=" + data.email + "&password=" + data.password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl + 'authenticate', dt, options)
            .map((res: Response) => res.json());

    }

    getStudents() {
        return this.http
            .get(this.serviceUrl + 'students', this.authenticateOptions)
            .map((res: Response) => res.json());
    }

    getStudent(id: any) {
        return this.http
            .get(this.serviceUrl + 'students/' + id, this.authenticateOptions)
            .map((res: Response) => res.json())
    }
    createStudent(data: any) {
        return this.http.post(this.serviceUrl + 'students', data, this.authenticateOptions)
            .map((res: Response) => res.json());;
    }
    updateStudent(data: any) {
        return this.http.put(this.serviceUrl + 'students/', data, this.authenticateOptions)
            .map((res: Response) => res.json());
    }
    deleteStudent(id: any) {
        return this.http.delete(this.serviceUrl + 'students/' + id, this.authenticateOptions)
            .map((res: Response) => res.json());
    }

    checkExistingEmail(email: string) {
        return this.http.get(this.serviceUrl + 'checkExistingEmail/' + email)
            .map((res: Response) => res.json());
    }

    getTeachers() {
        return this.http
            .get(this.serviceUrl + "teachers", this.authenticateOptions)
            .map((res: Response) => res.json());
    }
    getTeacher(teacherId:any){
        return this.http
        .get(this.serviceUrl + "teachers/" +  teacherId, this.authenticateOptions)
        .map((res: Response) => res.json());
    }



}