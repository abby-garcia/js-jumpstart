Define method called divisor_match that takes three parameters, 
divisor_array an Array and low and high will be intergers:

function divisor_match(divisor_array, low, high)


The divisor_check method should:
- Print all numbers from low to high 
- if the any numbers beings printed is divisible  by any divisor in divisor_array, 
print the number + the word "one_match".

- If the number being printed is divisible by ALL the numbers in the arry, it should 
output the number + "all_match".

Sample Outpuy
If the function call were divisor_match([2,3], 1,7), 
the printed output would be:

1.
2.one_match
3.one_match
4.one_match
5.
6.all_match
