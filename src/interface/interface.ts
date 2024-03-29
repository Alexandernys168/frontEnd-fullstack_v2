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
    userId: number| undefined;
    userType: string;
    email: string;
}

export interface Encounter {

    userId: number;
    timeStamp: string;

}

export interface EncounterForDisplay {
    id: number;
    userId: number;
    timeStamp: string;
    observations: Observation[];
}

export interface Observation {
    msg: string;
    timeStamp: string;
    conditions: string[];

}

export interface Patient {
    userId: number;
    name: string;
    email: string;
}

export interface PatientForPage {
    id: number;
    userId: number;
    name: string;
    email: string;
}

export interface PatientDetails {
    name: string;
    email: string;
}

export interface Msg {
    content: string;
    timeStamp: string;
    sender: number;
    receiver: number;
}

export interface MsgForDisplay {
    senderName: string;
    id: number;
    content: string;
    timeStamp: string;
    sender: number;
    receiver: number;
}

export interface Doctor {
    userId: number;
    name: string;
    email: string;
}

export interface Others {
    userId: number;
    name: string;
    email: string;
}

export interface ImageCreation {
    name: string;
    description: string;
    imageData: string;
}

export interface ImageDetails {
    name: string;
    description: string;
    // Add other properties as needed
}