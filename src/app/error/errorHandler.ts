
import { ErrorHandler, Injectable, signal } from '@angular/core';

export type ErrorEntry = { at: string; source: string; message: string };

export const ERROR_LOG = signal<ErrorEntry[]>([]);

export function clearErrorLog(): void {
    ERROR_LOG.set([]);
}

@Injectable()
export class LocalErrorHandler extends ErrorHandler {
    override handleError(error: unknown): void {
        const message = error instanceof Error ? error.message : String(error);
        ERROR_LOG.update((list) => [
            ...list.slice(-7),
            {
                at: new Date().toLocaleTimeString('zh-CN', { hour12: false }),
                source: 'ErrorHandler.handleError',
                message,
            },
        ]);
    }
}
