import { Gender } from "./gender.model";

export class Teacher {   
    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private email: string,
        private birthDate: Date,
        private gender: Gender,
        private notes: string,
        private zipCode: string,
        private street: string,
        private number: string,
        private neighborhood: string,
        private city: string,
        private state: string,
        private phoneNumber: string,
        private cellPhoneNumber: string,
        private bankAgency: string,
        private bankAccountNumber: string,
        private earnings: number
    ) { }

}