function solve(start, end) {

    const spiral = [];
    for (let i = 0; i < start; i++) {
        const current = [];
        for (let j = 0; j < end; j++) {
            current.push('*')
            
        }
        spiral.push(current);
    }

    const rows = start - 1;
    const cols = end - 1;

    const spiralNumbers = (spiral, rows, cols, row, col, memo = {counter: 1}) => {

        if(row >= rows || col >= cols || row < 0 || col < 0 || spiral[row][col] !== '*') {
            return;
        }

        for (let i = col; i <= cols; i++) {
            spiral[row][i] = memo.counter;
            memo.counter++;
        }
        row++

        for (let i = row; i <= rows; i++) {
            spiral[i][cols] = memo.counter;
            memo.counter++;
        }
        cols--

        for (let i = cols; i >= col; i--) {
            spiral[col][i] = memo.counter;
            memo.counter++;
        }
        col++

        for (let i = row; i <= rows; i++) {
            spiral[i][cols] = memo.counter;
            memo.counter++;
        }

        // spiral[row][col] = memo.counter;
        // memo.counter++;

        spiralNumbers(spiral, rows, cols, row, col + 1, memo) // For Right
        spiralNumbers(spiral, rows, cols, row + 1, col, memo) // For Down
        spiralNumbers(spiral, rows, cols, row, col - 1, memo) // For Left
        // spiralNumbers(spiral, rows, cols, row - 1, col, memo) // For Up
    }

    spiralNumbers(spiral, rows, cols, 0, 0)

    for (const el of spiral) {
        console.log(el);
    }
}

solve(5, 5)