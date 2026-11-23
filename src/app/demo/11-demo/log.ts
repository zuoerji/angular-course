import { signal } from '@angular/core';


export const LOG = signal<string[]>([]);

let instance = 0;

export function addLog(label:string) {
    const n = ++instance;
    LOG.update((l) => [...l, `${n}:${label}`]);
}