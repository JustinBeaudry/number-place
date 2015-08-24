Number Place
============

An HTM5, Javascript implementation of the game Number Place, or as it more popularily known: Sudoku 

## What is Number Place (or Sudoku)?

* The Classic Sudoku is a number placing puzzle based on a 9x9 grid with several given numbers. 
* The object is to place the numbers 1 to 9 in the empty squares so that each row, each column and each 3x3 box contains the same number only once.

## Resources
* [Wikipedia Sudoku](http://en.wikipedia.org/wiki/Sudoku)

### Latin Square
* (Combinatorics) n x n array filled with n different symbols
* orthogonal array respresentation (if each entry of a 3x3 sqaure is written as
  triple (r, c, s), where r = row, c = column, and s = symbol) we obtain a set
  of n^2 triples called an orthogonal array respresentation of the square

## NOT reinventing the wheel
* [Another developers blog on designing and creating](http://moriel.smarterthanthat.com/tips/javascript-sudoku-backtracking-algorithm/)
* [Yet another developers blog](http://codeutopia.net/blog/2008/11/29/generating-sudoku-puzzles-using-javascript/)

## Possible Algorithms
* [Backtracking](https://en.wikipedia.org/wiki/Backtracking) &amp; [Recursively solve a sudoku puzzle with Backtracking](http://stackoverflow.com/questions/18168503/recursively-solving-a-sudoku-puzzle-using-backtracking-theoretically)
* [Dancing Links](http://en.wikipedia.org/wiki/Dancing_Links) &amp; [Algorithm X](http://en.wikipedia.org/wiki/Knuth%27s_Algorithm_X) &amp; [Exact Cover](http://en.wikipedia.org/wiki/Exact_cover)

## Architecture

### HTML
* jade

### CSS
* bootstrap
* SASS

### JS
* jquery
* lodash

### Tests
* mocha

### Build
* browserify
* gulp
* gulp-jade
* gulp-sass
* gulp-browserify
* gulp-beautify
* gulp-eslint
* gulp-browserify 

### Design Pattern

Singleton
