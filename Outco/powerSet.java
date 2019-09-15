/*
 *  Problem 1:  Powerset - Helper Method Recursion
 *
 *  Prompt:   Given a set S, return the powerset P(S), which is
 *            a set of all subsets of S.
 *
 *  Input:    {String}
 *  Output:   {Array}
 *
 *  Example:  S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']


"" =>    [""]
"a" =>   ["", a]
"ab" =>  ["", a, b, ab]
"abc" => ["", a, b, ab, c, ac, bc, abc]

 *
 *  Notes:     The input string will not contain duplicate characters
 *            The letters in the subset string must be in the same order
 *            as the original input.
 */

/*
STEPS
Instantiate state variables
Return state variables
Instantiate and invoke helper method
Base case(s)
Recursive case(s)
*/

class Powerset {
    public static ArrayList<String> result = new ArrayList<String>();
    public static String strInput;

    public static List<String> compute(String str) {
        result.clear();
        strInput = str;

        traverse(0, "")

        return result;
    }

    public static void traverse(int depth, String current) {
        if (depth >= strInput.length()) {
            result.add(current);
            return;
        }

        traverse(depth + 1, current);
        traverse(depth + 1, current + strInput.charAt(depth))
    }
}