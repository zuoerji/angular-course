// src/app/services/auth.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _token = signal<string | null>(null);

    setToken(token: string) {
        this._token.set(token);
    }

    getToken(): string | null {
        return this._token();
    }

    clearToken() {
        this._token.set(null);
    }
}