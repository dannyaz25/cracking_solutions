import java.util.Arrays;

public class CSP {
    public static void main(String[] args) {
        // NOTE: You can use the following input values to test this function.
        int result= numberOfPossibilities(4); //{4, 8}, {7, 7}, {7, 5}, or {10, 4}
            System.out.println(result);
    
    }

    // a1 and a2 are the given arrays, and target is the target sum.
    // It should return an array of two numbers as the result,
    // one from each array.
   public static numberOfPossibilities(n) {
    int [] array = new int [n+1];
    array[0]=1;
    array[1]=1;
    
    for(int i=n ;i>=2 ;i--){
        array[i]=array[i-1]+array[i-2];
    }
    return array[n];
    }
}
