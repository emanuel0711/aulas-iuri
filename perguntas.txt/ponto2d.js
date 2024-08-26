var Ponto2D = /** @class */ (function () {
    // Construtor que pode ser chamado de duas formas
    function Ponto2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Ponto2D.prototype, "x", {
        // Getter e Setter para x
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ponto2D.prototype, "y", {
        // Getter e Setter para y
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Ponto2D;
});
