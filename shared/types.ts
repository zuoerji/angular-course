

export interface ResultResponse<T = unknown> {
    success: boolean;
    message: string;
    data: T;
}

export interface User {
    id: string;
    name: string;
    age: number;
}

export interface ResultData {
    version: string;
    name: string;
}