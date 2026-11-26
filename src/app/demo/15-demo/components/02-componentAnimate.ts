import {Component, ErrorHandler, inject, signal} from '@angular/core';

/**
 * 动画
 * animate.enter / animate.leave
 * */

type Card = { id: number; label: string };

@Component({
    selector: 'component-comm',
    templateUrl: './html/component-animate.html',
    styleUrl: './css/index.css',
})
export class ComponentComm {
    cards = signal<Card[]>([
        { id: 1, label: '卡片 1' },
        { id: 2, label: '卡片 2' },
    ]);

    nextId = 3;

    addCard() {
        const id = this.nextId++;
        this.cards.update((list) => [...list, { id, label: `卡片 ${id}` }])
    }
    reduceCard() {
        if (this.cards().length === 0) return;
        this.cards.update((list) => list.slice(0, -1))
    }
}