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
  "body": " The Derivative Function   Recall that previously, we found the instantaneous rate of change of a function, which is the slope of the tangent line to the graph of the function, using a limit of the form,   This limit is very important in calculus, so it is given a name and a concise notation, called the derivative .   Derivative at a Point   The derivative of at , denoted by (read as prime of ), is given by,      Derivative at a Specific Point  Find the derivative of at .   Therefore, .   If we want to find the slope of the tangent line at many different values of , then this way of using the definition for each value of is not very efficient.  Instead, we can calculate the derivative at an arbitrary value of , which will give us a formula for the slope of the tangent at any value of .   Squaring Function  Find the derivative of at an arbitrary value of . To do this, instead of plugging in a specific value for , we will just leave it as ,   Therefore, . This means that the slope of the tangent line to the graph of at any value of is . For example, at , the slope of the tangent line is , which is what we found in the previous example.  This allows us to create a table of values for the slope of the tangent line at different values of ,                            This gives the slope at each of these values of . This means that the derivative is itself a function, which takes in a value of , and outputs the slope of the tangent line at that value of . Here is a graph: Graph of and its derivative . At each value of , the slope of the tangent line to the graph of is given by the -value of .   In general, the derivative of a function is not just a number, but is itself a function.    The Derivative as a Function   Derivative Function   Let be a function. The derivative of , denoted by , is another function, defined by,    The derivative is read as prime and as prime of .  The action of finding the derivative of a function is often called taking the derivative or differentiating .      Reciprocal Function  Consider the derivative of ,   To simplify this difference quotient, we first simplify the complex fraction, by clearing denominators, by multiplying numerator and denominator by ,   Therefore, . Observe the relationship between and its derivative: Graph of and its derivative . Notice that:   The slope of the tangent of is negative for all values of , which corresponds to the derivative being negative (or, ).  As gets larger, the slope of the tangent line gets closer to , which corresponds to the derivative getting closer to (or, as ).     Square Root Function  Consider the derivative of ,   Then, the goal is to cancel the factor of in the denominator. It turns out that the correct next algebraic step is a technique called rationalizing the numerator . You may recall rationalizing the denominator, which involves multiplying numerator and denominator in order to eliminate a square root in the denominator. Here, we can use a similar technique with the goal of removing the square roots in the numerator. In this case, we multiply by the conjugate of the numerator, which is ,   Observe the relationship between and its derivative: Desmos .   The slope of starts out large and positive, and then as increases, the slope becomes smaller but still positive.  This corresponds to the derivative being positive for all , and getting closer to 0 as gets larger (or, as ).      Derivative Using Limit Definition   Derivative at a Specific Value  For each function, find the value of the derivative for the given value of .        Derivatives of Polynomial Functions  Find the derivative of each function, using the limit definition of the derivative.           Derivatives of Rational Functions  Find the derivative of each function, using the limit definition of the derivative.       Derivatives of Square Root Functions  Find the derivative of each function, using the limit definition of the derivative.        Tangent Line from Given Values  Find the equation of the tangent line of at , given that and .  or    Finding Derivative from Tangent Line Equation  Suppose that the tangent line to at has equation . Find and .  and    Derivative of  For the function , show that exists. What is the value?      Advanced Examples   Tangent Lines Through an External Point  Determine the equations of both lines that are tangent to the graph of and pass through the point .  and    Continuous but Not Differentiable  Give an example of a function that is continuous on but is not differentiable at .     Tangent Parallel to a Line  At what point on the graph of is the tangent parallel to ?     Evaluating a Limit Using Derivative Information  If and , find .     "
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
  "id": "sec-basic-derivative-rules",
  "level": "1",
  "url": "sec-basic-derivative-rules.html",
  "type": "Section",
  "number": "2.2",
  "title": "Basic Derivative Rules",
  "body": " Basic Derivative Rules   Calculating derivatives using the limit definition is often tedious and sometimes difficult, especially for more complicated functions. It turns out, there are various patterns and shortcut rules for computing derivatives of various functions, i.e. differentiation rules ,   Rules to differentiate specific types of functions, that you have learned about in pre-calculus.  Also, rules to differentiate various types of combinations of those functions.    This could be called systematic differentiation . Combining all of these rules will allow us to compute derivatives of every type of function that is covered in pre-calculus.    Derivative of Constant and a Line  Perhaps the most basic function is a constant function.   Constant Function  Consider the function . This is a constant function, because it always outputs the same value, no matter what the input is. In particular, it always outputs the value 3. Graph of . Its graph is a horizontal line at , which has slope 0, so we would expect that its derivative would be always 0. Indeed,    In general, for a constant function, of the form (where is some number), its derivative is 0, because its graph is a horizontal line, which has slope 0.      Derivative of a Constant Is Zero   If where is some number, then . In other words,     Using the definition of the derivative, we have,     In short,   A slightly more complicated situation is the case of a line.   Linear Function  Consider the function . This is a linear function, because its graph is a line. Graph of . This line has a slope of 2, so we would expect that its derivative would be always 2.   In general, a line has a constant slope, so its derivative is the slope of the line.    Derivatives of Constants and Lines  Find the derivative of each function.           Derivative of Power Functions (The Power Rule)  The next basic type of function we will consider are power functions, where the variable is raised to a constant number.   Discovering the Power Rule Pattern  You may recall from a previous section the following derivatives of , , , and . If not, these can be derived from the limit definition of the derivative. They are,   Observe the pattern for the derivative of these powers of . The derivative has:   A coefficient in the front, which is the exponent of .  The variable raised to an exponent that is one less than what it was before.   This applies to even the first example , as has an exponent of 1, so the pattern says the derivative should be (recall: for any ).  It turns out that this rule holds in general, for any whole number (like 1, 2, 3, etc.), but in fact, for any number.    Power Rule for Derivatives   If for some number , then . In other words,     In other words, to differentiate a function that is some power of the variable ,   Bring down the exponent into the front and multiply it.  Subtract 1 from the exponent.    Basic Power Rule Practice  Find the derivative of each function.       For the reciprocal function , you may recall its derivative is . This also follows the power rule, because .     Negative Exponent Practice  Differentiate each function.     , where is a constant     Derivative of a Constant Multiple  Next, it turns out that if we have a constant multiplied by a function, then that number can be kept in the front, and we can just differentiate the function as normal.   Constant Multiple Practice  Differentiate.             This is formalized by the constant multiple rule.   Constant Multiple Rule   The derivative of a constant multiplied by a function is that constant multiplied by the derivative of the function.       Derivative of Sums and Differences   Differentiating Term by Term  Consider the derivative of . This function has 3 terms ( , , and ). It turns out, if a function has multiple terms (multiple things added or subtracted together), we can find the derivative of each term separately. The derivative of is , the derivative of is 5, and the derivative of is 0. So, the derivative of is .   In general, to differentiate a function with multiple terms,   Differentiate each term individually (term-by-term).  For any coefficients (numbers multiplied in the front), keep them in the front (they come along for the ride ).   These two intuitive rules are formalized by the sum rule and difference rule.   Sum\/Difference Rule   The derivative of a sum or difference is the sum or difference of the derivatives.        The sum or difference rule also applies to any number of functions, not just 2 functions. In other words,   This basically means that derivatives can be determined term-by-term.    Derivative of Polynomial Functions  We can now differentiate any polynomial function, using the previous rules.   Differentiating Polynomials  Differentiate each function.         Expand first.     Derivatives with Rational Exponents and Radical Functions  The power rule can also be used to differentiate functions with rational exponents (i.e. exponents which are fractions), and in general any term that can be represented as a power of the variable .   Recall that,   , , and in general, .  .     Differentiating the Square Root  For the square root function , you may recall its derivative is . This also follows the power rule, because ,    In general, if your derivative has negative exponents, it is good practice to rewrite the final answer with positive exponents.   Rational Exponents and Radicals  Differentiate each function.        The same power rule applies: bring down the exponent, and subtract 1.           Practice: Differentiate   Positive Integer Exponents  Differentiate each function.                 Negative Exponents  Differentiate each function.       Fractional Exponents and Radicals  Differentiate each function.              Evaluating the Derivative  Determine for the given function at the given value of .  ,  ,    Slope of the Tangent  Determine the slope of the tangent to each curve at the given point.  ,  ,  ,  ,  ,  ,  ,  ,     Practice: Tangent Lines   Tangent Line Equations  Find an equation of the tangent line to each function at the given point.  at or  at the point or  at or  at or  ,  ,  ,  ,  at  at  at  at  at  at    Horizontal Tangent Lines  Find all points on the graph where the tangent line is horizontal.  and  , ,  and     Simplifying Before Using Basic Rules  Sometimes, you need to rewrite the function first before you can use the basic rules. In particular, write it as a sum of multiple terms.   Expand Then Differentiate  Differentiate each function.            Divide Then Differentiate  Differentiate each function.            ,       Mixed Simplification  Differentiate each function.           Abstract Functions  Differentiate each function.         Examples   Parabola Slope  At what point on the parabola is the slope of the tangent line equal to 24?     Parallel Tangent on Hyperbola  Find all points on the graph of where the tangent line is parallel to the line .  and    Parallel Tangent on Quartic  Find all points on the graph of where the tangent line is parallel to the line .     Parallel Tangent on Cube Root  Find all points on the graph of where the tangent line is parallel to the line .  and    Parallel Tangent on Parabola  Find all points on the graph of where the tangent line is parallel to the line .     Parallel Tangent on Cubic  Find all points on the graph of where the tangent line is parallel to the line .  and    Parallel Tangent on Power Function  Find the point on the curve where the tangent line is parallel to the line .     No Tangent with Given Slope  Show that the curve has no tangent lines with slope 3.  Solve .  The equation becomes , which has no real solution.    Normal Line  Determine the equation of the normal to the graph of at . (A normal line is perpendicular to the tangent line at the point of tangency.)  The tangent slope is 18, so the normal slope is and the normal line is .    Same Slope?  Do the functions and ever have the same slope? If so, where?  No, they never have the same slope (there is no real solution).    Perpendicular Tangents  Show that the tangent lines to at and are perpendicular.  The slopes of the tangent lines are and , and since , the tangent lines are perpendicular.    Point Where Slope Equals 5  Determine the point on the parabola where the slope of the tangent is 5.     Points Where Slope Equals 12  Determine the coordinates of the points on the graph of at which the slope of the tangent is 12.  and    Two Tangents with Given Slope  Show that there are two tangents to the curve that have a slope of 6.  The tangency points occur at and , giving tangent lines and .    Find the Constant  Determine the value of , given that the line is tangent to the graph of at .     Slope Locations on Parabola   Let .   Find the values of for which the slope of the curve is 0.  Find the values of for which the slope of the curve is 2.    Slope Locations on Cubic   Let .   Find the values of for which the slope of the curve is 0.  Find the values of for which the slope of the curve is 21.    Tangent Slope Conditions   Let .   Find all points on the graph of at which the tangent line is horizontal. and  Find all points on the graph of at which the tangent line has slope 60. and    Tangent Slope Conditions, Radical Function   Let .   Find all points on the graph of at which the tangent line is horizontal.  Find all points on the graph of at which the tangent line has slope .    Find the Parabola  Find the parabola with equation whose tangent line at has equation .  Use and .     Find Constants for Tangent  For what values of and is the line tangent to the parabola when ?  Match the slope and the point at .  and    Find p and q  The graph of has a horizontal tangent line at the point . Find the values of and .  Use and .  and    Find a and b for Tangent  Determine the values of and such that the line is tangent to the graph of at the point where .  Use and .  and    Tangent at Origin, Second Intersection  Find an equation for the line that is tangent to the curve at the origin. Use and evaluate at .  The tangent line from part (a) intersects the curve at another point. Find the coordinates of this point. Solve .     Examples: Tangent Lines at an Arbitrary Point   Tangent Through External Point  Find the equation of the tangent line(s) to that passes through the point .  Find the tangent line at an arbitrary point (say, ), and then find the value of such that the tangent line passes through .  and    Tangent Through External Point II  Find the equation of the tangent line(s) to that passes through the point .  and    Tangent Through Point on Hyperbola  The tangent at point on the curve passes through . Find the coordinates of .     Tangent Lines Through External Point, Parabola  Find the equations of both lines that pass through the point and are tangent to the parabola .  and    Tangent Lines Through Origin  Find the equations of both lines that pass through the origin and are tangent to the parabola .  and    Tangent with Given Slope  Find the equation of the line tangent to the curve that has slope 2.  The tangent at has slope , which must equal 2.     Tangent Intersection Points  Find the -coordinates of the points on the curve where the tangents from the point intersect the curve.  The tangent at has equation , and it must pass through .  and    Tangents to Parabola Through Given Points  Determine the equations of the tangents to the curve that pass through the following points.  Point and  Point and    Tangent Through Point, Parabola  Find the coordinates of the points on the parabola where its tangent line passes through the point .  The tangent to at is , and it must pass through .  The points are and .    Lines Through Point Tangent to Parabola  Find equations of both lines through the point that are tangent to the parabola . The tangent at has equation , and it must pass through . and  Show that there is no line through the point that is tangent to the parabola. Use and require it to pass through , then check whether is real. No tangent line exists.    Y-Intercept of Tangent  Let be the -intercept of the tangent line to the graph of passing through the point . Find the value of .  The tangent at is , and it must pass through .  or    Points with Tangent Through Given Point  Find all points on the graph of with tangent lines passing through the point .  and     Practice: Advanced   Steeper Tangent  Find all values of such that the tangent line to the graph of is steeper than the tangent line of .  leads to a quadratic inequality .  , or the interval    Y-Intercept from X-Intercept  A tangent line to the graph of has an -intercept of . Find the -intercept of this tangent line.  The tangent at has equation , so its -intercept is .  The -intercept is 3.    Find c: Line Tangent to Radical Curve  Find the value of such that the line is tangent to the curve .  At the tangency point , solve and .     Find c: Line Tangent to Parabola  What is the value of such that the line is tangent to the parabola ?  At the tangency point , solve and .     Tangent at Point, Second Intersection  Find an equation for the line that is tangent to the curve at the point . Use and .  The tangent line from part (a) intersects the curve at another point. Find the coordinates of this point. Solve .    Abstract Function Differentiation  Differentiate each function.      Simplify Then Differentiate  Differentiate each function.    , where is a positive constant  , where is a constant    Given Function Values  Given that , , , and , find .  .     Point on Curve with Given Tangent  Find the point on the curve that has a tangent line with equation .  Compare the slope of the line with the derivative of the curve, then check that the point lies on both graphs.  The line is , so its slope is 4. For the curve, . Setting gives . Then , and the line also gives . So the line is tangent to the curve at .    Tangent Lines Using Known Values  Suppose and . Let and .  Find an equation of the line tangent to at .  Find an equation of the line tangent to at .    Tangent Lines from Known Tangent Lines  Suppose the line tangent to the graph of at is and the line tangent to the graph of at has slope 3 and passes through . Find an equation of the line tangent to the following curves at .       Determine Constants b and c  Determine the constants and such that the line tangent to at is .  The tangent line at has slope and passes through the point . So, we require and .  ,    Find a Cubic Function  Find a cubic function whose graph has horizontal tangents at the points and .  Use , , and , .     Find a Parabola from Slope Conditions  Find a parabola with equation that has slope 4 at , slope at , and passes through the point .  Use with and , then use .     Find a,b,c,d from Tangent Conditions  Suppose the curve has a tangent line when with equation and a tangent line when with equation . Find the values of .  Use , , , and .  , , ,    Tangent to Line at Origin  The curve passes through the point and is tangent to the line at the origin. Find .  , ,    Quadratic with Horizontal Tangent  Determine a quadratic function if its graph passes through the point and it has a horizontal tangent at .  Use , , and .     Common Tangent of Two Curves  The curves and have a common tangent line at the point . Find .  Use , , and .  , ,     Disguised Derivative Examples   Limits as Disguised Derivatives  Evaluate each limit by first converting it to a derivative at a particular -value.  This is the definition of .  This is the definition of .    "
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
  "body": " Constant Function  Consider the function . This is a constant function, because it always outputs the same value, no matter what the input is. In particular, it always outputs the value 3. Graph of . Its graph is a horizontal line at , which has slope 0, so we would expect that its derivative would be always 0. Indeed,   "
},
{
  "id": "subsec-derivative-constant-line-6",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-derivative-constant-line-6",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "Derivative of a Constant Is Zero.",
  "body": " Derivative of a Constant Is Zero   If where is some number, then . In other words,     Using the definition of the derivative, we have,    "
},
{
  "id": "subsec-derivative-constant-line-10",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-derivative-constant-line-10",
  "type": "Example",
  "number": "2.2.3",
  "title": "Linear Function.",
  "body": " Linear Function  Consider the function . This is a linear function, because its graph is a line. Graph of . This line has a slope of 2, so we would expect that its derivative would be always 2.  "
},
{
  "id": "subsec-derivative-constant-line-13",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-derivative-constant-line-13",
  "type": "Exercise Group",
  "number": "2.2.1",
  "title": "Derivatives of Constants and Lines.",
  "body": " Derivatives of Constants and Lines  Find the derivative of each function.        "
},
{
  "id": "subsec-power-rule-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-power-rule-3",
  "type": "Example",
  "number": "2.2.4",
  "title": "Discovering the Power Rule Pattern.",
  "body": " Discovering the Power Rule Pattern  You may recall from a previous section the following derivatives of , , , and . If not, these can be derived from the limit definition of the derivative. They are,   Observe the pattern for the derivative of these powers of . The derivative has:   A coefficient in the front, which is the exponent of .  The variable raised to an exponent that is one less than what it was before.   This applies to even the first example , as has an exponent of 1, so the pattern says the derivative should be (recall: for any ).  It turns out that this rule holds in general, for any whole number (like 1, 2, 3, etc.), but in fact, for any number.  "
},
{
  "id": "thm-power-rule",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#thm-power-rule",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "Power Rule for Derivatives.",
  "body": " Power Rule for Derivatives   If for some number , then . In other words,    "
},
{
  "id": "subsec-power-rule-7",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-power-rule-7",
  "type": "Exercise Group",
  "number": "2.2.2",
  "title": "Basic Power Rule Practice.",
  "body": " Basic Power Rule Practice  Find the derivative of each function.     "
},
{
  "id": "subsec-power-rule-8",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-power-rule-8",
  "type": "Remark",
  "number": "2.2.6",
  "title": "",
  "body": " For the reciprocal function , you may recall its derivative is . This also follows the power rule, because .   "
},
{
  "id": "subsec-power-rule-9",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-power-rule-9",
  "type": "Exercise Group",
  "number": "2.2.3",
  "title": "Negative Exponent Practice.",
  "body": " Negative Exponent Practice  Differentiate each function.     , where is a constant  "
},
{
  "id": "subsec-constant-multiple-rule-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-constant-multiple-rule-3",
  "type": "Exercise Group",
  "number": "2.2.4",
  "title": "Constant Multiple Practice.",
  "body": " Constant Multiple Practice  Differentiate.            "
},
{
  "id": "thm-constant-multiple-rule",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#thm-constant-multiple-rule",
  "type": "Theorem",
  "number": "2.2.7",
  "title": "Constant Multiple Rule.",
  "body": " Constant Multiple Rule   The derivative of a constant multiplied by a function is that constant multiplied by the derivative of the function.    "
},
{
  "id": "subsec-sum-difference-rule-2",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-sum-difference-rule-2",
  "type": "Example",
  "number": "2.2.8",
  "title": "Differentiating Term by Term.",
  "body": " Differentiating Term by Term  Consider the derivative of . This function has 3 terms ( , , and ). It turns out, if a function has multiple terms (multiple things added or subtracted together), we can find the derivative of each term separately. The derivative of is , the derivative of is 5, and the derivative of is 0. So, the derivative of is .  "
},
{
  "id": "subsec-sum-difference-rule-6",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-sum-difference-rule-6",
  "type": "Theorem",
  "number": "2.2.9",
  "title": "Sum\/Difference Rule.",
  "body": " Sum\/Difference Rule   The derivative of a sum or difference is the sum or difference of the derivatives.       "
},
{
  "id": "subsec-derivative-polynomials-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-derivative-polynomials-3",
  "type": "Exercise Group",
  "number": "2.2.5",
  "title": "Differentiating Polynomials.",
  "body": " Differentiating Polynomials  Differentiate each function.         Expand first.  "
},
{
  "id": "subsec-rational-exponents-radicals-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-rational-exponents-radicals-3",
  "type": "Remark",
  "number": "2.2.10",
  "title": "",
  "body": " Recall that,   , , and in general, .  .   "
},
{
  "id": "subsec-rational-exponents-radicals-4",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-rational-exponents-radicals-4",
  "type": "Example",
  "number": "2.2.11",
  "title": "Differentiating the Square Root.",
  "body": " Differentiating the Square Root  For the square root function , you may recall its derivative is . This also follows the power rule, because ,   "
},
{
  "id": "subsec-rational-exponents-radicals-6",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-rational-exponents-radicals-6",
  "type": "Exercise Group",
  "number": "2.2.6",
  "title": "Rational Exponents and Radicals.",
  "body": " Rational Exponents and Radicals  Differentiate each function.        The same power rule applies: bring down the exponent, and subtract 1.        "
},
{
  "id": "subsec-practice-differentiate-2",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-differentiate-2",
  "type": "Exercise Group",
  "number": "2.2.7",
  "title": "Positive Integer Exponents.",
  "body": " Positive Integer Exponents  Differentiate each function.               "
},
{
  "id": "subsec-practice-differentiate-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-differentiate-3",
  "type": "Exercise Group",
  "number": "2.2.8",
  "title": "Negative Exponents.",
  "body": " Negative Exponents  Differentiate each function.     "
},
{
  "id": "subsec-practice-differentiate-4",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-differentiate-4",
  "type": "Exercise Group",
  "number": "2.2.9",
  "title": "Fractional Exponents and Radicals.",
  "body": " Fractional Exponents and Radicals  Differentiate each function.            "
},
{
  "id": "subsec-practice-differentiate-5",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-differentiate-5",
  "type": "Exercise Group",
  "number": "2.2.10",
  "title": "Evaluating the Derivative.",
  "body": " Evaluating the Derivative  Determine for the given function at the given value of .  ,  ,  "
},
{
  "id": "subsec-practice-differentiate-6",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-differentiate-6",
  "type": "Exercise Group",
  "number": "2.2.11",
  "title": "Slope of the Tangent.",
  "body": " Slope of the Tangent  Determine the slope of the tangent to each curve at the given point.  ,  ,  ,  ,  ,  ,  ,  ,  "
},
{
  "id": "subsec-practice-tangent-lines-2",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-tangent-lines-2",
  "type": "Exercise Group",
  "number": "2.2.12",
  "title": "Tangent Line Equations.",
  "body": " Tangent Line Equations  Find an equation of the tangent line to each function at the given point.  at or  at the point or  at or  at or  ,  ,  ,  ,  at  at  at  at  at  at  "
},
{
  "id": "subsec-practice-tangent-lines-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-tangent-lines-3",
  "type": "Exercise Group",
  "number": "2.2.13",
  "title": "Horizontal Tangent Lines.",
  "body": " Horizontal Tangent Lines  Find all points on the graph where the tangent line is horizontal.  and  , ,  and  "
},
{
  "id": "subsec-simplify-before-differentiating-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-simplify-before-differentiating-3",
  "type": "Exercise Group",
  "number": "2.2.14",
  "title": "Expand Then Differentiate.",
  "body": " Expand Then Differentiate  Differentiate each function.          "
},
{
  "id": "subsec-simplify-before-differentiating-4",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-simplify-before-differentiating-4",
  "type": "Exercise Group",
  "number": "2.2.15",
  "title": "Divide Then Differentiate.",
  "body": " Divide Then Differentiate  Differentiate each function.            ,     "
},
{
  "id": "subsec-simplify-before-differentiating-5",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-simplify-before-differentiating-5",
  "type": "Exercise Group",
  "number": "2.2.16",
  "title": "Mixed Simplification.",
  "body": " Mixed Simplification  Differentiate each function.         "
},
{
  "id": "subsec-simplify-before-differentiating-6",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-simplify-before-differentiating-6",
  "type": "Exercise Group",
  "number": "2.2.17",
  "title": "Abstract Functions.",
  "body": " Abstract Functions  Differentiate each function.      "
},
{
  "id": "subsec-examples-tangent-lines-2",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-2",
  "type": "Checkpoint",
  "number": "2.2.12",
  "title": "Parabola Slope.",
  "body": " Parabola Slope  At what point on the parabola is the slope of the tangent line equal to 24?   "
},
{
  "id": "subsec-examples-tangent-lines-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-3",
  "type": "Checkpoint",
  "number": "2.2.13",
  "title": "Parallel Tangent on Hyperbola.",
  "body": " Parallel Tangent on Hyperbola  Find all points on the graph of where the tangent line is parallel to the line .  and  "
},
{
  "id": "subsec-examples-tangent-lines-4",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-4",
  "type": "Checkpoint",
  "number": "2.2.14",
  "title": "Parallel Tangent on Quartic.",
  "body": " Parallel Tangent on Quartic  Find all points on the graph of where the tangent line is parallel to the line .   "
},
{
  "id": "subsec-examples-tangent-lines-5",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-5",
  "type": "Checkpoint",
  "number": "2.2.15",
  "title": "Parallel Tangent on Cube Root.",
  "body": " Parallel Tangent on Cube Root  Find all points on the graph of where the tangent line is parallel to the line .  and  "
},
{
  "id": "subsec-examples-tangent-lines-6",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-6",
  "type": "Checkpoint",
  "number": "2.2.16",
  "title": "Parallel Tangent on Parabola.",
  "body": " Parallel Tangent on Parabola  Find all points on the graph of where the tangent line is parallel to the line .   "
},
{
  "id": "subsec-examples-tangent-lines-7",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-7",
  "type": "Checkpoint",
  "number": "2.2.17",
  "title": "Parallel Tangent on Cubic.",
  "body": " Parallel Tangent on Cubic  Find all points on the graph of where the tangent line is parallel to the line .  and  "
},
{
  "id": "subsec-examples-tangent-lines-8",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-8",
  "type": "Checkpoint",
  "number": "2.2.18",
  "title": "Parallel Tangent on Power Function.",
  "body": " Parallel Tangent on Power Function  Find the point on the curve where the tangent line is parallel to the line .   "
},
{
  "id": "subsec-examples-tangent-lines-9",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-9",
  "type": "Checkpoint",
  "number": "2.2.19",
  "title": "No Tangent with Given Slope.",
  "body": " No Tangent with Given Slope  Show that the curve has no tangent lines with slope 3.  Solve .  The equation becomes , which has no real solution.  "
},
{
  "id": "subsec-examples-tangent-lines-10",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-10",
  "type": "Checkpoint",
  "number": "2.2.20",
  "title": "Normal Line.",
  "body": " Normal Line  Determine the equation of the normal to the graph of at . (A normal line is perpendicular to the tangent line at the point of tangency.)  The tangent slope is 18, so the normal slope is and the normal line is .  "
},
{
  "id": "subsec-examples-tangent-lines-11",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-11",
  "type": "Checkpoint",
  "number": "2.2.21",
  "title": "Same Slope?",
  "body": " Same Slope?  Do the functions and ever have the same slope? If so, where?  No, they never have the same slope (there is no real solution).  "
},
{
  "id": "subsec-examples-tangent-lines-12",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-12",
  "type": "Checkpoint",
  "number": "2.2.22",
  "title": "Perpendicular Tangents.",
  "body": " Perpendicular Tangents  Show that the tangent lines to at and are perpendicular.  The slopes of the tangent lines are and , and since , the tangent lines are perpendicular.  "
},
{
  "id": "subsec-examples-tangent-lines-13",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-13",
  "type": "Checkpoint",
  "number": "2.2.23",
  "title": "Point Where Slope Equals 5.",
  "body": " Point Where Slope Equals 5  Determine the point on the parabola where the slope of the tangent is 5.   "
},
{
  "id": "subsec-examples-tangent-lines-14",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-14",
  "type": "Checkpoint",
  "number": "2.2.24",
  "title": "Points Where Slope Equals 12.",
  "body": " Points Where Slope Equals 12  Determine the coordinates of the points on the graph of at which the slope of the tangent is 12.  and  "
},
{
  "id": "subsec-examples-tangent-lines-15",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-15",
  "type": "Checkpoint",
  "number": "2.2.25",
  "title": "Two Tangents with Given Slope.",
  "body": " Two Tangents with Given Slope  Show that there are two tangents to the curve that have a slope of 6.  The tangency points occur at and , giving tangent lines and .  "
},
{
  "id": "subsec-examples-tangent-lines-16",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-16",
  "type": "Checkpoint",
  "number": "2.2.26",
  "title": "Find the Constant.",
  "body": " Find the Constant  Determine the value of , given that the line is tangent to the graph of at .   "
},
{
  "id": "subsec-examples-tangent-lines-17",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-17",
  "type": "Checkpoint",
  "number": "2.2.27",
  "title": "Slope Locations on Parabola.",
  "body": " Slope Locations on Parabola   Let .   Find the values of for which the slope of the curve is 0.  Find the values of for which the slope of the curve is 2.  "
},
{
  "id": "subsec-examples-tangent-lines-18",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-18",
  "type": "Checkpoint",
  "number": "2.2.28",
  "title": "Slope Locations on Cubic.",
  "body": " Slope Locations on Cubic   Let .   Find the values of for which the slope of the curve is 0.  Find the values of for which the slope of the curve is 21.  "
},
{
  "id": "subsec-examples-tangent-lines-19",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-19",
  "type": "Checkpoint",
  "number": "2.2.29",
  "title": "Tangent Slope Conditions.",
  "body": " Tangent Slope Conditions   Let .   Find all points on the graph of at which the tangent line is horizontal. and  Find all points on the graph of at which the tangent line has slope 60. and  "
},
{
  "id": "subsec-examples-tangent-lines-20",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-20",
  "type": "Checkpoint",
  "number": "2.2.30",
  "title": "Tangent Slope Conditions, Radical Function.",
  "body": " Tangent Slope Conditions, Radical Function   Let .   Find all points on the graph of at which the tangent line is horizontal.  Find all points on the graph of at which the tangent line has slope .  "
},
{
  "id": "subsec-examples-tangent-lines-21",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-21",
  "type": "Checkpoint",
  "number": "2.2.31",
  "title": "Find the Parabola.",
  "body": " Find the Parabola  Find the parabola with equation whose tangent line at has equation .  Use and .   "
},
{
  "id": "subsec-examples-tangent-lines-22",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-22",
  "type": "Checkpoint",
  "number": "2.2.32",
  "title": "Find Constants for Tangent.",
  "body": " Find Constants for Tangent  For what values of and is the line tangent to the parabola when ?  Match the slope and the point at .  and  "
},
{
  "id": "subsec-examples-tangent-lines-23",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-23",
  "type": "Checkpoint",
  "number": "2.2.33",
  "title": "Find p and q.",
  "body": " Find p and q  The graph of has a horizontal tangent line at the point . Find the values of and .  Use and .  and  "
},
{
  "id": "subsec-examples-tangent-lines-24",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-24",
  "type": "Checkpoint",
  "number": "2.2.34",
  "title": "Find a and b for Tangent.",
  "body": " Find a and b for Tangent  Determine the values of and such that the line is tangent to the graph of at the point where .  Use and .  and  "
},
{
  "id": "subsec-examples-tangent-lines-25",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-tangent-lines-25",
  "type": "Checkpoint",
  "number": "2.2.35",
  "title": "Tangent at Origin, Second Intersection.",
  "body": " Tangent at Origin, Second Intersection  Find an equation for the line that is tangent to the curve at the origin. Use and evaluate at .  The tangent line from part (a) intersects the curve at another point. Find the coordinates of this point. Solve .  "
},
{
  "id": "subsec-examples-arbitrary-point-2",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-2",
  "type": "Checkpoint",
  "number": "2.2.36",
  "title": "Tangent Through External Point.",
  "body": " Tangent Through External Point  Find the equation of the tangent line(s) to that passes through the point .  Find the tangent line at an arbitrary point (say, ), and then find the value of such that the tangent line passes through .  and  "
},
{
  "id": "subsec-examples-arbitrary-point-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-3",
  "type": "Checkpoint",
  "number": "2.2.37",
  "title": "Tangent Through External Point II.",
  "body": " Tangent Through External Point II  Find the equation of the tangent line(s) to that passes through the point .  and  "
},
{
  "id": "subsec-examples-arbitrary-point-4",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-4",
  "type": "Checkpoint",
  "number": "2.2.38",
  "title": "Tangent Through Point on Hyperbola.",
  "body": " Tangent Through Point on Hyperbola  The tangent at point on the curve passes through . Find the coordinates of .   "
},
{
  "id": "subsec-examples-arbitrary-point-5",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-5",
  "type": "Checkpoint",
  "number": "2.2.39",
  "title": "Tangent Lines Through External Point, Parabola.",
  "body": " Tangent Lines Through External Point, Parabola  Find the equations of both lines that pass through the point and are tangent to the parabola .  and  "
},
{
  "id": "subsec-examples-arbitrary-point-6",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-6",
  "type": "Checkpoint",
  "number": "2.2.40",
  "title": "Tangent Lines Through Origin.",
  "body": " Tangent Lines Through Origin  Find the equations of both lines that pass through the origin and are tangent to the parabola .  and  "
},
{
  "id": "subsec-examples-arbitrary-point-7",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-7",
  "type": "Checkpoint",
  "number": "2.2.41",
  "title": "Tangent with Given Slope.",
  "body": " Tangent with Given Slope  Find the equation of the line tangent to the curve that has slope 2.  The tangent at has slope , which must equal 2.   "
},
{
  "id": "subsec-examples-arbitrary-point-8",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-8",
  "type": "Checkpoint",
  "number": "2.2.42",
  "title": "Tangent Intersection Points.",
  "body": " Tangent Intersection Points  Find the -coordinates of the points on the curve where the tangents from the point intersect the curve.  The tangent at has equation , and it must pass through .  and  "
},
{
  "id": "subsec-examples-arbitrary-point-9",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-9",
  "type": "Checkpoint",
  "number": "2.2.43",
  "title": "Tangents to Parabola Through Given Points.",
  "body": " Tangents to Parabola Through Given Points  Determine the equations of the tangents to the curve that pass through the following points.  Point and  Point and  "
},
{
  "id": "subsec-examples-arbitrary-point-10",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-10",
  "type": "Checkpoint",
  "number": "2.2.44",
  "title": "Tangent Through Point, Parabola.",
  "body": " Tangent Through Point, Parabola  Find the coordinates of the points on the parabola where its tangent line passes through the point .  The tangent to at is , and it must pass through .  The points are and .  "
},
{
  "id": "subsec-examples-arbitrary-point-11",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-11",
  "type": "Checkpoint",
  "number": "2.2.45",
  "title": "Lines Through Point Tangent to Parabola.",
  "body": " Lines Through Point Tangent to Parabola  Find equations of both lines through the point that are tangent to the parabola . The tangent at has equation , and it must pass through . and  Show that there is no line through the point that is tangent to the parabola. Use and require it to pass through , then check whether is real. No tangent line exists.  "
},
{
  "id": "subsec-examples-arbitrary-point-12",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-12",
  "type": "Checkpoint",
  "number": "2.2.46",
  "title": "Y-Intercept of Tangent.",
  "body": " Y-Intercept of Tangent  Let be the -intercept of the tangent line to the graph of passing through the point . Find the value of .  The tangent at is , and it must pass through .  or  "
},
{
  "id": "subsec-examples-arbitrary-point-13",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-examples-arbitrary-point-13",
  "type": "Checkpoint",
  "number": "2.2.47",
  "title": "Points with Tangent Through Given Point.",
  "body": " Points with Tangent Through Given Point  Find all points on the graph of with tangent lines passing through the point .  and  "
},
{
  "id": "subsec-practice-advanced-2",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-2",
  "type": "Checkpoint",
  "number": "2.2.48",
  "title": "Steeper Tangent.",
  "body": " Steeper Tangent  Find all values of such that the tangent line to the graph of is steeper than the tangent line of .  leads to a quadratic inequality .  , or the interval  "
},
{
  "id": "subsec-practice-advanced-3",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-3",
  "type": "Checkpoint",
  "number": "2.2.49",
  "title": "Y-Intercept from X-Intercept.",
  "body": " Y-Intercept from X-Intercept  A tangent line to the graph of has an -intercept of . Find the -intercept of this tangent line.  The tangent at has equation , so its -intercept is .  The -intercept is 3.  "
},
{
  "id": "subsec-practice-advanced-4",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-4",
  "type": "Checkpoint",
  "number": "2.2.50",
  "title": "Find c: Line Tangent to Radical Curve.",
  "body": " Find c: Line Tangent to Radical Curve  Find the value of such that the line is tangent to the curve .  At the tangency point , solve and .   "
},
{
  "id": "subsec-practice-advanced-5",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-5",
  "type": "Checkpoint",
  "number": "2.2.51",
  "title": "Find c: Line Tangent to Parabola.",
  "body": " Find c: Line Tangent to Parabola  What is the value of such that the line is tangent to the parabola ?  At the tangency point , solve and .   "
},
{
  "id": "subsec-practice-advanced-6",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-6",
  "type": "Checkpoint",
  "number": "2.2.52",
  "title": "Tangent at Point, Second Intersection.",
  "body": " Tangent at Point, Second Intersection  Find an equation for the line that is tangent to the curve at the point . Use and .  The tangent line from part (a) intersects the curve at another point. Find the coordinates of this point. Solve .  "
},
{
  "id": "subsec-practice-advanced-7",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-7",
  "type": "Checkpoint",
  "number": "2.2.53",
  "title": "Abstract Function Differentiation.",
  "body": " Abstract Function Differentiation  Differentiate each function.    "
},
{
  "id": "subsec-practice-advanced-8",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-8",
  "type": "Checkpoint",
  "number": "2.2.54",
  "title": "Simplify Then Differentiate.",
  "body": " Simplify Then Differentiate  Differentiate each function.    , where is a positive constant  , where is a constant  "
},
{
  "id": "subsec-practice-advanced-9",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-9",
  "type": "Checkpoint",
  "number": "2.2.55",
  "title": "Given Function Values.",
  "body": " Given Function Values  Given that , , , and , find .  .   "
},
{
  "id": "subsec-practice-advanced-10",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-10",
  "type": "Checkpoint",
  "number": "2.2.56",
  "title": "Point on Curve with Given Tangent.",
  "body": " Point on Curve with Given Tangent  Find the point on the curve that has a tangent line with equation .  Compare the slope of the line with the derivative of the curve, then check that the point lies on both graphs.  The line is , so its slope is 4. For the curve, . Setting gives . Then , and the line also gives . So the line is tangent to the curve at .  "
},
{
  "id": "subsec-practice-advanced-11",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-11",
  "type": "Checkpoint",
  "number": "2.2.57",
  "title": "Tangent Lines Using Known Values.",
  "body": " Tangent Lines Using Known Values  Suppose and . Let and .  Find an equation of the line tangent to at .  Find an equation of the line tangent to at .  "
},
{
  "id": "subsec-practice-advanced-12",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-12",
  "type": "Checkpoint",
  "number": "2.2.58",
  "title": "Tangent Lines from Known Tangent Lines.",
  "body": " Tangent Lines from Known Tangent Lines  Suppose the line tangent to the graph of at is and the line tangent to the graph of at has slope 3 and passes through . Find an equation of the line tangent to the following curves at .     "
},
{
  "id": "subsec-practice-advanced-13",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-13",
  "type": "Checkpoint",
  "number": "2.2.59",
  "title": "Determine Constants b and c.",
  "body": " Determine Constants b and c  Determine the constants and such that the line tangent to at is .  The tangent line at has slope and passes through the point . So, we require and .  ,  "
},
{
  "id": "subsec-practice-advanced-14",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-14",
  "type": "Checkpoint",
  "number": "2.2.60",
  "title": "Find a Cubic Function.",
  "body": " Find a Cubic Function  Find a cubic function whose graph has horizontal tangents at the points and .  Use , , and , .   "
},
{
  "id": "subsec-practice-advanced-15",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-15",
  "type": "Checkpoint",
  "number": "2.2.61",
  "title": "Find a Parabola from Slope Conditions.",
  "body": " Find a Parabola from Slope Conditions  Find a parabola with equation that has slope 4 at , slope at , and passes through the point .  Use with and , then use .   "
},
{
  "id": "subsec-practice-advanced-16",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-16",
  "type": "Checkpoint",
  "number": "2.2.62",
  "title": "Find a,b,c,d from Tangent Conditions.",
  "body": " Find a,b,c,d from Tangent Conditions  Suppose the curve has a tangent line when with equation and a tangent line when with equation . Find the values of .  Use , , , and .  , , ,  "
},
{
  "id": "subsec-practice-advanced-17",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-17",
  "type": "Checkpoint",
  "number": "2.2.63",
  "title": "Tangent to Line at Origin.",
  "body": " Tangent to Line at Origin  The curve passes through the point and is tangent to the line at the origin. Find .  , ,  "
},
{
  "id": "subsec-practice-advanced-18",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-18",
  "type": "Checkpoint",
  "number": "2.2.64",
  "title": "Quadratic with Horizontal Tangent.",
  "body": " Quadratic with Horizontal Tangent  Determine a quadratic function if its graph passes through the point and it has a horizontal tangent at .  Use , , and .   "
},
{
  "id": "subsec-practice-advanced-19",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-practice-advanced-19",
  "type": "Checkpoint",
  "number": "2.2.65",
  "title": "Common Tangent of Two Curves.",
  "body": " Common Tangent of Two Curves  The curves and have a common tangent line at the point . Find .  Use , , and .  , ,  "
},
{
  "id": "subsec-disguised-derivatives-2",
  "level": "2",
  "url": "sec-basic-derivative-rules.html#subsec-disguised-derivatives-2",
  "type": "Exercise Group",
  "number": "2.2.18",
  "title": "Limits as Disguised Derivatives.",
  "body": " Limits as Disguised Derivatives  Evaluate each limit by first converting it to a derivative at a particular -value.  This is the definition of .  This is the definition of .  "
},
{
  "id": "sec-differentiability",
  "level": "1",
  "url": "sec-differentiability.html",
  "type": "Section",
  "number": "2.3",
  "title": "Differentiability",
  "body": " Differentiability   The derivative of a function does not always exist. In other words, we can't always find the slope of the tangent line to a function. This is because the derivative is a limit, and as we've seen, limits do not always exist.   If a function has a derivative at , then we say that is differentiable at .  If does not have a derivative at , then we say that is non-differentiable at .   Literally, differentiable means able to be differentiated , which means we can take its derivative.   Square Root Function  For the square root function , recall its derivative is (using the power rule).   The domain of is , because we can only take the square root of non-negative numbers.  However, the domain of is , because we need to also exclude , because we also cannot divide by zero.   In particular, is not differentiable at . Graph of and its derivative . Notice that the graph of at has slopes which are increasingly steep and positive. In other words, they approach . This is why the derivative does not exist at .    Derivative of Absolute Value Function  Consider the derivative of the absolute value function,   Graph of . It is a line with slope 1 for , a line with slope for , and there is a sharp corner at . Therefore, we expect that its derivative will be 1 for , for . Indeed,   For ,  For ,   However, at (the sharp corner), we have to use the limit definition of derivative, because the function is given by two different formulas on either side of .  First, intuitively, the derivative represents the slope of the graph. However, at , the function has two different slopes on each side of . Therefore, we expect that the derivative does not exist at . We can confirm this using the limit definition of derivative,   You might recognize this limit from one we have seen before: Limit with Absolute Value , which does not exist. To see this, we can evaluate the limit from the right and from the left,    From the right, as , , and so, Thus, from the right, the slopes approach 1 (this can be confirmed graphically).    However, from the left, as , , and so, From the left, the slopes approach .    Since these one sided limits are not equal, does not exist, and so the derivative does not exist. In summary,   Graphically: Graph of and its derivative . Notice that the graph of the derivative has a jump discontinuity at .  Note: The derivative of the absolute value function can be summarized concisely with a single formula, using the expression ,    The absolute value function shows that a function can be continuous at a point, but not have a derivative there.    Differentiability and Continuity  Intuitively, a function is differentiable at if its graph is smooth . In other words, it is continuous, but also, roughly, it bends gently and consistently, as opposed to having a sudden change in direction.   Differentiability Implies Continuity   If a function is differentiable at , then it is continuous at .   Equivalently, if is not continuous at , then is not differentiable at .     Intuitively, this means that if a function is smooth, then it must be continuous (it can't have a hole, jump, asymptote, etc.)  However, the reverse direction is not true. In that, if a function is continuous, this does not necessarily mean it will be differentiable.  To intuitively understand why this is always true, it is helpful to think about the equivalent statement:  If a function is not continuous at a point (it has a break, jump, or asymptote, etc.), then it must be not be differentiable at that point (the slope of a tangent line can't be found).  In this way, differentiability is a stronger condition than continuity, in that to be differentiable, you have to be continuous at a bare minimum, and also something more.  The following four graphs illustrate this. Each level adds a stronger requirement that makes the graph more nice .     In summary,   Every differentiable function is continuous, but not every continuous function is differentiable.  Every continuous function is defined, but not every defined function is continuous.     Examples   Differentiability of  For the function , determine if is differentiable at .  Use the definition of derivative, .  Yes, and .    Continuous but Not Differentiable  Give an example of a function that is continuous on but is not differentiable at .  Think of the absolute value function.  .    Domain of and  Find and state the domains of and .  , domain of is , domain of is .  , domain of is , domain of is .  , domain of is , domain of is .  , domain of is , domain of is .    Piecewise Linear and Quadratic   Let    Where is differentiable?  Find an expression for .    Graph of  Let .  For what values of is not differentiable? Find where . and .  Find a formula for .  Sketch the graph of and . Use for and for . is two upward-opening arms for and a downward-opening arc on , and is outside and inside.    Piecewise Quadratic and Linear   Let   Is differentiable at 1? Sketch the graphs of and .   Compare the left and right derivatives at .  is not differentiable at 1, and for while for .    Three-Piece Function   Let   At what numbers is differentiable? Give a formula for and sketch the graphs of and .   Check differentiability at the junctions and .  is differentiable for all except , and    Differentiability of  Let .  For what values of is differentiable? Find where . All except and .  Find a formula for .  Sketch the graphs of and . Use for and for . is two upward-opening arms for and a downward-opening arc on , and is outside and inside.    Differentiability of  Let .  For what values of is not differentiable? Find where . is not differentiable at and .  Find a formula for , and sketch the graph of . Write as a piecewise function first. for or , for , and is undefined at .  Find at , 0, and 3. Use the formula from part (b). , , and .    Sum of Absolute Values  Let .  Where is not differentiable? Find where and where . is not differentiable at and .  Find a formula for .  Sketch the graphs of and . Use for , for , and for . is a line with slope for , a horizontal line at height 3 for , and a line with slope 2 for . The graph of is a line with slope 0 at height -2 for , a line with slope 0 at height 0 for , and a line with slope 0 at height 2 for .    Finding and for Differentiability  Let Find the values of and that make differentiable everywhere.  The left and right derivatives at must be equal, and must be continuous at .  and .    Finding for Differentiability   Let   Find the value of that makes the following function differentiable for all -values.   The left and right derivatives at must be equal.  .    Finding and for Differentiability  Find the values of and that make the following function differentiable for all -values.  The left and right derivatives at must be equal, and must be continuous at .  and .    Piecewise Quadratic Derivative   Let   Find the derivative of .      "
},
{
  "id": "sec-differentiability-2-2-1-1",
  "level": "2",
  "url": "sec-differentiability.html#sec-differentiability-2-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differentiable "
},
{
  "id": "sec-differentiability-2-2-2-1",
  "level": "2",
  "url": "sec-differentiability.html#sec-differentiability-2-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "non-differentiable "
},
{
  "id": "sec-differentiability-2-4",
  "level": "2",
  "url": "sec-differentiability.html#sec-differentiability-2-4",
  "type": "Example",
  "number": "2.3.1",
  "title": "Square Root Function.",
  "body": " Square Root Function  For the square root function , recall its derivative is (using the power rule).   The domain of is , because we can only take the square root of non-negative numbers.  However, the domain of is , because we need to also exclude , because we also cannot divide by zero.   In particular, is not differentiable at . Graph of and its derivative . Notice that the graph of at has slopes which are increasingly steep and positive. In other words, they approach . This is why the derivative does not exist at .  "
},
{
  "id": "sec-differentiability-2-5",
  "level": "2",
  "url": "sec-differentiability.html#sec-differentiability-2-5",
  "type": "Example",
  "number": "2.3.2",
  "title": "Derivative of Absolute Value Function.",
  "body": " Derivative of Absolute Value Function  Consider the derivative of the absolute value function,   Graph of . It is a line with slope 1 for , a line with slope for , and there is a sharp corner at . Therefore, we expect that its derivative will be 1 for , for . Indeed,   For ,  For ,   However, at (the sharp corner), we have to use the limit definition of derivative, because the function is given by two different formulas on either side of .  First, intuitively, the derivative represents the slope of the graph. However, at , the function has two different slopes on each side of . Therefore, we expect that the derivative does not exist at . We can confirm this using the limit definition of derivative,   You might recognize this limit from one we have seen before: Limit with Absolute Value , which does not exist. To see this, we can evaluate the limit from the right and from the left,    From the right, as , , and so, Thus, from the right, the slopes approach 1 (this can be confirmed graphically).    However, from the left, as , , and so, From the left, the slopes approach .    Since these one sided limits are not equal, does not exist, and so the derivative does not exist. In summary,   Graphically: Graph of and its derivative . Notice that the graph of the derivative has a jump discontinuity at .  Note: The derivative of the absolute value function can be summarized concisely with a single formula, using the expression ,   "
},
{
  "id": "thm-differentiability-implies-continuity",
  "level": "2",
  "url": "sec-differentiability.html#thm-differentiability-implies-continuity",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "Differentiability Implies Continuity.",
  "body": " Differentiability Implies Continuity   If a function is differentiable at , then it is continuous at .   Equivalently, if is not continuous at , then is not differentiable at .    "
},
{
  "id": "subsec-differentiability-examples-2",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-2",
  "type": "Checkpoint",
  "number": "2.3.4",
  "title": "Differentiability of <span class=\"process-math\">\\(x\\abs{x}\\)<\/span>.",
  "body": " Differentiability of  For the function , determine if is differentiable at .  Use the definition of derivative, .  Yes, and .  "
},
{
  "id": "subsec-differentiability-examples-3",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-3",
  "type": "Checkpoint",
  "number": "2.3.5",
  "title": "Continuous but Not Differentiable.",
  "body": " Continuous but Not Differentiable  Give an example of a function that is continuous on but is not differentiable at .  Think of the absolute value function.  .  "
},
{
  "id": "subsec-differentiability-examples-4",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-4",
  "type": "Exercise Group",
  "number": "2.3.1",
  "title": "Domain of <span class=\"process-math\">\\(f\\)<\/span> and <span class=\"process-math\">\\(f'\\)<\/span>.",
  "body": " Domain of and  Find and state the domains of and .  , domain of is , domain of is .  , domain of is , domain of is .  , domain of is , domain of is .  , domain of is , domain of is .  "
},
{
  "id": "subsec-differentiability-examples-5",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-5",
  "type": "Checkpoint",
  "number": "2.3.6",
  "title": "Piecewise Linear and Quadratic.",
  "body": " Piecewise Linear and Quadratic   Let    Where is differentiable?  Find an expression for .  "
},
{
  "id": "subsec-differentiability-examples-6",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-6",
  "type": "Checkpoint",
  "number": "2.3.7",
  "title": "Graph of <span class=\"process-math\">\\(\\abs{x^2-4}\\)<\/span>.",
  "body": " Graph of  Let .  For what values of is not differentiable? Find where . and .  Find a formula for .  Sketch the graph of and . Use for and for . is two upward-opening arms for and a downward-opening arc on , and is outside and inside.  "
},
{
  "id": "subsec-differentiability-examples-7",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-7",
  "type": "Checkpoint",
  "number": "2.3.8",
  "title": "Piecewise Quadratic and Linear.",
  "body": " Piecewise Quadratic and Linear   Let   Is differentiable at 1? Sketch the graphs of and .   Compare the left and right derivatives at .  is not differentiable at 1, and for while for .  "
},
{
  "id": "subsec-differentiability-examples-8",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-8",
  "type": "Checkpoint",
  "number": "2.3.9",
  "title": "Three-Piece Function.",
  "body": " Three-Piece Function   Let   At what numbers is differentiable? Give a formula for and sketch the graphs of and .   Check differentiability at the junctions and .  is differentiable for all except , and  "
},
{
  "id": "subsec-differentiability-examples-9",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-9",
  "type": "Checkpoint",
  "number": "2.3.10",
  "title": "Differentiability of <span class=\"process-math\">\\(\\abs{x^2-9}\\)<\/span>.",
  "body": " Differentiability of  Let .  For what values of is differentiable? Find where . All except and .  Find a formula for .  Sketch the graphs of and . Use for and for . is two upward-opening arms for and a downward-opening arc on , and is outside and inside.  "
},
{
  "id": "subsec-differentiability-examples-10",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-10",
  "type": "Checkpoint",
  "number": "2.3.11",
  "title": "Differentiability of <span class=\"process-math\">\\(\\abs{x^2-1}\\)<\/span>.",
  "body": " Differentiability of  Let .  For what values of is not differentiable? Find where . is not differentiable at and .  Find a formula for , and sketch the graph of . Write as a piecewise function first. for or , for , and is undefined at .  Find at , 0, and 3. Use the formula from part (b). , , and .  "
},
{
  "id": "subsec-differentiability-examples-11",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-11",
  "type": "Checkpoint",
  "number": "2.3.12",
  "title": "Sum of Absolute Values.",
  "body": " Sum of Absolute Values  Let .  Where is not differentiable? Find where and where . is not differentiable at and .  Find a formula for .  Sketch the graphs of and . Use for , for , and for . is a line with slope for , a horizontal line at height 3 for , and a line with slope 2 for . The graph of is a line with slope 0 at height -2 for , a line with slope 0 at height 0 for , and a line with slope 0 at height 2 for .  "
},
{
  "id": "subsec-differentiability-examples-12",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-12",
  "type": "Checkpoint",
  "number": "2.3.13",
  "title": "Finding <span class=\"process-math\">\\(m\\)<\/span> and <span class=\"process-math\">\\(b\\)<\/span> for Differentiability.",
  "body": " Finding and for Differentiability  Let Find the values of and that make differentiable everywhere.  The left and right derivatives at must be equal, and must be continuous at .  and .  "
},
{
  "id": "subsec-differentiability-examples-13",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-13",
  "type": "Checkpoint",
  "number": "2.3.14",
  "title": "Finding <span class=\"process-math\">\\(a\\)<\/span> for Differentiability.",
  "body": " Finding for Differentiability   Let   Find the value of that makes the following function differentiable for all -values.   The left and right derivatives at must be equal.  .  "
},
{
  "id": "subsec-differentiability-examples-14",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-14",
  "type": "Checkpoint",
  "number": "2.3.15",
  "title": "Finding <span class=\"process-math\">\\(a\\)<\/span> and <span class=\"process-math\">\\(b\\)<\/span> for Differentiability.",
  "body": " Finding and for Differentiability  Find the values of and that make the following function differentiable for all -values.  The left and right derivatives at must be equal, and must be continuous at .  and .  "
},
{
  "id": "subsec-differentiability-examples-15",
  "level": "2",
  "url": "sec-differentiability.html#subsec-differentiability-examples-15",
  "type": "Checkpoint",
  "number": "2.3.16",
  "title": "Piecewise Quadratic Derivative.",
  "body": " Piecewise Quadratic Derivative   Let   Find the derivative of .    "
},
{
  "id": "sec-product-rule",
  "level": "1",
  "url": "sec-product-rule.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Product Rule",
  "body": " The Product Rule   The rule for differentiating a product of functions is slightly more complicated than the previous rules.   The Derivative of a Product Is Not the Product of the Derivatives  One might at first glance think that the derivative of a product of two functions should be the product of the derivatives. Especially because the derivative of a sum is the sum of the derivatives (sum rule). Unfortunately, this is not true. In other words,   For example, if and , the derivative of the product is,   However, and , so , which is not the same as .    Product Rule    Or, with the function arguments,   Or,     Intuitively, if we call the 1st function and the 2nd function, then it says the derivative of their product is,   It's like writing the product twice, and each time you take the derivative of exactly one of the functions.   Note that because the two terms are added, their order doesn't matter. So .    Simple Product (Expanding Also Works)   Find the derivative of .    This is the product of and , so the product rule says,   Then, we can expand and simplify,   In this case, you may recognize that we could have expanded the function first, and then differentiated term by term,   Then,   Both methods give the same answer. Here, expanding first is a bit simpler, because the expansion isn't too challenging.     More Complicated Product   Find the derivative of .    In this case, expanding is more complicated, so the product rule would work better.   This is a valid final answer. If we need the derivative at a specific point, say , we can plug in directly without expanding,   This is much faster than trying to expand everything first.     Product with Radicals   Differentiate .    Expanding is a bit complicated here, because there are 2 radicals. Instead, we can use the product rule,   This is a valid final answer, however, if you wanted to plug in a specific value of , it is helpful to rewrite the exponents as positive,   Note that and .    In general,   Expand first if it's simple to do, and would make the function simpler.  Use the product rule if the expansion is complicated and would take a long time.   Later on, we'll see that there are many situations where you can't expand.    Examples   Product Rule (No Simplification)  Find each derivative, using the product rule. No need to simplify your answer.         Product Rule Two Ways  Find each derivative in two ways: using the product rule, and by expanding first. Verify that both answers are equal, by simplifying.           Evaluate at a Point  Evaluate each derivative at the given point.  ,  ,  , find  ,  ,  ,  ,    Tangent Lines  Find the equation of the tangent line to the given curve at the given point.  at  at    Differentiate and Simplify  Find each derivative and simplify.                 Differentiate and Simplify (Radicals)  Find each derivative and simplify.          Differentiate and Simplify (More Radicals)  Find each derivative and simplify.       Differentiate with Constants  Find each derivative and simplify.  , where are constants  , where and are constants    Negative Exponents  Find each derivative.         . Hint: Rewrite as and use power rule.     Slope with Negative Exponents  Find the slope of at .     Derivative Two Ways  If , find two ways: (a) by using the Product Rule, and (b) by expanding first.     Derivative at a Point  Find each derivative at the given point.  ,  ,    Horizontal Tangent (Linear Factors)  Find the points where the tangent to is horizontal.     Horizontal Tangent (Repeated Factor)  Find the points where the tangent to is horizontal.      Extended Product Rule (3 or More Factors)  The product rule can be extended to 3 functions multiplied together. It turns out that,   Observe the pattern: there are 3 terms, and in each term, exactly one of the functions is differentiated, and the other two are left unchanged.   This rule comes from using the product rule twice. First, we can think of as (the function together, multiplied by ). Then, applying the product rule to , we get,   Then, for , we can apply the product rule again, to get,     Three-Factor Product Rule  Find each derivative, using the product rule for 3 functions, and simplify.      Three-Factor Derivative at a Point  Find the derivative of at .      Product Rule with Given Function Values   Given Function Values  Find the indicated derivative using the given function values.  , , , . Find .  , , , . Find .  , , , . Find .  , , , . Find where .  , , , . Find .    Tangent Line from Given Values  Find the equation of the tangent line to the graph of at , given that , , , .  , .      Advanced Examples   Derivative with Unknown Function  If is a differentiable function, find an expression for the derivative of each of the following functions.        Slope of xf(x)  Find the slope of the tangent line to at , given , .  .     Tangent to xf(x)  Given that , , and . Find the tangent to at .  , .     Tangent to x²f(x)  Given that , , . Find the tangent to at .  , .     Tangent Using Given Tangent  The tangent to at is . Find the tangent to at .  , ; , point .     Second Derivative  Given that and for all , find .  , so .     Tangent from Two Tangent Lines  The tangent to at is and the tangent to at is . Find the tangent to at .  , , , ; , point .     Derivative of [f(x)]²  Show that , using the product rule with .  Use part (a) to differentiate .    Derivative of [f(x)]³  Show that , using the product rule for 3 functions.     In fact, the pattern for the derivative of a product of 3 functions continues for any number of functions. For example, for 4 functions, say, , we have,   In general, for functions, say, ,     f'(0) for n-Factor Product  If , find .  Use the general product rule, and plug in .  , which is the sum of the first natural numbers, which is equal to .    "
},
{
  "id": "sec-product-rule-2-2",
  "level": "2",
  "url": "sec-product-rule.html#sec-product-rule-2-2",
  "type": "Example",
  "number": "3.1.1",
  "title": "The Derivative of a Product Is Not the Product of the Derivatives.",
  "body": " The Derivative of a Product Is Not the Product of the Derivatives  One might at first glance think that the derivative of a product of two functions should be the product of the derivatives. Especially because the derivative of a sum is the sum of the derivatives (sum rule). Unfortunately, this is not true. In other words,   For example, if and , the derivative of the product is,   However, and , so , which is not the same as .  "
},
{
  "id": "thm-product-rule",
  "level": "2",
  "url": "sec-product-rule.html#thm-product-rule",
  "type": "Theorem",
  "number": "3.1.2",
  "title": "Product Rule.",
  "body": " Product Rule    Or, with the function arguments,   Or,    "
},
{
  "id": "sec-product-rule-2-7",
  "level": "2",
  "url": "sec-product-rule.html#sec-product-rule-2-7",
  "type": "Remark",
  "number": "3.1.3",
  "title": "",
  "body": " Note that because the two terms are added, their order doesn't matter. So .  "
},
{
  "id": "sec-product-rule-2-8",
  "level": "2",
  "url": "sec-product-rule.html#sec-product-rule-2-8",
  "type": "Example",
  "number": "3.1.4",
  "title": "Simple Product (Expanding Also Works).",
  "body": " Simple Product (Expanding Also Works)   Find the derivative of .    This is the product of and , so the product rule says,   Then, we can expand and simplify,   In this case, you may recognize that we could have expanded the function first, and then differentiated term by term,   Then,   Both methods give the same answer. Here, expanding first is a bit simpler, because the expansion isn't too challenging.   "
},
{
  "id": "sec-product-rule-2-9",
  "level": "2",
  "url": "sec-product-rule.html#sec-product-rule-2-9",
  "type": "Example",
  "number": "3.1.5",
  "title": "More Complicated Product.",
  "body": " More Complicated Product   Find the derivative of .    In this case, expanding is more complicated, so the product rule would work better.   This is a valid final answer. If we need the derivative at a specific point, say , we can plug in directly without expanding,   This is much faster than trying to expand everything first.   "
},
{
  "id": "sec-product-rule-2-10",
  "level": "2",
  "url": "sec-product-rule.html#sec-product-rule-2-10",
  "type": "Example",
  "number": "3.1.6",
  "title": "Product with Radicals.",
  "body": " Product with Radicals   Differentiate .    Expanding is a bit complicated here, because there are 2 radicals. Instead, we can use the product rule,   This is a valid final answer, however, if you wanted to plug in a specific value of , it is helpful to rewrite the exponents as positive,   Note that and .   "
},
{
  "id": "subsec-product-rule-examples-2",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-2",
  "type": "Exercise Group",
  "number": "3.1.1",
  "title": "Product Rule (No Simplification).",
  "body": " Product Rule (No Simplification)  Find each derivative, using the product rule. No need to simplify your answer.       "
},
{
  "id": "subsec-product-rule-examples-3",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-3",
  "type": "Exercise Group",
  "number": "3.1.2",
  "title": "Product Rule Two Ways.",
  "body": " Product Rule Two Ways  Find each derivative in two ways: using the product rule, and by expanding first. Verify that both answers are equal, by simplifying.         "
},
{
  "id": "subsec-product-rule-examples-4",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-4",
  "type": "Exercise Group",
  "number": "3.1.3",
  "title": "Evaluate at a Point.",
  "body": " Evaluate at a Point  Evaluate each derivative at the given point.  ,  ,  , find  ,  ,  ,  ,  "
},
{
  "id": "subsec-product-rule-examples-5",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-5",
  "type": "Exercise Group",
  "number": "3.1.4",
  "title": "Tangent Lines.",
  "body": " Tangent Lines  Find the equation of the tangent line to the given curve at the given point.  at  at  "
},
{
  "id": "subsec-product-rule-examples-6",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-6",
  "type": "Exercise Group",
  "number": "3.1.5",
  "title": "Differentiate and Simplify.",
  "body": " Differentiate and Simplify  Find each derivative and simplify.               "
},
{
  "id": "subsec-product-rule-examples-7",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-7",
  "type": "Exercise Group",
  "number": "3.1.6",
  "title": "Differentiate and Simplify (Radicals).",
  "body": " Differentiate and Simplify (Radicals)  Find each derivative and simplify.        "
},
{
  "id": "subsec-product-rule-examples-8",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-8",
  "type": "Exercise Group",
  "number": "3.1.7",
  "title": "Differentiate and Simplify (More Radicals).",
  "body": " Differentiate and Simplify (More Radicals)  Find each derivative and simplify.     "
},
{
  "id": "subsec-product-rule-examples-9",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-9",
  "type": "Exercise Group",
  "number": "3.1.8",
  "title": "Differentiate with Constants.",
  "body": " Differentiate with Constants  Find each derivative and simplify.  , where are constants  , where and are constants  "
},
{
  "id": "subsec-product-rule-examples-10",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-10",
  "type": "Exercise Group",
  "number": "3.1.9",
  "title": "Negative Exponents.",
  "body": " Negative Exponents  Find each derivative.         . Hint: Rewrite as and use power rule.   "
},
{
  "id": "subsec-product-rule-examples-11",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-11",
  "type": "Checkpoint",
  "number": "3.1.7",
  "title": "Slope with Negative Exponents.",
  "body": " Slope with Negative Exponents  Find the slope of at .   "
},
{
  "id": "subsec-product-rule-examples-12",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-12",
  "type": "Checkpoint",
  "number": "3.1.8",
  "title": "Derivative Two Ways.",
  "body": " Derivative Two Ways  If , find two ways: (a) by using the Product Rule, and (b) by expanding first.   "
},
{
  "id": "subsec-product-rule-examples-13",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-13",
  "type": "Exercise Group",
  "number": "3.1.10",
  "title": "Derivative at a Point.",
  "body": " Derivative at a Point  Find each derivative at the given point.  ,  ,  "
},
{
  "id": "subsec-product-rule-examples-14",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-14",
  "type": "Checkpoint",
  "number": "3.1.9",
  "title": "Horizontal Tangent (Linear Factors).",
  "body": " Horizontal Tangent (Linear Factors)  Find the points where the tangent to is horizontal.   "
},
{
  "id": "subsec-product-rule-examples-15",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-examples-15",
  "type": "Checkpoint",
  "number": "3.1.10",
  "title": "Horizontal Tangent (Repeated Factor).",
  "body": " Horizontal Tangent (Repeated Factor)  Find the points where the tangent to is horizontal.   "
},
{
  "id": "subsec-extended-product-rule-5",
  "level": "2",
  "url": "sec-product-rule.html#subsec-extended-product-rule-5",
  "type": "Remark",
  "number": "3.1.11",
  "title": "",
  "body": " This rule comes from using the product rule twice. First, we can think of as (the function together, multiplied by ). Then, applying the product rule to , we get,   Then, for , we can apply the product rule again, to get,   "
},
{
  "id": "subsec-extended-product-rule-6",
  "level": "2",
  "url": "sec-product-rule.html#subsec-extended-product-rule-6",
  "type": "Exercise Group",
  "number": "3.1.11",
  "title": "Three-Factor Product Rule.",
  "body": " Three-Factor Product Rule  Find each derivative, using the product rule for 3 functions, and simplify.    "
},
{
  "id": "subsec-extended-product-rule-7",
  "level": "2",
  "url": "sec-product-rule.html#subsec-extended-product-rule-7",
  "type": "Checkpoint",
  "number": "3.1.12",
  "title": "Three-Factor Derivative at a Point.",
  "body": " Three-Factor Derivative at a Point  Find the derivative of at .   "
},
{
  "id": "subsec-product-rule-given-values-2",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-given-values-2",
  "type": "Exercise Group",
  "number": "3.1.12",
  "title": "Given Function Values.",
  "body": " Given Function Values  Find the indicated derivative using the given function values.  , , , . Find .  , , , . Find .  , , , . Find .  , , , . Find where .  , , , . Find .  "
},
{
  "id": "subsec-product-rule-given-values-3",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-given-values-3",
  "type": "Checkpoint",
  "number": "3.1.13",
  "title": "Tangent Line from Given Values.",
  "body": " Tangent Line from Given Values  Find the equation of the tangent line to the graph of at , given that , , , .  , .   "
},
{
  "id": "subsec-product-rule-advanced-2",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-2",
  "type": "Checkpoint",
  "number": "3.1.14",
  "title": "Derivative with Unknown Function.",
  "body": " Derivative with Unknown Function  If is a differentiable function, find an expression for the derivative of each of the following functions.      "
},
{
  "id": "subsec-product-rule-advanced-3",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-3",
  "type": "Checkpoint",
  "number": "3.1.15",
  "title": "Slope of xf(x).",
  "body": " Slope of xf(x)  Find the slope of the tangent line to at , given , .  .   "
},
{
  "id": "subsec-product-rule-advanced-4",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-4",
  "type": "Checkpoint",
  "number": "3.1.16",
  "title": "Tangent to xf(x).",
  "body": " Tangent to xf(x)  Given that , , and . Find the tangent to at .  , .   "
},
{
  "id": "subsec-product-rule-advanced-5",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-5",
  "type": "Checkpoint",
  "number": "3.1.17",
  "title": "Tangent to x²f(x).",
  "body": " Tangent to x²f(x)  Given that , , . Find the tangent to at .  , .   "
},
{
  "id": "subsec-product-rule-advanced-6",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-6",
  "type": "Checkpoint",
  "number": "3.1.18",
  "title": "Tangent Using Given Tangent.",
  "body": " Tangent Using Given Tangent  The tangent to at is . Find the tangent to at .  , ; , point .   "
},
{
  "id": "subsec-product-rule-advanced-7",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-7",
  "type": "Checkpoint",
  "number": "3.1.19",
  "title": "Second Derivative.",
  "body": " Second Derivative  Given that and for all , find .  , so .   "
},
{
  "id": "subsec-product-rule-advanced-8",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-8",
  "type": "Checkpoint",
  "number": "3.1.20",
  "title": "Tangent from Two Tangent Lines.",
  "body": " Tangent from Two Tangent Lines  The tangent to at is and the tangent to at is . Find the tangent to at .  , , , ; , point .   "
},
{
  "id": "subsec-product-rule-advanced-9",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-9",
  "type": "Checkpoint",
  "number": "3.1.21",
  "title": "Derivative of [f(x)]².",
  "body": " Derivative of [f(x)]²  Show that , using the product rule with .  Use part (a) to differentiate .  "
},
{
  "id": "subsec-product-rule-advanced-10",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-10",
  "type": "Checkpoint",
  "number": "3.1.22",
  "title": "Derivative of [f(x)]³.",
  "body": " Derivative of [f(x)]³  Show that , using the product rule for 3 functions.   "
},
{
  "id": "subsec-product-rule-advanced-11",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-11",
  "type": "Remark",
  "number": "3.1.23",
  "title": "",
  "body": " In fact, the pattern for the derivative of a product of 3 functions continues for any number of functions. For example, for 4 functions, say, , we have,   In general, for functions, say, ,   "
},
{
  "id": "subsec-product-rule-advanced-12",
  "level": "2",
  "url": "sec-product-rule.html#subsec-product-rule-advanced-12",
  "type": "Checkpoint",
  "number": "3.1.24",
  "title": "f’(0) for n-Factor Product.",
  "body": " f'(0) for n-Factor Product  If , find .  Use the general product rule, and plug in .  , which is the sum of the first natural numbers, which is equal to .  "
},
{
  "id": "sec-implicit-differentiation",
  "level": "1",
  "url": "sec-implicit-differentiation.html",
  "type": "Section",
  "number": "3.2",
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
  "number": "3.2.1",
  "title": "",
  "body": " For example, a circle with radius 1 centered at the origin (the unit circle) has the equation,   For the entire graph, this is not a function, because it fails the vertical line test. However, it is still something which we could create tangent lines for.  We want to take derivatives of these kinds of curves. To do so, one strategy would be to isolate , and then take the derivative like we have done previously. In this case,   This leads to two different functions, say and . The first is for the top semicircle, and the second is for the bottom semicircle ( Desmos link ).  "
},
{
  "id": "ex-motivational-circle",
  "level": "2",
  "url": "sec-implicit-differentiation.html#ex-motivational-circle",
  "type": "Example",
  "number": "3.2.2",
  "title": "Motivational Example: Circle.",
  "body": " Motivational Example: Circle  Consider the unit circle, with equation . The idea is that we can take the derivative of both sides of the equation,   As usual,   (power rule) and,  (derivative of a constant is zero)   However, is a bit different, because represents a function of , so instead of , we could more precisely write , like,   This means that is like a composition of function, with as the inner function, and the square is the outer function. This means we have to use the chain rule,   Then, the equation becomes,   Then, we want to solve for the derivative , so we can isolate it in the equation,   This means that for any point on the unit circle, the slope of the tangent line at that point is . For example, for the point , the derivative (slope) at that point is,   Note that is included in the formula for the derivative (not just ), and this is totally normal and ok.  Also, we can use the derivative formula to find where the graph has a horizontal tangent, and also where it has a vertical tangent.   There is a horizontal tangent if , or . This means that . Plugging this into the curve equation , we get , so . So, and . This should make sense graphically.  For vertical tangents, this is basically where the derivative is undefined, because of division by 0. Here, it is when . Plugging this into the equation, we get , so , and so the points are and .   "
},
{
  "id": "ex-horizontal-parabolas",
  "level": "2",
  "url": "sec-implicit-differentiation.html#ex-horizontal-parabolas",
  "type": "Example",
  "number": "3.2.3",
  "title": "Horizontal Parabolas.",
  "body": " Horizontal Parabolas  Consider the equation (or ). This equation represents a horizontal parabola. We could solve this equation for , by taking the square root of both sides to get . In other words, this defines two functions of , and . We could take the derivative of each individually, to get,   Instead, using implicit differentiation, we can take the derivative of both together. Differentiate both sides of the equation,   "
},
{
  "id": "ex-folium-descartes",
  "level": "2",
  "url": "sec-implicit-differentiation.html#ex-folium-descartes",
  "type": "Example",
  "number": "3.2.4",
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
  "id": "sec-reverse-chain-rule",
  "level": "1",
  "url": "sec-reverse-chain-rule.html",
  "type": "Section",
  "number": "6.1",
  "title": "Reverse Chain Rule",
  "body": " Reverse Chain Rule   With integration, a common situation is when you recognize a basic function you know how to integrate, except the input has been replaced by something like , , or (a linear expression ). In these cases, the antiderivative has the same shape as usual, but you must make a small adjustment.   Integral of   Consider the integral,     We know that the integral of is , so we might guess that the integral of is . However, this is almost correct but not quite. Indeed, checking the antiderivative,   There is an extra factor of 3. When differentiating , we know that we'd basically differentiate as normal, and then multiply by the derivative of which is 3 (by the chain rule), and so the derivative is . Antiderivatives are like the reverse of derivatives, so instead, we need to divide by 3,   Checking the antiderivative, indeed,   which is the original function.     Integral of   Consider the integral,     Again, we know the integral of is , so we might guess that the integral of is . However, this is almost correct but not quite. We also have to divide the answer by 2, because differentiating would make an extra factor of 2 (from the chain rule). Then,   Checking the antiderivative verifies that this is correct,   which gives back the original function. Notice that the does not change the answer, because the derivative of a constant is 0.    In general, if there is a linear expression inside the function we are integrating, then we need to divide the answer by to correct for that extra constant factor when differentiating. More precisely, differentiating something with inside always leads to a factor of by the chain rule, so when we integrate we undo that factor by dividing by . The does not affect the factor because the derivative of a constant is 0. In short,    Integral of   Evaluate .    The antiderivative of is . Here we have instead of , so we integrate as normal and divide by the coefficient of , which is 2,      Basic Reverse Chain Rule Practice  Evaluate each integral.       The same idea applies to powers and logarithms.   Integral of   Evaluate .    This integral is of the form (a power), except with inside (a linear expression). So, we integrate as if it were , giving (by the power rule), and then divide by the coefficient of , which is ,      Integral of   Evaluate .    This integral is of the form , except with (a linear expression). The antiderivative of is , so we integrate as normal and divide by the coefficient of , which is ,      Integral of   Evaluate .    This integral is of the form , except with (a linear expression). The antiderivative of is , so we integrate as normal and divide by the coefficient of , which is 4,      Powers, Logarithms, and Trigonometric Integrals Practice  Evaluate each integral.           In general, we can summarize this rule,   Reverse Chain Rule (Linear Inside Rule)  If , then .   Here, means that there is some existing integral rule that we know for , and is the antiderivative of . Then, if we have instead of (in other words, instead of just ), we can integrate as normal to get , and then divide by to correct for the chain rule. For example,    This rule only works when the inner function is linear (in other words, of the form ), because the derivative of a linear function is a constant. For an inner function that isn't linear, this shortcut does not apply. For example, for , we cannot just integrate as normal and divide by the derivative of which is to get ,   This is because when we differentiate , we have to use the product rule, and we will get something more complicated than just , so this is not the correct antiderivative. We will learn how to integrate some more complicated functions later.     Examples   Reverse Chain Rule Practice  Evaluate each integral.             Recall that .      Recall that .        "
},
{
  "id": "sec-reverse-chain-rule-2-2",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#sec-reverse-chain-rule-2-2",
  "type": "Example",
  "number": "6.1.1",
  "title": "Integral of <span class=\"process-math\">\\(e^{3x}\\)<\/span>.",
  "body": " Integral of   Consider the integral,     We know that the integral of is , so we might guess that the integral of is . However, this is almost correct but not quite. Indeed, checking the antiderivative,   There is an extra factor of 3. When differentiating , we know that we'd basically differentiate as normal, and then multiply by the derivative of which is 3 (by the chain rule), and so the derivative is . Antiderivatives are like the reverse of derivatives, so instead, we need to divide by 3,   Checking the antiderivative, indeed,   which is the original function.   "
},
{
  "id": "sec-reverse-chain-rule-2-3",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#sec-reverse-chain-rule-2-3",
  "type": "Example",
  "number": "6.1.2",
  "title": "Integral of <span class=\"process-math\">\\(\\sin{(2x + 5)}\\)<\/span>.",
  "body": " Integral of   Consider the integral,     Again, we know the integral of is , so we might guess that the integral of is . However, this is almost correct but not quite. We also have to divide the answer by 2, because differentiating would make an extra factor of 2 (from the chain rule). Then,   Checking the antiderivative verifies that this is correct,   which gives back the original function. Notice that the does not change the answer, because the derivative of a constant is 0.   "
},
{
  "id": "sec-reverse-chain-rule-2-6",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#sec-reverse-chain-rule-2-6",
  "type": "Example",
  "number": "6.1.3",
  "title": "Integral of <span class=\"process-math\">\\(\\sec^2(2x)\\)<\/span>.",
  "body": " Integral of   Evaluate .    The antiderivative of is . Here we have instead of , so we integrate as normal and divide by the coefficient of , which is 2,    "
},
{
  "id": "sec-reverse-chain-rule-2-7",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#sec-reverse-chain-rule-2-7",
  "type": "Exercise Group",
  "number": "6.1.1",
  "title": "Basic Reverse Chain Rule Practice.",
  "body": " Basic Reverse Chain Rule Practice  Evaluate each integral.      "
},
{
  "id": "sec-reverse-chain-rule-2-9",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#sec-reverse-chain-rule-2-9",
  "type": "Example",
  "number": "6.1.4",
  "title": "Integral of <span class=\"process-math\">\\((1-2x)^9\\)<\/span>.",
  "body": " Integral of   Evaluate .    This integral is of the form (a power), except with inside (a linear expression). So, we integrate as if it were , giving (by the power rule), and then divide by the coefficient of , which is ,    "
},
{
  "id": "sec-reverse-chain-rule-2-10",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#sec-reverse-chain-rule-2-10",
  "type": "Example",
  "number": "6.1.5",
  "title": "Integral of <span class=\"process-math\">\\(\\frac{1}{5-3x}\\)<\/span>.",
  "body": " Integral of   Evaluate .    This integral is of the form , except with (a linear expression). The antiderivative of is , so we integrate as normal and divide by the coefficient of , which is ,    "
},
{
  "id": "sec-reverse-chain-rule-2-11",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#sec-reverse-chain-rule-2-11",
  "type": "Example",
  "number": "6.1.6",
  "title": "Integral of <span class=\"process-math\">\\(\\sqrt{1+4x}\\)<\/span>.",
  "body": " Integral of   Evaluate .    This integral is of the form , except with (a linear expression). The antiderivative of is , so we integrate as normal and divide by the coefficient of , which is 4,    "
},
{
  "id": "sec-reverse-chain-rule-2-12",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#sec-reverse-chain-rule-2-12",
  "type": "Exercise Group",
  "number": "6.1.2",
  "title": "Powers, Logarithms, and Trigonometric Integrals Practice.",
  "body": " Powers, Logarithms, and Trigonometric Integrals Practice  Evaluate each integral.          "
},
{
  "id": "thm-reverse-chain-rule",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#thm-reverse-chain-rule",
  "type": "Theorem",
  "number": "6.1.7",
  "title": "Reverse Chain Rule (Linear Inside Rule).",
  "body": " Reverse Chain Rule (Linear Inside Rule)  If , then .  "
},
{
  "id": "sec-reverse-chain-rule-2-17",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#sec-reverse-chain-rule-2-17",
  "type": "Remark",
  "number": "6.1.8",
  "title": "",
  "body": " This rule only works when the inner function is linear (in other words, of the form ), because the derivative of a linear function is a constant. For an inner function that isn't linear, this shortcut does not apply. For example, for , we cannot just integrate as normal and divide by the derivative of which is to get ,   This is because when we differentiate , we have to use the product rule, and we will get something more complicated than just , so this is not the correct antiderivative. We will learn how to integrate some more complicated functions later.  "
},
{
  "id": "subsec-rcr-examples-2",
  "level": "2",
  "url": "sec-reverse-chain-rule.html#subsec-rcr-examples-2",
  "type": "Exercise Group",
  "number": "6.1.3",
  "title": "Reverse Chain Rule Practice.",
  "body": " Reverse Chain Rule Practice  Evaluate each integral.             Recall that .      Recall that .      "
},
{
  "id": "sec-integration-by-substitution",
  "level": "1",
  "url": "sec-integration-by-substitution.html",
  "type": "Section",
  "number": "6.2",
  "title": "Integration by Substitution",
  "body": " Integration by Substitution   Previously, we saw how to integrate functions of the form by integrating as normal and dividing by (the reverse chain rule). Integration by substitution generalizes this idea to handle any composite function, not just linear ones.   Substitution with a Power   Evaluate     The expression could be expanded, allowing us to use the power rule, but it would be a lot of work.  Instead, it turns out we can use substitution. We will define a new variable, named , in terms of the original variable . In particular, let (the expression inside the power). This means the integral will be,   We also need to replace and with something in terms of . To do this, we compute , which is the derivative of with respect to times . We have,   (You may recall that and are called differentials). This means we can replace with , and is exactly what we have left in our integral. Then,   This is a new integral in terms of (only), which we can evaluate using the power rule. We have,   Finally, we substitute back , to express our final answer in terms of the original variable ,      Substitution with an Exponential   Evaluate     Here, it turns out that letting works well. This is because then, , which is exactly what we have left in our integral. Then, substituting,     In general, a good guideline is to let be the inner function in a composition. For it to work, the derivative of the inner function must also be there in the integrand. This allows us to transform the integral into an easier integral.   Exact Match Substitutions  Evaluate each integral.           Substitution with a Logarithm   Evaluate .    Notice that the inner function is , and its derivative is , which is also in the integrand. Let , so . Then,      Substitution with a Trigonometric Power   Evaluate .    Notice that the inner function is (recall that means ), and its derivative is , which is also in the integrand. Let , so . Then,     Sometimes, the derivative of the inner function is not exactly there in the integrand, but it's basically the same, except for a different number. In these cases, we can still use substitution.   Adjusting for a Constant Factor   Evaluate .    Notice that the inner function is , and its derivative is , and is present in the integrand (but not a 3). Let , so . We have left over in the integral, so we can solve for that,   Then,      Adjusting with Multiplication   Evaluate     Notice that the inner function is , and its derivative is , and is present in the integrand (which is almost , but with a 6 instead of a 2). Let , so . Then, to get , we can multiply both sides by 3,   Then,      Substitution Producing a Logarithm   Evaluate .    Here, there doesn't seem to be an inner function. However, the derivative of the entire denominator is , which is exactly what we have in the integrand. Let , so . Then,   For the final answer, we can drop the absolute value, because is always positive. Then,      Substitution with a Nested Logarithm   Evaluate     Here, there again doesn't seem to be an inner function. However, in the denominator there is , and its derivative is , which is also in the integrand. Let , so . Then,     Sometimes, after performing a substitution, there is still left in the integrand. In some of these cases, we can substitute it as well.   Substitution with Remaining x   Evaluate .    The inner function is , so let , so .   After substituting, there is still an , that isn't captured by the . However, from , we can isolate , to get . Then, we can substitute that as well, to get it entirely in terms of ,      Substitution with Solving for x   Evaluate .    Let , so ,   We need to replace , using to isolate for to get . Substituting,      Solve-for-x Substitutions  Evaluate each integral.             Summary of Integration by Substitution  In summary, to use integration by substitution:   Choose a substitution .  Take the derivative to get .  Substitute and , to get an integral in terms of the new variable only.  Evaluate the integral, using antiderivative rules.  Substitute back , to express the final answer in terms of the original variable . Don't forget to add for the constant of integration.   The most challenging part of integration by substitution is choosing the right substitution . It is somewhat an art, because there isn't one straightforward rule that works in every scenario. Sometimes, you will choose the wrong , and that's okay, because you can always try a different substitution if the first one doesn't work out.   Your final answer should always be in terms of , not . The variable is just a temporary variable to help you evaluate the integral, and shouldn't be part of the final answer. A common mistake is forgetting to substitute back to at the end, and leaving the answer in terms of .     Principles for Choosing  Here are some guidelines for choosing the right .    Look for the inner function , and let be that inner function. Here are some common patterns:   Expression inside a power If you see , try .  Inside a function If you see , , or , try .  Entire denominator If you see , try .  Under a root If you see , try .   In general, for a composition , try .   When in doubt, try the most complicated part . If no inside is immediately obvious, try letting be the most complicated piece of the integrand.   If there is a function and its derivative , try letting be the function. For example,   If you see and , try .  If you see and , try .  If you see and , try .    If still remains after substituting , solve for in terms of and substitute that as well. This works especially well when is a linear function of .    Sometimes, especially for more complicated integrals, multiple choices of can lead to different-looking but equivalent answers, which are both corect. For example, can be solved with or , yielding and , respectively. These differ by a constant, so both are correct.     Examples   Straightforward Substitutions  Evaluate each integral.                    Compositions  Evaluate each integral.                  Advanced Compositions  Evaluate each integral.                   Challenging Substitutions  Evaluate each integral.                     Integration by Substitution in General  Now that we have seen how substitution works in practice, let's analyze why. In fact, integration by substitution is the integral version of the chain rule (for derivatives). Recall that the chain rule says that the derivative of a composite function is,   Equivalently, this says that is an antiderivative of , or in other words,   This is what we did with substitution. We let , so . Then,    Integration by substitution is more of a tool for determining indefinite integrals, rather than a theorem. After practicing a lot of substitution, you could do the simpler ones just mentally by inspection (in other words, educated guessing), without explicitly substituting , converting everything to , integrating in , and converting back. For example,   can be seen to be (after some practice with this technique),   Because the derivative is which is exactly what we have, so it's like . However, you should probably write out the steps to show your work.    Integration by substitution is very sensitive to changes in the integrand, in that, small changes in the integrand can transform a simple problem that is able to be evaluated using integration by substitution, to an integral which is extremely difficult or even impossible. For example,   is a simple integral that can be evaluated using substitution (using ), but,   is a very difficult integral, that actually can't be evaluated using any technique that we learn in this course. This is because the derivative of is , which is exactly what we have in the first integral, but not in the second integral. In general, all integration techniques are very sensitive to changes in the integrand.    "
},
{
  "id": "sec-integration-by-substitution-2-2",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-2",
  "type": "Example",
  "number": "6.2.1",
  "title": "Substitution with a Power.",
  "body": " Substitution with a Power   Evaluate     The expression could be expanded, allowing us to use the power rule, but it would be a lot of work.  Instead, it turns out we can use substitution. We will define a new variable, named , in terms of the original variable . In particular, let (the expression inside the power). This means the integral will be,   We also need to replace and with something in terms of . To do this, we compute , which is the derivative of with respect to times . We have,   (You may recall that and are called differentials). This means we can replace with , and is exactly what we have left in our integral. Then,   This is a new integral in terms of (only), which we can evaluate using the power rule. We have,   Finally, we substitute back , to express our final answer in terms of the original variable ,    "
},
{
  "id": "sec-integration-by-substitution-2-3",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-3",
  "type": "Example",
  "number": "6.2.2",
  "title": "Substitution with an Exponential.",
  "body": " Substitution with an Exponential   Evaluate     Here, it turns out that letting works well. This is because then, , which is exactly what we have left in our integral. Then, substituting,    "
},
{
  "id": "sec-integration-by-substitution-2-5",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-5",
  "type": "Exercise Group",
  "number": "6.2.1",
  "title": "Exact Match Substitutions.",
  "body": " Exact Match Substitutions  Evaluate each integral.         "
},
{
  "id": "sec-integration-by-substitution-2-6",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-6",
  "type": "Example",
  "number": "6.2.3",
  "title": "Substitution with a Logarithm.",
  "body": " Substitution with a Logarithm   Evaluate .    Notice that the inner function is , and its derivative is , which is also in the integrand. Let , so . Then,    "
},
{
  "id": "sec-integration-by-substitution-2-7",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-7",
  "type": "Example",
  "number": "6.2.4",
  "title": "Substitution with a Trigonometric Power.",
  "body": " Substitution with a Trigonometric Power   Evaluate .    Notice that the inner function is (recall that means ), and its derivative is , which is also in the integrand. Let , so . Then,    "
},
{
  "id": "sec-integration-by-substitution-2-9",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-9",
  "type": "Example",
  "number": "6.2.5",
  "title": "Adjusting for a Constant Factor.",
  "body": " Adjusting for a Constant Factor   Evaluate .    Notice that the inner function is , and its derivative is , and is present in the integrand (but not a 3). Let , so . We have left over in the integral, so we can solve for that,   Then,    "
},
{
  "id": "sec-integration-by-substitution-2-10",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-10",
  "type": "Example",
  "number": "6.2.6",
  "title": "Adjusting with Multiplication.",
  "body": " Adjusting with Multiplication   Evaluate     Notice that the inner function is , and its derivative is , and is present in the integrand (which is almost , but with a 6 instead of a 2). Let , so . Then, to get , we can multiply both sides by 3,   Then,    "
},
{
  "id": "sec-integration-by-substitution-2-11",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-11",
  "type": "Example",
  "number": "6.2.7",
  "title": "Substitution Producing a Logarithm.",
  "body": " Substitution Producing a Logarithm   Evaluate .    Here, there doesn't seem to be an inner function. However, the derivative of the entire denominator is , which is exactly what we have in the integrand. Let , so . Then,   For the final answer, we can drop the absolute value, because is always positive. Then,    "
},
{
  "id": "sec-integration-by-substitution-2-12",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-12",
  "type": "Example",
  "number": "6.2.8",
  "title": "Substitution with a Nested Logarithm.",
  "body": " Substitution with a Nested Logarithm   Evaluate     Here, there again doesn't seem to be an inner function. However, in the denominator there is , and its derivative is , which is also in the integrand. Let , so . Then,    "
},
{
  "id": "sec-integration-by-substitution-2-14",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-14",
  "type": "Example",
  "number": "6.2.9",
  "title": "Substitution with Remaining x.",
  "body": " Substitution with Remaining x   Evaluate .    The inner function is , so let , so .   After substituting, there is still an , that isn't captured by the . However, from , we can isolate , to get . Then, we can substitute that as well, to get it entirely in terms of ,    "
},
{
  "id": "sec-integration-by-substitution-2-15",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-15",
  "type": "Example",
  "number": "6.2.10",
  "title": "Substitution with Solving for x.",
  "body": " Substitution with Solving for x   Evaluate .    Let , so ,   We need to replace , using to isolate for to get . Substituting,    "
},
{
  "id": "sec-integration-by-substitution-2-16",
  "level": "2",
  "url": "sec-integration-by-substitution.html#sec-integration-by-substitution-2-16",
  "type": "Exercise Group",
  "number": "6.2.2",
  "title": "Solve-for-x Substitutions.",
  "body": " Solve-for-x Substitutions  Evaluate each integral.          "
},
{
  "id": "subsec-sub-summary-5",
  "level": "2",
  "url": "sec-integration-by-substitution.html#subsec-sub-summary-5",
  "type": "Remark",
  "number": "6.2.11",
  "title": "",
  "body": " Your final answer should always be in terms of , not . The variable is just a temporary variable to help you evaluate the integral, and shouldn't be part of the final answer. A common mistake is forgetting to substitute back to at the end, and leaving the answer in terms of .  "
},
{
  "id": "subsec-choosing-u-4",
  "level": "2",
  "url": "sec-integration-by-substitution.html#subsec-choosing-u-4",
  "type": "Remark",
  "number": "6.2.12",
  "title": "",
  "body": " Sometimes, especially for more complicated integrals, multiple choices of can lead to different-looking but equivalent answers, which are both corect. For example, can be solved with or , yielding and , respectively. These differ by a constant, so both are correct.  "
},
{
  "id": "subsec-sub-examples-2",
  "level": "2",
  "url": "sec-integration-by-substitution.html#subsec-sub-examples-2",
  "type": "Exercise Group",
  "number": "6.2.3",
  "title": "Straightforward Substitutions.",
  "body": " Straightforward Substitutions  Evaluate each integral.                  "
},
{
  "id": "subsec-sub-examples-3",
  "level": "2",
  "url": "sec-integration-by-substitution.html#subsec-sub-examples-3",
  "type": "Exercise Group",
  "number": "6.2.4",
  "title": "Compositions.",
  "body": " Compositions  Evaluate each integral.                "
},
{
  "id": "subsec-sub-examples-4",
  "level": "2",
  "url": "sec-integration-by-substitution.html#subsec-sub-examples-4",
  "type": "Exercise Group",
  "number": "6.2.5",
  "title": "Advanced Compositions.",
  "body": " Advanced Compositions  Evaluate each integral.                 "
},
{
  "id": "subsec-sub-examples-5",
  "level": "2",
  "url": "sec-integration-by-substitution.html#subsec-sub-examples-5",
  "type": "Exercise Group",
  "number": "6.2.6",
  "title": "Challenging Substitutions.",
  "body": " Challenging Substitutions  Evaluate each integral.                  "
},
{
  "id": "subsec-sub-general-8",
  "level": "2",
  "url": "sec-integration-by-substitution.html#subsec-sub-general-8",
  "type": "Remark",
  "number": "6.2.13",
  "title": "",
  "body": " Integration by substitution is more of a tool for determining indefinite integrals, rather than a theorem. After practicing a lot of substitution, you could do the simpler ones just mentally by inspection (in other words, educated guessing), without explicitly substituting , converting everything to , integrating in , and converting back. For example,   can be seen to be (after some practice with this technique),   Because the derivative is which is exactly what we have, so it's like . However, you should probably write out the steps to show your work.  "
},
{
  "id": "subsec-sub-general-9",
  "level": "2",
  "url": "sec-integration-by-substitution.html#subsec-sub-general-9",
  "type": "Remark",
  "number": "6.2.14",
  "title": "",
  "body": " Integration by substitution is very sensitive to changes in the integrand, in that, small changes in the integrand can transform a simple problem that is able to be evaluated using integration by substitution, to an integral which is extremely difficult or even impossible. For example,   is a simple integral that can be evaluated using substitution (using ), but,   is a very difficult integral, that actually can't be evaluated using any technique that we learn in this course. This is because the derivative of is , which is exactly what we have in the first integral, but not in the second integral. In general, all integration techniques are very sensitive to changes in the integrand.  "
},
{
  "id": "sec-integrals-of-trig-functions",
  "level": "1",
  "url": "sec-integrals-of-trig-functions.html",
  "type": "Section",
  "number": "6.3",
  "title": "Integrals of Trigonometric Functions",
  "body": " Integrals of Trigonometric Functions   In this section, we explore the integrals (antiderivatives) of various trigonometric functions. First, recall the antiderivative of sine and cosine,   The integrals of the other trigonometric functions are somewhat more complicated, and require using substitution. First, here are all of them together,   You may get a formula sheet on your final exam with these formulas, or you may be expected to memorize them (or derive them if needed).   A pattern that can help you memorize these antiderivatives, is that the antiderivative of the co functions (cosine, cosecant, cotangent) are similar to their corresponding non-co functions (sine, secant, tangent), except,   They have the opposite sign (so if the non-co function has a positive sign, the co function has a negative sign, and vice versa).   They have similar function parts, but flipped , in that non-co functions become co functions, and co becomes non-co. In particular,    integral of...  non-co-function   co-function                           Integrals of Tangent, Secant, Cosecant, and Cotangent   Integral of Tangent       Note that these two antiderivatives are equivalent, because,     Deriving the Integral of Tangent  To integrate , recall that . We can rewrite it as , and use substitution,   Notice that there is in the denominator, and its derivative is in the numerator (except with a negative sign), so we can use substitution. Then,   Then,     Integral of Secant       Deriving the Integral of Secant  There are multiple ways to integrate , but the most common way is to use a very special trick, of multiplying the numerator and denominator by ,   It turns out that this allows us to use substitution, because there is in the denominator, and its derivative is , which is exactly what is in the numerator. Then,   Then,     Integral of Cosecant       Deriving the Integral of Cosecant  To integrate , we can use the same trick as secant, but this time multiplying the numerator and denominator by ,   Again, this allows us to use substitution, because there is in the denominator, and its derivative is , which is what is in the numerator (except with a negative sign). Then,   Then,     Integral of Cotangent       Note that these two antiderivatives are equivalent, because,     Deriving the Integral of Cotangent  To integrate , it is similar to . We can rewrite it as , and use substitution,   Then,   Then,      Integral of and  Two important trig integrals that come up often are and .   Integrals of Squared Sine and Cosine      These integrals show up often enough that they are helpful to memorize, or at least memorize the method of deriving them.   Integral of   Consider,     Unfortunately, there is no simple substitution that can be used to evaluate this integral (like, for example, ). Also, you can't just integrate as if it were 2 functions multiplied together,,   Instead, we have to use a particular trigonometric identity, called the power-reducing identities. There are 2 of them, one for cosine and one for sine,   As their name suggests, these identities express and (cosine and sine to the 2nd power) in terms of , which is to the 1st power.  These identities can be derived from the double-angle identities for cosine,   If you solve the first equation to isolate for , and the second equation for , you get the power-reducing identities.  Using these identities, we can evaluate the integral of ,   Further, the double-angle identity can be used to rewrite the antiderivative in terms of only single angles ,     The integral of can be evaluated in the same way, using the other power-reducing identity,   Integral of   Consider the integral,     Use the power-reducing identity for sine ,   Again, we can use the double-angle identity to rewrite the antiderivative in terms of only single angles ,     For reference, here are the power-reducing identities again,   You may get these identities on your formula sheet for your exams, or you may need to memorize them.    Examples   Basic Trigonometric Integrals Practice  Evaluate each integral.  Expand, and use the formula for .  Multiply the numerator and denominator by , and split the fraction.  Split the fraction into .  Expand, and use .  Distribute; use and .  Rewrite as and use .    More Trigonometric Integrals Practice  Evaluate each integral.  Multiply numerator and denominator by , and use .  Multiply numerator and denominator by , and use .  Use the sine addition formula .  Rewrite as , then multiply by the conjugate .  Expand, and use and .    "
},
{
  "id": "sec-integrals-of-trig-functions-2-6",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#sec-integrals-of-trig-functions-2-6",
  "type": "Remark",
  "number": "6.3.1",
  "title": "",
  "body": " A pattern that can help you memorize these antiderivatives, is that the antiderivative of the co functions (cosine, cosecant, cotangent) are similar to their corresponding non-co functions (sine, secant, tangent), except,   They have the opposite sign (so if the non-co function has a positive sign, the co function has a negative sign, and vice versa).   They have similar function parts, but flipped , in that non-co functions become co functions, and co becomes non-co. In particular,    integral of...  non-co-function   co-function                        "
},
{
  "id": "thm-integral-tangent",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#thm-integral-tangent",
  "type": "Theorem",
  "number": "6.3.2",
  "title": "Integral of Tangent.",
  "body": " Integral of Tangent     "
},
{
  "id": "subsec-integrals-tan-sec-csc-cot-3",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#subsec-integrals-tan-sec-csc-cot-3",
  "type": "Remark",
  "number": "6.3.3",
  "title": "",
  "body": " Note that these two antiderivatives are equivalent, because,   "
},
{
  "id": "subsec-integrals-tan-sec-csc-cot-4",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#subsec-integrals-tan-sec-csc-cot-4",
  "type": "Example",
  "number": "6.3.4",
  "title": "Deriving the Integral of Tangent.",
  "body": " Deriving the Integral of Tangent  To integrate , recall that . We can rewrite it as , and use substitution,   Notice that there is in the denominator, and its derivative is in the numerator (except with a negative sign), so we can use substitution. Then,   Then,   "
},
{
  "id": "thm-integral-secant",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#thm-integral-secant",
  "type": "Theorem",
  "number": "6.3.5",
  "title": "Integral of Secant.",
  "body": " Integral of Secant     "
},
{
  "id": "subsec-integrals-tan-sec-csc-cot-6",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#subsec-integrals-tan-sec-csc-cot-6",
  "type": "Example",
  "number": "6.3.6",
  "title": "Deriving the Integral of Secant.",
  "body": " Deriving the Integral of Secant  There are multiple ways to integrate , but the most common way is to use a very special trick, of multiplying the numerator and denominator by ,   It turns out that this allows us to use substitution, because there is in the denominator, and its derivative is , which is exactly what is in the numerator. Then,   Then,   "
},
{
  "id": "thm-integral-cosecant",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#thm-integral-cosecant",
  "type": "Theorem",
  "number": "6.3.7",
  "title": "Integral of Cosecant.",
  "body": " Integral of Cosecant     "
},
{
  "id": "subsec-integrals-tan-sec-csc-cot-8",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#subsec-integrals-tan-sec-csc-cot-8",
  "type": "Example",
  "number": "6.3.8",
  "title": "Deriving the Integral of Cosecant.",
  "body": " Deriving the Integral of Cosecant  To integrate , we can use the same trick as secant, but this time multiplying the numerator and denominator by ,   Again, this allows us to use substitution, because there is in the denominator, and its derivative is , which is what is in the numerator (except with a negative sign). Then,   Then,   "
},
{
  "id": "thm-integral-cotangent",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#thm-integral-cotangent",
  "type": "Theorem",
  "number": "6.3.9",
  "title": "Integral of Cotangent.",
  "body": " Integral of Cotangent     "
},
{
  "id": "subsec-integrals-tan-sec-csc-cot-10",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#subsec-integrals-tan-sec-csc-cot-10",
  "type": "Remark",
  "number": "6.3.10",
  "title": "",
  "body": " Note that these two antiderivatives are equivalent, because,   "
},
{
  "id": "subsec-integrals-tan-sec-csc-cot-11",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#subsec-integrals-tan-sec-csc-cot-11",
  "type": "Example",
  "number": "6.3.11",
  "title": "Deriving the Integral of Cotangent.",
  "body": " Deriving the Integral of Cotangent  To integrate , it is similar to . We can rewrite it as , and use substitution,   Then,   Then,   "
},
{
  "id": "thm-integrals-sin2-cos2",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#thm-integrals-sin2-cos2",
  "type": "Theorem",
  "number": "6.3.12",
  "title": "Integrals of Squared Sine and Cosine.",
  "body": " Integrals of Squared Sine and Cosine     "
},
{
  "id": "subsec-integrals-sin2-cos2-5",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#subsec-integrals-sin2-cos2-5",
  "type": "Example",
  "number": "6.3.13",
  "title": "Integral of <span class=\"process-math\">\\(\\cos^2{x}\\)<\/span>.",
  "body": " Integral of   Consider,     Unfortunately, there is no simple substitution that can be used to evaluate this integral (like, for example, ). Also, you can't just integrate as if it were 2 functions multiplied together,,   Instead, we have to use a particular trigonometric identity, called the power-reducing identities. There are 2 of them, one for cosine and one for sine,   As their name suggests, these identities express and (cosine and sine to the 2nd power) in terms of , which is to the 1st power.  These identities can be derived from the double-angle identities for cosine,   If you solve the first equation to isolate for , and the second equation for , you get the power-reducing identities.  Using these identities, we can evaluate the integral of ,   Further, the double-angle identity can be used to rewrite the antiderivative in terms of only single angles ,    "
},
{
  "id": "subsec-integrals-sin2-cos2-7",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#subsec-integrals-sin2-cos2-7",
  "type": "Example",
  "number": "6.3.14",
  "title": "Integral of <span class=\"process-math\">\\(\\sin^2{x}\\)<\/span>.",
  "body": " Integral of   Consider the integral,     Use the power-reducing identity for sine ,   Again, we can use the double-angle identity to rewrite the antiderivative in terms of only single angles ,    "
},
{
  "id": "subsec-trig-integrals-examples-2",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#subsec-trig-integrals-examples-2",
  "type": "Exercise Group",
  "number": "6.3.1",
  "title": "Basic Trigonometric Integrals Practice.",
  "body": " Basic Trigonometric Integrals Practice  Evaluate each integral.  Expand, and use the formula for .  Multiply the numerator and denominator by , and split the fraction.  Split the fraction into .  Expand, and use .  Distribute; use and .  Rewrite as and use .  "
},
{
  "id": "subsec-trig-integrals-examples-3",
  "level": "2",
  "url": "sec-integrals-of-trig-functions.html#subsec-trig-integrals-examples-3",
  "type": "Exercise Group",
  "number": "6.3.2",
  "title": "More Trigonometric Integrals Practice.",
  "body": " More Trigonometric Integrals Practice  Evaluate each integral.  Multiply numerator and denominator by , and use .  Multiply numerator and denominator by , and use .  Use the sine addition formula .  Rewrite as , then multiply by the conjugate .  Expand, and use and .  "
},
{
  "id": "sec-integration-by-parts",
  "level": "1",
  "url": "sec-integration-by-parts.html",
  "type": "Section",
  "number": "6.4",
  "title": "Integration by Parts",
  "body": " Integration by Parts   Integration by parts (IBP) is another useful technique for evaluating integrals, especially when the integrand is a product of two different types of functions (i.e. 2 functions multiplied together).   When to Use Integration by Parts  For example, integration by parts is useful for:     times exponential  times logarithm  times sine  exponential times sine    IBP is essentially a formula, which says,   It is typically written using differential notation as,   So, is basically the derivative of , and is the derivative of . This formula is used from left to right:   The original integral is of the form (2 things multiplied together)  Then we rewrite it as   And if we do it right, the remaining integral will be easier than the original integral.   In this way, this step only solves part of the original integral. This is why it's called integration by parts .   Evaluating   Consider the integral,     The idea is to break up the integral into two parts, and , such that,   can be integrated easily, and doesn't become more complicated  can be differentiated easily, and its derivative is simpler than itself   In this case, it turns out we should choose and . Then, we can compute and ,         Then, the integral can be rewritten as ,   Therefore,     In general, a good guideline is for choosing and is,   Choose such that its derivative is more simple than itself.  Choose so it can be easily integrated , and when integrated, either becomes simpler or at least not more complicated.    Evaluating   Consider the integral,     We can choose and , because the derivative of is which is simpler than itself ( has no weird function , it just involves ), and because can be easily integrated to . Then,         Then,     Some integrals require using integration by parts multiple times.   Evaluating   Consider the integral,     We can choose and , because the derivative of is which is simpler than itself, and because can be easily integrated to . Then,         Then,   The new integral is less complicated because the power of decreased by one (from 2 to 1). Then, we can use IBP again for ,         Then,      Evaluating   Consider the integral,     Choose and , because the derivative of is which is simpler than itself, and because can be easily integrated to itself. Then,         Then,   The new integral is simpler because the power of decreased by one. Using IBP again,            Each time you use IBP, the power of the polynomial decreases by one, until it eventually reaches 0. This is what makes IBP a useful technique for integrating products of polynomials and other functions.  From the previous examples, we can see that IBP is often useful when the integral is a product of 2 different types of functions.    Evaluating  Evaluate the integral .     Integral of Natural Logarithm  Integration by parts can be used to find the antiderivative of the natural logarithm function .   Evaluating   Consider the integral,     At first, does not look like a product of functions, however, we can think of it as , and choose and . The derivative of is which is simpler than itself, and 1 can be easily integrated to . Then,         Then,     In summary,     Cyclic Examples (Product of Exponential and Trig)   Evaluating   Consider the integral,     Here, it turns out that we could choose either or to be or , and both would work. This is because the derivative and integral of is , and the derivative and integral of is or , so both of them are basically the same in terms of complexity. In this case, we will choose and . Then,         Then,   The second integral is similar to the first except that it has instead of . To evaluate it, we use IBP again,          The resulting integral is actually the same as the original integral we started with. This means that, like an equation, we can add the integral to both sides, and collect them together as like terms on the left-hand side,   Then, to solve for the desired integral, divide both sides by 2, and also finally add the constant of integration,      Evaluating  Evaluate the integral .      Integration by Parts for Definite Integrals  For definite integrals, you also have to evaluate the term at the limits of integration. Otherwise, it is very similar.    Evaluating   Evaluate the integral,            Then,       Summary of Integration by Parts  In summary,   A mnemonic to remember the IBP formula is u ltra- v iolet v oo doo .   Note that integration by parts is a place-holder formula , in that the variables and are just place-holders for the functions we choose, and they are not new variables that we are substituting into the integral.  In contrast, recall that with substitution, the integral is transformed from to an integral in another variable .  With integration by parts, we do not substitute or , but instead just use the formula as a pattern to replace the given integral with an equivalent integral, still in terms of . In this way, you don't have to worry about changing the limits of integration for definite integrals.    With integration by parts, you don't have to worry about the constant of integration until the final answer. That is, when integrating to get , we do not need to include a constant of integration , because there will be a constant introduced by the remaining integral . So, it is easiest to just wait until the very end to include .     Derivation of the Integration by Parts Formula  You may recall that integration by substitution comes from the chain rule for derivatives. In a similar way, integration by parts comes from the product rule for derivatives. Recall the product rule for derivatives, which says that, for two functions, and ,   Taking the antiderivative of both sides gives,   The left-hand side is the integral of the derivative of , so it is just , so we can write,   Then, rearranging this formula to isolate gives,   This is the integration by parts formula, except the convention is to use and instead of and , and to write instead of , and instead of . So, we write it as,   as before.    Guidelines for Choosing and (LIATE)  An important part of using integration by parts is to choose the correct and . Intuitively,   Choose so its derivative is more simple than itself  Choose to be something that is easily integrated, and either becomes simpler or at least not more complicated.   There is a mnemonic for choosing called the LIATE rule (typically pronounced lie-ate ), which is an acronym that stands for:   L : logarithmic functions, e.g. .  I : inverse trigonometric functions, e.g. .  A : algebraic functions, of the form , like polynomial functions ( , etc.) and radical functions ( , etc.).  T : trigonometric functions, e.g. .  E : exponential functions, e.g. , .   The rule is:   Choose to be what is highest on the list  And then will be what is leftover.   Also, don't forget that you can also just choose to be the entire function and , if nothing else seems to work.    Examples   One-Step IBP ( )  Evaluate each integral.                     Definite Integrals, One Step ( )  Evaluate each definite integral.            One-Step Variants ( )  Evaluate each integral.                Cyclic Examples with Exponential and Trigonometric Functions ( )  Evaluate each integral.               Two-Step IBP ( )  Evaluate each integral.             Definite Integrals, One Step ( )  Evaluate each definite integral.          Definite Integrals, Two Steps ( )  Evaluate each definite integral.        Special Techniques ( )  Evaluate each integral.  we can integrate  we can integrate   we can integrate  we can integrate  similar to  similar to  similar to     Inverse Trigonometric Functions ( )  Evaluate each integral.     we can differentiate , as      Three or More Steps ( )  Evaluate each integral.             Definite Integrals ( )  Evaluate each definite integral.   Use first.       More Definite Integrals ( )  Evaluate each definite integral.   (you might notice a shortcut: it is an odd function on a symmetric interval, so the integral is equal to 0)     ( is a constant.)      Advanced Examples  Sometimes, a -substitution or trigonometric identity can be used to simplify the integral, which leads to an integral where you can use integration by parts.   Substitution then IBP ( )  Evaluate each integral.    let , leads to  let , leads to  let , leads to  let , leads to  let , leads to ; cyclic IBP  let , leads to  let , leads to  let , leads to  let , leads to  let , leads to ; cyclic IBP  let , leads to ; cyclic IBP  let , leads to    Evaluating  Evaluate , where is a constant, .     Particle Velocity  A particle has velocity m\/s. Find the distance traveled from time 0 to time .  m    Definite Integrals  Evaluate each definite integral.            Special Tricks  Evaluate each integral.  split the integral as , then use integration by parts on the 2nd integral  let and  let and or    "
},
{
  "id": "sec-integration-by-parts-2-2",
  "level": "2",
  "url": "sec-integration-by-parts.html#sec-integration-by-parts-2-2",
  "type": "Example",
  "number": "6.4.1",
  "title": "When to Use Integration by Parts.",
  "body": " When to Use Integration by Parts  For example, integration by parts is useful for:     times exponential  times logarithm  times sine  exponential times sine   "
},
{
  "id": "sec-integration-by-parts-2-12",
  "level": "2",
  "url": "sec-integration-by-parts.html#sec-integration-by-parts-2-12",
  "type": "Example",
  "number": "6.4.2",
  "title": "Evaluating <span class=\"process-math\">\\(\\int x e^x \\,dx\\)<\/span>.",
  "body": " Evaluating   Consider the integral,     The idea is to break up the integral into two parts, and , such that,   can be integrated easily, and doesn't become more complicated  can be differentiated easily, and its derivative is simpler than itself   In this case, it turns out we should choose and . Then, we can compute and ,         Then, the integral can be rewritten as ,   Therefore,    "
},
{
  "id": "sec-integration-by-parts-2-15",
  "level": "2",
  "url": "sec-integration-by-parts.html#sec-integration-by-parts-2-15",
  "type": "Example",
  "number": "6.4.3",
  "title": "Evaluating <span class=\"process-math\">\\(\\int x \\ln{x} \\,dx\\)<\/span>.",
  "body": " Evaluating   Consider the integral,     We can choose and , because the derivative of is which is simpler than itself ( has no weird function , it just involves ), and because can be easily integrated to . Then,         Then,    "
},
{
  "id": "sec-integration-by-parts-2-17",
  "level": "2",
  "url": "sec-integration-by-parts.html#sec-integration-by-parts-2-17",
  "type": "Example",
  "number": "6.4.4",
  "title": "Evaluating <span class=\"process-math\">\\(\\int x^2 \\sin{x} \\,dx\\)<\/span>.",
  "body": " Evaluating   Consider the integral,     We can choose and , because the derivative of is which is simpler than itself, and because can be easily integrated to . Then,         Then,   The new integral is less complicated because the power of decreased by one (from 2 to 1). Then, we can use IBP again for ,         Then,    "
},
{
  "id": "sec-integration-by-parts-2-18",
  "level": "2",
  "url": "sec-integration-by-parts.html#sec-integration-by-parts-2-18",
  "type": "Example",
  "number": "6.4.5",
  "title": "Evaluating <span class=\"process-math\">\\(\\int x^2 e^x \\,dx\\)<\/span>.",
  "body": " Evaluating   Consider the integral,     Choose and , because the derivative of is which is simpler than itself, and because can be easily integrated to itself. Then,         Then,   The new integral is simpler because the power of decreased by one. Using IBP again,           "
},
{
  "id": "sec-integration-by-parts-3",
  "level": "2",
  "url": "sec-integration-by-parts.html#sec-integration-by-parts-3",
  "type": "Checkpoint",
  "number": "6.4.6",
  "title": "Evaluating <span class=\"process-math\">\\(\\int x^3 e^x \\,dx\\)<\/span>.",
  "body": " Evaluating  Evaluate the integral .   "
},
{
  "id": "subsec-ibp-ln-3",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-ln-3",
  "type": "Example",
  "number": "6.4.7",
  "title": "Evaluating <span class=\"process-math\">\\(\\int \\ln{x} \\,dx\\)<\/span>.",
  "body": " Evaluating   Consider the integral,     At first, does not look like a product of functions, however, we can think of it as , and choose and . The derivative of is which is simpler than itself, and 1 can be easily integrated to . Then,         Then,    "
},
{
  "id": "subsec-ibp-cyclic-2",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-cyclic-2",
  "type": "Example",
  "number": "6.4.8",
  "title": "Evaluating <span class=\"process-math\">\\(\\int e^x \\sin x \\,dx\\)<\/span>.",
  "body": " Evaluating   Consider the integral,     Here, it turns out that we could choose either or to be or , and both would work. This is because the derivative and integral of is , and the derivative and integral of is or , so both of them are basically the same in terms of complexity. In this case, we will choose and . Then,         Then,   The second integral is similar to the first except that it has instead of . To evaluate it, we use IBP again,          The resulting integral is actually the same as the original integral we started with. This means that, like an equation, we can add the integral to both sides, and collect them together as like terms on the left-hand side,   Then, to solve for the desired integral, divide both sides by 2, and also finally add the constant of integration,    "
},
{
  "id": "subsec-ibp-cyclic-3",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-cyclic-3",
  "type": "Checkpoint",
  "number": "6.4.9",
  "title": "Evaluating <span class=\"process-math\">\\(\\int e^x \\cos x \\,dx\\)<\/span>.",
  "body": " Evaluating  Evaluate the integral .   "
},
{
  "id": "subsec-ibp-definite-4",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-definite-4",
  "type": "Example",
  "number": "6.4.10",
  "title": "Evaluating <span class=\"process-math\">\\(\\int_0^2 3x e^x \\,dx\\)<\/span>.",
  "body": " Evaluating   Evaluate the integral,            Then,    "
},
{
  "id": "subsec-ibp-summary-5",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-summary-5",
  "type": "Remark",
  "number": "6.4.11",
  "title": "",
  "body": " Note that integration by parts is a place-holder formula , in that the variables and are just place-holders for the functions we choose, and they are not new variables that we are substituting into the integral.  In contrast, recall that with substitution, the integral is transformed from to an integral in another variable .  With integration by parts, we do not substitute or , but instead just use the formula as a pattern to replace the given integral with an equivalent integral, still in terms of . In this way, you don't have to worry about changing the limits of integration for definite integrals.  "
},
{
  "id": "subsec-ibp-summary-6",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-summary-6",
  "type": "Remark",
  "number": "6.4.12",
  "title": "",
  "body": " With integration by parts, you don't have to worry about the constant of integration until the final answer. That is, when integrating to get , we do not need to include a constant of integration , because there will be a constant introduced by the remaining integral . So, it is easiest to just wait until the very end to include .  "
},
{
  "id": "subsec-ibp-examples-2",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-2",
  "type": "Exercise Group",
  "number": "6.4.1",
  "title": "One-Step IBP (<span class=\"process-math\">\\(\\star\\)<\/span>).",
  "body": " One-Step IBP ( )  Evaluate each integral.                   "
},
{
  "id": "subsec-ibp-examples-3",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-3",
  "type": "Exercise Group",
  "number": "6.4.2",
  "title": "Definite Integrals, One Step (<span class=\"process-math\">\\(\\star\\)<\/span>).",
  "body": " Definite Integrals, One Step ( )  Evaluate each definite integral.          "
},
{
  "id": "subsec-ibp-examples-4",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-4",
  "type": "Exercise Group",
  "number": "6.4.3",
  "title": "One-Step Variants (<span class=\"process-math\">\\(\\star\\)<\/span>).",
  "body": " One-Step Variants ( )  Evaluate each integral.              "
},
{
  "id": "subsec-ibp-examples-5",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-5",
  "type": "Exercise Group",
  "number": "6.4.4",
  "title": "Cyclic Examples with Exponential and Trigonometric Functions (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " Cyclic Examples with Exponential and Trigonometric Functions ( )  Evaluate each integral.             "
},
{
  "id": "subsec-ibp-examples-6",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-6",
  "type": "Exercise Group",
  "number": "6.4.5",
  "title": "Two-Step IBP (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " Two-Step IBP ( )  Evaluate each integral.           "
},
{
  "id": "subsec-ibp-examples-7",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-7",
  "type": "Exercise Group",
  "number": "6.4.6",
  "title": "Definite Integrals, One Step (<span class=\"process-math\">\\(\\star\\)<\/span>).",
  "body": " Definite Integrals, One Step ( )  Evaluate each definite integral.        "
},
{
  "id": "subsec-ibp-examples-8",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-8",
  "type": "Exercise Group",
  "number": "6.4.7",
  "title": "Definite Integrals, Two Steps (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " Definite Integrals, Two Steps ( )  Evaluate each definite integral.      "
},
{
  "id": "subsec-ibp-examples-9",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-9",
  "type": "Exercise Group",
  "number": "6.4.8",
  "title": "Special Techniques (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " Special Techniques ( )  Evaluate each integral.  we can integrate  we can integrate   we can integrate  we can integrate  similar to  similar to  similar to   "
},
{
  "id": "subsec-ibp-examples-10",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-10",
  "type": "Exercise Group",
  "number": "6.4.9",
  "title": "Inverse Trigonometric Functions (<span class=\"process-math\">\\(\\star\\)<\/span>).",
  "body": " Inverse Trigonometric Functions ( )  Evaluate each integral.     we can differentiate , as    "
},
{
  "id": "subsec-ibp-examples-11",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-11",
  "type": "Exercise Group",
  "number": "6.4.10",
  "title": "Three or More Steps (<span class=\"process-math\">\\(\\star\\star\\star\\)<\/span>).",
  "body": " Three or More Steps ( )  Evaluate each integral.           "
},
{
  "id": "subsec-ibp-examples-12",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-12",
  "type": "Exercise Group",
  "number": "6.4.11",
  "title": "Definite Integrals (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " Definite Integrals ( )  Evaluate each definite integral.   Use first.     "
},
{
  "id": "subsec-ibp-examples-13",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-examples-13",
  "type": "Exercise Group",
  "number": "6.4.12",
  "title": "More Definite Integrals (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " More Definite Integrals ( )  Evaluate each definite integral.   (you might notice a shortcut: it is an odd function on a symmetric interval, so the integral is equal to 0)     ( is a constant.)   "
},
{
  "id": "subsec-ibp-advanced-3",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-advanced-3",
  "type": "Exercise Group",
  "number": "6.4.13",
  "title": "Substitution then IBP (<span class=\"process-math\">\\(\\star\\star\\star\\star\\)<\/span>).",
  "body": " Substitution then IBP ( )  Evaluate each integral.    let , leads to  let , leads to  let , leads to  let , leads to  let , leads to ; cyclic IBP  let , leads to  let , leads to  let , leads to  let , leads to  let , leads to ; cyclic IBP  let , leads to ; cyclic IBP  let , leads to  "
},
{
  "id": "subsec-ibp-advanced-4",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-advanced-4",
  "type": "Checkpoint",
  "number": "6.4.13",
  "title": "Evaluating <span class=\"process-math\">\\(\\int x^3\\cos(nx)\\,dx\\)<\/span>.",
  "body": " Evaluating  Evaluate , where is a constant, .   "
},
{
  "id": "subsec-ibp-advanced-5",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-advanced-5",
  "type": "Checkpoint",
  "number": "6.4.14",
  "title": "Particle Velocity.",
  "body": " Particle Velocity  A particle has velocity m\/s. Find the distance traveled from time 0 to time .  m  "
},
{
  "id": "subsec-ibp-advanced-6",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-advanced-6",
  "type": "Exercise Group",
  "number": "6.4.14",
  "title": "Definite Integrals.",
  "body": " Definite Integrals  Evaluate each definite integral.          "
},
{
  "id": "subsec-ibp-advanced-7",
  "level": "2",
  "url": "sec-integration-by-parts.html#subsec-ibp-advanced-7",
  "type": "Exercise Group",
  "number": "6.4.15",
  "title": "Special Tricks.",
  "body": " Special Tricks  Evaluate each integral.  split the integral as , then use integration by parts on the 2nd integral  let and  let and or  "
},
{
  "id": "sec-trigonometric-integrals",
  "level": "1",
  "url": "sec-trigonometric-integrals.html",
  "type": "Section",
  "number": "6.5",
  "title": "Trigonometric Integrals",
  "body": " Trigonometric Integrals   In this section, we continue analyzing integrals involving trigonometric functions. In particular, we consider integrals involving higher powers and products of trigonometric functions.    Powers of Sine and Cosine  Recall that previously, we did the integrals and using the power-reducing identities ( Integrals of Sine and Cosine Squared ). We can also evaluate integrals of higher powers of sine and cosine. We'll start with the next higher power, and , and then move on to the 4th power, and then the general case.   3rd Power of Cosine  Evaluate .   It turns out that we would like to make a substitution, either , or . Notice that if we separate out one factor of to the right,   Then, we can use the Pythagorean identity to rewrite in terms of sine,   Then, the substitution gives , and is perfectly there on the right side to be replaced by . Then,   Therefore,      3rd Power of Sine  Evaluate .   We can use a technique similar to . Separate out one factor of , and then use the Pythagorean identity to rewrite in terms of cosine,   Then, , gives,   Therefore,      4th Power of Cosine  Evaluate .   Here, the previous technique will not work, because if we separate out one factor of , then we will be left with , which we can't convert to sine using .  Instead, it turns out the correct technique is similar to the one we used to evaluate , which is to use the power-reducing identity. First, we can write as , and then use the power-reducing identity for ,   Here, we have reduced the power of cosine from 4 to 2, but we still have , so we can apply the power-reducing identity again to ,   Then, putting it all together,   Therefore,      Interestingly, the integral results in a non-trigonometric term (the linear term ), which had not occurred in the previous cases. This tends to happen when integrating even powers.    4th Power of Sine  Evaluate .   Using the same method as , we can write as , and then use the power-reducing identity for ,   Then, putting it all together,   Therefore,     In general,   For odd powers, separate out one factor, and then convert the remaining to the opposite trigonometric function, using or , and then use substitution.  For even powers, use the power-reducing identities to reduce the power to the first power, and then integrate.    5th Power of Cosine   Separate out one factor of , and then use the Pythagorean identity to rewrite in terms of sine, and then use substitution .      Integral of Products of Powers of Sine and Cosine  More generally, we can consider integrals with a power of sine multiplied with a power of cosine, of the form,   where are whole numbers. Sometimes, these are called trigonometric integrals , even though they are not the only type of integrals involving trig functions.   Integral of  Evaluate .   We can use substitution, because the derivative of is which is also there. Then,       Integral of  Evaluate .   It turns out that again, we can use substitution, because if we separate out one factor of to prepare for substitution,   Then, we can use the Pythagorean identity to rewrite in terms of cosine,   Now, the substitution will work, because the derivative of is , and is perfectly there on the right side to be replaced by (just account for the negative sign). Then,   Then,     In general, if at least one of the exponents on sine or cosine is odd , then we can use this technique, where we separate out one factor of the odd power, and then convert the remaining to the other trig function, using the Pythagorean identity, and then use -substitution.   Integral of  Evaluate .   Here, both powers are odd, so we can separate out either power. If we separate out one factor of , then we can use the Pythagorean identity to rewrite in terms of sine,   Then,   Then,   Alternatively, if we separate out one factor of , then convert the rest to cosine using ,   Then,   Then,   In fact, both of the final answers are correct, and equivalent, even though they look different.   In fact, they only differ by a constant. Here is a graph of each: Graph of and . Notice that they are the same graph, just with a vertical shift.    In general,   If both exponents are odd, then you can separate off either sine or cosine.  With each choice, you will get answers which look different, but they will be equivalent.   If both powers are even, then the integral is more complicated, because we can't use the previous technique. Instead, we can use the power-reducing identities to reduce the powers, and then integrate.   Integral of  Evaluate .   Here, both exponents are even, so we use the power-reducing identities,   There is still , which is to the 2nd power, so apply the power-reducing identity again,      Integral of  Evaluate .   Both exponents are even again. This requires more tedious algebra than the previous example, because the exponents are bigger. But once again, we start with the power-reducing identities,   We want to simplify as much as possible before integrating,   The integral of 1 and are straightforward, but the integral of and are more complicated,   Then, for , the power is even, so use the power-reducing identity again,   For , the power is odd, so use substitution, by separating out one factor of , and using the Pythagorean identity to rewrite in terms of sine,   Finally, putting it all together,     In summary,   Trigonometric Integrals   To evaluate an integral of the form , where are non-negative integers:    If or are odd (or both), then separate out one factor of the odd power, and convert the remaining to the other trigonometric function, using,    Odd power of sine factor out and use .  Odd power of cosine factor out and use .     If and are both even, then reduce the powers of the trigonometric functions to the first power, using the power-reducing identities,        Evaluate Each Integral  Evaluate each integral.  Factor out , use , and let .  Factor out , use , and let .  Factor out , use , expand , and let .  Both exponents are even, so use power-reducing identities.  Factor out , use , and let .  Factor out , use , and let .     Powers of Tangents and Secants  We can also consider integrals of powers of tangent and secant. The techniques are similar to those for sine and cosine, but there are some differences, because the identities and derivatives are different. First, recall the derivatives of tangent and secant,   And the Pythagorean identities for tangent and secant,     Integral of Products of Powers of Tangents and Secants  Integrals of a product of powers of tangent and secant can be evaluated using similar methods as for products of sine and cosine. In other words, of the form,   Intuitively, this is because tangent and secant are related by the Pythagorean identity,   This allows us to convert between even powers of tangent and secant (just like we converted between sine and cosine).  Also, the derivatives of tangent and secant are related to each other,   This means that often we can use substitution, with being either tangent or secant, depending on the situation (just like we used substitution with sine and cosine).   Tangent Squared  We already did and , so let's consider .   This integral requires a bit of a trick. We can use the identity ,   Then, recall that , so,   Thus,      Integral of  Evaluate .   The derivative of is , so will work well. Then, . Then,      Integral of  Evaluate .   Again, the derivative of is , so will work well. Then, . Then,     In general, if we have an expression involving tangent, and also , then we can use substitution with .   Tangent Cubed  Evaluate .   This also requires a bit of a trick. Separate out , to leave , and use the Pythagorean identity to rewrite in terms of secant,   For the 1st integral, we can use substitution with , so that . For the 2nd integral, this is the Integral of Tangent , which is . Then,   Putting it all together,      Tangent 4th Power  Evaluate .   This is similar to , because we can convert to , and then use the Pythagorean identity to rewrite one of the in terms of secant,   Then, splitting the integral,   For the 2nd integral, we have seen it before, as this is the Integral of Tangent Squared,   For the first integral, we can use substitution, with , so that . Then,   Therefore,      Integral of  Evaluate .   First, like before, separate off , because it is the derivative of , to prepare for the substitution ,   Then, convert the remaining to tangent, using the identity ,   Then,   Then,     This technique of separating off works as long as the exponent of secant is even. Otherwise, if the exponent is odd, we'll need a different technique.   Integral of  Evaluate .   Here, the exponent of secant is 3 which is odd, so we can't use the previous technique. This is because if we separate off , then,   We'll have only 1 factor of secant left, which we can't convert to tangent using the Pythagorean identity.  However, it turns out we can use the derivative of instead, which is . Separate off to prepare for the substitution ,   Then,   Then,      Integral of  Evaluate .   The exponent of secant is 3 which is odd, so like the previous example, we can separate off ,   Then, convert the remaining to secant, using the identity ,   Then,   Then,     In general, this technique of separating out will work when the exponent of secant is odd, and the exponent of tangent is also odd.   Integral of   Split off , and convert the rest to secant using .    Lastly, the final situation is if the power of secant is odd, and the power of tangent is even. In this case, the integral is more complicated, and there isn't a simple one-step substitution. You may not ever encounter an integral like this.  In summary,   Integrals of Products of Tangents and Secants   For an integral of the form :   If is even (and is anything), then split off , convert the remaining even power to tangent using , and let .  If is odd and is odd, then split off , convert the remaining even power to secant using , and let .  If is odd and is even, then the integral is more complicated, and there isn't a simple one-step substitution.      Evaluate Each Integral  Evaluate each integral.  Split off , and let .  Split off , and let .  Split off , and expand .  Split off , and let .  Split off , and convert the rest to secant using .  Split off , and let .  Let , so .     Examples   ★ Evaluate Each Integral  Evaluate each integral.   Separate off , let .   Separate off , let .  Separate off , let .  Separate off , let .   Separate off , let .  Separate off , let .        ★ Definite Integrals  Evaluate each definite integral.       Separate off , let .  Separate off , let .    ★★ Evaluate Each Integral  Evaluate each integral.               Rewrite as , then use .    ★★ Powers and Products of Sine and Cosine (Definite Integrals)  Evaluate each integral.            ★★ Powers and Products of Tangent and Secant  Evaluate each integral.                       ★★ Powers and Products of Cotangent and Cosecant  Evaluate each integral.  Use to convert the even power of cotangent to cosecant, and then use .            ★★ Tangent, Secant, Cotangent, and Cosecant (Definite Integrals)  Evaluate each integral.  Separate off , let .   Separate off , let .  Separate off , let .  Rewrite (tricky!), then use , so .   Split the integral as , or factor to get , then use .  Write , then split into .  Write , then use .  The integrand is even, so can use , and write .  Use , so , and rewrite as .    ★★★ Mixed and Challenging Integrals  Evaluate each integral.  , leads to .  Use , leads to .  Use , leads to .  Rewrite in terms of sine and cosine, leads to .  Rewrite in terms of sine and cosine, leads to , then use .  Rewrite as , then use .  Use , then let , leads to .    using two methods:   Using .  Using .    (a) . (b) , so write the integrand as .  (a) . (b) .   Use , so .  Rewrite in terms of sine and cosine, leads to , then use .  Rewrite as , then let .  Rewrite in terms of sine and cosine, leads to .  Split the fraction, leads to , then use the power-reducing formula for , and use for the 2nd integral.  Use , then write .    ★★★★ Advanced (Multiple Techniques Required)  Evaluate each integral.  Use the formula , then evaluate from to .  Use , so , then apply the formula for .  Use , then integrate , using integration by parts on the second integral.  First rewrite and integrate using , then use integration by parts with and .     More Complicated Tangent and Secant Integrals  For an integral of tangent and secant, the integral is more complicated if the exponent of secant is odd, and the exponent of tangent is even. In this case, there isn't a straightforward technique, and we have to be creative.   Secant 3rd Power  Evaluate .   This is more tricky. It turns out that one way is to use integration by parts, by splitting the integral as,   Then,        Then,   The original integral appears on the right-hand side. Then, combining them together,   For , recall that . Putting it all together,   A very interesting pattern is that on the right-hand side, there is which is the derivative of , and which is the integral of . In other words, the integral of secant cubed is the average of the derivative and integral of secant.     Integral of  Evaluate .   Here, the exponent of secant is 1 which is odd, and the exponent of tangent is 2 which is even, so this is the case where there isn't a straightforward technique. It turns out, the trick is to use the identity ,   These are 2 integrals which we have seen before,   For , we can use integration by parts, by splitting the integral as .  For , this is a standard integral, and recall that .       Evaluate Each Integral  Evaluate each integral.  Use , and split the integral as . Use integration by parts on , which will result in the same integral appearing . Solve for the integral.  Use , expand, and integrate using the reduction formulas for odd powers of secant.    "
},
{
  "id": "subsec-powers-sin-cos-3",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-powers-sin-cos-3",
  "type": "Example",
  "number": "6.5.1",
  "title": "3rd Power of Cosine.",
  "body": " 3rd Power of Cosine  Evaluate .   It turns out that we would like to make a substitution, either , or . Notice that if we separate out one factor of to the right,   Then, we can use the Pythagorean identity to rewrite in terms of sine,   Then, the substitution gives , and is perfectly there on the right side to be replaced by . Then,   Therefore,    "
},
{
  "id": "subsec-powers-sin-cos-4",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-powers-sin-cos-4",
  "type": "Example",
  "number": "6.5.2",
  "title": "3rd Power of Sine.",
  "body": " 3rd Power of Sine  Evaluate .   We can use a technique similar to . Separate out one factor of , and then use the Pythagorean identity to rewrite in terms of cosine,   Then, , gives,   Therefore,    "
},
{
  "id": "subsec-powers-sin-cos-5",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-powers-sin-cos-5",
  "type": "Example",
  "number": "6.5.3",
  "title": "4th Power of Cosine.",
  "body": " 4th Power of Cosine  Evaluate .   Here, the previous technique will not work, because if we separate out one factor of , then we will be left with , which we can't convert to sine using .  Instead, it turns out the correct technique is similar to the one we used to evaluate , which is to use the power-reducing identity. First, we can write as , and then use the power-reducing identity for ,   Here, we have reduced the power of cosine from 4 to 2, but we still have , so we can apply the power-reducing identity again to ,   Then, putting it all together,   Therefore,    "
},
{
  "id": "subsec-powers-sin-cos-6",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-powers-sin-cos-6",
  "type": "Remark",
  "number": "6.5.4",
  "title": "",
  "body": " Interestingly, the integral results in a non-trigonometric term (the linear term ), which had not occurred in the previous cases. This tends to happen when integrating even powers.  "
},
{
  "id": "subsec-powers-sin-cos-7",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-powers-sin-cos-7",
  "type": "Example",
  "number": "6.5.5",
  "title": "4th Power of Sine.",
  "body": " 4th Power of Sine  Evaluate .   Using the same method as , we can write as , and then use the power-reducing identity for ,   Then, putting it all together,   Therefore,    "
},
{
  "id": "subsec-powers-sin-cos-10",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-powers-sin-cos-10",
  "type": "Checkpoint",
  "number": "6.5.6",
  "title": "5th Power of Cosine.",
  "body": " 5th Power of Cosine   Separate out one factor of , and then use the Pythagorean identity to rewrite in terms of sine, and then use substitution .   "
},
{
  "id": "subsec-products-sin-cos-4",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-sin-cos-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometric integrals "
},
{
  "id": "subsec-products-sin-cos-5",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-sin-cos-5",
  "type": "Example",
  "number": "6.5.7",
  "title": "Integral of <span class=\"process-math\">\\(\\sin^4{x} \\cos{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   We can use substitution, because the derivative of is which is also there. Then,     "
},
{
  "id": "subsec-products-sin-cos-6",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-sin-cos-6",
  "type": "Example",
  "number": "6.5.8",
  "title": "Integral of <span class=\"process-math\">\\(\\sin^3{x} \\cos^2{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   It turns out that again, we can use substitution, because if we separate out one factor of to prepare for substitution,   Then, we can use the Pythagorean identity to rewrite in terms of cosine,   Now, the substitution will work, because the derivative of is , and is perfectly there on the right side to be replaced by (just account for the negative sign). Then,   Then,    "
},
{
  "id": "subsec-products-sin-cos-8",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-sin-cos-8",
  "type": "Example",
  "number": "6.5.9",
  "title": "Integral of <span class=\"process-math\">\\(\\sin^3{x} \\cos^3{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   Here, both powers are odd, so we can separate out either power. If we separate out one factor of , then we can use the Pythagorean identity to rewrite in terms of sine,   Then,   Then,   Alternatively, if we separate out one factor of , then convert the rest to cosine using ,   Then,   Then,   In fact, both of the final answers are correct, and equivalent, even though they look different.   In fact, they only differ by a constant. Here is a graph of each: Graph of and . Notice that they are the same graph, just with a vertical shift.   "
},
{
  "id": "subsec-products-sin-cos-12",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-sin-cos-12",
  "type": "Example",
  "number": "6.5.10",
  "title": "Integral of <span class=\"process-math\">\\(\\sin^2{x} \\cos^2{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   Here, both exponents are even, so we use the power-reducing identities,   There is still , which is to the 2nd power, so apply the power-reducing identity again,    "
},
{
  "id": "subsec-products-sin-cos-13",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-sin-cos-13",
  "type": "Example",
  "number": "6.5.11",
  "title": "Integral of <span class=\"process-math\">\\(\\sin^2{x} \\cos^4{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   Both exponents are even again. This requires more tedious algebra than the previous example, because the exponents are bigger. But once again, we start with the power-reducing identities,   We want to simplify as much as possible before integrating,   The integral of 1 and are straightforward, but the integral of and are more complicated,   Then, for , the power is even, so use the power-reducing identity again,   For , the power is odd, so use substitution, by separating out one factor of , and using the Pythagorean identity to rewrite in terms of sine,   Finally, putting it all together,    "
},
{
  "id": "thm-trig-integrals-sin-cos",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#thm-trig-integrals-sin-cos",
  "type": "Theorem",
  "number": "6.5.12",
  "title": "Trigonometric Integrals.",
  "body": " Trigonometric Integrals   To evaluate an integral of the form , where are non-negative integers:    If or are odd (or both), then separate out one factor of the odd power, and convert the remaining to the other trigonometric function, using,    Odd power of sine factor out and use .  Odd power of cosine factor out and use .     If and are both even, then reduce the powers of the trigonometric functions to the first power, using the power-reducing identities,      "
},
{
  "id": "subsec-products-sin-cos-16",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-sin-cos-16",
  "type": "Exercise Group",
  "number": "6.5.1",
  "title": "Evaluate Each Integral.",
  "body": " Evaluate Each Integral  Evaluate each integral.  Factor out , use , and let .  Factor out , use , and let .  Factor out , use , expand , and let .  Both exponents are even, so use power-reducing identities.  Factor out , use , and let .  Factor out , use , and let .  "
},
{
  "id": "subsec-products-tan-sec-10",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-tan-sec-10",
  "type": "Example",
  "number": "6.5.13",
  "title": "Tangent Squared.",
  "body": " Tangent Squared  We already did and , so let's consider .   This integral requires a bit of a trick. We can use the identity ,   Then, recall that , so,   Thus,    "
},
{
  "id": "subsec-products-tan-sec-11",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-tan-sec-11",
  "type": "Example",
  "number": "6.5.14",
  "title": "Integral of <span class=\"process-math\">\\(\\tan{x} \\sec^2{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   The derivative of is , so will work well. Then, . Then,    "
},
{
  "id": "subsec-products-tan-sec-12",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-tan-sec-12",
  "type": "Example",
  "number": "6.5.15",
  "title": "Integral of <span class=\"process-math\">\\(\\tan^3{x} \\sec^2{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   Again, the derivative of is , so will work well. Then, . Then,    "
},
{
  "id": "subsec-products-tan-sec-14",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-tan-sec-14",
  "type": "Example",
  "number": "6.5.16",
  "title": "Tangent Cubed.",
  "body": " Tangent Cubed  Evaluate .   This also requires a bit of a trick. Separate out , to leave , and use the Pythagorean identity to rewrite in terms of secant,   For the 1st integral, we can use substitution with , so that . For the 2nd integral, this is the Integral of Tangent , which is . Then,   Putting it all together,    "
},
{
  "id": "subsec-products-tan-sec-15",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-tan-sec-15",
  "type": "Example",
  "number": "6.5.17",
  "title": "Tangent 4th Power.",
  "body": " Tangent 4th Power  Evaluate .   This is similar to , because we can convert to , and then use the Pythagorean identity to rewrite one of the in terms of secant,   Then, splitting the integral,   For the 2nd integral, we have seen it before, as this is the Integral of Tangent Squared,   For the first integral, we can use substitution, with , so that . Then,   Therefore,    "
},
{
  "id": "subsec-products-tan-sec-16",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-tan-sec-16",
  "type": "Example",
  "number": "6.5.18",
  "title": "Integral of <span class=\"process-math\">\\(\\tan^3{x} \\sec^4{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   First, like before, separate off , because it is the derivative of , to prepare for the substitution ,   Then, convert the remaining to tangent, using the identity ,   Then,   Then,    "
},
{
  "id": "subsec-products-tan-sec-18",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-tan-sec-18",
  "type": "Example",
  "number": "6.5.19",
  "title": "Integral of <span class=\"process-math\">\\(\\tan{x} \\sec^3{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   Here, the exponent of secant is 3 which is odd, so we can't use the previous technique. This is because if we separate off , then,   We'll have only 1 factor of secant left, which we can't convert to tangent using the Pythagorean identity.  However, it turns out we can use the derivative of instead, which is . Separate off to prepare for the substitution ,   Then,   Then,    "
},
{
  "id": "subsec-products-tan-sec-19",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-tan-sec-19",
  "type": "Example",
  "number": "6.5.20",
  "title": "Integral of <span class=\"process-math\">\\(\\tan^3{x} \\sec^3{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   The exponent of secant is 3 which is odd, so like the previous example, we can separate off ,   Then, convert the remaining to secant, using the identity ,   Then,   Then,    "
},
{
  "id": "subsec-products-tan-sec-21",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-tan-sec-21",
  "type": "Checkpoint",
  "number": "6.5.21",
  "title": "Integral of <span class=\"process-math\">\\(\\tan^5{x} \\sec^5{x}\\)<\/span>.",
  "body": " Integral of   Split off , and convert the rest to secant using .   "
},
{
  "id": "thm-trig-integrals-tan-sec",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#thm-trig-integrals-tan-sec",
  "type": "Theorem",
  "number": "6.5.22",
  "title": "Integrals of Products of Tangents and Secants.",
  "body": " Integrals of Products of Tangents and Secants   For an integral of the form :   If is even (and is anything), then split off , convert the remaining even power to tangent using , and let .  If is odd and is odd, then split off , convert the remaining even power to secant using , and let .  If is odd and is even, then the integral is more complicated, and there isn't a simple one-step substitution.    "
},
{
  "id": "subsec-products-tan-sec-25",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-products-tan-sec-25",
  "type": "Exercise Group",
  "number": "6.5.2",
  "title": "Evaluate Each Integral.",
  "body": " Evaluate Each Integral  Evaluate each integral.  Split off , and let .  Split off , and let .  Split off , and expand .  Split off , and let .  Split off , and convert the rest to secant using .  Split off , and let .  Let , so .  "
},
{
  "id": "subsec-trig-integrals-examples-2-2",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-examples-2-2",
  "type": "Exercise Group",
  "number": "6.5.3",
  "title": "★ Evaluate Each Integral.",
  "body": " ★ Evaluate Each Integral  Evaluate each integral.   Separate off , let .   Separate off , let .  Separate off , let .  Separate off , let .   Separate off , let .  Separate off , let .      "
},
{
  "id": "subsec-trig-integrals-examples-2-3",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-examples-2-3",
  "type": "Exercise Group",
  "number": "6.5.4",
  "title": "★ Definite Integrals.",
  "body": " ★ Definite Integrals  Evaluate each definite integral.       Separate off , let .  Separate off , let .  "
},
{
  "id": "subsec-trig-integrals-examples-2-4",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-examples-2-4",
  "type": "Exercise Group",
  "number": "6.5.5",
  "title": "★★ Evaluate Each Integral.",
  "body": " ★★ Evaluate Each Integral  Evaluate each integral.               Rewrite as , then use .  "
},
{
  "id": "subsec-trig-integrals-examples-2-5",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-examples-2-5",
  "type": "Exercise Group",
  "number": "6.5.6",
  "title": "★★ Powers and Products of Sine and Cosine (Definite Integrals).",
  "body": " ★★ Powers and Products of Sine and Cosine (Definite Integrals)  Evaluate each integral.          "
},
{
  "id": "subsec-trig-integrals-examples-2-6",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-examples-2-6",
  "type": "Exercise Group",
  "number": "6.5.7",
  "title": "★★ Powers and Products of Tangent and Secant.",
  "body": " ★★ Powers and Products of Tangent and Secant  Evaluate each integral.                     "
},
{
  "id": "subsec-trig-integrals-examples-2-7",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-examples-2-7",
  "type": "Exercise Group",
  "number": "6.5.8",
  "title": "★★ Powers and Products of Cotangent and Cosecant.",
  "body": " ★★ Powers and Products of Cotangent and Cosecant  Evaluate each integral.  Use to convert the even power of cotangent to cosecant, and then use .          "
},
{
  "id": "subsec-trig-integrals-examples-2-8",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-examples-2-8",
  "type": "Exercise Group",
  "number": "6.5.9",
  "title": "★★ Tangent, Secant, Cotangent, and Cosecant (Definite Integrals).",
  "body": " ★★ Tangent, Secant, Cotangent, and Cosecant (Definite Integrals)  Evaluate each integral.  Separate off , let .   Separate off , let .  Separate off , let .  Rewrite (tricky!), then use , so .   Split the integral as , or factor to get , then use .  Write , then split into .  Write , then use .  The integrand is even, so can use , and write .  Use , so , and rewrite as .  "
},
{
  "id": "subsec-trig-integrals-examples-2-9",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-examples-2-9",
  "type": "Exercise Group",
  "number": "6.5.10",
  "title": "★★★ Mixed and Challenging Integrals.",
  "body": " ★★★ Mixed and Challenging Integrals  Evaluate each integral.  , leads to .  Use , leads to .  Use , leads to .  Rewrite in terms of sine and cosine, leads to .  Rewrite in terms of sine and cosine, leads to , then use .  Rewrite as , then use .  Use , then let , leads to .    using two methods:   Using .  Using .    (a) . (b) , so write the integrand as .  (a) . (b) .   Use , so .  Rewrite in terms of sine and cosine, leads to , then use .  Rewrite as , then let .  Rewrite in terms of sine and cosine, leads to .  Split the fraction, leads to , then use the power-reducing formula for , and use for the 2nd integral.  Use , then write .  "
},
{
  "id": "subsec-trig-integrals-examples-2-10",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-examples-2-10",
  "type": "Exercise Group",
  "number": "6.5.11",
  "title": "★★★★ Advanced (Multiple Techniques Required).",
  "body": " ★★★★ Advanced (Multiple Techniques Required)  Evaluate each integral.  Use the formula , then evaluate from to .  Use , so , then apply the formula for .  Use , then integrate , using integration by parts on the second integral.  First rewrite and integrate using , then use integration by parts with and .  "
},
{
  "id": "subsec-trig-integrals-advanced-3",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-advanced-3",
  "type": "Example",
  "number": "6.5.23",
  "title": "Secant 3rd Power.",
  "body": " Secant 3rd Power  Evaluate .   This is more tricky. It turns out that one way is to use integration by parts, by splitting the integral as,   Then,        Then,   The original integral appears on the right-hand side. Then, combining them together,   For , recall that . Putting it all together,   A very interesting pattern is that on the right-hand side, there is which is the derivative of , and which is the integral of . In other words, the integral of secant cubed is the average of the derivative and integral of secant.   "
},
{
  "id": "subsec-trig-integrals-advanced-4",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-advanced-4",
  "type": "Example",
  "number": "6.5.24",
  "title": "Integral of <span class=\"process-math\">\\(\\tan^2{x} \\sec{x}\\)<\/span>.",
  "body": " Integral of  Evaluate .   Here, the exponent of secant is 1 which is odd, and the exponent of tangent is 2 which is even, so this is the case where there isn't a straightforward technique. It turns out, the trick is to use the identity ,   These are 2 integrals which we have seen before,   For , we can use integration by parts, by splitting the integral as .  For , this is a standard integral, and recall that .     "
},
{
  "id": "subsec-trig-integrals-advanced-5",
  "level": "2",
  "url": "sec-trigonometric-integrals.html#subsec-trig-integrals-advanced-5",
  "type": "Exercise Group",
  "number": "6.5.12",
  "title": "Evaluate Each Integral.",
  "body": " Evaluate Each Integral  Evaluate each integral.  Use , and split the integral as . Use integration by parts on , which will result in the same integral appearing . Solve for the integral.  Use , expand, and integrate using the reduction formulas for odd powers of secant.  "
},
{
  "id": "sec-inverse-trig-sub",
  "level": "1",
  "url": "sec-inverse-trig-sub.html",
  "type": "Section",
  "number": "6.6",
  "title": "Inverse Trigonometric Substitution",
  "body": " Inverse Trigonometric Substitution   Inverse trigonometric substitution is a technique used to evaluate integrals that contain expressions of the form , , or . This method uses trigonometric identities to simplify these integrals.    Summary of Inverse Trigonometric Substitution                                    Identify the form of the substitution (sine, tangent, or secant).  Apply the substitution. Sketch a right triangle and label the sides, to represent the relationships between and .  Simplify the integral.  Integrate with the new variable , using previous strategies, typically a trigonometric integral.  Back-substitute using the inverse trigonometric function to substitute back for .      Examples   Example   Evaluate .    Let , so .               Example   Determine      Example   Determine      Example   Determine       Evaluate       Evaluate       Evaluate       Evaluate       Evaluate       Evaluate       Evaluate      "
},
{
  "id": "summary-of-inverse-trigonometric-substitution-2",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#summary-of-inverse-trigonometric-substitution-2",
  "type": "Table",
  "number": "6.6.1",
  "title": "",
  "body": "                            "
},
{
  "id": "examples-2",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-2",
  "type": "Checkpoint",
  "number": "6.6.2",
  "title": "Example.",
  "body": " Example   Evaluate .    Let , so .             "
},
{
  "id": "examples-3",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-3",
  "type": "Checkpoint",
  "number": "6.6.3",
  "title": "Example.",
  "body": " Example   Determine    "
},
{
  "id": "examples-4",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-4",
  "type": "Checkpoint",
  "number": "6.6.4",
  "title": "Example.",
  "body": " Example   Determine    "
},
{
  "id": "examples-5",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-5",
  "type": "Checkpoint",
  "number": "6.6.5",
  "title": "Example.",
  "body": " Example   Determine    "
},
{
  "id": "examples-6",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-6",
  "type": "Checkpoint",
  "number": "6.6.6",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-7",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-7",
  "type": "Checkpoint",
  "number": "6.6.7",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-8",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-8",
  "type": "Checkpoint",
  "number": "6.6.8",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-9",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-9",
  "type": "Checkpoint",
  "number": "6.6.9",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-10",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-10",
  "type": "Checkpoint",
  "number": "6.6.10",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-11",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-11",
  "type": "Checkpoint",
  "number": "6.6.11",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-12",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-12",
  "type": "Checkpoint",
  "number": "6.6.12",
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
},
{
  "id": "sec-line-integrals",
  "level": "1",
  "url": "sec-line-integrals.html",
  "type": "Section",
  "number": "10.1",
  "title": "Line Integrals",
  "body": " Line Integrals   Motivation for Line Integrals  Recall that we have considered various types of integrals.   The definite integral is an integral over an interval in  A double integral is an integral over a region in  A triple integral is an integral over a region in .   Intuitively,   The integral (where ) can be thought of as summing up small changes in , over the interval .  More generally, the integral can be thought of as summing up the products and a small change in , over .   Physically, this can be thought of as a quantity distributed along the -axis between and , with line density at each point , and finding the total quantity by summing up, over , the products,   In a similar way,   Double integrals can be thought of as summing up the products of function values and small pieces of area , over the region .  Triple integrals can be thought of as summing up the products of function values and small pieces of volume , over the region .   In fact, to be consistent with the double and triple integral notation, we could write as , where is the interval of integration .  All integrals share the theme of being a sum, over a domain, of a product of a function with a small piece of that domain. Here, we will consider a line integral , which is an integral over a curve.    Line Integrals  Consider a mass distributed along a curve in the plane or 3-space, with mass density at each point along the curve. For example, a wire with varying mass density along its length. We want to find the total mass of the wire. To do this, we can find the sum, along the curve, of the product of the function value and a small segment of the curve.  Consider a curve in the plane, with parametrization , , and let be the density at each point . Partition the interval into . This partition divides the curve into small arcs (or subarcs ). On each arc, choose a sample point and let denote the arc length of the th piece, where .     Then, the mass of the th piece of the wire is approximately,   Then, the total mass of the wire is approximated by the sum of all the pieces,   This is a Riemann sum of with respect to arc length, so as (and the maximum ), the sum intuitively approaches the exact mass of the wire.   Line Integral   The line integral of along is given by,     If is the linear mass density (mass per unit length), then,   More generally, a line integral can represent any quantity distributed along a curve, with density at each point. For example,   Total charge along a wire with charge density  Total amount of some substance distributed along a curve with density .    Sometimes, we use the more compact notations for a line integral,     Recall that a curve is smooth if it has a parametrization such that is continuous and for all in the interval of parametrization.    If is piecewise smooth, and is continuous on , then the line integral will exist, and will be equal to the sum of the line integrals along each smooth arc.   If is a closed curve, then the line integral is often written with a circle on the integral sign, as   This is just for emphasis, and does not change the meaning of the integral.  Line integrals are actually better described as curve integrals , because they are integrals over a curve, which is not necessarily a line.    Geometric Interpretation of Line Integral  The line integral also has a geometric interpretation: it is the area of the vertical, curtain-like surface between the curve in the -plane and the curve above it. Intuitively, imagine a vertical wall or fence standing on the curve , whose height at each point is . The line integral gives the total area of one side of this wall. It's like a lateral surface area.     Each thin vertical strip of the curtain has approximate area (height times width). Summing all the strips and taking the limit gives the line integral .  This works as long as , otherwise the line integral can be thought of as a signed area (similar to the regular definite integral).  Here is a Desmos link, where you can visualize the line integral as a curtain, for any function and any curve: Line Integral Visualization .    Evaluating Line Integrals  The line integral of along is not a typical integral, because the variable of integration is the arc length parameter . To evaluate it, we need to express in terms of a parametrization of the curve.  Let be a curve with parametrization , .  Recall that the arc length of the curve is given by,   In particular, the arc length element is related to by,   In a similar way, the line integral of over can be expressed in terms of the parameter .    Let the density function be continuous on . Then, the line integral of over is given by,     From this perspective, arc length is a special case of the more general line integral. If the density function is , the line integral reduces to the arc length of the curve. All of this works as long as is smooth, or at least piecewise smooth, and is continuous on .   In fact, the value of the line integral is independent of the parametrization of , and its orientation. In other words, even if we traverse the curve in the opposite direction, the line integral will have the same value. This is unlike the standard , where reversing the limits of integration changes the sign of the integral. This is because the line integral is a sum of products of function values and arc length elements, and the arc length element is always positive, regardless of the direction of traversal.    The line integral is a generalization of the regular definite integral. In the special case where is the -axis from to , it can be parameterized by for , so . Then, the integral becomes,   This is just the usual definite integral of from to (labeling as ).   When setting up a line integral, often the most difficult part is finding a parametrization of the curve .    Line Integrals in Space  Line integrals can be extended to curves in 3-space. Again, consider a mass distributed along a curve in 3-space (like a wire), with mass density at each point . Then, the total mass of the wire can be found by summing up, along the curve, the products of the density and small segments of the curve. Let have parametrization , . Then,   Similarly, to evaluate this integral,   The integrals in the plane and in space can both be written in the compact form with vector notation,     Examples   True or False  Determine whether each statement is true or false.  If a curve has a parametric description , where is the arc length, then True    Line Integrals Along Given Paths ( )  Evaluate the line integral along the given path .  , ,  , where is the quarter-circle ,  , ,  , where is the line segment ,  , where is the unit circle ,  , where is the line segment ,  , where is the curve ,  , where is the curve ,  , where is the curve ,  , ,  , ,  , where is the curve , , for  Find the line integral of along the curve ,    Line Integrals in 3D ( )  Evaluate each line integral along the given path .  , ,  , ,  , where is the helix ,  , where is the circle ,  , where is the line segment from to  , where is parametrized by ,  , where is the straight-line segment , , , from to  , where is the straight-line segment , , , from to  along the curve ,  along the curve ,  over the straight-line segment from to  over the curve ,  , where is parametrized by ,  , ,  , ,  , where is the curve ,  , where is the semicircle ,  , where is parametrized by ,    Two Paths for ( )  Evaluate , where is  the straight-line segment , , from to  the parabolic curve , , from to    Line Integrals on Various Curves ( )  Evaluate each line integral, where is the given curve.  , where is the line segment from the origin to  , is the right half of the circle  , is the line segment from to  , is the arc of the curve from to  , where is the circle of radius 4 centered at  , where is the portion of the ellipse in the first quadrant, oriented counterclockwise    Integrating Functions Over Curves ( )  Integrate over the given curve .  , ,  , from to  , in the first quadrant from to  , in the first quadrant from to  Find the line integral of along the curve ,    Two Paths for ( )  Evaluate , where is  the straight-line segment , , from to  , where is the line segment from to and is the line segment from to    Scalar Line Integrals ( )  Evaluate each scalar line integral.  , where is the line segment from to  , where is the line segment from to  , where is the curve ,  , where is the line segment from to followed by the line segment from to  , where is the line segment from to  , where is the line segment from to followed by the line segment from to  , is the line segment from to  , is the line segment from to    for Various Paths ( )  Evaluate for each path .  : line segment from to ,  : line segment from to ,  : counterclockwise around the circle from to ,  : counterclockwise around the circle from to ,    for Various Paths ( )  Evaluate for each path .  : line segments from to and to , ; ,  : line segments from to and to , ; ,  : counterclockwise around the triangle with vertices , , and , ; , ; ,  : counterclockwise around the square with vertices , , , and , ; , ; , ; ,    Triangular Path in 3D ( )   Evaluate for the path shown in the figure.      Use the three line segments , , ; , ; , .     Triangular Path in 3D, Part 2 ( )   Evaluate for the path shown in the figure.      Use the three line segments , , ; , ; , .     Piecewise Path ( )   Integrate over the path followed by from to , where , , and , .      Use .     Piecewise Path ( )   Integrate over the path followed by followed by from to , where , , , , and , .      Use .     Closed Curve with Parabola and Line ( )   Evaluate , where is given in the accompanying figure.      Add the integrals over the line segment and the parabola .      Advanced Examples   Integral Over a Diagonal Line ( )  Integrate over the path ,     Integral Over a Circle in the -Plane ( )  Integrate over the circle ,     Integral Over a Square Path ( )   Evaluate , where is given in the accompanying figure.      Split the square into its four sides and add the four scalar line integrals.     Technology-Assisted Line Integrals ( )  Evaluate each line integral with respect to arc length, using technology.  , where has parametric equations , , ,  , where has parametric equations , , ,  , where has parametric equations , , ,  , where is the curve with parametric equations , , ,     Applications: Mass, Center of Mass, and Area   Mass of a Spring  Find the total mass of a spring with density in the shape of the circular helix , .      Mass of a Helix Spring  Find the total mass of a spring in the shape of the helix , , with density     Mass of a Wire  Find the total mass of the wire with density whose shape is modeled by .  , ,  , ,  , , ( )  , , ( )  , ,    Mass and Center of Mass  Find the mass and center of mass of each wire.  A thin wire is bent into the shape of a semicircle , . If the linear density is a constant , find the mass and center of mass of the wire , center of mass  A thin wire has the shape of the first-quadrant part of the circle with center at the origin and radius . If the density function is , find the mass and center of mass of the wire , center of mass  Find the mass and center of mass of a wire in the shape of the helix , , , , if the density at any point is equal to the square of the distance from the origin , center of mass    Center of Mass Formulas   Write the formulas for the center of mass of a thin wire in the shape of a space curve if the wire has density function , , ,  Find the center of mass of a wire in the shape of the helix , , , , if the density is a constant    Painting a Circular Fence  The base of a circular fence with radius 10 m is given by , . The height of the fence at position is given by the function , so the height varies from 3 m to 5 m. Suppose that 1 L of paint covers 100 m . Sketch the fence and determine how much paint is required to paint both sides of the fence.  Total area m , so the paint required is L L.    Area of a Winding Wall  Find the area of one side of the winding wall standing perpendicularly on the curve , , and beneath the curve on the surface     Area of a Wall  Find the area of one side of the wall standing perpendicularly on the curve , , and beneath the curve on the surface     Mass of a Wire (1)  Find the mass of a wire that lies along the curve , , if the density is     Mass of a Wire (2)  Find the mass of a thin wire lying along the curve , , if the density is     Mass of a Wire (3)  Find the mass of the same wire if the density is     Center of Mass of a Wire   A wire of density lies along the curve , . Find its center of mass. Then sketch the curve and center of mass together.      Here , , , and .  The center of mass is .    Center of Mass with Variable Density  Find the center of mass of a thin wire lying along the curve , , if the density is  Since , we get .     Line Integral with and  Evaluate , where is the parabola from the origin to     "
},
{
  "id": "def-line-integral",
  "level": "2",
  "url": "sec-line-integrals.html#def-line-integral",
  "type": "Definition",
  "number": "10.1.1",
  "title": "Line Integral.",
  "body": " Line Integral   The line integral of along is given by,    "
},
{
  "id": "subsec-line-integrals-definition-15",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-definition-15",
  "type": "Remark",
  "number": "10.1.2",
  "title": "",
  "body": " Sometimes, we use the more compact notations for a line integral,   "
},
{
  "id": "subsec-line-integrals-definition-16",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-definition-16",
  "type": "Remark",
  "number": "10.1.3",
  "title": "",
  "body": " Recall that a curve is smooth if it has a parametrization such that is continuous and for all in the interval of parametrization.  "
},
{
  "id": "subsec-line-integrals-definition-17",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-definition-17",
  "type": "Remark",
  "number": "10.1.4",
  "title": "",
  "body": " If is piecewise smooth, and is continuous on , then the line integral will exist, and will be equal to the sum of the line integrals along each smooth arc.  "
},
{
  "id": "thm-evaluating-line-integrals",
  "level": "2",
  "url": "sec-line-integrals.html#thm-evaluating-line-integrals",
  "type": "Theorem",
  "number": "10.1.5",
  "title": "",
  "body": "  Let the density function be continuous on . Then, the line integral of over is given by,    "
},
{
  "id": "subsec-evaluating-line-integrals-11",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-evaluating-line-integrals-11",
  "type": "Remark",
  "number": "10.1.6",
  "title": "",
  "body": " In fact, the value of the line integral is independent of the parametrization of , and its orientation. In other words, even if we traverse the curve in the opposite direction, the line integral will have the same value. This is unlike the standard , where reversing the limits of integration changes the sign of the integral. This is because the line integral is a sum of products of function values and arc length elements, and the arc length element is always positive, regardless of the direction of traversal.  "
},
{
  "id": "subsec-evaluating-line-integrals-12",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-evaluating-line-integrals-12",
  "type": "Remark",
  "number": "10.1.7",
  "title": "",
  "body": " The line integral is a generalization of the regular definite integral. In the special case where is the -axis from to , it can be parameterized by for , so . Then, the integral becomes,   This is just the usual definite integral of from to (labeling as ).  "
},
{
  "id": "subsec-line-integrals-examples-2",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-2",
  "type": "Checkpoint",
  "number": "10.1.8",
  "title": "True or False.",
  "body": " True or False  Determine whether each statement is true or false.  If a curve has a parametric description , where is the arc length, then True  "
},
{
  "id": "subsec-line-integrals-examples-3",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-3",
  "type": "Exercise Group",
  "number": "10.1.1",
  "title": "Line Integrals Along Given Paths (<span class=\"process-math\">\\(\\star\\)<\/span>).",
  "body": " Line Integrals Along Given Paths ( )  Evaluate the line integral along the given path .  , ,  , where is the quarter-circle ,  , ,  , where is the line segment ,  , where is the unit circle ,  , where is the line segment ,  , where is the curve ,  , where is the curve ,  , where is the curve ,  , ,  , ,  , where is the curve , , for  Find the line integral of along the curve ,  "
},
{
  "id": "subsec-line-integrals-examples-4",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-4",
  "type": "Exercise Group",
  "number": "10.1.2",
  "title": "Line Integrals in 3D (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " Line Integrals in 3D ( )  Evaluate each line integral along the given path .  , ,  , ,  , where is the helix ,  , where is the circle ,  , where is the line segment from to  , where is parametrized by ,  , where is the straight-line segment , , , from to  , where is the straight-line segment , , , from to  along the curve ,  along the curve ,  over the straight-line segment from to  over the curve ,  , where is parametrized by ,  , ,  , ,  , where is the curve ,  , where is the semicircle ,  , where is parametrized by ,  "
},
{
  "id": "subsec-line-integrals-examples-5",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-5",
  "type": "Checkpoint",
  "number": "10.1.9",
  "title": "Two Paths for <span class=\"process-math\">\\(\\int_C x\\,ds\\)<\/span> (<span class=\"process-math\">\\(\\star\\)<\/span>).",
  "body": " Two Paths for ( )  Evaluate , where is  the straight-line segment , , from to  the parabolic curve , , from to  "
},
{
  "id": "subsec-line-integrals-examples-6",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-6",
  "type": "Exercise Group",
  "number": "10.1.3",
  "title": "Line Integrals on Various Curves (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " Line Integrals on Various Curves ( )  Evaluate each line integral, where is the given curve.  , where is the line segment from the origin to  , is the right half of the circle  , is the line segment from to  , is the arc of the curve from to  , where is the circle of radius 4 centered at  , where is the portion of the ellipse in the first quadrant, oriented counterclockwise  "
},
{
  "id": "subsec-line-integrals-examples-7",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-7",
  "type": "Exercise Group",
  "number": "10.1.4",
  "title": "Integrating Functions Over Curves (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " Integrating Functions Over Curves ( )  Integrate over the given curve .  , ,  , from to  , in the first quadrant from to  , in the first quadrant from to  Find the line integral of along the curve ,  "
},
{
  "id": "subsec-line-integrals-examples-8",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-8",
  "type": "Checkpoint",
  "number": "10.1.10",
  "title": "Two Paths for <span class=\"process-math\">\\(\\int_C \\sqrt{x+2y}\\,ds\\)<\/span> (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " Two Paths for ( )  Evaluate , where is  the straight-line segment , , from to  , where is the line segment from to and is the line segment from to  "
},
{
  "id": "subsec-line-integrals-examples-9",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-9",
  "type": "Exercise Group",
  "number": "10.1.5",
  "title": "Scalar Line Integrals (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " Scalar Line Integrals ( )  Evaluate each scalar line integral.  , where is the line segment from to  , where is the line segment from to  , where is the curve ,  , where is the line segment from to followed by the line segment from to  , where is the line segment from to  , where is the line segment from to followed by the line segment from to  , is the line segment from to  , is the line segment from to  "
},
{
  "id": "subsec-line-integrals-examples-10",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-10",
  "type": "Exercise Group",
  "number": "10.1.6",
  "title": "<span class=\"process-math\">\\(\\int_C (x^2+y^2)\\,ds\\)<\/span> for Various Paths (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " for Various Paths ( )  Evaluate for each path .  : line segment from to ,  : line segment from to ,  : counterclockwise around the circle from to ,  : counterclockwise around the circle from to ,  "
},
{
  "id": "subsec-line-integrals-examples-11",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-11",
  "type": "Exercise Group",
  "number": "10.1.7",
  "title": "<span class=\"process-math\">\\(\\int_C \\brac{2x+3\\sqrt{y}}\\,ds\\)<\/span> for Various Paths (<span class=\"process-math\">\\(\\star\\star\\)<\/span>).",
  "body": " for Various Paths ( )  Evaluate for each path .  : line segments from to and to , ; ,  : line segments from to and to , ; ,  : counterclockwise around the triangle with vertices , , and , ; , ; ,  : counterclockwise around the square with vertices , , , and , ; , ; , ; ,  "
},
{
  "id": "subsec-line-integrals-examples-12",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-12",
  "type": "Checkpoint",
  "number": "10.1.11",
  "title": "Triangular Path in 3D (<span class=\"process-math\">\\(\\star\\star\\star\\)<\/span>).",
  "body": " Triangular Path in 3D ( )   Evaluate for the path shown in the figure.      Use the three line segments , , ; , ; , .   "
},
{
  "id": "subsec-line-integrals-examples-13",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-13",
  "type": "Checkpoint",
  "number": "10.1.12",
  "title": "Triangular Path in 3D, Part 2 (<span class=\"process-math\">\\(\\star\\star\\star\\)<\/span>).",
  "body": " Triangular Path in 3D, Part 2 ( )   Evaluate for the path shown in the figure.      Use the three line segments , , ; , ; , .   "
},
{
  "id": "subsec-line-integrals-examples-14",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-14",
  "type": "Checkpoint",
  "number": "10.1.13",
  "title": "Piecewise Path <span class=\"process-math\">\\(C_1 \\cup C_2\\)<\/span> (<span class=\"process-math\">\\(\\star\\star\\star\\)<\/span>).",
  "body": " Piecewise Path ( )   Integrate over the path followed by from to , where , , and , .      Use .   "
},
{
  "id": "subsec-line-integrals-examples-15",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-15",
  "type": "Checkpoint",
  "number": "10.1.14",
  "title": "Piecewise Path <span class=\"process-math\">\\(C_1 \\cup C_2 \\cup C_3\\)<\/span> (<span class=\"process-math\">\\(\\star\\star\\star\\)<\/span>).",
  "body": " Piecewise Path ( )   Integrate over the path followed by followed by from to , where , , , , and , .      Use .   "
},
{
  "id": "subsec-line-integrals-examples-16",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-examples-16",
  "type": "Checkpoint",
  "number": "10.1.15",
  "title": "Closed Curve with Parabola and Line (<span class=\"process-math\">\\(\\star\\star\\star\\)<\/span>).",
  "body": " Closed Curve with Parabola and Line ( )   Evaluate , where is given in the accompanying figure.      Add the integrals over the line segment and the parabola .   "
},
{
  "id": "subsec-line-integrals-advanced-2",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-advanced-2",
  "type": "Checkpoint",
  "number": "10.1.16",
  "title": "Integral Over a Diagonal Line (<span class=\"process-math\">\\(\\star\\star\\star\\)<\/span>).",
  "body": " Integral Over a Diagonal Line ( )  Integrate over the path ,   "
},
{
  "id": "subsec-line-integrals-advanced-3",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-advanced-3",
  "type": "Checkpoint",
  "number": "10.1.17",
  "title": "Integral Over a Circle in the <span class=\"process-math\">\\(yz\\)<\/span>-Plane (<span class=\"process-math\">\\(\\star\\star\\star\\)<\/span>).",
  "body": " Integral Over a Circle in the -Plane ( )  Integrate over the circle ,   "
},
{
  "id": "subsec-line-integrals-advanced-4",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-advanced-4",
  "type": "Checkpoint",
  "number": "10.1.18",
  "title": "Integral Over a Square Path (<span class=\"process-math\">\\(\\star\\star\\star\\star\\)<\/span>).",
  "body": " Integral Over a Square Path ( )   Evaluate , where is given in the accompanying figure.      Split the square into its four sides and add the four scalar line integrals.   "
},
{
  "id": "subsec-line-integrals-advanced-5",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-advanced-5",
  "type": "Exercise Group",
  "number": "10.1.8",
  "title": "Technology-Assisted Line Integrals (<span class=\"process-math\">\\(\\star\\star\\star\\star\\)<\/span>).",
  "body": " Technology-Assisted Line Integrals ( )  Evaluate each line integral with respect to arc length, using technology.  , where has parametric equations , , ,  , where has parametric equations , , ,  , where has parametric equations , , ,  , where is the curve with parametric equations , , ,  "
},
{
  "id": "subsec-line-integrals-applications-2",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-2",
  "type": "Exercise Group",
  "number": "10.1.9",
  "title": "Mass of a Spring.",
  "body": " Mass of a Spring  Find the total mass of a spring with density in the shape of the circular helix , .    "
},
{
  "id": "subsec-line-integrals-applications-3",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-3",
  "type": "Checkpoint",
  "number": "10.1.19",
  "title": "Mass of a Helix Spring.",
  "body": " Mass of a Helix Spring  Find the total mass of a spring in the shape of the helix , , with density   "
},
{
  "id": "subsec-line-integrals-applications-4",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-4",
  "type": "Exercise Group",
  "number": "10.1.10",
  "title": "Mass of a Wire.",
  "body": " Mass of a Wire  Find the total mass of the wire with density whose shape is modeled by .  , ,  , ,  , , ( )  , , ( )  , ,  "
},
{
  "id": "subsec-line-integrals-applications-5",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-5",
  "type": "Exercise Group",
  "number": "10.1.11",
  "title": "Mass and Center of Mass.",
  "body": " Mass and Center of Mass  Find the mass and center of mass of each wire.  A thin wire is bent into the shape of a semicircle , . If the linear density is a constant , find the mass and center of mass of the wire , center of mass  A thin wire has the shape of the first-quadrant part of the circle with center at the origin and radius . If the density function is , find the mass and center of mass of the wire , center of mass  Find the mass and center of mass of a wire in the shape of the helix , , , , if the density at any point is equal to the square of the distance from the origin , center of mass  "
},
{
  "id": "subsec-line-integrals-applications-6",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-6",
  "type": "Checkpoint",
  "number": "10.1.20",
  "title": "Center of Mass Formulas.",
  "body": " Center of Mass Formulas   Write the formulas for the center of mass of a thin wire in the shape of a space curve if the wire has density function , , ,  Find the center of mass of a wire in the shape of the helix , , , , if the density is a constant  "
},
{
  "id": "subsec-line-integrals-applications-7",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-7",
  "type": "Checkpoint",
  "number": "10.1.21",
  "title": "Painting a Circular Fence.",
  "body": " Painting a Circular Fence  The base of a circular fence with radius 10 m is given by , . The height of the fence at position is given by the function , so the height varies from 3 m to 5 m. Suppose that 1 L of paint covers 100 m . Sketch the fence and determine how much paint is required to paint both sides of the fence.  Total area m , so the paint required is L L.  "
},
{
  "id": "subsec-line-integrals-applications-8",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-8",
  "type": "Checkpoint",
  "number": "10.1.22",
  "title": "Area of a Winding Wall.",
  "body": " Area of a Winding Wall  Find the area of one side of the winding wall standing perpendicularly on the curve , , and beneath the curve on the surface   "
},
{
  "id": "subsec-line-integrals-applications-9",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-9",
  "type": "Checkpoint",
  "number": "10.1.23",
  "title": "Area of a Wall.",
  "body": " Area of a Wall  Find the area of one side of the wall standing perpendicularly on the curve , , and beneath the curve on the surface   "
},
{
  "id": "subsec-line-integrals-applications-10",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-10",
  "type": "Checkpoint",
  "number": "10.1.24",
  "title": "Mass of a Wire (1).",
  "body": " Mass of a Wire (1)  Find the mass of a wire that lies along the curve , , if the density is   "
},
{
  "id": "subsec-line-integrals-applications-11",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-11",
  "type": "Checkpoint",
  "number": "10.1.25",
  "title": "Mass of a Wire (2).",
  "body": " Mass of a Wire (2)  Find the mass of a thin wire lying along the curve , , if the density is   "
},
{
  "id": "subsec-line-integrals-applications-12",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-12",
  "type": "Checkpoint",
  "number": "10.1.26",
  "title": "Mass of a Wire (3).",
  "body": " Mass of a Wire (3)  Find the mass of the same wire if the density is   "
},
{
  "id": "subsec-line-integrals-applications-13",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-13",
  "type": "Checkpoint",
  "number": "10.1.27",
  "title": "Center of Mass of a Wire.",
  "body": " Center of Mass of a Wire   A wire of density lies along the curve , . Find its center of mass. Then sketch the curve and center of mass together.      Here , , , and .  The center of mass is .  "
},
{
  "id": "subsec-line-integrals-applications-14",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-14",
  "type": "Checkpoint",
  "number": "10.1.28",
  "title": "Center of Mass with Variable Density.",
  "body": " Center of Mass with Variable Density  Find the center of mass of a thin wire lying along the curve , , if the density is  Since , we get .   "
},
{
  "id": "subsec-line-integrals-applications-15",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-line-integrals-applications-15",
  "type": "Checkpoint",
  "number": "10.1.29",
  "title": "Line Integral with <span class=\"process-math\">\\(dx\\)<\/span> and <span class=\"process-math\">\\(dy\\)<\/span>.",
  "body": " Line Integral with and  Evaluate , where is the parabola from the origin to   "
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
