NESTED FOR LOOP ADVENTURE: 

1. declare and initialize the variable i to 1
2. check if i (1) is less than or equal to 3 (true)
3. declare and initialize the variable str to an empty string ("")
4. declare and initialize the variable j to 1
5. check if j (1) is less than or equal to i (1) (true)
6. concatenate str ("") with j (1) and reassign the result to str ("1")
7. increment j by 1 (2)
8. check if j (2) is less than or equal to i (1) (false)
9. console the variable str ("1")
10. increment i by 1 (2)
11. check if i (2) is less than or equal to 3 (true)
12. declare and initialize the variable str to an empty string ("")
13. declare and initialize the variable j to 1
14. check if j (1) is less than or equal to i (2) (true)
15. concatenate str ("") with j (1) and reassign the result to str ("1")
16. increment j by 1 (2)
17. check if j (2) is less than or equal to i (2) (true)
18. concatenate str ("1") with j (2) and reassign the result to str ("12") 
19. increment j by 1 (3)
20. check if j (3) is less than or equal to i (2) (false)
21. console the variable str ("12")
22. increment i by 1 (3)
23. check if i (3) is less than or equal to 3 (true)
24. declare and initialize the variable str to an empty string ("")
25. declare and initialize the variable j to 1
26. check if j (1) is less than or equal to i (3) (true)
27. concatenate str ("") with j (1) and reassign the result to str ("1")
28. increment j by 1 (2)
29. check if j (2) is less than or equal to i (3) (true)
30. concatenate str ("1") with j (2) and reassign the result to str ("12")
31. increment j by 1 (3)
32. check if j (3) is less than or equal to i (3) (true)
33. concatenate str ("12") with j (3) and reassign the result to str ("123")
34. increment j by 1 (4)
35. check if j (4) is less than or equal to i (3) (false)
36. console the variable str ("123")
37. increment i by 1 (4)
38. check if i (4) is less than or equal to 3 (false)
39. console log string literal "done" 


CODE: 

for (let i = 1; i <= 3; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
        str += j 
    }
    console.log(str)
}
console.log('done')


OUTPUT: 

1
12
123
done