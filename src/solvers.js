/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

//create a holder variable for our solution
// 

window.findNRooksSolution = function(n) {

// togglePiece: function(rowIndex, colIndex)

  // create a var to store solution
  var solution;
  // create our board with size defined by n
  var board = new Board( { 'n' : n } );
  

function test() {
  for (var rowIndex = 0; rowIndex < board.rows().length; rowIndex++) {
    for (var colIndex = 0; colIndex < board.rows()[rowIndex].length; colIndex++) {
        board.togglePiece([rowIndex], [colIndex])
      if(board.hasRowConflictAt([rowIndex]) || board.hasColConflictAt([colIndex])) {
        board.togglePiece([rowIndex], [colIndex]);
      } 

    }
  }
}

test();
  
  // Track: colIndexOfCurrentPiece, rowOfCurrentPiece, 
  var recuse = function (colIndexOfCurrentPiece, rowOfCurrentPiece) {

  // Start iterating at the last place of the first row
    // check if that rook has a conflict with col or row
    // if true
      // start looping from the beginning of the board.
        // check if first spot (index 0) is taken
        // if it is, 
          // continue to the next spot.
        // else 
          //toggle current piece from prev index
          // toggle current index
            //if there are no row or col conflicts at new position
              // leave that piece in current place
            // if there are
              // move piece to next space available (recurse the process) 

  //Take the next rook on the loop (decending)
   //Start the same process applied to previous rook
    //Repeat the process until loops ends (first element on the array)
  };
 
  // return the solution
  solution = board.rows();

  if(board.hasAnyRowConflicts()) {
    return undefined;
  } else {
    return solution;
  }
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
