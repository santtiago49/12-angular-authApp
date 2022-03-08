export interface AuthResponse {
    ok   : boolean;
    uid  ?: string;
    name ?: string;
    token?: string;
}

export interface Usuario {
    name : string,
    uid  : string
}