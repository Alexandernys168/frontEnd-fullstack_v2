export interface User{

    name: string;
    userType: string;
    email: string;
    password: string;
}

export interface LoginUser {
    email: string;
    password: string;
}

export interface  LoggedInUser {

    userType: string;
    email: string;
}

export interface Encounter {
    patientId: number;
    timeStamp: string;

}

export interface Observation {
    msg: string;
    timeStamp: string;
    encounterId: number;
}

export interface Patient {
    id: number;
    name: string;
    email: string;
}

export interface PatientDetails {
    name: string;
    email: string;
}