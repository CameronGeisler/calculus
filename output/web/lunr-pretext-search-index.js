var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-inverse-trig-sub",
  "level": "1",
  "url": "sec-inverse-trig-sub.html",
  "type": "Section",
  "number": "1.2",
  "title": "Inverse Trigonometric Substitution",
  "body": " Inverse Trigonometric Substitution   Inverse trigonometric substitution is a technique used to evaluate integrals that contain expressions of the form \\( \\sqrt{a^2 - x^2} \\), \\( \\sqrt{x^2 - a^2} \\), or \\( \\sqrt{a^2 + x^2} \\). This method utilizes trigonometric identities to simplify these expressions.    Baisc Trigonometric Substitutions   Basic Trigonometric Substitutions     For \\( \\sqrt{a^2 - x^2} \\), use \\( x = a \\sin \\theta \\).  For \\( \\sqrt{x^2 - a^2} \\), use \\( x = a \\sec \\theta \\).  For \\( \\sqrt{a^2 + x^2} \\), use \\( x = a \\tan \\theta \\).       Example: Evaluating \\( \\int \\frac{dx}{\\sqrt{9 - x^2}} \\)   Evaluate the integral \\( I = \\int \\frac{dx}{\\sqrt{9 - x^2}} \\) using inverse trigonometric substitution.     "
},
{
  "id": "sec-inverse-trig-sub-3-2",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#sec-inverse-trig-sub-3-2",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "Basic Trigonometric Substitutions.",
  "body": " Basic Trigonometric Substitutions     For \\( \\sqrt{a^2 - x^2} \\), use \\( x = a \\sin \\theta \\).  For \\( \\sqrt{x^2 - a^2} \\), use \\( x = a \\sec \\theta \\).  For \\( \\sqrt{a^2 + x^2} \\), use \\( x = a \\tan \\theta \\).     "
},
{
  "id": "sec-inverse-trig-sub-3-3",
  "level": "2",
  "url": "sec-inverse-trig-sub.html#sec-inverse-trig-sub-3-3",
  "type": "Example",
  "number": "1.2.2",
  "title": "Example: Evaluating \\( \\int \\frac{dx}{\\sqrt{9 - x^2}} \\).",
  "body": " Example: Evaluating \\( \\int \\frac{dx}{\\sqrt{9 - x^2}} \\)   Evaluate the integral \\( I = \\int \\frac{dx}{\\sqrt{9 - x^2}} \\) using inverse trigonometric substitution.   "
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
