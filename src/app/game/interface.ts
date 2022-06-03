export interface CardInfo {
    id: number;
    state: 'default' | 'flipped' | 'matched';
}

export interface GameParams {
    player: string;
    cards: 8 | 10 | 12;
    generation: 'all' | 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth' | 'seventh' | 'eighth';
}