function name() {
    const chess = document.querySelector('#chess');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (var i = 0; i <= 9; i++) {
        var row = document.createElement('div');
        for (var j = 0; j <= 9; j++) {
            var col = document.createElement('div');
            row.append(col);
            if (i != 0 && i != 9) {
                if (j != 0 && j != 9) {
                    if (i % 2 == j % 2) {
                        col.className = 'black';
                    };
                };
            };
            if (i == 0 || i == 9) {
                if (j != 0 && j != 9) {
                    col.textContent = j;
                };
            };
            if (j == 0 || j == 9) {
                if (i != 0 && i != 9) {
                    col.textContent = letters[i - 1];
                };
            };
            if (i == 0 || i == 9 || j == 0 || j == 9) {
                col.className = 'frame';
            };
        };
        chess.append(row);
        row.className = 'column';
    };

};

name()