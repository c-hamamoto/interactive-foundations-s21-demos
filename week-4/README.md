## CSS Size Units
|unit|description|
|---|---|
|`px`| absolute measurements, only relative to the resolution of the screen. The same type size will look larger when a screen has a resolution of 800x600 than it would when it is 1280x800.
|`em`| ratio relative to the element’s immediate parent container 
|`rem`| ratio relative to the document root size
|`%`| percentage ratio relative to the element’s immediate parent container, based on the size of same property of the parent element
|`vw` or `vh`| 1 viewport unit is 1% of the window width or line-height


### Pseudo-classes
A CSS pseudo-class is a keyword added to selectors that specifies a special state of the element to be selected. 
The most popular use of pseudo selectors are in links. Browsers typically show text links in blue with an underline text decoration; visited links are purple. To customize this, you can target those elements using pseudo-classes, denoted by a `:` after the element. 

```
a:link {
  color: red;
  text-decoration: underline;
}
a:visited {
  color: black;
}
a:hover {
  color: green;
  text-decoration: none;
}
a:active {
  color: blue;
  text-decoration: underline;
} 

```

### Structural Pseudo-classes
You can use pseudo selectors to target specific children of parent elements.

|Selector|Description|Sample Syntax|
|---|---|---|
|First child `element:first-child`|matches the first child element, regardless of type, in a parent element|`li:first-child`
|Last child `element:last-child`|matches the last child element, regardless of type, in a parent element|`li:last-child`
|Nth child `element:nth-child(_)`|matches a child element in relation to its position within the parent element — accepts numerals, formulas, and keywords|`li:nth-child(2)`

We might use it to style alternate rows in a table:
```
tr:nth-child(even) {
  background: #EEE;
}
```

### Pseudo-elements

Pseudo-elements allow you to style specific parts of an element or generate content around an element. 

```
p.note::before {
  content: "Note: ";
  font-weight: bold;
}
```
- More on pseudo-elements and [things you can do with them](https://css-tricks.com/pseudo-element-roundup/)