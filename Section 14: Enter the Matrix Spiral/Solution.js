function matrix(n) {
    let result = Array.from({ length: n }, () => Array(n).fill(0)),
        counter = 1,
        startRow = 0,
        endRow = n - 1,
        startCol = 0,
        endCol = n - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter++;
        }
        startCol++;
    }

    return result;
}

console.log(matrix(5));
