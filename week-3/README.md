# CSS

CSS, or **C**ascading **S**tyle**s**heets is the language determining the look and feel of HTML elements.
Every element in web design is a rectangular box styled with CSS.


CSS defines the form of a website’s content by listing rules for how elements should appear.

```css
p {
  color: blue;
}
```

### Anatomy
- **selector** (targeted html element)  `p`
- opening curly brackets `{`
- **declaration** (rules applied to that element) `color: blue;`
	- **property** what you’re formatting, such as size and color) `color`
	- colon  `:`
 	- **value** (what you’re setting the specified property to be)`blue`
	- semicolon `;`
- closing curly brackets `}`


## Where to put your CSS
There are three places you can insert CSS.

### Inline CSS

Inline styles are specified as an attribute inside of an individual HTML element with the syntax style="property: value;" and applies only to that element. This is the least desirable way, as it can be inefficient and lead to inconsistencies.

`<p style= "color: blue;"> First paragraph text. </p>`
`<p> Second paragraph text. </p>`

<p style= "color: blue;">First paragraph text.</p>
Second paragraph text.


### Internal CSS

Internal CSS is declared within the head of the document. Selectors apply to all instances of that page. This keeps the HTML markup clean and uncluttered. It’s much more efficient than inline styling, but not as effective as external stylesheets.
```html
<html>
<head>
	<style type="text/css">
		p  {
		 color: blue;
		}
	</style>
</head>
<body>
  <p>First paragraph text.</p>
  <p>Second paragraph text.</p>
</body>
</html>
```


### External CSS
External CSS keeps all css declarations in a separate document that gets pulled into the webpage with  `<link rel="stylesheet" type="text/css" href="styles.css">` 

Selectors apply to *all instances of elements in all webpages that use the same stylesheet*. This method is the ideal method of formatting your site, since it ensures consistency across pages. It also keeps things flexible: by changing one property in the external stylesheet, all instances could be easily changed.
 

## Parents and Children
We refer to the nested structure of HTML by this family-tree like relationship. Elements (B) nested within another (A) are called **children** of A; A is a **parent** of B.

```html
<div class="container">
	<p>This paragraph is a child of the <div class="container"> element</p>
</div>
```

## Inheritance

Inheritance refers to how children take on css properties of their parents if they don’t have that property specified. Not all css declarations are inherited.  


For example, `border` is not inherited by children, but `font-size` is. You can see whether a property inherits or not by looking up the property name in the [MDN documentation](https://developer.mozilla.org/en-us/docs/Web/CSS/Reference).


## The Cascade 

Cascade refers to the way the stylesheet processes and assigns weights to rules that apply to the same element, ultimately determining which properties will modify a given element. 

### Origin 
Stylesheets may come from 3 different sources, processed in the following order
1. **User agent:** The browser’s default style sheet.
2. **User:** Such as the user’s browser options.
3. **Author:** This is the CSS provided by the page (whether inline, embedded or external.) Inline > Internal > External 

### Specificity
when rules within the same stylesheet conflict, the type of selector determines which has more weight

### Rule order
between style rules of identical weight, last one wins

※ note: the `!important` rule allows overrides to this hierarchy, but should be used sparingly

## Selectors

By understanding inheritance and the cascade, we can write overarching rules that apply to most elements, then override the properties on individual elements. Selectors help tailor our rules to define specific elements. The more specific the selector, the higher its priority.

### Element selector
We’ve already seen the type selector that matches element names. 

```css
h2 {
	font-size: 3em;
}
```

### Multiple selection
By separating selectors with commas, you can apply the same rule to multiple HTML elements.

```css
h2, .introduction {
	font-size: 3em;
}
```

### Classes and IDs

By assigning a **class** to elements (with the `class` attribute) in your HTML, we can apply your rule to just elements that have that particular class. In your stylesheet, all class names are preceded by a period (`.`). 

CSS
```css
.highlight {
	background: yellow;
}

#demo {
	font-weight: bold;
}
```

HTML
```html
<p id="demo">This is Demo text </p>
<p class="highlight"> Paragraph text 1 </p>
<p> Paragraph text 2 </p>
<ul>
	<li class="highlight">List item 1 </li>
	<li>List item 2</li>
	<li>List item 3</li>
</ul>
```

**Ids** work similarly to classes, but only one element may be given a particular id. You define id names by preceding them with a hash symbol (`#`) 

- Class and IDs names should not include spaces or weird characters. 


## Use the Inspector
The element inspector is a great way to verify the CSS properties applied to your elements.
When thinking about CSS properties, imagine that there is an invisible box around each HTML element.

## Understanding CSS Properties
Color, text, and the box model

### Color
Color can be specified in various formats. You can inspect color codes by using the color picker in your dev tools (inspector.)

|format|sample syntax|
|--- |--- |
|RGB(A)| `color: rgb (255,0,0); color: rgba (255,0,0,0.5);` |
|HSL(A)| `color: hsl(0,100%,50%); color: hsla(0,100%,50%,0.5);`|
|Hex| `color: #ff0000; color: #f00;`|
|Color name| `color: red;`|

※ note: the `color` css property only specifies the foreground text-color of elements. Use `background-color` to specify the color of your entire element area.

## Inline vs. Block elements
There are two primary display formats for elements.


An **inline element** continues along the same line as its neighboring elements and occupies as much space (width) as its content. i.e.: `<a>`, `<b>`, `<em>`, `<img>`, and `<span>`.

A **block element** always appears on a new line; by default, it’s as wide as its parent (containing elements) i.e.`<section>`,`<article>`, `<h1>`, `<p>`, `<ul>`, `<li>`, and `<div>`.

These are default `display` CSS properties for each element.

We often use the generic `<span>` and `<div>` elements with CSS classes for formatting.
- to select in-line elements, such as text, we wrap them in a `span`
- to group several elements together, we wrap them in a `div`


## The Box Model
The [box model](https://css-tricks.com/the-css-box-model/) refers to how block-level elements can be controlled. 

Components of the box model
- margin: the space around the element; between the element and its surrounding elementts
- border: a line surrounding the element width
- padding: the space between the content and the edge of the element (or border)
- content: the actual content / text within the element
- width: the width of the content\*
- height: the height of the content\*


```css
.box {
  width: 300px;
  height: 200px;
  border: 6px solid coral;
  background: pink;
  padding: 10px;
  margin: 10px 20px 10px auto;
}
```

<div style="width: 300px; height: 200px; border: 6px solid coral; background: pink; padding: 10px; margin: 5px 20px 30px auto;">
	content
</div>


### Box-Model Adjustment

If you found the box model (in which the padding and border are outside of the element dimensions) to be unintuitive, you can use the `box-sizing` property. Setting this to `border-box` includes the padding and border width in the element width. So when you set `box-sizing: border-box;` on an element, the padding and border of that element no longer increase its width or height. More on box-sizing.
	
`box-sizing: border-box;`

### Collapsing margins
Collapsing margins, where two margins cancel out each other,  happens in 2 cases:

- When two vertical margins come in contact with one another. If one margin is greater than the other, then that margin overrides the other, leaving one margin.
-  Collapsing margins also occur when the margin of a child element crosses the margin of its parent. 

See examples of [collapsed margins](https://css-tricks.com/what-you-should-know-about-collapsing-margins/)
