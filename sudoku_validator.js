//original puzzle
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];
//incorrect puzzle (copied the original and changed the first number)
let puzzleWrong = [[ 1,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];
//exact copy of original puzzle
let puzzleCopy = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

function getRow(puzzle, row) {
    return puzzle[row];
}

function getColumn(puzzle, column) {
    let makeColumn = [];

    for (let i = 0; i < 9; i++) {
        makeColumn.push(puzzle[i][column]);
    }
    return makeColumn;
}

function getSection(puzzle, x, y) {
    let makeSubGrid = [];
    let row1;
    let row2;
    let row3;
    let start;
    let end;
    
    for (let i = 0; i < 3; i++) {
        if (i === x) {
            start = i * 3;
            end = (i * 3) + 3;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (i === y) {
            row1 = i * 3;
            row2 = (i * 3) + 1;
            row3 = (i * 3) + 2;
        }
    }

    makeSubGrid = makeSubGrid.concat(getRow(puzzle, row1).slice(start, end))
    makeSubGrid = makeSubGrid.concat(getRow(puzzle, row2).slice(start, end))
    return makeSubGrid.concat(getRow(puzzle, row3).slice(start, end))
}

function includes1to9(subsection) {
    for (let i = 1; i < 10; i++) {
        if (!subsection.includes(i)) {
            return false;
        }
    }
    return true;
}

function sudokuIsValid(puzzle){
    for (i = 0; i < 9; i++) {
        if (!includes1to9(getRow(puzzle, i))) {
            return false
        }
    }
    
    for (i = 0; i < 9; i++) {
        if (!includes1to9(getColumn(puzzle, i))) {
            return false
        }
    }    

    for (i = 0; i < 3; i++) {
        if (!includes1to9(getSection(puzzle, 0, i))) {
            return false
        }
        if (!includes1to9(getSection(puzzle, 1, i))) {
            return false
        }
        if (!includes1to9(getSection(puzzle, 2, i))) {
            return false
        }
    }
    return true;
}

function isSame(puzzle1, puzzle2) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (puzzle1[i][j] !== puzzle2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

//checking to see if everything works

//expected value = true
console.log(sudokuIsValid(puzzle));
//expected value = false
console.log(sudokuIsValid(puzzleWrong));
//expected value = true
console.log(isSame(puzzle, puzzleCopy));
//expected value = false
console.log(isSame(puzzle, puzzleWrong));