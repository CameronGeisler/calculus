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
  "body": " Summary of Series   The culmination of this chapter is to be able to take a given series, and determine if it converges or diverges. For each of these kinds of questions, you should:    State convergence or divergence, and also,  Specify which test you used, and give a justification for why it can be used (which is how you show your work).    For most questions, the test you should use will not be given, so you will have to develop intuition to recognize which series to use.    Choosing Which Test to Use      Do the terms not approach 0?   Use the th term test for divergence: If (or the limit doesn't exist), then the series diverges immediately.     Are there exponents of  ?   Could be a geometric series, of the form  .  Use the geometric series test: For common ratio  ,    ⇒ converges  ⇒ diverges       Are two similar terms being subtracted? Or, can you do partial‑fraction decomposition?   Could be telescoping.  Write the partial sum  explicitly, then take  .     Can it be written as a power of  ?   Consider the p‑series     ‑series: converges if  , diverges if  .     Does the numerator or denominator have more than one term?   Consider asymptotic comparison (keeping only the dominant term)  Use the direct or limit comparison test: compare to a simpler series (typically a p‑series or geometric series).    For limit comparison, calculate . If , then and behave the same.       Has factorials ( ) and\/or exponential expressions ( )?   Use the ratio test: calculate     ⇒ converges (absolutely)  ⇒ diverges  ⇒ inconclusive (use another test)       Has a double power (like  or  )?   Use the root test: calculate     ⇒ converges  ⇒ diverges  ⇒ inconclusive (use another test)       Has an alternating factor, like or  ?   Use the alternating series test: if  and  is decreasing, then the series converges (conditionally).     Terms can be integrated easily, maybe using  -substitution?   Use the integral test: convergence of  is the same as       "
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
