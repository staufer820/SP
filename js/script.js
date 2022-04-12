const gameboard = document.getElementById("gameboard");

class Field {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

class Number {
    constructor(number, field) {
        this.number = number;
        this.field = field;
        if (this.number % 2 == 0) {
            this.color = "white";
            this.backgroundColor = "red";
        } else {
            this.color = "red";
            this.backgroundColor = "white";
        }
    }
}

class Board {
    constructor(size) {
        this.size = size;
        this.fields = [];

        for (let i = 0; i < size; i++) {
            let fields_i = [];
            let row = document.createElement("tr");
            gameboard.append(row);
            for (let j = 0; j < size; j++) {
                let field = new Field(i, j);
                fields_i.push(field);
                let column = document.createElement("td");
                column.setAttribute("row", i);
                column.setAttribute("column", j);
                row.append(column);
            }
            this.fields.push(fields_i);
        }
    }
}