import { BehaviorSubject, Observable } from "rxjs";

import { Injectable } from "@angular/core";

@Injectable()
export class CacheService {
    private cache: { [key: string]: BehaviorSubject<unknown> } = {};

    setCache(key: string, value: unknown): void {
        this.cache[key] = new BehaviorSubject(value);
    }

    getCache(key: string): Observable<unknown> {
        const cacheValue = this.cache[key];

        if (!cacheValue) {
            this.setCache(key, null);
        }

        return this.cache[key].asObservable();
    }

    setPersistentCache(key: string, value: unknown): void {
        localStorage.setItem(key, JSON.stringify(value));
        this.setCache(key, value);
    }

    getPersistentCache(key: string): Observable<unknown> {
        const cachedValue = localStorage.getItem(key);

        if (!cachedValue) {
            this.setCache(key, null);
            return this.getCache(key);
        }

        const value = JSON.parse(cachedValue) as unknown;
        this.setCache(key, value);
        return this.getCache(key);
    }

    removeCache(key: string): void {
        localStorage.removeItem(key);
        delete this.cache[key];
    }

    clearCache(): void {
        this.cache = {};
    }
}
