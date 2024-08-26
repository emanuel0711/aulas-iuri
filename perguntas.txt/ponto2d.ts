import { Ponto2D } from './ponto2d';
export class Ponto2D {
    private _x: number;
    private _y: number;

    // Construtor que pode ser chamado de duas formas
    constructor(x: number = 0, y: number = 0) {
        this._x = x;
        this._y = y;
    }

    // Getter e Setter para x
    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    // Getter e Setter para y
    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
}
