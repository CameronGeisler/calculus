var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-calculating-limits",
  "level": "1",
  "url": "sec-calculating-limits.html",
  "type": "Section",
  "number": "1.1",
  "title": "Calculating Limits",
  "body": " Calculating Limits   We can evaluate limits using a variety of techniques.    Simple Limits (Direct Substitution)   Direct Substitution with a Linear Function  Consider . We know that the function is a line, and it is never undefined, particularly not at , because . Then, we expect that as approaches 3, gets closer to 7. Then,   In other words, we can just plug in to get the limit value.   In general, for a linear function, you can just plug in the limit point that you're approaching.   Direct Substitution with a Quadratic Function  Consider . We know that this function is a parabola. In a similar way, as approaches 2, the -value will approach the function's -value at , which we can get by just plugging in ,    In general, if you can plug in the limit point and get a number (as opposed to something where you divide by 0), then that will be the limit value. This works almost always. These functions are nice in that there are no holes, asymptotes, jumps, or anything strange that would make the limits be more challenging to find.   Direct Substitution with a Rational Function  Consider . Again, let's see if we can plug in ,   This means the limit is just 2,    In general, the limit of a polynomial function can be found by just substituting the value that is approaching.    If is a polynomial function, then .    Also, for a rational function, the same rule applies, as long as you don't divide by 0 when you plug it in.    If is a rational function, then , as long as is in the domain of .     Direct Substitution  Evaluate each limit.                      Limits in Indeterminate Form  Most limits will not be this simple. Instead, when you plug in the limit point, you will get an expression of the form , where the denominator is 0 (dividing by 0, which makes it undefined), and the numerator is also 0.    Factoring and Canceling   Factoring to Evaluate a Limit  Consider the limit,   The function is undefined at , because plugging in leads to dividing by 0. However, it turns out that we can algebraically manipulate it, by factoring the numerator,   Then, cancelling the common factor of ,   Then, since there is no denominator anymore, it turns out we can just plug in to get the answer. In total,   This works because the simplified version is equal to the original expression,   They are the same everywhere, except for (because then the left-hand side gives an error for dividing by 0, but the right-hand side gives ). Therefore, if you want to know what is doing near , you can instead consider the simplified expression .  This is because a limit only cares about values of  near  , and doesn't care about what happens exactly at . Thus, in terms of limits, the expressions are equal.    To review factoring quadratics, see Factoring Quadratics Summary .  To review more advanced factoring techniques (like difference\/sum of cubes), see Advanced Polynomial Factoring .    Factoring and Canceling  Evaluate each limit.      Sum of cubes.  Difference of cubes, difference of squares.                     More Factoring Practice  Evaluate each limit.         Rationalizing (Removing Roots)   Rationalizing the Numerator  Consider the limit,   If we try to plug in , we get , which is undefined. To simplify this expression, we can rationalize the numerator. To do this, multiply by the conjugate, which is , in both the numerator and denominator,   In the numerator, multiplying together the conjugates gives a difference of squares, which cancels out the square root,   Now, we can plug in ,   Therefore, the answer is .   In general, rationalize by multiplying by the conjugate, which is the same expression except the middle sign is flipped. This takes advantage of the difference of squares pattern,   To get rid of the square root.   Project I  Evaluate each limit.                 Project II  Evaluate each limit.    Note that the limit is a right-hand limit, because the expression is not defined for .            Limits with Absolute Values   Absolute Value Limit at Zero  Consider the limit,   Graphically, the function looks like: Graph of . Notice that there is a jump at . As approaches 0 from the right, the function approaches 1, while as approaches 0 from the left, the function approaches . Therefore, the two-sided limit does not exist.  Algebraically, if you try to plug in , you get , which is indeterminate. To evaluate this limit, we need to consider the left-hand and right-hand limits separately, because the absolute value function behaves differently on each side of 0.  Recall that the absolute value function is defined as,     From the right, as , (because is positive), so,     From the left, as , (because is negative), so,     Since these one-sided limits are not equal, the limit does not exist.    Absolute Value Limit at a Nonzero Point  Consider the limit,   This is similar to the previous example, except the jump is at instead of . Graphically, the function looks like: Graph of .  Algebraically,   For the left limit,   Since these one-sided limits are not equal, the two-sided limit does not exist.    Absolute Value Limits  Find each limit, if it exists.  DNE  DNE   DNE     Simplifying Complex Fractions  These limits often come from the derivative of a function.   Complex Fractions  Find each limit.           One-Sided Limits   Piecewise Function Limit   Let . Find , if it exists.      Another Piecewise Function Limit   Let . Find , if it exists.       Substitution (Change of Variable)   Change of Variable  Evaluate the limit by using a change of variable.          "
},
{
  "id": "ex-direct-sub-linear",
  "level": "2",
  "url": "sec-calculating-limits.html#ex-direct-sub-linear",
  "type": "Example",
  "number": "1.1.1",
  "title": "Direct Substitution with a Linear Function.",
  "body": " Direct Substitution with a Linear Function  Consider . We know that the function is a line, and it is never undefined, particularly not at , because . Then, we expect that as approaches 3, gets closer to 7. Then,   In other words, we can just plug in to get the limit value.  "
},
{
  "id": "ex-direct-sub-quadratic",
  "level": "2",
  "url": "sec-calculating-limits.html#ex-direct-sub-quadratic",
  "type": "Example",
  "number": "1.1.2",
  "title": "Direct Substitution with a Quadratic Function.",
  "body": " Direct Substitution with a Quadratic Function  Consider . We know that this function is a parabola. In a similar way, as approaches 2, the -value will approach the function's -value at , which we can get by just plugging in ,   "
},
{
  "id": "ex-direct-sub-rational",
  "level": "2",
  "url": "sec-calculating-limits.html#ex-direct-sub-rational",
  "type": "Example",
  "number": "1.1.3",
  "title": "Direct Substitution with a Rational Function.",
  "body": " Direct Substitution with a Rational Function  Consider . Again, let's see if we can plug in ,   This means the limit is just 2,   "
},
{
  "id": "thm-polynomial-limit",
  "level": "2",
  "url": "sec-calculating-limits.html#thm-polynomial-limit",
  "type": "Theorem",
  "number": "1.1.4",
  "title": "",
  "body": "  If is a polynomial function, then .   "
},
{
  "id": "thm-rational-limit",
  "level": "2",
  "url": "sec-calculating-limits.html#thm-rational-limit",
  "type": "Theorem",
  "number": "1.1.5",
  "title": "",
  "body": "  If is a rational function, then , as long as is in the domain of .   "
},
{
  "id": "proj-direct-sub",
  "level": "2",
  "url": "sec-calculating-limits.html#proj-direct-sub",
  "type": "Exercise Group",
  "number": "1.1.1",
  "title": "Direct Substitution.",
  "body": " Direct Substitution  Evaluate each limit.                   "
},
{
  "id": "ex-factoring-intro",
  "level": "2",
  "url": "sec-calculating-limits.html#ex-factoring-intro",
  "type": "Example",
  "number": "1.1.6",
  "title": "Factoring to Evaluate a Limit.",
  "body": " Factoring to Evaluate a Limit  Consider the limit,   The function is undefined at , because plugging in leads to dividing by 0. However, it turns out that we can algebraically manipulate it, by factoring the numerator,   Then, cancelling the common factor of ,   Then, since there is no denominator anymore, it turns out we can just plug in to get the answer. In total,   This works because the simplified version is equal to the original expression,   They are the same everywhere, except for (because then the left-hand side gives an error for dividing by 0, but the right-hand side gives ). Therefore, if you want to know what is doing near , you can instead consider the simplified expression .  This is because a limit only cares about values of  near  , and doesn't care about what happens exactly at . Thus, in terms of limits, the expressions are equal.  "
},
{
  "id": "proj-factoring-1",
  "level": "2",
  "url": "sec-calculating-limits.html#proj-factoring-1",
  "type": "Exercise Group",
  "number": "1.1.2",
  "title": "Factoring and Canceling.",
  "body": " Factoring and Canceling  Evaluate each limit.      Sum of cubes.  Difference of cubes, difference of squares.                   "
},
{
  "id": "proj-factoring-2",
  "level": "2",
  "url": "sec-calculating-limits.html#proj-factoring-2",
  "type": "Exercise Group",
  "number": "1.1.3",
  "title": "More Factoring Practice.",
  "body": " More Factoring Practice  Evaluate each limit.      "
},
{
  "id": "ex-rationalizing-intro",
  "level": "2",
  "url": "sec-calculating-limits.html#ex-rationalizing-intro",
  "type": "Example",
  "number": "1.1.7",
  "title": "Rationalizing the Numerator.",
  "body": " Rationalizing the Numerator  Consider the limit,   If we try to plug in , we get , which is undefined. To simplify this expression, we can rationalize the numerator. To do this, multiply by the conjugate, which is , in both the numerator and denominator,   In the numerator, multiplying together the conjugates gives a difference of squares, which cancels out the square root,   Now, we can plug in ,   Therefore, the answer is .  "
},
{
  "id": "proj-rationalizing-1",
  "level": "2",
  "url": "sec-calculating-limits.html#proj-rationalizing-1",
  "type": "Exercise Group",
  "number": "1.1.4",
  "title": "Project I.",
  "body": " Project I  Evaluate each limit.               "
},
{
  "id": "proj-rationalizing-2",
  "level": "2",
  "url": "sec-calculating-limits.html#proj-rationalizing-2",
  "type": "Exercise Group",
  "number": "1.1.5",
  "title": "Project II.",
  "body": " Project II  Evaluate each limit.    Note that the limit is a right-hand limit, because the expression is not defined for .         "
},
{
  "id": "ex-abs-value-intro-1",
  "level": "2",
  "url": "sec-calculating-limits.html#ex-abs-value-intro-1",
  "type": "Example",
  "number": "1.1.8",
  "title": "Absolute Value Limit at Zero.",
  "body": " Absolute Value Limit at Zero  Consider the limit,   Graphically, the function looks like: Graph of . Notice that there is a jump at . As approaches 0 from the right, the function approaches 1, while as approaches 0 from the left, the function approaches . Therefore, the two-sided limit does not exist.  Algebraically, if you try to plug in , you get , which is indeterminate. To evaluate this limit, we need to consider the left-hand and right-hand limits separately, because the absolute value function behaves differently on each side of 0.  Recall that the absolute value function is defined as,     From the right, as , (because is positive), so,     From the left, as , (because is negative), so,     Since these one-sided limits are not equal, the limit does not exist.  "
},
{
  "id": "ex-abs-value-intro-2",
  "level": "2",
  "url": "sec-calculating-limits.html#ex-abs-value-intro-2",
  "type": "Example",
  "number": "1.1.9",
  "title": "Absolute Value Limit at a Nonzero Point.",
  "body": " Absolute Value Limit at a Nonzero Point  Consider the limit,   This is similar to the previous example, except the jump is at instead of . Graphically, the function looks like: Graph of .  Algebraically,   For the left limit,   Since these one-sided limits are not equal, the two-sided limit does not exist.  "
},
{
  "id": "proj-abs-value",
  "level": "2",
  "url": "sec-calculating-limits.html#proj-abs-value",
  "type": "Exercise Group",
  "number": "1.1.6",
  "title": "Absolute Value Limits.",
  "body": " Absolute Value Limits  Find each limit, if it exists.  DNE  DNE   DNE  "
},
{
  "id": "proj-complex-fractions",
  "level": "2",
  "url": "sec-calculating-limits.html#proj-complex-fractions",
  "type": "Exercise Group",
  "number": "1.1.7",
  "title": "Complex Fractions.",
  "body": " Complex Fractions  Find each limit.        "
},
{
  "id": "ex-piecewise-1",
  "level": "2",
  "url": "sec-calculating-limits.html#ex-piecewise-1",
  "type": "Checkpoint",
  "number": "1.1.10",
  "title": "Piecewise Function Limit.",
  "body": " Piecewise Function Limit   Let . Find , if it exists.    "
},
{
  "id": "ex-piecewise-2",
  "level": "2",
  "url": "sec-calculating-limits.html#ex-piecewise-2",
  "type": "Checkpoint",
  "number": "1.1.11",
  "title": "Another Piecewise Function Limit.",
  "body": " Another Piecewise Function Limit   Let . Find , if it exists.    "
},
{
  "id": "proj-substitution",
  "level": "2",
  "url": "sec-calculating-limits.html#proj-substitution",
  "type": "Exercise Group",
  "number": "1.1.8",
  "title": "Change of Variable.",
  "body": " Change of Variable  Evaluate the limit by using a change of variable.        "
},
{
  "id": "sec-the-derivative-function",
  "level": "1",
  "url": "sec-the-derivative-function.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Derivative Function",
  "body": " The Derivative Function   Recall that previously, we found the instantaneous rate of change of a function, which is the slope of the tangent line to the graph of the function, using a limit of the form,   This limit is very important in calculus, so it is given a name and a concise notation, called the derivative .   Derivative at a Point   The derivative of at , denoted by (read as prime of ), is given by,      Derivative at a Specific Point  Find the derivative of at .   Therefore, .   If we want to find the slope of the tangent line at many different values of , then this way of using the definition for each value of is not very efficient.  Instead, we can calculate the derivative at an arbitrary value of , which will give us a formula for the slope of the tangent at any value of .   Squaring Function  Find the derivative of at an arbitrary value of . To do this, instead of plugging in a specific value for , we will just leave it as ,   Therefore, . This means that the slope of the tangent line to the graph of at any value of is . For example, at , the slope of the tangent line is , which is what we found in the previous example.  This allows us to create a table of values for the slope of the tangent line at different values of ,                            This gives the slope at each of these values of . This means that the derivative is itself a function, which takes in a value of , and outputs the slope of the tangent line at that value of . Here is a graph: Graph of and its derivative . At each value of , the slope of the tangent line to the graph of is given by the -value of .   In general, the derivative of a function is not just a number, but is itself a function.    The Derivative as a Function   Derivative Function   Let be a function. The derivative of , denoted by , is another function, defined by,    The derivative is read as prime and as prime of .  The action of finding the derivative of a function is often called taking the derivative or differentiating .      Reciprocal Function  Consider the derivative of ,   To simplify this difference quotient, we first simplify the complex fraction, by clearing denominators, by multiplying numerator and denominator by ,   Therefore, . Observe the relationship between and its derivative: Graph of and its derivative . Notice that:   The slope of the tangent of is negative for all values of , which corresponds to the derivative being negative (or, ).  As gets larger, the slope of the tangent line gets closer to , which corresponds to the derivative getting closer to (or, as ).     Square Root Function  Consider the derivative of ,   Then, the goal is to cancel the factor of in the denominator. It turns out that the correct next algebraic step is a technique called rationalizing the numerator . You may recall rationalizing the denominator, which involves multiplying numerator and denominator in order to eliminate a square root in the denominator. Here, we can use a similar technique with the goal of removing the square roots in the numerator. In this case, we multiply by the conjugate of the numerator, which is ,   Observe the relationship between and its derivative: Desmos .   The slope of starts out large and positive, and then as increases, the slope becomes smaller but still positive.  This corresponds to the derivative being positive for all , and getting closer to 0 as gets larger (or, as ).      Derivative Using Limit Definition   Derivative at a Specific Value  For each function, find the value of the derivative for the given value of .        Derivatives of Polynomial Functions  Find the derivative of each function, using the limit definition of the derivative.           Derivatives of Rational Functions  Find the derivative of each function, using the limit definition of the derivative.       Derivatives of Square Root Functions  Find the derivative of each function, using the limit definition of the derivative.        Tangent Line from Given Values  Find the equation of the tangent line of at , given that and .  or    Finding Derivative from Tangent Line Equation  Suppose that the tangent line to at has equation . Find and .  and    Derivative of  For the function , show that exists. What is the value?      Advanced Examples   Tangent Lines Through an External Point  Determine the equations of both lines that are tangent to the graph of and pass through the point .  and    Continuous but Not Differentiable  Give an example of a function that is continuous on but is not differentiable at .     Tangent Parallel to a Line  At what point on the graph of is the tangent parallel to ?     Evaluating a Limit Using Derivative Information  If and , find .      Differentiability   Domain of the Derivative  For , notice that while its domain is , its derivative is only differentiable on . In particular, is not differentiable at .    Geometric Visualization of the Derivative  There is a nice visualization for this derivative. Let represent the area of a square with side length . Then, for some small increment , the added area is . Then,   Then, as , we get,     "
},
{
  "id": "sec-the-derivative-function-2-3",
  "level": "2",
  "url": "sec-the-derivative-function.html#sec-the-derivative-function-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivative "
},
{
  "id": "def-derivative-at-a",
  "level": "2",
  "url": "sec-the-derivative-function.html#def-derivative-at-a",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Derivative at a Point.",
  "body": " Derivative at a Point   The derivative of at , denoted by (read as prime of ), is given by,    "
},
{
  "id": "sec-the-derivative-function-2-5",
  "level": "2",
  "url": "sec-the-derivative-function.html#sec-the-derivative-function-2-5",
  "type": "Example",
  "number": "2.1.2",
  "title": "Derivative at a Specific Point.",
  "body": " Derivative at a Specific Point  Find the derivative of at .   Therefore, .  "
},
{
  "id": "sec-the-derivative-function-2-8",
  "level": "2",
  "url": "sec-the-derivative-function.html#sec-the-derivative-function-2-8",
  "type": "Example",
  "number": "2.1.3",
  "title": "Squaring Function.",
  "body": " Squaring Function  Find the derivative of at an arbitrary value of . To do this, instead of plugging in a specific value for , we will just leave it as ,   Therefore, . This means that the slope of the tangent line to the graph of at any value of is . For example, at , the slope of the tangent line is , which is what we found in the previous example.  This allows us to create a table of values for the slope of the tangent line at different values of ,                            This gives the slope at each of these values of . This means that the derivative is itself a function, which takes in a value of , and outputs the slope of the tangent line at that value of . Here is a graph: Graph of and its derivative . At each value of , the slope of the tangent line to the graph of is given by the -value of .  "
},
{
  "id": "def-derivative-function",
  "level": "2",
  "url": "sec-the-derivative-function.html#def-derivative-function",
  "type": "Definition",
  "number": "2.1.4",
  "title": "Derivative Function.",
  "body": " Derivative Function   Let be a function. The derivative of , denoted by , is another function, defined by,    The derivative is read as prime and as prime of .  The action of finding the derivative of a function is often called taking the derivative or differentiating .    "
},
{
  "id": "subsec-derivative-as-function-3",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-derivative-as-function-3",
  "type": "Example",
  "number": "2.1.5",
  "title": "Reciprocal Function.",
  "body": " Reciprocal Function  Consider the derivative of ,   To simplify this difference quotient, we first simplify the complex fraction, by clearing denominators, by multiplying numerator and denominator by ,   Therefore, . Observe the relationship between and its derivative: Graph of and its derivative . Notice that:   The slope of the tangent of is negative for all values of , which corresponds to the derivative being negative (or, ).  As gets larger, the slope of the tangent line gets closer to , which corresponds to the derivative getting closer to (or, as ).   "
},
{
  "id": "subsec-derivative-as-function-4",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-derivative-as-function-4",
  "type": "Example",
  "number": "2.1.6",
  "title": "Square Root Function.",
  "body": " Square Root Function  Consider the derivative of ,   Then, the goal is to cancel the factor of in the denominator. It turns out that the correct next algebraic step is a technique called rationalizing the numerator . You may recall rationalizing the denominator, which involves multiplying numerator and denominator in order to eliminate a square root in the denominator. Here, we can use a similar technique with the goal of removing the square roots in the numerator. In this case, we multiply by the conjugate of the numerator, which is ,   Observe the relationship between and its derivative: Desmos .   The slope of starts out large and positive, and then as increases, the slope becomes smaller but still positive.  This corresponds to the derivative being positive for all , and getting closer to 0 as gets larger (or, as ).   "
},
{
  "id": "subsec-derivative-limit-definition-2",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-derivative-limit-definition-2",
  "type": "Exercise Group",
  "number": "2.1.1",
  "title": "Derivative at a Specific Value.",
  "body": " Derivative at a Specific Value  For each function, find the value of the derivative for the given value of .      "
},
{
  "id": "subsec-derivative-limit-definition-3",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-derivative-limit-definition-3",
  "type": "Exercise Group",
  "number": "2.1.2",
  "title": "Derivatives of Polynomial Functions.",
  "body": " Derivatives of Polynomial Functions  Find the derivative of each function, using the limit definition of the derivative.         "
},
{
  "id": "subsec-derivative-limit-definition-4",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-derivative-limit-definition-4",
  "type": "Exercise Group",
  "number": "2.1.3",
  "title": "Derivatives of Rational Functions.",
  "body": " Derivatives of Rational Functions  Find the derivative of each function, using the limit definition of the derivative.     "
},
{
  "id": "subsec-derivative-limit-definition-5",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-derivative-limit-definition-5",
  "type": "Exercise Group",
  "number": "2.1.4",
  "title": "Derivatives of Square Root Functions.",
  "body": " Derivatives of Square Root Functions  Find the derivative of each function, using the limit definition of the derivative.      "
},
{
  "id": "subsec-derivative-limit-definition-6",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-derivative-limit-definition-6",
  "type": "Checkpoint",
  "number": "2.1.7",
  "title": "Tangent Line from Given Values.",
  "body": " Tangent Line from Given Values  Find the equation of the tangent line of at , given that and .  or  "
},
{
  "id": "subsec-derivative-limit-definition-7",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-derivative-limit-definition-7",
  "type": "Checkpoint",
  "number": "2.1.8",
  "title": "Finding Derivative from Tangent Line Equation.",
  "body": " Finding Derivative from Tangent Line Equation  Suppose that the tangent line to at has equation . Find and .  and  "
},
{
  "id": "subsec-derivative-limit-definition-8",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-derivative-limit-definition-8",
  "type": "Checkpoint",
  "number": "2.1.9",
  "title": "Derivative of <span class=\"process-math\">\\(x|x|\\)<\/span>.",
  "body": " Derivative of  For the function , show that exists. What is the value?   "
},
{
  "id": "subsec-advanced-derivative-examples-2",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-advanced-derivative-examples-2",
  "type": "Checkpoint",
  "number": "2.1.10",
  "title": "Tangent Lines Through an External Point.",
  "body": " Tangent Lines Through an External Point  Determine the equations of both lines that are tangent to the graph of and pass through the point .  and  "
},
{
  "id": "subsec-advanced-derivative-examples-3",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-advanced-derivative-examples-3",
  "type": "Checkpoint",
  "number": "2.1.11",
  "title": "Continuous but Not Differentiable.",
  "body": " Continuous but Not Differentiable  Give an example of a function that is continuous on but is not differentiable at .   "
},
{
  "id": "subsec-advanced-derivative-examples-4",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-advanced-derivative-examples-4",
  "type": "Checkpoint",
  "number": "2.1.12",
  "title": "Tangent Parallel to a Line.",
  "body": " Tangent Parallel to a Line  At what point on the graph of is the tangent parallel to ?   "
},
{
  "id": "subsec-advanced-derivative-examples-5",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-advanced-derivative-examples-5",
  "type": "Checkpoint",
  "number": "2.1.13",
  "title": "Evaluating a Limit Using Derivative Information.",
  "body": " Evaluating a Limit Using Derivative Information  If and , find .   "
},
{
  "id": "subsec-differentiability-2",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-differentiability-2",
  "type": "Example",
  "number": "2.1.14",
  "title": "Domain of the Derivative.",
  "body": " Domain of the Derivative  For , notice that while its domain is , its derivative is only differentiable on . In particular, is not differentiable at .  "
},
{
  "id": "subsec-differentiability-3",
  "level": "2",
  "url": "sec-the-derivative-function.html#subsec-differentiability-3",
  "type": "Example",
  "number": "2.1.15",
  "title": "Geometric Visualization of the Derivative.",
  "body": " Geometric Visualization of the Derivative  There is a nice visualization for this derivative. Let represent the area of a square with side length . Then, for some small increment , the added area is . Then,   Then, as , we get,   "
},
{
  "id": "sec-basic-derivative-rules",
  "level": "1",
  "url": "sec-basic-derivative-rules.html",
  "type": "Section",
  "number": "2.2",
  "title": "Basic Derivative Rules",
  "body": " Basic Derivative Rules   Calculating derivatives using the limit definition is often tedious and sometimes difficult, especially for more complicated functions. It turns out, there are various patterns and shortcut rules for computing derivatives of various functions, i.e. differentiation rules ,   Rules to differentiate specific types of functions, that you have learned about in pre-calculus.  Also, rules to differentiate various types of combinations of those functions.    This could be called systematic differentiation . Combining all of these rules will allow us to compute derivatives of every type of function that is covered in pre-calculus.    Derivative of Constant and a Line  Perhaps the most basic function is a constant function.   Constant Function  Consider the function . This is a constant function, because it always outputs the same value, no matter what the input is. In particular, it always outputs the value 3. Graph of . Its graph is a horizontal line at , which has slope 0, so we would expect that its derivative would be always 0.   In general, for a constant function, of the form (where is some number), its derivative is 0.   Derivative of a Constant Is Zero   If for some number , then . In other words,     Using the definition of the derivative, we have,     In short,   A slightly more complicated situation is the case of a line.   Linear Function  Consider the function . This is a linear function, because its graph is a line. Graph of . This line has a slope of 2, so we would expect that its derivative would be always 2.   In general, a line has a constant slope, so its derivative is the slope of the line.    Derivatives of Constants and Lines  Find the derivative of each function.          Derivative of Power Functions (Power Rule)  The next basic type of function we will consider are power functions, where the variable is raised to a constant number.   Discovering the Power Rule Pattern  You may recall from a previous section the following derivatives of , , , and . If not, these can be derived from the limit definition of the derivative. They are,   Observe the pattern for the derivative of these powers of . The derivative has:   A coefficient in the front, which is the exponent of .  The variable raised to a exponent that is one less than what it was before.   This applies to even the first example , as has an exponent of 1, so the pattern says the derivative should be (recall: for any ).  It turns out that this rule holds in general, for any whole number (like 1, 2, 3, etc.), but in fact, for any number.    Power Rule for Derivatives   If for some number , then . In other words,     In other words, to differentiate a function that is some power of the variable ,   Bring down the exponent into the front and multiply it  Subtract 1 from the exponent.    Power Rule with Reciprocal and Square Root  You may recall 2 more examples of derivatives we have seen before, which don't look like powers at first, but can be rewritten as powers in order to use the power rule,   For (the reciprocal function). You may recall the derivative is . This also follows the power rule, because .   For , you may recall the derivative is . This also follows the power rule, because ,      Power Rule Practice  Differentiate each function.          Derivative of Sums and Differences   Differentiating Term by Term  Consider the derivative of . This function has 3 terms ( , , and ). It turns out, if a function has multiple terms (multiple things added or subtracted together), we can find the derivative of each term separately. The derivative of is , the derivative of is 5, and the derivative of is 0. So, the derivative of is .   In general, to differentiate a function with multiple terms,   Differentiate each term individually (term-by-term).  For any coefficients (numbers multiplied in the front), keep them in the front (they come along for the ride ).   These two intuitive rules are formalized by the sum rule, difference rule, and constant multiple rule.   Sum\/Difference Rule and Constant Multiple Rule    Sum\/difference rule . The derivative of a sum or difference is the sum or difference of the derivatives    Constant multiple rule . The derivative of a constant multiplied by a function is the constant multiplied by the derivative of the function.       The sum or difference rule also applies to any number of functions, not just 2 functions. This basically means that derivatives can be determined term-by-term.    Derivative of Polynomial Functions  This rule can be used to differentiate any polynomial function.   Differentiating Polynomials  Differentiate each function.     Expand first.     Rational Exponents and Radical Functions  The power rule can also be used to differentiate functions with rational exponents, i.e. expressions of the form ), and in general any term that can be represented as a power of the variable .   Differentiating Radical Functions  Differentiate each function.      In general, if your derivative has negative exponents, it is good practice to rewrite the final answer with positive exponents.    Simplifying Before Using Basic Rules  Sometimes, you need to simplify the function before you can use the basic rules.   Simplify Then Differentiate  Differentiate each function.           "
},
{
  "id": "sec-basic-derivative-rules-2-1",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#sec-basic-derivative-rules-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differentiation rules "
},
{
  "id": "sec-basic-derivative-rules-2-4",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#sec-basic-derivative-rules-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "systematic differentiation "
},
{
  "id": "subsec-derivative-constant-line-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-derivative-constant-line-3",
  "type": "Example",
  "number": "2.2.1",
  "title": "Constant Function.",
  "body": " Constant Function  Consider the function . This is a constant function, because it always outputs the same value, no matter what the input is. In particular, it always outputs the value 3. Graph of . Its graph is a horizontal line at , which has slope 0, so we would expect that its derivative would be always 0.  "
},
{
  "id": "subsec-derivative-constant-line-5",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-derivative-constant-line-5",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "Derivative of a Constant Is Zero.",
  "body": " Derivative of a Constant Is Zero   If for some number , then . In other words,     Using the definition of the derivative, we have,    "
},
{
  "id": "subsec-derivative-constant-line-9",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-derivative-constant-line-9",
  "type": "Example",
  "number": "2.2.3",
  "title": "Linear Function.",
  "body": " Linear Function  Consider the function . This is a linear function, because its graph is a line. Graph of . This line has a slope of 2, so we would expect that its derivative would be always 2.  "
},
{
  "id": "subsec-derivative-constant-line-12",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-derivative-constant-line-12",
  "type": "Exercise Group",
  "number": "2.2.1",
  "title": "Derivatives of Constants and Lines.",
  "body": " Derivatives of Constants and Lines  Find the derivative of each function.       "
},
{
  "id": "subsec-power-rule-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-power-rule-3",
  "type": "Example",
  "number": "2.2.4",
  "title": "Discovering the Power Rule Pattern.",
  "body": " Discovering the Power Rule Pattern  You may recall from a previous section the following derivatives of , , , and . If not, these can be derived from the limit definition of the derivative. They are,   Observe the pattern for the derivative of these powers of . The derivative has:   A coefficient in the front, which is the exponent of .  The variable raised to a exponent that is one less than what it was before.   This applies to even the first example , as has an exponent of 1, so the pattern says the derivative should be (recall: for any ).  It turns out that this rule holds in general, for any whole number (like 1, 2, 3, etc.), but in fact, for any number.  "
},
{
  "id": "subsec-power-rule-4",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-power-rule-4",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "Power Rule for Derivatives.",
  "body": " Power Rule for Derivatives   If for some number , then . In other words,    "
},
{
  "id": "subsec-power-rule-7",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-power-rule-7",
  "type": "Remark",
  "number": "2.2.6",
  "title": "Power Rule with Reciprocal and Square Root.",
  "body": " Power Rule with Reciprocal and Square Root  You may recall 2 more examples of derivatives we have seen before, which don't look like powers at first, but can be rewritten as powers in order to use the power rule,   For (the reciprocal function). You may recall the derivative is . This also follows the power rule, because .   For , you may recall the derivative is . This also follows the power rule, because ,    "
},
{
  "id": "subsec-power-rule-8",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-power-rule-8",
  "type": "Exercise Group",
  "number": "2.2.2",
  "title": "Power Rule Practice.",
  "body": " Power Rule Practice  Differentiate each function.       "
},
{
  "id": "subsec-sum-difference-rule-2",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-sum-difference-rule-2",
  "type": "Example",
  "number": "2.2.7",
  "title": "Differentiating Term by Term.",
  "body": " Differentiating Term by Term  Consider the derivative of . This function has 3 terms ( , , and ). It turns out, if a function has multiple terms (multiple things added or subtracted together), we can find the derivative of each term separately. The derivative of is , the derivative of is 5, and the derivative of is 0. So, the derivative of is .  "
},
{
  "id": "subsec-sum-difference-rule-6",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-sum-difference-rule-6",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "Sum\/Difference Rule and Constant Multiple Rule.",
  "body": " Sum\/Difference Rule and Constant Multiple Rule    Sum\/difference rule . The derivative of a sum or difference is the sum or difference of the derivatives    Constant multiple rule . The derivative of a constant multiplied by a function is the constant multiplied by the derivative of the function.      "
},
{
  "id": "subsec-derivative-polynomials-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-derivative-polynomials-3",
  "type": "Exercise Group",
  "number": "2.2.3",
  "title": "Differentiating Polynomials.",
  "body": " Differentiating Polynomials  Differentiate each function.     Expand first.  "
},
{
  "id": "subsec-rational-exponents-radicals-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-rational-exponents-radicals-3",
  "type": "Exercise Group",
  "number": "2.2.4",
  "title": "Differentiating Radical Functions.",
  "body": " Differentiating Radical Functions  Differentiate each function.     "
},
{
  "id": "subsec-simplify-before-differentiating-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-simplify-before-differentiating-3",
  "type": "Exercise Group",
  "number": "2.2.5",
  "title": "Simplify Then Differentiate.",
  "body": " Simplify Then Differentiate  Differentiate each function.         "
},
{
  "id": "sec-implicit-differentiation",
  "level": "1",
  "url": "sec-implicit-differentiation.html",
  "type": "Section",
  "number": "3.1",
  "title": "Implicit Differentiation",
  "body": " Implicit Differentiation    Implicit Curves and Their Slopes  The slope of the curve is given by the derivative . However, not all curves are defined by explicit functions, where is isolated and is given as a function of . Some functions are implicit , defined by a relation between and . For example,   Basically,   Explicit means is isolated.  Implicit means the is not isolated, so the and terms are mixed together.    For example, a circle with radius 1 centered at the origin (the unit circle) has the equation,   For the entire graph, this is not a function, because it fails the vertical line test. However, it is still something which we could create tangent lines for.  We want to take derivatives of these kinds of curves. To do so, one strategy would be to isolate , and then take the derivative like we have done previously. In this case,   This leads to two different functions, say and . The first is for the top semicircle, and the second is for the bottom semicircle ( Desmos link ).   For some equations, it is possible to solve for as an explicit function (or possibly multiple functions) of . However, in many other more complicated cases, this is difficult or actually algebraically impossible.  In fact, it is not necessary to solve for explicitly to find the derivative. Instead, we can use a technique called implicit differentiation .   Motivational Example: Circle  Consider the unit circle, with equation . The idea is that we can take the derivative of both sides of the equation,   As usual,   (power rule) and,  (derivative of a constant is zero)   However, is a bit different, because represents a function of , so instead of , we could more precisely write , like,   This means that is like a composition of function, with as the inner function, and the square is the outer function. This means we have to use the chain rule,   Then, the equation becomes,   Then, we want to solve for the derivative , so we can isolate it in the equation,   This means that for any point on the unit circle, the slope of the tangent line at that point is . For example, for the point , the derivative (slope) at that point is,   Note that is included in the formula for the derivative (not just ), and this is totally normal and ok.  Also, we can use the derivative formula to find where the graph has a horizontal tangent, and also where it has a vertical tangent.   There is a horizontal tangent if , or . This means that . Plugging this into the curve equation , we get , so . So, and . This should make sense graphically.  For vertical tangents, this is basically where the derivative is undefined, because of division by 0. Here, it is when . Plugging this into the equation, we get , so , and so the points are and .     Horizontal Parabolas  Consider the equation (or ). This equation represents a horizontal parabola. We could solve this equation for , by taking the square root of both sides to get . In other words, this defines two functions of , and . We could take the derivative of each individually, to get,   Instead, using implicit differentiation, we can take the derivative of both together. Differentiate both sides of the equation,     Folium of Descartes  The equation represents a curve called the folium of Descartes ( folium is Latin for leaf ). Notice that and are mixed together, so this is an implicit equation. It is technically possible to solve for in this formula, however this requires advanced techniques, and the explicit expression is very complicated, making the derivative tedious to compute. Instead, using implicit differentiation, take the derivative of both sides,   Then, solving for ,   Then, for example, for the point on the curve (you can verify that is indeed on the curve, by plugging it into the equation , and verifying that both sides are equal),   Then, the equation of the tangent line at is,   We can also consider where on this curve has a horizontal tangent line. This occurs when , or,   This occurs when the numerator is equal to 0, or , or . This doesn't give a particular point, but instead a relationship between and . Combining this with the original curve equation, this forms like a system of equations,   Then, solving this will give us the points where the tangent line is horizontal.   Then, substituting back into the equation , we get and . Therefore, there is a horizontal tangent at and .     Summary of Implicit Differentiation  In summary, to do implicit differentiation:   Differentiate both sides (with respect to ), i.e. take of both sides .   When differentiating any term involving , treat as a function of , and use the chain rule (basically, multiply by at the end). Keep in mind that,    Solve for (isolate ) in the equation.   Some notes:   You can use either or to represent the derivative of with respect to . The latter notation is a bit more compact.  With implicit differentiation, the derivative is usually in terms of both  and  . This means, to evaluate the derivative at a particular point, it is necessary to know both coordinates. In contrast, the derivative of an explicit function only requires .  We can think of the derivative as an operator that we can apply to both sides of the equation. This is analogous to how we can square both sides, or take the logarithm of both sides.  Implicit differentiation also has the advantage that it leads to one formula for the derivative, that applies to all points on the graph, even if the graph may have 2 or 3 or even more separate function equations.     Horizontal and Vertical Tangents   Horizontal tangents occur when .  Vertical tangents occur when is undefined.   For a curve with ,   Horizontal tangents when .  Vertical tangents when .   Note: technically, if both the numerator and denominator are 0, then this is a separate case and the regular rules don't apply.   "
},
{
  "id": "sec-implicit-curves-slopes-2",
  "level": "2",
  "url": "sec-implicit-differentiation.html#sec-implicit-curves-slopes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "explicit implicit "
},
{
  "id": "sec-implicit-curves-slopes-5-1-1",
  "level": "2",
  "url": "sec-implicit-differentiation.html#sec-implicit-curves-slopes-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Explicit "
},
{
  "id": "sec-implicit-curves-slopes-5-2-1",
  "level": "2",
  "url": "sec-implicit-differentiation.html#sec-implicit-curves-slopes-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Implicit "
},
{
  "id": "ex-circle-intro",
  "level": "2",
  "url": "sec-implicit-differentiation.html#ex-circle-intro",
  "type": "Example",
  "number": "3.1.1",
  "title": "",
  "body": " For example, a circle with radius 1 centered at the origin (the unit circle) has the equation,   For the entire graph, this is not a function, because it fails the vertical line test. However, it is still something which we could create tangent lines for.  We want to take derivatives of these kinds of curves. To do so, one strategy would be to isolate , and then take the derivative like we have done previously. In this case,   This leads to two different functions, say and . The first is for the top semicircle, and the second is for the bottom semicircle ( Desmos link ).  "
},
{
  "id": "ex-motivational-circle",
  "level": "2",
  "url": "sec-implicit-differentiation.html#ex-motivational-circle",
  "type": "Example",
  "number": "3.1.2",
  "title": "Motivational Example: Circle.",
  "body": " Motivational Example: Circle  Consider the unit circle, with equation . The idea is that we can take the derivative of both sides of the equation,   As usual,   (power rule) and,  (derivative of a constant is zero)   However, is a bit different, because represents a function of , so instead of , we could more precisely write , like,   This means that is like a composition of function, with as the inner function, and the square is the outer function. This means we have to use the chain rule,   Then, the equation becomes,   Then, we want to solve for the derivative , so we can isolate it in the equation,   This means that for any point on the unit circle, the slope of the tangent line at that point is . For example, for the point , the derivative (slope) at that point is,   Note that is included in the formula for the derivative (not just ), and this is totally normal and ok.  Also, we can use the derivative formula to find where the graph has a horizontal tangent, and also where it has a vertical tangent.   There is a horizontal tangent if , or . This means that . Plugging this into the curve equation , we get , so . So, and . This should make sense graphically.  For vertical tangents, this is basically where the derivative is undefined, because of division by 0. Here, it is when . Plugging this into the equation, we get , so , and so the points are and .   "
},
{
  "id": "ex-horizontal-parabolas",
  "level": "2",
  "url": "sec-implicit-differentiation.html#ex-horizontal-parabolas",
  "type": "Example",
  "number": "3.1.3",
  "title": "Horizontal Parabolas.",
  "body": " Horizontal Parabolas  Consider the equation (or ). This equation represents a horizontal parabola. We could solve this equation for , by taking the square root of both sides to get . In other words, this defines two functions of , and . We could take the derivative of each individually, to get,   Instead, using implicit differentiation, we can take the derivative of both together. Differentiate both sides of the equation,   "
},
{
  "id": "ex-folium-descartes",
  "level": "2",
  "url": "sec-implicit-differentiation.html#ex-folium-descartes",
  "type": "Example",
  "number": "3.1.4",
  "title": "Folium of Descartes.",
  "body": " Folium of Descartes  The equation represents a curve called the folium of Descartes ( folium is Latin for leaf ). Notice that and are mixed together, so this is an implicit equation. It is technically possible to solve for in this formula, however this requires advanced techniques, and the explicit expression is very complicated, making the derivative tedious to compute. Instead, using implicit differentiation, take the derivative of both sides,   Then, solving for ,   Then, for example, for the point on the curve (you can verify that is indeed on the curve, by plugging it into the equation , and verifying that both sides are equal),   Then, the equation of the tangent line at is,   We can also consider where on this curve has a horizontal tangent line. This occurs when , or,   This occurs when the numerator is equal to 0, or , or . This doesn't give a particular point, but instead a relationship between and . Combining this with the original curve equation, this forms like a system of equations,   Then, solving this will give us the points where the tangent line is horizontal.   Then, substituting back into the equation , we get and . Therefore, there is a horizontal tangent at and .  "
},
{
  "id": "sec-increasing-and-decreasing-functions",
  "level": "1",
  "url": "sec-increasing-and-decreasing-functions.html",
  "type": "Section",
  "number": "4.1",
  "title": "Increasing and Decreasing Functions",
  "body": " Increasing and Decreasing Functions   Derivatives provide a lot of information about the shape of a function's graph. First, we will analyze whether functions are increasing or decreasing.    Increasing and Decreasing Functions  Recall what it means for a function to be increasing or decreasing.           Increasing and decreasing functions    A function is increasing if when increases, increases.    A function is decreasing if when increases, decreases.     In other words,    Increasing and decreasing come from the perspective of reading from left to right (or, with increasing ).     Increasing\/Decreasing Test (Positive Derivative Implies Increasing)  Increasing and decreasing directly relate to derivatives. Recall that the value of the derivative represents the slope of the tangent line of . This means that,    If , then the tangent line has positive slope, and its graph is sloping up to the right, and so is increasing.    Similarly, if , then the tangent line has negative slope, and so is decreasing.             Positive derivative implies increasing    If for all , then is increasing on .    If for all , then is decreasing on .    If for all , then is constant on .     In short,   Graphically, these statements are intuitively true. However, a proof requires the mean value theorem, which we will cover later on.    Finding Intervals of Increase and Decrease   Basic Examples     increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing: none      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:     More Polynomial Examples     increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:     Trigonometry Examples   on   increasing: , decreasing:    on   increasing: , decreasing:    on   increasing: , decreasing:    on   increasing: , decreasing:     More Examples     increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:    on   increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:     Advanced Examples     increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:     "
},
{
  "id": "subsec-increasing-decreasing-functions-4",
  "level": "2",
  "url": "sec-increasing-and-decreasing-functions.html#subsec-increasing-decreasing-functions-4",
  "type": "Definition",
  "number": "4.1.1",
  "title": "Increasing and decreasing functions.",
  "body": " Increasing and decreasing functions    A function is increasing if when increases, increases.    A function is decreasing if when increases, decreases.    "
},
{
  "id": "subsec-increasing-decreasing-functions-7",
  "level": "2",
  "url": "sec-increasing-and-decreasing-functions.html#subsec-increasing-decreasing-functions-7",
  "type": "Remark",
  "number": "4.1.2",
  "title": "",
  "body": " Increasing and decreasing come from the perspective of reading from left to right (or, with increasing ).  "
},
{
  "id": "subsec-increasing-decreasing-test-5",
  "level": "2",
  "url": "sec-increasing-and-decreasing-functions.html#subsec-increasing-decreasing-test-5",
  "type": "Theorem",
  "number": "4.1.3",
  "title": "Positive derivative implies increasing.",
  "body": " Positive derivative implies increasing    If for all , then is increasing on .    If for all , then is decreasing on .    If for all , then is constant on .    "
},
{
  "id": "subsec-finding-intervals-increase-decrease-2",
  "level": "2",
  "url": "sec-increasing-and-decreasing-functions.html#subsec-finding-intervals-increase-decrease-2",
  "type": "Exercise Group",
  "number": "4.1.1",
  "title": "Basic Examples.",
  "body": " Basic Examples     increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing: none      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:   "
},
{
  "id": "subsec-finding-intervals-increase-decrease-3",
  "level": "2",
  "url": "sec-increasing-and-decreasing-functions.html#subsec-finding-intervals-increase-decrease-3",
  "type": "Exercise Group",
  "number": "4.1.2",
  "title": "More Polynomial Examples.",
  "body": " More Polynomial Examples     increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:   "
},
{
  "id": "subsec-finding-intervals-increase-decrease-4",
  "level": "2",
  "url": "sec-increasing-and-decreasing-functions.html#subsec-finding-intervals-increase-decrease-4",
  "type": "Exercise Group",
  "number": "4.1.3",
  "title": "Trigonometry Examples.",
  "body": " Trigonometry Examples   on   increasing: , decreasing:    on   increasing: , decreasing:    on   increasing: , decreasing:    on   increasing: , decreasing:   "
},
{
  "id": "subsec-finding-intervals-increase-decrease-5",
  "level": "2",
  "url": "sec-increasing-and-decreasing-functions.html#subsec-finding-intervals-increase-decrease-5",
  "type": "Exercise Group",
  "number": "4.1.4",
  "title": "More Examples.",
  "body": " More Examples     increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:    on   increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:   "
},
{
  "id": "subsec-finding-intervals-increase-decrease-6",
  "level": "2",
  "url": "sec-increasing-and-decreasing-functions.html#subsec-finding-intervals-increase-decrease-6",
  "type": "Exercise Group",
  "number": "4.1.5",
  "title": "Advanced Examples.",
  "body": " Advanced Examples     increasing: , decreasing:      increasing: , decreasing:      increasing: , decreasing:   "
},
{
  "id": "sec-local-extrema-first-derivative-test",
  "level": "1",
  "url": "sec-local-extrema-first-derivative-test.html",
  "type": "Section",
  "number": "4.2",
  "title": "Local Extrema and the First Derivative Test",
  "body": " Local Extrema and the First Derivative Test    Finding Local Maxima\/Minima Examples   Polynomial Functions   For each function, find any local maxima or local minima, and intervals of increase and decrease.      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima: none      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: none, decreasing: , local maxima: none, local minima: none      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:     Rational and Transcendental Functions   For each function, find any local maxima or local minima, and intervals of increase and decrease.      increasing: , decreasing: , local maxima: , local minima: none    ,   increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: none, local maxima: none, local minima: none      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: none, local maxima: none, local minima: none      increasing: , decreasing: none, local maxima: none, local minima: none      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: , local maxima: , local minima:     Fractional Power Functions (Cusps and Vertical Tangents)   For each function, find any local maxima or local minima, and intervals of increase and decrease.      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: none, local maxima: none, local minima: none      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:     Radical Functions (Square Roots)   For each function, find any local maxima or local minima, and intervals of increase and decrease.      domain: , increasing: , decreasing: , local maxima: , local minima:      domain: , increasing: , decreasing: , local maxima: , local minima:      domain: , increasing: , decreasing: , local maxima: none, local minima:      domain: , increasing: , decreasing: , local maxima: none, local minima:      domain: , increasing: , decreasing: , local maxima: , local minima:     Trigonometric Functions   For each function, find any local maxima or local minima, and intervals of increase and decrease.    on   increasing: , decreasing: , local maxima: , local minima:    on   increasing: , decreasing: , local maxima: , local minima:     "
},
{
  "id": "project-polynomial-functions",
  "level": "2",
  "url": "sec-local-extrema-first-derivative-test.html#project-polynomial-functions",
  "type": "Exercise Group",
  "number": "4.2.1",
  "title": "Polynomial Functions.",
  "body": " Polynomial Functions   For each function, find any local maxima or local minima, and intervals of increase and decrease.      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima: none      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: none, decreasing: , local maxima: none, local minima: none      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:   "
},
{
  "id": "project-rational-transcendental-functions",
  "level": "2",
  "url": "sec-local-extrema-first-derivative-test.html#project-rational-transcendental-functions",
  "type": "Exercise Group",
  "number": "4.2.2",
  "title": "Rational and Transcendental Functions.",
  "body": " Rational and Transcendental Functions   For each function, find any local maxima or local minima, and intervals of increase and decrease.      increasing: , decreasing: , local maxima: , local minima: none    ,   increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: none, local maxima: none, local minima: none      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: none, local maxima: none, local minima: none      increasing: , decreasing: none, local maxima: none, local minima: none      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: , local maxima: , local minima:   "
},
{
  "id": "project-fractional-power-functions",
  "level": "2",
  "url": "sec-local-extrema-first-derivative-test.html#project-fractional-power-functions",
  "type": "Exercise Group",
  "number": "4.2.3",
  "title": "Fractional Power Functions (Cusps and Vertical Tangents).",
  "body": " Fractional Power Functions (Cusps and Vertical Tangents)   For each function, find any local maxima or local minima, and intervals of increase and decrease.      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: none, local maxima: none, local minima: none      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: , local maxima: none, local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:      increasing: , decreasing: , local maxima: , local minima:   "
},
{
  "id": "project-radical-functions",
  "level": "2",
  "url": "sec-local-extrema-first-derivative-test.html#project-radical-functions",
  "type": "Exercise Group",
  "number": "4.2.4",
  "title": "Radical Functions (Square Roots).",
  "body": " Radical Functions (Square Roots)   For each function, find any local maxima or local minima, and intervals of increase and decrease.      domain: , increasing: , decreasing: , local maxima: , local minima:      domain: , increasing: , decreasing: , local maxima: , local minima:      domain: , increasing: , decreasing: , local maxima: none, local minima:      domain: , increasing: , decreasing: , local maxima: none, local minima:      domain: , increasing: , decreasing: , local maxima: , local minima:   "
},
{
  "id": "project-trigonometric-functions",
  "level": "2",
  "url": "sec-local-extrema-first-derivative-test.html#project-trigonometric-functions",
  "type": "Exercise Group",
  "number": "4.2.5",
  "title": "Trigonometric Functions.",
  "body": " Trigonometric Functions   For each function, find any local maxima or local minima, and intervals of increase and decrease.    on   increasing: , decreasing: , local maxima: , local minima:    on   increasing: , decreasing: , local maxima: , local minima:   "
},
{
  "id": "sec-sketching-graphs-of-functions",
  "level": "1",
  "url": "sec-sketching-graphs-of-functions.html",
  "type": "Section",
  "number": "4.3",
  "title": "Sketching Graphs of Functions",
  "body": " Sketching Graphs of Functions    Examples   Polynomials   Sketch the graph of each function.     , .  increasing: , decreasing: , local maxima: none, local minima: , concave up: , concave down: none, inflection point(s): none.     , .  increasing: , decreasing: , local maxima: , local minima: , concave up: , concave down: , inflection point(s): .     , .  increasing: , decreasing: , local maxima: , local minima: , concave down: , concave up: , inflection point(s): .     , .  increasing: , decreasing: , local maxima: , local minima: , concave up: , concave down , inflection point(s): .     , .  -intercepts , -intercept: , increasing: , decreasing: , local minima: , local maxima: none, concave up: , concave down: , inflection point(s): .     Rational Functions (Vertical Asymptotes)   Sketch the graph of each function.     , .  domain: , -intercepts , -intercept: , increasing: , decreasing: none, local minima: none, local maxima: none, concave up: , concave down: .     , , .  domain: , -intercept: , -intercept: , vertical asymptote , horizontal asymptote , increasing , decreasing , local minima: , local maxima: none, concave down: , concave up: , inflection point: .     , .  domain: , -intercept , -intercept: , increasing: , decreasing: , local max: , local min: , concave up: , concave down: , inflection points: .     , .  domain , -intercept , -intercept: , vertical asymptote: , hole: , horizontal asymptote: , increasing: , decreasing: none, local minima: none, local maxima: none, concave up: , concave down: .     Trigonometric Functions   Sketch the graph of each function.    ,  , .  -intercepts , -intercept: , increasing: , decreasing: , local max: , local min: , concave down: , concave up: , inflection points: .    ,  , .  -intercepts , -intercept 3, decreasing: , increasing: , local min: , local maxima: none, concave down: , concave up: , inflection points: .    ,  , .  domain , -intercepts , -intercept 0, increasing , decreasing none, local minima none, local maxima none, concave down , concave up , inflection point .    ,  , .  domain , -intercepts , -intercept 0, increasing , decreasing , local maxima , local minima , concave down , concave up , inflection point .    ,  , .  increasing , decreasing none, local minima none, local maxima none, concave up , concave down , inflection point .    ,  , .  domain , -intercept , increasing , decreasing , local maxima , local minima , concave up , concave down , inflection points and .    ,  , .  -intercept 1, increasing: , decreasing: , local min: , local max: , concave down: , concave up: , inflection points: .     Vertical Tangents and Cusps   Sketch the graph of each function.     , .  domain , -intercepts , -intercept 0, increasing: , decreasing: , local minima: , local maxima: , concave up: , concave down: none.     , .  domain , -intercept , -intercept , decreasing , increasing , local minimum , concave down , concave up none, inflection points none.     , .  domain , -intercepts , -intercept 0, increasing: , decreasing: , local minima: , local maxima: , concave up: none, concave down: .     , .  domain , -intercepts , -intercept 0, increasing , decreasing , local maximum , local minimum , concave up , concave down , inflection point .     Slant Asymptotes   Sketch the graph of each function.     , .  domain: , -intercept: , -intercept: , vertical asymptote: , slant asymptote: , increasing , decreasing , local maxima , local minima , concave down , concave up .     , .  domain , -intercepts none, -intercept , vertical asymptote , slant asymptote , increasing , decreasing , local maxima , local minima , concave down , concave up .     , , .  domain , -intercepts , -intercept , vertical asymptote , slant asymptote , increasing , decreasing , local maximum , local minimum , concave down , concave up , inflection points none.     , .  domain , -intercepts none, -intercept , vertical asymptote , hole , slant asymptote , increasing , decreasing , local maxima , local minima none, concave down , concave up .     Polynomial and Rational Functions   Sketch the graph of each function.     , .  increasing: , decreasing: , local maxima: , local minima: , concave up: , concave down: , inflection point(s): .     , .  domain , -intercept , -intercept 0, horizontal asymptote , increasing , decreasing , local minima , local maxima , concave up , concave down , inflection points , , .     , .  domain , -intercept: 0, -intercept: 0, vertical asymptotes: , horizontal asymptote: , increasing: none, decreasing: , local maxima: none, local minima: none, concave up , concave down , inflection point .     , .  domain , -intercepts none, -intercept none, vertical asymptote , increasing , decreasing , local minima and , local maxima none, concave up , concave down none.     , .  domain , -intercepts: , -intercept: , increasing: , decreasing: , local minima: none, local maxima: , concave up: , concave down: , inflection point(s): none.     increasing: , decreasing: , local minima: , local maxima: , concave up: , concave down: , inflection point(s): .     Transcendental Functions   Sketch the graph of each function.     .  domain , -intercepts , -intercept 0, increasing on , decreasing: , local minimum: , local maximum: , concave up: , concave down: , inflection point: .     , .  domain , -intercepts none, -intercept 2, decreasing: , increasing: , local min: , local max: none, concave up: , concave down: none, inflection points: none.     , .  domain , -intercepts , -intercept none, increasing: , decreasing: , local minima: , local maxima: none, concave up: none, concave down: , inflection point(s): none.     , .  domain , -intercepts none, -intercept , decreasing: , increasing: , local min: , local max: none, concave up: , concave down: , inflection points: .     , .  domain , -intercepts none, -intercept , increasing: , decreasing: none, local minima: none, local maxima: none, concave up: , concave down: .     , .  domain , -intercepts , -intercept none, increasing: , decreasing: , local minima: none, local maxima: , concave up: , concave down: , inflection point(s): .     "
},
{
  "id": "project-polynomials",
  "level": "2",
  "url": "sec-sketching-graphs-of-functions.html#project-polynomials",
  "type": "Exercise Group",
  "number": "4.3.1",
  "title": "Polynomials.",
  "body": " Polynomials   Sketch the graph of each function.     , .  increasing: , decreasing: , local maxima: none, local minima: , concave up: , concave down: none, inflection point(s): none.     , .  increasing: , decreasing: , local maxima: , local minima: , concave up: , concave down: , inflection point(s): .     , .  increasing: , decreasing: , local maxima: , local minima: , concave down: , concave up: , inflection point(s): .     , .  increasing: , decreasing: , local maxima: , local minima: , concave up: , concave down , inflection point(s): .     , .  -intercepts , -intercept: , increasing: , decreasing: , local minima: , local maxima: none, concave up: , concave down: , inflection point(s): .   "
},
{
  "id": "project-rational-functions",
  "level": "2",
  "url": "sec-sketching-graphs-of-functions.html#project-rational-functions",
  "type": "Exercise Group",
  "number": "4.3.2",
  "title": "Rational Functions (Vertical Asymptotes).",
  "body": " Rational Functions (Vertical Asymptotes)   Sketch the graph of each function.     , .  domain: , -intercepts , -intercept: , increasing: , decreasing: none, local minima: none, local maxima: none, concave up: , concave down: .     , , .  domain: , -intercept: , -intercept: , vertical asymptote , horizontal asymptote , increasing , decreasing , local minima: , local maxima: none, concave down: , concave up: , inflection point: .     , .  domain: , -intercept , -intercept: , increasing: , decreasing: , local max: , local min: , concave up: , concave down: , inflection points: .     , .  domain , -intercept , -intercept: , vertical asymptote: , hole: , horizontal asymptote: , increasing: , decreasing: none, local minima: none, local maxima: none, concave up: , concave down: .   "
},
{
  "id": "project-graphing-trigonometric-functions",
  "level": "2",
  "url": "sec-sketching-graphs-of-functions.html#project-graphing-trigonometric-functions",
  "type": "Exercise Group",
  "number": "4.3.3",
  "title": "Trigonometric Functions.",
  "body": " Trigonometric Functions   Sketch the graph of each function.    ,  , .  -intercepts , -intercept: , increasing: , decreasing: , local max: , local min: , concave down: , concave up: , inflection points: .    ,  , .  -intercepts , -intercept 3, decreasing: , increasing: , local min: , local maxima: none, concave down: , concave up: , inflection points: .    ,  , .  domain , -intercepts , -intercept 0, increasing , decreasing none, local minima none, local maxima none, concave down , concave up , inflection point .    ,  , .  domain , -intercepts , -intercept 0, increasing , decreasing , local maxima , local minima , concave down , concave up , inflection point .    ,  , .  increasing , decreasing none, local minima none, local maxima none, concave up , concave down , inflection point .    ,  , .  domain , -intercept , increasing , decreasing , local maxima , local minima , concave up , concave down , inflection points and .    ,  , .  -intercept 1, increasing: , decreasing: , local min: , local max: , concave down: , concave up: , inflection points: .   "
},
{
  "id": "project-vertical-tangents",
  "level": "2",
  "url": "sec-sketching-graphs-of-functions.html#project-vertical-tangents",
  "type": "Exercise Group",
  "number": "4.3.4",
  "title": "Vertical Tangents and Cusps.",
  "body": " Vertical Tangents and Cusps   Sketch the graph of each function.     , .  domain , -intercepts , -intercept 0, increasing: , decreasing: , local minima: , local maxima: , concave up: , concave down: none.     , .  domain , -intercept , -intercept , decreasing , increasing , local minimum , concave down , concave up none, inflection points none.     , .  domain , -intercepts , -intercept 0, increasing: , decreasing: , local minima: , local maxima: , concave up: none, concave down: .     , .  domain , -intercepts , -intercept 0, increasing , decreasing , local maximum , local minimum , concave up , concave down , inflection point .   "
},
{
  "id": "project-slant-asymptotes",
  "level": "2",
  "url": "sec-sketching-graphs-of-functions.html#project-slant-asymptotes",
  "type": "Exercise Group",
  "number": "4.3.5",
  "title": "Slant Asymptotes.",
  "body": " Slant Asymptotes   Sketch the graph of each function.     , .  domain: , -intercept: , -intercept: , vertical asymptote: , slant asymptote: , increasing , decreasing , local maxima , local minima , concave down , concave up .     , .  domain , -intercepts none, -intercept , vertical asymptote , slant asymptote , increasing , decreasing , local maxima , local minima , concave down , concave up .     , , .  domain , -intercepts , -intercept , vertical asymptote , slant asymptote , increasing , decreasing , local maximum , local minimum , concave down , concave up , inflection points none.     , .  domain , -intercepts none, -intercept , vertical asymptote , hole , slant asymptote , increasing , decreasing , local maxima , local minima none, concave down , concave up .   "
},
{
  "id": "project-polynomial-rational-mixed",
  "level": "2",
  "url": "sec-sketching-graphs-of-functions.html#project-polynomial-rational-mixed",
  "type": "Exercise Group",
  "number": "4.3.6",
  "title": "Polynomial and Rational Functions.",
  "body": " Polynomial and Rational Functions   Sketch the graph of each function.     , .  increasing: , decreasing: , local maxima: , local minima: , concave up: , concave down: , inflection point(s): .     , .  domain , -intercept , -intercept 0, horizontal asymptote , increasing , decreasing , local minima , local maxima , concave up , concave down , inflection points , , .     , .  domain , -intercept: 0, -intercept: 0, vertical asymptotes: , horizontal asymptote: , increasing: none, decreasing: , local maxima: none, local minima: none, concave up , concave down , inflection point .     , .  domain , -intercepts none, -intercept none, vertical asymptote , increasing , decreasing , local minima and , local maxima none, concave up , concave down none.     , .  domain , -intercepts: , -intercept: , increasing: , decreasing: , local minima: none, local maxima: , concave up: , concave down: , inflection point(s): none.     increasing: , decreasing: , local minima: , local maxima: , concave up: , concave down: , inflection point(s): .   "
},
{
  "id": "project-transcendental-functions",
  "level": "2",
  "url": "sec-sketching-graphs-of-functions.html#project-transcendental-functions",
  "type": "Exercise Group",
  "number": "4.3.7",
  "title": "Transcendental Functions.",
  "body": " Transcendental Functions   Sketch the graph of each function.     .  domain , -intercepts , -intercept 0, increasing on , decreasing: , local minimum: , local maximum: , concave up: , concave down: , inflection point: .     , .  domain , -intercepts none, -intercept 2, decreasing: , increasing: , local min: , local max: none, concave up: , concave down: none, inflection points: none.     , .  domain , -intercepts , -intercept none, increasing: , decreasing: , local minima: , local maxima: none, concave up: none, concave down: , inflection point(s): none.     , .  domain , -intercepts none, -intercept , decreasing: , increasing: , local min: , local max: none, concave up: , concave down: , inflection points: .     , .  domain , -intercepts none, -intercept , increasing: , decreasing: none, local minima: none, local maxima: none, concave up: , concave down: .     , .  domain , -intercepts , -intercept none, increasing: , decreasing: , local minima: none, local maxima: , concave up: , concave down: , inflection point(s): .   "
},
{
  "id": "sec-lhopitals-rule",
  "level": "1",
  "url": "sec-lhopitals-rule.html",
  "type": "Section",
  "number": "5.1",
  "title": "L’Hopital’s Rule",
  "body": " L'Hopital's Rule    L'Hopital's Rule Summary   Determine if the limit is an indeterminate form, and if so, then what form it is.  If it's or , then apply L'Hopital's rule directly.  If it's (or ), flip one of the terms to convert it to or (whichever is more convenient).  If it's , then write it as one fraction first, and then continue.  If it's an indeterminate form with an exponent, like , , or , then first use logarithms.   Visually,      "
},
{
  "id": "sec-inverse-trig-sub",
  "level": "1",
  "url": "sec-inverse-trig-sub.html",
  "type": "Section",
  "number": "6.1",
  "title": "Inverse Trigonometric Substitution",
  "body": " Inverse Trigonometric Substitution   Inverse trigonometric substitution is a technique used to evaluate integrals that contain expressions of the form , , or . This method uses trigonometric identities to simplify these integrals.    Summary of Inverse Trigonometric Substitution                                    Identify the form of the substitution (sine, tangent, or secant).  Apply the substitution. Sketch a right triangle and label the sides, to represent the relationships between and .  Simplify the integral.  Integrate with the new variable , using previous strategies, typically a trigonometric integral.  Back-substitute using the inverse trigonometric function to substitute back for .      Examples   Example   Evaluate .    Let , so .               Example   Determine      Example   Determine      Example   Determine       Evaluate       Evaluate       Evaluate       Evaluate       Evaluate       Evaluate       Evaluate      "
},
{
  "id": "summary-of-inverse-trigonometric-substitution-2",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#summary-of-inverse-trigonometric-substitution-2",
  "type": "Table",
  "number": "6.1.1",
  "title": "",
  "body": "                            "
},
{
  "id": "examples-2",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-2",
  "type": "Checkpoint",
  "number": "6.1.2",
  "title": "Example.",
  "body": " Example   Evaluate .    Let , so .             "
},
{
  "id": "examples-3",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-3",
  "type": "Checkpoint",
  "number": "6.1.3",
  "title": "Example.",
  "body": " Example   Determine    "
},
{
  "id": "examples-4",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-4",
  "type": "Checkpoint",
  "number": "6.1.4",
  "title": "Example.",
  "body": " Example   Determine    "
},
{
  "id": "examples-5",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-5",
  "type": "Checkpoint",
  "number": "6.1.5",
  "title": "Example.",
  "body": " Example   Determine    "
},
{
  "id": "examples-6",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-6",
  "type": "Checkpoint",
  "number": "6.1.6",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-7",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-7",
  "type": "Checkpoint",
  "number": "6.1.7",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-8",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-8",
  "type": "Checkpoint",
  "number": "6.1.8",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-9",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-9",
  "type": "Checkpoint",
  "number": "6.1.9",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-10",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-10",
  "type": "Checkpoint",
  "number": "6.1.10",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-11",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-11",
  "type": "Checkpoint",
  "number": "6.1.11",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-12",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-12",
  "type": "Checkpoint",
  "number": "6.1.12",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "sec-summary-of-series",
  "level": "1",
  "url": "sec-summary-of-series.html",
  "type": "Section",
  "number": "7.1",
  "title": "Summary of Series",
  "body": " Summary of Series   In previous sections, we explored various methods for determining if an infinite series converges or diverges. Also, in a few limited cases, it is possible to determine the exact value of the convergent series.  The culmination of the series chapter is to be able to take a given series and determine if it converges or diverges. Most problems won't tell you which test to use, so you'll have to be able to use pattern recognition to figure out which test applies. This is similar to how evaluating integrals involves pattern recognition for which technique to use. For each of these questions, you should:    State convergence or divergence,  Specify which test you used, and,  Why it can be applied.      Choosing Which Test to Use      Do the terms not approach 0?   If or the limit does not exist, use the th-term test for divergence: the series diverges immediately.     Are there exponents of ?  Could be a geometric series . Rewrite in the form . With common ratio ,     converges   diverges    The sum is (if it converges)     Are two similar terms being subtracted? Or can you do partial-fraction decomposition ? Could be telescoping. Write the partial sum explicitly, then take . Often used for simple rational functions, or with quadratic denominators that are factorable.     Can it be written as a power of ?   Consider the -series . Use the -series test: converges if , diverges if . Should be second-nature in order to help with the comparison tests.     Is there a fraction, with a numerator or denominator with more than one term? Especially a rational function, or generally terms involving fractions. Consider comparison tests . Use asymptotic comparison (keeping only the dominant term). Use the direct or limit comparison test: compare to a simpler series (usually a -series or geometric).    Use direct comparison, if it's easy enough.  Use limit comparison if direct comparison is too difficult. Calculate . If , then and behave the same.       Has factorials ( ) and\/or exponentials ( )? Especially mixed with powers ( ) or double exponentials ( ).   Use the ratio test : compute .     converges (absolutely)   diverges   inconclusive (try another test)       Has a double power? With in the exponent and  in the base (like or of the form ).   Use the root test : compute .     converges (absolutely)   diverges   inconclusive (try another test)    Note: Don't confuse this with a geometric series , which has a constant base.     Has an alternating factor (like or )?    Use the alternating series test : if and is decreasing, then the series converges (conditionally).     Can be integrated easily, maybe using -substitution?  Use the integral test : convergence of is the same as .       Overall Remarks    Some series can be shown to converge or diverge using multiple different tests (which give you the same conclusion). However, one method may be easier or harder than the other.  Always check if the terms approach 0. The divergence test is the easiest to apply (because it only involves taking a limit), and it can lead to a quick conclusion of divergence. It is often forgotten by students.     "
},
{
  "id": "sec-series-review",
  "level": "1",
  "url": "sec-series-review.html",
  "type": "Section",
  "number": "7.2",
  "title": "Series Review",
  "body": " Series Review   The three main question types for series (and sequences) problems are:  Find the limit of the sequence, or determine if the sequence diverges.  Determine if series converges or diverges.  Find the value of the sum of the series, or determine if it diverges.  Determine if series converges absolutely, converges conditionally, or diverges.      Exercises    Limit of sequences   Find the limit of each sequence, or determine if the sequence diverges.                                                                                                                                 Convergence of series   Determine if each series converges or diverges.                                             Sum of a series   Find the value of the sum of each series, or determine if it diverges. Simplify your answer completely.                        Absolute convergence and conditional convergence   Determine if each series converges absolutely, converges conditionally, or diverges.                     "
},
{
  "id": "sec-series-review-3-2-1-3",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-3",
  "type": "Exercise",
  "number": "7.2.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-4",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-4",
  "type": "Exercise",
  "number": "7.2.1.2",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-5",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-5",
  "type": "Exercise",
  "number": "7.2.1.3",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-6",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-6",
  "type": "Exercise",
  "number": "7.2.1.4",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-7",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-7",
  "type": "Exercise",
  "number": "7.2.1.5",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-8",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-8",
  "type": "Exercise",
  "number": "7.2.1.6",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-9",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-9",
  "type": "Exercise",
  "number": "7.2.1.7",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-10",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-10",
  "type": "Exercise",
  "number": "7.2.1.8",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-11",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-11",
  "type": "Exercise",
  "number": "7.2.1.9",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-12",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-12",
  "type": "Exercise",
  "number": "7.2.1.10",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-13",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-13",
  "type": "Exercise",
  "number": "7.2.1.11",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-14",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-14",
  "type": "Exercise",
  "number": "7.2.1.12",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-15",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-15",
  "type": "Exercise",
  "number": "7.2.1.13",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-16",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-16",
  "type": "Exercise",
  "number": "7.2.1.14",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-17",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-17",
  "type": "Exercise",
  "number": "7.2.1.15",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-18",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-18",
  "type": "Exercise",
  "number": "7.2.1.16",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-19",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-19",
  "type": "Exercise",
  "number": "7.2.1.17",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-20",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-20",
  "type": "Exercise",
  "number": "7.2.1.18",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-21",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-21",
  "type": "Exercise",
  "number": "7.2.1.19",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-22",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-22",
  "type": "Exercise",
  "number": "7.2.1.20",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-23",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-23",
  "type": "Exercise",
  "number": "7.2.1.21",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-24",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-24",
  "type": "Exercise",
  "number": "7.2.1.22",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-25",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-25",
  "type": "Exercise",
  "number": "7.2.1.23",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-26",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-26",
  "type": "Exercise",
  "number": "7.2.1.24",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-27",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-27",
  "type": "Exercise",
  "number": "7.2.1.25",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-28",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-28",
  "type": "Exercise",
  "number": "7.2.1.26",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-29",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-29",
  "type": "Exercise",
  "number": "7.2.1.27",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-30",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-30",
  "type": "Exercise",
  "number": "7.2.1.28",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-31",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-31",
  "type": "Exercise",
  "number": "7.2.1.29",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-32",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-32",
  "type": "Exercise",
  "number": "7.2.1.30",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-33",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-33",
  "type": "Exercise",
  "number": "7.2.1.31",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-34",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-34",
  "type": "Exercise",
  "number": "7.2.1.32",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-35",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-35",
  "type": "Exercise",
  "number": "7.2.1.33",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-36",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-36",
  "type": "Exercise",
  "number": "7.2.1.34",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-37",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-37",
  "type": "Exercise",
  "number": "7.2.1.35",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-38",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-38",
  "type": "Exercise",
  "number": "7.2.1.36",
  "title": "",
  "body": "      "
},
{
  "id": "sec-series-review-3-2-1-39",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-39",
  "type": "Exercise",
  "number": "7.2.1.37",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-40",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-40",
  "type": "Exercise",
  "number": "7.2.1.38",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-41",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-41",
  "type": "Exercise",
  "number": "7.2.1.39",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-42",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-42",
  "type": "Exercise",
  "number": "7.2.1.40",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-2-3",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-3",
  "type": "Exercise",
  "number": "7.2.1.41",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-4",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-4",
  "type": "Exercise",
  "number": "7.2.1.42",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-5",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-5",
  "type": "Exercise",
  "number": "7.2.1.43",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-6",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-6",
  "type": "Exercise",
  "number": "7.2.1.44",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-7",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-7",
  "type": "Exercise",
  "number": "7.2.1.45",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-8",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-8",
  "type": "Exercise",
  "number": "7.2.1.46",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-9",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-9",
  "type": "Exercise",
  "number": "7.2.1.47",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-10",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-10",
  "type": "Exercise",
  "number": "7.2.1.48",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-11",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-11",
  "type": "Exercise",
  "number": "7.2.1.49",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-12",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-12",
  "type": "Exercise",
  "number": "7.2.1.50",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-13",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-13",
  "type": "Exercise",
  "number": "7.2.1.51",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-14",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-14",
  "type": "Exercise",
  "number": "7.2.1.52",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-15",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-15",
  "type": "Exercise",
  "number": "7.2.1.53",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-16",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-16",
  "type": "Exercise",
  "number": "7.2.1.54",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-17",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-17",
  "type": "Exercise",
  "number": "7.2.1.55",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-18",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-18",
  "type": "Exercise",
  "number": "7.2.1.56",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-19",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-19",
  "type": "Exercise",
  "number": "7.2.1.57",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-20",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-20",
  "type": "Exercise",
  "number": "7.2.1.58",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-21",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-21",
  "type": "Exercise",
  "number": "7.2.1.59",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-22",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-22",
  "type": "Exercise",
  "number": "7.2.1.60",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-23",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-23",
  "type": "Exercise",
  "number": "7.2.1.61",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-24",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-24",
  "type": "Exercise",
  "number": "7.2.1.62",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-25",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-25",
  "type": "Exercise",
  "number": "7.2.1.63",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-26",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-26",
  "type": "Exercise",
  "number": "7.2.1.64",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-27",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-27",
  "type": "Exercise",
  "number": "7.2.1.65",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-28",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-28",
  "type": "Exercise",
  "number": "7.2.1.66",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-29",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-29",
  "type": "Exercise",
  "number": "7.2.1.67",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-30",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-30",
  "type": "Exercise",
  "number": "7.2.1.68",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-31",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-31",
  "type": "Exercise",
  "number": "7.2.1.69",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-32",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-32",
  "type": "Exercise",
  "number": "7.2.1.70",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-33",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-33",
  "type": "Exercise",
  "number": "7.2.1.71",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-34",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-34",
  "type": "Exercise",
  "number": "7.2.1.72",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-35",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-35",
  "type": "Exercise",
  "number": "7.2.1.73",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-36",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-36",
  "type": "Exercise",
  "number": "7.2.1.74",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-37",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-37",
  "type": "Exercise",
  "number": "7.2.1.75",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-38",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-38",
  "type": "Exercise",
  "number": "7.2.1.76",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-39",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-39",
  "type": "Exercise",
  "number": "7.2.1.77",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-40",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-40",
  "type": "Exercise",
  "number": "7.2.1.78",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-41",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-41",
  "type": "Exercise",
  "number": "7.2.1.79",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-42",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-42",
  "type": "Exercise",
  "number": "7.2.1.80",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-3",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-3",
  "type": "Exercise",
  "number": "7.2.1.81",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-4",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-4",
  "type": "Exercise",
  "number": "7.2.1.82",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-5",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-5",
  "type": "Exercise",
  "number": "7.2.1.83",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-6",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-6",
  "type": "Exercise",
  "number": "7.2.1.84",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-7",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-7",
  "type": "Exercise",
  "number": "7.2.1.85",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-8",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-8",
  "type": "Exercise",
  "number": "7.2.1.86",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-9",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-9",
  "type": "Exercise",
  "number": "7.2.1.87",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-10",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-10",
  "type": "Exercise",
  "number": "7.2.1.88",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-11",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-11",
  "type": "Exercise",
  "number": "7.2.1.89",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-12",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-12",
  "type": "Exercise",
  "number": "7.2.1.90",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-13",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-13",
  "type": "Exercise",
  "number": "7.2.1.91",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-14",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-14",
  "type": "Exercise",
  "number": "7.2.1.92",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-15",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-15",
  "type": "Exercise",
  "number": "7.2.1.93",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-16",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-16",
  "type": "Exercise",
  "number": "7.2.1.94",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-17",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-17",
  "type": "Exercise",
  "number": "7.2.1.95",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-18",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-18",
  "type": "Exercise",
  "number": "7.2.1.96",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-19",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-19",
  "type": "Exercise",
  "number": "7.2.1.97",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-20",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-20",
  "type": "Exercise",
  "number": "7.2.1.98",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-21",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-21",
  "type": "Exercise",
  "number": "7.2.1.99",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-3",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-3",
  "type": "Exercise",
  "number": "7.2.1.100",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-4",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-4",
  "type": "Exercise",
  "number": "7.2.1.101",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-5",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-5",
  "type": "Exercise",
  "number": "7.2.1.102",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-6",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-6",
  "type": "Exercise",
  "number": "7.2.1.103",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-7",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-7",
  "type": "Exercise",
  "number": "7.2.1.104",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-8",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-8",
  "type": "Exercise",
  "number": "7.2.1.105",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-9",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-9",
  "type": "Exercise",
  "number": "7.2.1.106",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-10",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-10",
  "type": "Exercise",
  "number": "7.2.1.107",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-11",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-11",
  "type": "Exercise",
  "number": "7.2.1.108",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-12",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-12",
  "type": "Exercise",
  "number": "7.2.1.109",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-13",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-13",
  "type": "Exercise",
  "number": "7.2.1.110",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-14",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-14",
  "type": "Exercise",
  "number": "7.2.1.111",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-15",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-15",
  "type": "Exercise",
  "number": "7.2.1.112",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-16",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-16",
  "type": "Exercise",
  "number": "7.2.1.113",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-17",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-17",
  "type": "Exercise",
  "number": "7.2.1.114",
  "title": "",
  "body": ""
},
{
  "id": "sec-power-series",
  "level": "1",
  "url": "sec-power-series.html",
  "type": "Section",
  "number": "8.1",
  "title": "Power Series",
  "body": " Power Series    Interval of Convergence of Power Series Summary  To determine the interval of convergence of a power series:      Determine the open interval where the series converges .  Use the ratio test (or root test).    Ratio test: converges if .  Root test: converges if .    Solve the resulting inequality to find the (open) interval where the series converges, which will always be of the form , where is the radius of convergence.     Test the endpoints separately . Check the convergence of the series at and by substituting these values into the original series, and using a suitable test or the convergence or divergence of a known series. Some common series forms you'll see:    Harmonic series  Alternating harmonic series  Divergence test (terms don't approach 0)   -series  Alternating series test (alternating series whose terms approach 0)    (If or , there are no endpoints to test)     Form the complete interval of convergence , by combining the interval from step 2 and the endpoints from step 3.     Remarks:    Often, when testing the endpoints, the two values of will lead to a very similar series. Contrasting where they are different can help you think about which converges and\/or which diverges.  The ratio test is used for about 90% of all examples. However, sometimes both can be used, and the root test uses easier algebra, particularly when there are a lot of exponents of .  Note that with the ratio test (or root test), the limit is with respect to , and so is a constant with respect to the limit.      Examples    Find the interval of convergence and radius of convergence of each series.                                                                                         Advanced Examples    Find the interval of convergence and radius of convergence of each series.       (where )  (where )                 (where is a positive integer)        Find the radius of convergence of each power series.              Find the interval of convergence and radius of convergence of each series. Then, find the sum of the series for in that interval.     .      The series is geometric.     , converges to .     "
},
{
  "id": "sec-power-series-3-2",
  "level": "2",
  "url": "sec-power-series.html#sec-power-series-3-2",
  "type": "Checkpoint",
  "number": "8.1.1",
  "title": "",
  "body": "  Find the interval of convergence and radius of convergence of each series.                                                                                      "
},
{
  "id": "sec-power-series-4-2",
  "level": "2",
  "url": "sec-power-series.html#sec-power-series-4-2",
  "type": "Checkpoint",
  "number": "8.1.2",
  "title": "",
  "body": "  Find the interval of convergence and radius of convergence of each series.       (where )  (where )                 (where is a positive integer)     "
},
{
  "id": "sec-power-series-4-3",
  "level": "2",
  "url": "sec-power-series.html#sec-power-series-4-3",
  "type": "Checkpoint",
  "number": "8.1.3",
  "title": "",
  "body": "  Find the radius of convergence of each power series.           "
},
{
  "id": "sec-power-series-4-4",
  "level": "2",
  "url": "sec-power-series.html#sec-power-series-4-4",
  "type": "Checkpoint",
  "number": "8.1.4",
  "title": "",
  "body": "  Find the interval of convergence and radius of convergence of each series. Then, find the sum of the series for in that interval.     .      The series is geometric.     , converges to .   "
},
{
  "id": "sec-representation-of-functions-with-power-series",
  "level": "1",
  "url": "sec-representation-of-functions-with-power-series.html",
  "type": "Section",
  "number": "8.2",
  "title": "Representation of Functions with Power Series",
  "body": " Representation of Functions with Power Series   Power series can be used to represent certain types of functions.    Motivational Example: Geometric Series  The first and simplest example we already know is the geometric series,   This equation represents the function as the power series (as long as ), and so we say that is the power series representation of . Consider this Desmos applet: Geometric Series Power Series . Recall that the sum of a series is the limit of its sequence of partial sums. Then, if we write to be the partial sum,   Then, as the number of terms increases (as increases), the sum becomes a better and better approximation for the function (where ).    Power Series as an Approximation  In general, for a function with a power series, a partial sum of the power series can be used to approximate the function (within its interval of convergence). That is, a function with a power series can be approximated by its (partial) power series, a polynomial of degree ,   In general, the approximation improves if we add more terms, i.e. as .    Power Series Representation of Functions  The geometric series can be used to find power series representations of other related functions. The idea is to write the function in the form , where is any expression, and then apply the geometric series formula.   For the function , it just has a positive instead of a negative . We can write as , and apply the geometric series,   Note that typically, we split up the from the power of , to more clearly separate the coefficient in front from the power.   For the interval of convergence, we could use the ratio test, but it is unnecessary, because we know that a geometric series converges precisely when . In this case, it is , so if , or , or .    Consider . Here, there is instead of , and it is also positive instead of negative. So, we can write,   This converges if , or , or .    Consider . To make the denominator into the form , we need to have a 1, so we need to factor out a 4,   This converges if , or , or .    Consider . First, separate the to the side, and then write the positive as ,      Examples    Find the power series representation for each function (centered at 0), and find its interval of convergence.                                       .    .      .                                       .    , IOC .      .    , IOC .      .    , IOC .      (where )       "
},
{
  "id": "sec-representation-of-functions-with-power-series-5-3",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-5-3",
  "type": "Example",
  "number": "8.2.1",
  "title": "",
  "body": " For the function , it just has a positive instead of a negative . We can write as , and apply the geometric series,   Note that typically, we split up the from the power of , to more clearly separate the coefficient in front from the power.   For the interval of convergence, we could use the ratio test, but it is unnecessary, because we know that a geometric series converges precisely when . In this case, it is , so if , or , or .  "
},
{
  "id": "sec-representation-of-functions-with-power-series-5-4",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-5-4",
  "type": "Example",
  "number": "8.2.2",
  "title": "",
  "body": " Consider . Here, there is instead of , and it is also positive instead of negative. So, we can write,   This converges if , or , or .  "
},
{
  "id": "sec-representation-of-functions-with-power-series-5-5",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-5-5",
  "type": "Example",
  "number": "8.2.3",
  "title": "",
  "body": " Consider . To make the denominator into the form , we need to have a 1, so we need to factor out a 4,   This converges if , or , or .  "
},
{
  "id": "sec-representation-of-functions-with-power-series-5-6",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-5-6",
  "type": "Example",
  "number": "8.2.4",
  "title": "",
  "body": " Consider . First, separate the to the side, and then write the positive as ,   "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-2",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-2",
  "type": "Exercise",
  "number": "8.2.4.1",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-3",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-3",
  "type": "Exercise",
  "number": "8.2.4.2",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-4",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-4",
  "type": "Exercise",
  "number": "8.2.4.3",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-5",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-5",
  "type": "Exercise",
  "number": "8.2.4.4",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-6",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-6",
  "type": "Exercise",
  "number": "8.2.4.5",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-7",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-7",
  "type": "Exercise",
  "number": "8.2.4.6",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-8",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-8",
  "type": "Exercise",
  "number": "8.2.4.7",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-9",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-9",
  "type": "Exercise",
  "number": "8.2.4.8",
  "title": "",
  "body": "  .    .   "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-10",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-10",
  "type": "Exercise",
  "number": "8.2.4.9",
  "title": "",
  "body": "  .      "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-11",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-11",
  "type": "Exercise",
  "number": "8.2.4.10",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-12",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-12",
  "type": "Exercise",
  "number": "8.2.4.11",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-13",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-13",
  "type": "Exercise",
  "number": "8.2.4.12",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-14",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-14",
  "type": "Exercise",
  "number": "8.2.4.13",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-15",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-15",
  "type": "Exercise",
  "number": "8.2.4.14",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-16",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-16",
  "type": "Exercise",
  "number": "8.2.4.15",
  "title": "",
  "body": "    "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-17",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-17",
  "type": "Exercise",
  "number": "8.2.4.16",
  "title": "",
  "body": "  .    , IOC .   "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-18",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-18",
  "type": "Exercise",
  "number": "8.2.4.17",
  "title": "",
  "body": "  .    , IOC .   "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-19",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-19",
  "type": "Exercise",
  "number": "8.2.4.18",
  "title": "",
  "body": "  .    , IOC .   "
},
{
  "id": "sec-representation-of-functions-with-power-series-6-2-1-20",
  "level": "2",
  "url": "sec-representation-of-functions-with-power-series.html#sec-representation-of-functions-with-power-series-6-2-1-20",
  "type": "Exercise",
  "number": "8.2.4.19",
  "title": "",
  "body": "  (where )   "
},
{
  "id": "sec-differentiation-and-integration-of-power-series",
  "level": "1",
  "url": "sec-differentiation-and-integration-of-power-series.html",
  "type": "Section",
  "number": "8.3",
  "title": "Differentiation and Integration of Power Series",
  "body": " Differentiation and Integration of Power Series   One of the reasons that power series are so useful is that it turns out that differentiation and integration (the basic operations of calculus) can be applied to power series in a fairly simple way.  In particular, power series behave like polynomials (on their interval of convergence). This means that you can take their derivatives as if they were a polynomial, i.e. using the power rule, and differentiating term-by-term,   Similarly, integrals (or antiderivatives) can be done with the power rule, and done term-by-term,   It is not immediately obvious that the sum rule for derivatives can work here, since there is an infinite number of terms, but in fact, it does.    Differentiation and Integration of Power Series  Consider a power series which converges on . This means that it defines a function of ,   with domain . Since this is a function, we can take its derivative. In fact, it can be done like a polynomial,   In summation notation, this can be thought of as the derivative being able to be brought ``through\" the summation sign,   The last line comes from applying the power rule. Note the summation now starts at instead of , because the term (which is ) vanishes after taking the derivative. In summary,     Differentiation of power series term-by-term . Let be a power series that converges on , and let on this interval. Then, is differentiable on , and can be differentiated term by term. That is,        Integration of power series term-by-term . Let be a power series that converges on , and let on this interval. Then, is integrable on any closed subinterval of , and for , can be integrated term-by-term. That is,      The proofs of these theorems are beyond the scope, requiring more advanced and subtle analysis arguments.   These properties will allow us to find power series representations for a few more functions.  Note that the theorem says that the radius of convergence doesn't change, but not necessarily the interval of convergence. In particular, differentiating or integration can change convergence at the endpoints of the interval, in the following way:     With differentiation, one or both endpoints of convergence may be lost.    With integration, one or both endpoints may be gained.       Power Series of Arctangent  Recall that,   Then,   Then, taking the antiderivative of both sides,   To find , evaluate both sides at , to get , so . The series converges if , or , or .     For , the series is , which converges by the alternating series test.    For , we get the same series.     Thus, the series converges for . In summary,     Arctangent power series .       Power Series of the Logarithm  A power series for the logarithmic function can be found by integrating the geometric series. Recall that,   Then, integrating,   This provides a series representation of . Sometimes, the series is written with a shifted index, as . The series converges for , because the radius of convergence is still 1. However, we still have to check the endpoints, because endpoints can become convergent when you integrate.     For , , the alternating harmonic series, which converges.    For , , the harmonic series, which diverges.     Thus, the power series converges for .     Logarithm power series .     This gives a series for , which is the natural logarithm function, shifted left by one unit. For just the natural logarithm function , we can substitute with .   This results in a power series centered at , which converges for .    Derivative of Geometric Series  The geometric series can also be differentiated to obtain new series.   Recall the geometric series,   which converges on . Differentiating both sides gives a series for a new function,   which also converges on .    The previous example can be taken one step further. Start with the equation,   Differentiating both sides,   This gives a series for .     If you instead just wanted , you can divide both sides by 2,       This kind of creative reasoning can be used to find power series for very particular functions.   Consider the function . Notice that the denominator is similar to , except it is , and cubed. Then, the entire expression is multiplied by .  Start with the geometric series, and first replace with , to get in the denominator,   Then, differentiate both sides, like before,   Then, differentiate again,   Then, we want the numerator to be instead of 2, so we can divide both sides by 2, and multiply both sides by ,    In summary,   You probably don't want to try and memorize these formulas. The main idea is just that you can differentiate the geometric series to get power series representations for new, similar functions.     Find a power series representation for each function (using the geometric series), and determine its radius of convergence.      .    substitute with , differentiate, and multiply by .     , .       .    factor out 2 to get into the form , use the geometric series, differentiate two times, and multiply by .     , .       "
},
{
  "id": "sec-differentiation-and-integration-of-power-series-3-9",
  "level": "2",
  "url": "sec-differentiation-and-integration-of-power-series.html#sec-differentiation-and-integration-of-power-series-3-9",
  "type": "Theorem",
  "number": "8.3.1",
  "title": "",
  "body": "   Differentiation of power series term-by-term . Let be a power series that converges on , and let on this interval. Then, is differentiable on , and can be differentiated term by term. That is,    "
},
{
  "id": "sec-differentiation-and-integration-of-power-series-3-10",
  "level": "2",
  "url": "sec-differentiation-and-integration-of-power-series.html#sec-differentiation-and-integration-of-power-series-3-10",
  "type": "Theorem",
  "number": "8.3.2",
  "title": "",
  "body": "   Integration of power series term-by-term . Let be a power series that converges on , and let on this interval. Then, is integrable on any closed subinterval of , and for , can be integrated term-by-term. That is,    "
},
{
  "id": "sec-differentiation-and-integration-of-power-series-3-11",
  "level": "2",
  "url": "sec-differentiation-and-integration-of-power-series.html#sec-differentiation-and-integration-of-power-series-3-11",
  "type": "Proof",
  "number": "8.3.1.1",
  "title": "",
  "body": " The proofs of these theorems are beyond the scope, requiring more advanced and subtle analysis arguments.  "
},
{
  "id": "sec-differentiation-and-integration-of-power-series-4-11",
  "level": "2",
  "url": "sec-differentiation-and-integration-of-power-series.html#sec-differentiation-and-integration-of-power-series-4-11",
  "type": "Theorem",
  "number": "8.3.3",
  "title": "",
  "body": "   Arctangent power series .    "
},
{
  "id": "sec-differentiation-and-integration-of-power-series-5-9",
  "level": "2",
  "url": "sec-differentiation-and-integration-of-power-series.html#sec-differentiation-and-integration-of-power-series-5-9",
  "type": "Theorem",
  "number": "8.3.4",
  "title": "",
  "body": "   Logarithm power series .    "
},
{
  "id": "sec-differentiation-and-integration-of-power-series-6-3",
  "level": "2",
  "url": "sec-differentiation-and-integration-of-power-series.html#sec-differentiation-and-integration-of-power-series-6-3",
  "type": "Example",
  "number": "8.3.5",
  "title": "",
  "body": " Recall the geometric series,   which converges on . Differentiating both sides gives a series for a new function,   which also converges on .  "
},
{
  "id": "sec-differentiation-and-integration-of-power-series-6-4",
  "level": "2",
  "url": "sec-differentiation-and-integration-of-power-series.html#sec-differentiation-and-integration-of-power-series-6-4",
  "type": "Example",
  "number": "8.3.6",
  "title": "",
  "body": " The previous example can be taken one step further. Start with the equation,   Differentiating both sides,   This gives a series for .     If you instead just wanted , you can divide both sides by 2,      "
},
{
  "id": "sec-differentiation-and-integration-of-power-series-6-6",
  "level": "2",
  "url": "sec-differentiation-and-integration-of-power-series.html#sec-differentiation-and-integration-of-power-series-6-6",
  "type": "Example",
  "number": "8.3.7",
  "title": "",
  "body": " Consider the function . Notice that the denominator is similar to , except it is , and cubed. Then, the entire expression is multiplied by .  Start with the geometric series, and first replace with , to get in the denominator,   Then, differentiate both sides, like before,   Then, differentiate again,   Then, we want the numerator to be instead of 2, so we can divide both sides by 2, and multiply both sides by ,   "
},
{
  "id": "sec-differentiation-and-integration-of-power-series-6-10-1-2",
  "level": "2",
  "url": "sec-differentiation-and-integration-of-power-series.html#sec-differentiation-and-integration-of-power-series-6-10-1-2",
  "type": "Exercise",
  "number": "8.3.4.1",
  "title": "",
  "body": "   .    substitute with , differentiate, and multiply by .     , .   "
},
{
  "id": "sec-differentiation-and-integration-of-power-series-6-10-1-3",
  "level": "2",
  "url": "sec-differentiation-and-integration-of-power-series.html#sec-differentiation-and-integration-of-power-series-6-10-1-3",
  "type": "Exercise",
  "number": "8.3.4.2",
  "title": "",
  "body": "   .    factor out 2 to get into the form , use the geometric series, differentiate two times, and multiply by .     , .   "
},
{
  "id": "sec-applications-of-taylor-series",
  "level": "1",
  "url": "sec-applications-of-taylor-series.html",
  "type": "Section",
  "number": "8.4",
  "title": "Applications of Taylor Series",
  "body": " Applications of Taylor Series    Evaluating Limits of Indeterminate Forms  Taylor series provide another method of evaluating limits of indeterminate forms like or . Previously, to do this, you learned:    Various algebraic techniques , like e.g. factoring, multiplying by the conjugate, or using trigonometric identities.  L'Hopital's rule , which is like a shortcut, that works in many situations.    However, there are some situations where L'Hopital's rule is complicated, because the derivatives involved are complicated. Taylor series give a more flexible, general, and simple method.  The broad idea is:    Replace each function with the first few terms of its Taylor series expansion.  Simplify and cancel.  Take the limit by substituting in the limit value.    Sometimes it is not obvious how many terms of the Taylor series to use. A good rule of thumb is 3 or 4 terms, but when in doubt, you can always include more terms. The dots ( ) stand for powers of greater than the last power that appears.   Evaluate each limit using series.                                    Finding Antiderivatives \/ Approximating Integrals with Series   Evaluate each indefinite integral as a power series, and find the radius of convergence.               (requires binomial series)    When evaluating an integral to a desired accuracy, there are 2 ways they will specify the accuracy:    Directly , saying you should have error less than , or less than .    Up to some decimal places , like accurate up to 3 decimal places, or 5 decimal places. Note that accurate up to decimal places basically means to keep the error below . For example:  2 decimal places   5 decimal places        There are 2 ways to bound the error:     Add terms one at a time until your calculator output is stable . Add the first term, then the 2nd, then the 3rd, and so on, one at a time. Each time, check if the decimal digits you care about stop changing. After they stay the same for 2 or 3 steps in a row, that is your answer.  This is the most naive and simple method, which will give you the correct answer for most exam problems. However, it is technically not rigorous, and gives misleading results in some rare tricky cases. To be more safe, you can add more terms to confirm that your answer is correct.     Alternating series error bound . If the series is alternating (which a lot of them are), then the error is bounded by the first omitted term. In other words, .  If you want error less than , then test values of such that is less than .  For example, if is less than , then adding terms up to is sufficient.  This method is more rigorous, and is how you can show your work.     Use power series to approximate each definite integral with the stated accuracy.   (six decimal places)  (six decimal places)  (four decimal places)  ( )  (six decimal places)  ( )  (six decimal places)  ( )  ( )  ( )  (four decimal places)  (four decimal places)  ( )     "
},
{
  "id": "sec-applications-of-taylor-series-2-8",
  "level": "2",
  "url": "sec-applications-of-taylor-series.html#sec-applications-of-taylor-series-2-8",
  "type": "Example",
  "number": "8.4.1",
  "title": "",
  "body": " Evaluate each limit using series.                                 "
},
{
  "id": "sec-applications-of-taylor-series-3-2",
  "level": "2",
  "url": "sec-applications-of-taylor-series.html#sec-applications-of-taylor-series-3-2",
  "type": "Example",
  "number": "8.4.2",
  "title": "",
  "body": " Evaluate each indefinite integral as a power series, and find the radius of convergence.               (requires binomial series)   "
},
{
  "id": "sec-applications-of-taylor-series-3-7",
  "level": "2",
  "url": "sec-applications-of-taylor-series.html#sec-applications-of-taylor-series-3-7",
  "type": "Example",
  "number": "8.4.3",
  "title": "",
  "body": " Use power series to approximate each definite integral with the stated accuracy.   (six decimal places)  (six decimal places)  (four decimal places)  ( )  (six decimal places)  ( )  (six decimal places)  ( )  ( )  ( )  (four decimal places)  (four decimal places)  ( )   "
},
{
  "id": "sec-summary-of-series-representation-of-functions",
  "level": "1",
  "url": "sec-summary-of-series-representation-of-functions.html",
  "type": "Section",
  "number": "8.5",
  "title": "Summary",
  "body": " Summary    Common Maclaurin Series     Key Skills   Find interval of convergence and radius of convergence of a power series.  Find power series representation of a function, and determine interval of convergence.  Evaluate a limit, using series.  Find an antiderivative of a function as a power series, using series.  Approximate an integral, with some accuracy, using series.     More Maclaurin Series    "
},
{
  "id": "ch-differential-equations",
  "level": "1",
  "url": "ch-differential-equations.html",
  "type": "Chapter",
  "number": "9",
  "title": "Differential Equations",
  "body": " Differential Equations     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
