/*
*  Problem: Lattice Paths - Pure Recursion
*
*  Prompt:  Count the number of unique paths to travel from the top left
*           corder to the bottom right corner of a lattice of M x N squares.
*
*           When moving through the lattice, one can only travel to the adjacent
*           corner on the right or down.
*
*  Input:   m {Integer} - rows of squares
*  Input:   n {Integer} - column of squares
*  Output:  {Integer}
*
*  Example: input: (2, 3)
*
*           (2 x 3 lattice of squares)
*            __ __ __
*           |__|__|__|
*           |__|__|__|
*
*           output: 10 (number of unique paths from top left corner to bottom right)
*
*  Resource: https://projecteuler.net/problem=15
*
*/

// Time Complexity:
// Auxiliary Space Complexity:

class LatticePaths {
    public static int compute(int m, int n) {
        if (m < 0 || n < 0) {
            return 0;
        }

        if (m == 0 && n == 0) {
            return 1;
        }

        return compute(m - 1, n) + compute(m, n - 1);
    }
}