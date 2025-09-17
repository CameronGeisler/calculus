var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-inverse-trig-sub",
  "level": "1",
  "url": "sec-inverse-trig-sub.html",
  "type": "Section",
  "number": "1.1",
  "title": "Inverse Trigonometric Substitution",
  "body": " Inverse Trigonometric Substitution   Inverse trigonometric substitution is a technique used to evaluate integrals that contain expressions of the form , , or . This method uses trigonometric identities to simplify these integrals.    Summary of Inverse Trigonometric Substitution                                    Identify the form of the substitution (sine, tangent, or secant).  Apply the substitution. Sketch a right triangle and label the sides, to represent the relationships between and .  Simplify the integral.  Integrate with the new variable , using previous strategies, typically a trigonometric integral.  Back-substitute using the inverse trigonometric function to substitute back for .      Examples   Example   Evaluate .    Let , so .               Example   Determine      Example   Determine      Example   Determine       Evaluate       Evaluate       Evaluate       Evaluate       Evaluate       Evaluate       Evaluate      "
},
{
  "id": "summary-of-inverse-trigonometric-substitution-2",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#summary-of-inverse-trigonometric-substitution-2",
  "type": "Table",
  "number": "1.1.1",
  "title": "",
  "body": "                            "
},
{
  "id": "examples-2",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-2",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "Example.",
  "body": " Example   Evaluate .    Let , so .             "
},
{
  "id": "examples-3",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-3",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "Example.",
  "body": " Example   Determine    "
},
{
  "id": "examples-4",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-4",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "Example.",
  "body": " Example   Determine    "
},
{
  "id": "examples-5",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-5",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "Example.",
  "body": " Example   Determine    "
},
{
  "id": "examples-6",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-6",
  "type": "Checkpoint",
  "number": "1.1.6",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-7",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-7",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-8",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-8",
  "type": "Checkpoint",
  "number": "1.1.8",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-9",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-9",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-10",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-10",
  "type": "Checkpoint",
  "number": "1.1.10",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-11",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-11",
  "type": "Checkpoint",
  "number": "1.1.11",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "examples-12",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#examples-12",
  "type": "Checkpoint",
  "number": "1.1.12",
  "title": "",
  "body": "  Evaluate    "
},
{
  "id": "sec-summary-of-series",
  "level": "1",
  "url": "sec-summary-of-series.html",
  "type": "Section",
  "number": "2.1",
  "title": "Summary of Series",
  "body": " Summary of Series   In previous sections, we explored various methods for determining if an infinite series converges or diverges. Also, in a few limited cases, it is possible to determine the exact value of the convergent series.  The culmination of the series chapter is to be able to take a given series and determine if it converges or diverges. Most problems won't tell you which test to use, so you'll have to be able to use pattern recognition to figure out which test applies. This is similar to how evaluating integrals involves pattern recognition for which technique to use. For each of these questions, you should:    State convergence or divergence,  Specify which test you used, and,  Why it can be applied.      Choosing Which Test to Use      Do the terms not approach 0?   If or the limit does not exist, use the th-term test for divergence: the series diverges immediately.     Are there exponents of ?  Could be a geometric series . Rewrite in the form . With common ratio ,     converges   diverges    The sum is (if it converges)     Are two similar terms being subtracted? Or can you do partial-fraction decomposition ? Could be telescoping. Write the partial sum explicitly, then take . Often used for simple rational functions, or with quadratic denominators that are factorable.     Can it be written as a power of ?   Consider the -series . Use the -series test: converges if , diverges if . Should be second-nature in order to help with the comparison tests.     Is there a fraction, with a numerator or denominator with more than one term? Especially a rational function, or generally terms involving fractions. Consider comparison tests . Use asymptotic comparison (keeping only the dominant term). Use the direct or limit comparison test: compare to a simpler series (usually a -series or geometric).    Use direct comparison, if it's easy enough.  Use limit comparison if direct comparison is too difficult. Calculate . If , then and behave the same.       Has factorials ( ) and\/or exponentials ( )? Especially mixed with powers ( ) or double exponentials ( ).   Use the ratio test : compute .     converges (absolutely)   diverges   inconclusive (try another test)       Has a double power? With in the exponent and  in the base (like or of the form ).   Use the root test : compute .     converges (absolutely)   diverges   inconclusive (try another test)    Note: Don't confuse this with a geometric series , which has a constant base.     Has an alternating factor (like or )?    Use the alternating series test : if and is decreasing, then the series converges (conditionally).     Can be integrated easily, maybe using -substitution?  Use the integral test : convergence of is the same as .       Overall Remarks    Some series can be shown to converge or diverge using multiple different tests (which give you the same conclusion). However, one method may be easier or harder than the other.  Always check if the terms approach 0. The divergence test is the easiest to apply (because it only involves taking a limit), and it can lead to a quick conclusion of divergence. It is often forgotten by students.     "
},
{
  "id": "sec-series-review",
  "level": "1",
  "url": "sec-series-review.html",
  "type": "Section",
  "number": "2.2",
  "title": "Series Review",
  "body": " Series Review   The three main question types for series (and sequences) problems are:  Find the limit of the sequence, or determine if the sequence diverges.  Determine if series converges or diverges.  Find the value of the sum of the series, or determine if it diverges.  Determine if series converges absolutely, converges conditionally, or diverges.      Exercises    Limit of sequences   Find the limit of each sequence, or determine if the sequence diverges.                                                                                                                                 Convergence of series   Determine if each series converges or diverges.                                             Sum of a series   Find the value of the sum of each series, or determine if it diverges. Simplify your answer completely.                        Absolute convergence and conditional convergence   Determine if each series converges absolutely, converges conditionally, or diverges.                     "
},
{
  "id": "sec-series-review-3-2-1-3",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-3",
  "type": "Exercise",
  "number": "2.2.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-4",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-4",
  "type": "Exercise",
  "number": "2.2.1.2",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-5",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-5",
  "type": "Exercise",
  "number": "2.2.1.3",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-6",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-6",
  "type": "Exercise",
  "number": "2.2.1.4",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-7",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-7",
  "type": "Exercise",
  "number": "2.2.1.5",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-8",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-8",
  "type": "Exercise",
  "number": "2.2.1.6",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-9",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-9",
  "type": "Exercise",
  "number": "2.2.1.7",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-10",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-10",
  "type": "Exercise",
  "number": "2.2.1.8",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-11",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-11",
  "type": "Exercise",
  "number": "2.2.1.9",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-12",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-12",
  "type": "Exercise",
  "number": "2.2.1.10",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-13",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-13",
  "type": "Exercise",
  "number": "2.2.1.11",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-14",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-14",
  "type": "Exercise",
  "number": "2.2.1.12",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-15",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-15",
  "type": "Exercise",
  "number": "2.2.1.13",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-16",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-16",
  "type": "Exercise",
  "number": "2.2.1.14",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-17",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-17",
  "type": "Exercise",
  "number": "2.2.1.15",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-18",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-18",
  "type": "Exercise",
  "number": "2.2.1.16",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-19",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-19",
  "type": "Exercise",
  "number": "2.2.1.17",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-20",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-20",
  "type": "Exercise",
  "number": "2.2.1.18",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-21",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-21",
  "type": "Exercise",
  "number": "2.2.1.19",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-22",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-22",
  "type": "Exercise",
  "number": "2.2.1.20",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-23",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-23",
  "type": "Exercise",
  "number": "2.2.1.21",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-24",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-24",
  "type": "Exercise",
  "number": "2.2.1.22",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-25",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-25",
  "type": "Exercise",
  "number": "2.2.1.23",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-26",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-26",
  "type": "Exercise",
  "number": "2.2.1.24",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-27",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-27",
  "type": "Exercise",
  "number": "2.2.1.25",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-28",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-28",
  "type": "Exercise",
  "number": "2.2.1.26",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-29",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-29",
  "type": "Exercise",
  "number": "2.2.1.27",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-30",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-30",
  "type": "Exercise",
  "number": "2.2.1.28",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-31",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-31",
  "type": "Exercise",
  "number": "2.2.1.29",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-32",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-32",
  "type": "Exercise",
  "number": "2.2.1.30",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-33",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-33",
  "type": "Exercise",
  "number": "2.2.1.31",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-34",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-34",
  "type": "Exercise",
  "number": "2.2.1.32",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-35",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-35",
  "type": "Exercise",
  "number": "2.2.1.33",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-36",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-36",
  "type": "Exercise",
  "number": "2.2.1.34",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-37",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-37",
  "type": "Exercise",
  "number": "2.2.1.35",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-38",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-38",
  "type": "Exercise",
  "number": "2.2.1.36",
  "title": "",
  "body": "      "
},
{
  "id": "sec-series-review-3-2-1-39",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-39",
  "type": "Exercise",
  "number": "2.2.1.37",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-40",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-40",
  "type": "Exercise",
  "number": "2.2.1.38",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-41",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-41",
  "type": "Exercise",
  "number": "2.2.1.39",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-1-42",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-1-42",
  "type": "Exercise",
  "number": "2.2.1.40",
  "title": "",
  "body": "  "
},
{
  "id": "sec-series-review-3-2-2-3",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-3",
  "type": "Exercise",
  "number": "2.2.1.41",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-4",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-4",
  "type": "Exercise",
  "number": "2.2.1.42",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-5",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-5",
  "type": "Exercise",
  "number": "2.2.1.43",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-6",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-6",
  "type": "Exercise",
  "number": "2.2.1.44",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-7",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-7",
  "type": "Exercise",
  "number": "2.2.1.45",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-8",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-8",
  "type": "Exercise",
  "number": "2.2.1.46",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-9",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-9",
  "type": "Exercise",
  "number": "2.2.1.47",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-10",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-10",
  "type": "Exercise",
  "number": "2.2.1.48",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-11",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-11",
  "type": "Exercise",
  "number": "2.2.1.49",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-12",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-12",
  "type": "Exercise",
  "number": "2.2.1.50",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-13",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-13",
  "type": "Exercise",
  "number": "2.2.1.51",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-14",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-14",
  "type": "Exercise",
  "number": "2.2.1.52",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-15",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-15",
  "type": "Exercise",
  "number": "2.2.1.53",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-16",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-16",
  "type": "Exercise",
  "number": "2.2.1.54",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-17",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-17",
  "type": "Exercise",
  "number": "2.2.1.55",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-18",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-18",
  "type": "Exercise",
  "number": "2.2.1.56",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-19",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-19",
  "type": "Exercise",
  "number": "2.2.1.57",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-20",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-20",
  "type": "Exercise",
  "number": "2.2.1.58",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-21",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-21",
  "type": "Exercise",
  "number": "2.2.1.59",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-22",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-22",
  "type": "Exercise",
  "number": "2.2.1.60",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-23",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-23",
  "type": "Exercise",
  "number": "2.2.1.61",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-24",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-24",
  "type": "Exercise",
  "number": "2.2.1.62",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-25",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-25",
  "type": "Exercise",
  "number": "2.2.1.63",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-26",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-26",
  "type": "Exercise",
  "number": "2.2.1.64",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-27",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-27",
  "type": "Exercise",
  "number": "2.2.1.65",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-28",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-28",
  "type": "Exercise",
  "number": "2.2.1.66",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-29",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-29",
  "type": "Exercise",
  "number": "2.2.1.67",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-30",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-30",
  "type": "Exercise",
  "number": "2.2.1.68",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-31",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-31",
  "type": "Exercise",
  "number": "2.2.1.69",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-32",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-32",
  "type": "Exercise",
  "number": "2.2.1.70",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-33",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-33",
  "type": "Exercise",
  "number": "2.2.1.71",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-34",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-34",
  "type": "Exercise",
  "number": "2.2.1.72",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-35",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-35",
  "type": "Exercise",
  "number": "2.2.1.73",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-36",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-36",
  "type": "Exercise",
  "number": "2.2.1.74",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-37",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-37",
  "type": "Exercise",
  "number": "2.2.1.75",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-38",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-38",
  "type": "Exercise",
  "number": "2.2.1.76",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-39",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-39",
  "type": "Exercise",
  "number": "2.2.1.77",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-40",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-40",
  "type": "Exercise",
  "number": "2.2.1.78",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-41",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-41",
  "type": "Exercise",
  "number": "2.2.1.79",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-2-42",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-2-42",
  "type": "Exercise",
  "number": "2.2.1.80",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-3",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-3",
  "type": "Exercise",
  "number": "2.2.1.81",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-4",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-4",
  "type": "Exercise",
  "number": "2.2.1.82",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-5",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-5",
  "type": "Exercise",
  "number": "2.2.1.83",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-6",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-6",
  "type": "Exercise",
  "number": "2.2.1.84",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-7",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-7",
  "type": "Exercise",
  "number": "2.2.1.85",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-8",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-8",
  "type": "Exercise",
  "number": "2.2.1.86",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-9",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-9",
  "type": "Exercise",
  "number": "2.2.1.87",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-10",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-10",
  "type": "Exercise",
  "number": "2.2.1.88",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-11",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-11",
  "type": "Exercise",
  "number": "2.2.1.89",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-12",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-12",
  "type": "Exercise",
  "number": "2.2.1.90",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-13",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-13",
  "type": "Exercise",
  "number": "2.2.1.91",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-14",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-14",
  "type": "Exercise",
  "number": "2.2.1.92",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-15",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-15",
  "type": "Exercise",
  "number": "2.2.1.93",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-16",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-16",
  "type": "Exercise",
  "number": "2.2.1.94",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-17",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-17",
  "type": "Exercise",
  "number": "2.2.1.95",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-18",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-18",
  "type": "Exercise",
  "number": "2.2.1.96",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-19",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-19",
  "type": "Exercise",
  "number": "2.2.1.97",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-20",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-20",
  "type": "Exercise",
  "number": "2.2.1.98",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-3-21",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-3-21",
  "type": "Exercise",
  "number": "2.2.1.99",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-3",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-3",
  "type": "Exercise",
  "number": "2.2.1.100",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-4",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-4",
  "type": "Exercise",
  "number": "2.2.1.101",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-5",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-5",
  "type": "Exercise",
  "number": "2.2.1.102",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-6",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-6",
  "type": "Exercise",
  "number": "2.2.1.103",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-7",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-7",
  "type": "Exercise",
  "number": "2.2.1.104",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-8",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-8",
  "type": "Exercise",
  "number": "2.2.1.105",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-9",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-9",
  "type": "Exercise",
  "number": "2.2.1.106",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-10",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-10",
  "type": "Exercise",
  "number": "2.2.1.107",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-11",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-11",
  "type": "Exercise",
  "number": "2.2.1.108",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-12",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-12",
  "type": "Exercise",
  "number": "2.2.1.109",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-13",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-13",
  "type": "Exercise",
  "number": "2.2.1.110",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-14",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-14",
  "type": "Exercise",
  "number": "2.2.1.111",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-15",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-15",
  "type": "Exercise",
  "number": "2.2.1.112",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-16",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-16",
  "type": "Exercise",
  "number": "2.2.1.113",
  "title": "",
  "body": ""
},
{
  "id": "sec-series-review-3-2-4-17",
  "level": "2",
  "url": "sec-series-review.html#sec-series-review-3-2-4-17",
  "type": "Exercise",
  "number": "2.2.1.114",
  "title": "",
  "body": ""
},
{
  "id": "sec-power-series",
  "level": "1",
  "url": "sec-power-series.html",
  "type": "Section",
  "number": "3.1",
  "title": "Power Series",
  "body": " Power Series    Interval of Convergence of Power Series Summary  To determine the interval of convergence of a power series:      Determine the open interval where the series converges .  Use the ratio test (or root test).    Ratio test: converges if .  Root test: converges if .    Solve the resulting inequality to find the (open) interval where the series converges, which will always be of the form , where is the radius of convergence.     Test the endpoints separately . Check the convergence of the series at and by substituting these values into the original series, and using a suitable test or the convergence or divergence of a known series. Some common series forms you'll see:    Harmonic series  Alternating harmonic series  Divergence test (terms don't approach 0)   -series  Alternating series test (alternating series whose terms approach 0)    (If or , there are no endpoints to test)     Form the complete interval of convergence , by combining the interval from step 2 and the endpoints from step 3.     Remarks:    Often, when testing the endpoints, the two values of will lead to a very similar series. Contrasting where they are different can help you think about which converges and\/or which diverges.  The ratio test is used for about 90% of all examples. However, sometimes both can be used, and the root test uses easier algebra, particularly when there are a lot of exponents of .  Note that with the ratio test (or root test), the limit is with respect to , and so is a constant with respect to the limit.      Examples    Find the interval of convergence and radius of convergence of each series.                                                                                         Advanced Examples    Find the interval of convergence and radius of convergence of each series.       (where )  (where )                 (where is a positive integer)        Find the radius of convergence of each power series.              Find the interval of convergence and radius of convergence of each series. Then, find the sum of the series for in that interval.     .      The series is geometric.     , converges to .     "
},
{
  "id": "sec-power-series-3-2",
  "level": "2",
  "url": "sec-power-series.html#sec-power-series-3-2",
  "type": "Checkpoint",
  "number": "3.1.1",
  "title": "",
  "body": "  Find the interval of convergence and radius of convergence of each series.                                                                                      "
},
{
  "id": "sec-power-series-4-2",
  "level": "2",
  "url": "sec-power-series.html#sec-power-series-4-2",
  "type": "Checkpoint",
  "number": "3.1.2",
  "title": "",
  "body": "  Find the interval of convergence and radius of convergence of each series.       (where )  (where )                 (where is a positive integer)     "
},
{
  "id": "sec-power-series-4-3",
  "level": "2",
  "url": "sec-power-series.html#sec-power-series-4-3",
  "type": "Checkpoint",
  "number": "3.1.3",
  "title": "",
  "body": "  Find the radius of convergence of each power series.           "
},
{
  "id": "sec-power-series-4-4",
  "level": "2",
  "url": "sec-power-series.html#sec-power-series-4-4",
  "type": "Checkpoint",
  "number": "3.1.4",
  "title": "",
  "body": "  Find the interval of convergence and radius of convergence of each series. Then, find the sum of the series for in that interval.     .      The series is geometric.     , converges to .   "
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
