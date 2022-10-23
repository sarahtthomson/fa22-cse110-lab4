1. values added: 20
2. values added: 20
3. values added: 20
4. returns a result is not defined error. THis is because let is block scope and therefore result is only defined within the if statement it is in. So when you go to get the value of result at line 13 it does not know what result is.
5. returns an error assignment to constant variable. This is because if a variable is constant once you set it you can not change the value. So line 7 errors out the whole program because it is trying to assign a new variable to a const.
6. error because of what was explained in 5 so it never gets to that point, even if it did though it would error because line 13 is not in the scope of result