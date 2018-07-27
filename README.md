# jCat.createElement

<p align="center">
	<a href="#jcatcreateelement"><img alt="" src="./assets/logo.png"></a>
</p>

<p align="center">
	<a href="https://www.npmjs.com/package/jcat-create-element/"><img alt="" src="https://nodei.co/npm/jcat-create-element.png"></a>
</p>

## Description
Creates an element according to the parameter «[selector](#selector)», or `HTMLUnknownElement` if the element is unknown.

## Installation

**1.** You can install the `jcat-create-element` and import it as a module

```
$ npm install jcat-create-element
```

```js
import {createElement} from "jcat-create-element";
```

**2.** Or import directly to your site

```html
<script src="/path_to_libs/jCat.createElement.js"></script>
```

```html
<script src="/path_to_libs/jCat.createElement.min.js"></script>
```

## Syntax

```
jCat.createElement([selector[, content[, styles]]]);
jCat.createElement([selector[, properties[, styles]]]);
```

### Parameters

#### _`selector`_

The selector pattern for creating of a new element. The parameter type must be `string`. If the parameter is `null`, `undefined`, `""` or is not specified, then the default value is `"div"`.

You can specify these values below in the selector pattern:
+ *tagName* — an element type (`div`, `span`, `img`, etc.). If there is tagName in the selector pattern, then you must use it in the begining of the code. If there is no tagName in the selector pattern, then the default value is «div».
+ *className* — each class name must be specified with «.» (for example: `.hello`, `.foo.bar`).
+ *id* — an ID must start with the symbol «#» and must be the only one (for example: `#test`, `#hello`). If there is more than one ID, then only the last one will be used; the other ones will be ignored.

«_id_» and «_className_» can be combined in any order.

#### _`content`_

The parameter type `string`, that will contain every data for the new element. The parameter works similar to the property [`Element.prototype.innerHTML`](https://developer.mozilla.org/ru/docs/Web/API/Element/innerHTML), and it means that the value can be a HTML layout.

#### _`properties`_

The parameter type `object` that contains every data for the new element. It is allowed to specify only the properties that exist in the element prototype as `setter`; any other properties will be ignored.

Additional properties:

+ _`properties.classList`_ — an additional list of class names. The additional class names will be added to the element's already existing class names. The value type should be `array`, or `string` - in that case, the class names are separated with a SPACE key.

#### _`styles`_

The parameter type `object` or `string`. If it is an `object`, then it must contain a bunch of styles in the format `{propertyName: propertyValue, ...}`. If it is a `string`, then it must have the format `cssText`: `"property-name: property-value; ..."`.

### Return value

Returns the element according to the parameter «[selector](#selector)», or `HTMLUnknownElement` if the element is unknown.

## Examples

### Creating an element

##### 1. How to create an element

```js
var element = jCat.createElement("div");
document.body.appendChild(element);

//<div></div>
```
```js
var element = jCat.createElement("span");
document.body.appendChild(element);

//<span></span>
```
```js
var element = jCat.createElement("p");
document.body.appendChild(element);

//<p></p>
```

##### 2. How to create a default element

```js
var element = jCat.createElement();
document.body.appendChild(element);

console.log(element.tagName); // "DIV"
```
```js
var element = jCat.createElement(null); //parameter `selector` = null, undefined or ""
document.body.appendChild(element);

console.log(element.tagName); // "DIV"
```

##### 3. How to create an element using selector

```js
var element = jCat.createElement("span.text");
document.body.appendChild(element);

//<span class="text"></span>
```
```js
var element = jCat.createElement("span.text.center");
document.body.appendChild(element);

//<span class="text center"></span>
```
```js
var element = jCat.createElement(".foo.bar");
document.body.appendChild(element);

//<div class="foo bar"></div>
```
```js
var element = jCat.createElement("#text");
document.body.appendChild(element);

//<div id="test"></div>
```
```js
var element = jCat.createElement("p.foo.bar#text");
document.body.appendChild(element);

//<p class="foo bar" id="text"></p>
```
```js
var element = jCat.createElement("p.foo#text.bar"); //.className and #id can be combined in any order
document.body.appendChild(element);

//<p class="foo bar" id="text"></p>
```

##### 4. How to create an element that contains data

```js
var element = jCat.createElement("span", "Hello world!");
document.body.appendChild(element);

//<span>Hello world!</span>
```
```js
var element = jCat.createElement("span", "<b>Hello world!</b>");
document.body.appendChild(element);

//<span><b>Hello world!</b></span>
```
```js
var element = jCat.createElement(".foo.bar", {
	innerHTML: "<p>This is paragraph</p>"
});
document.body.appendChild(element);

//<div class="foo bar"><p>This is paragraph</p></div>
```
```js
var element = jCat.createElement("#test", {
	textContent: "This is text"
});
document.body.appendChild(element);

//<div id="text">This is text</div>
```

##### 5. How to create an element using properties

```js
var element = jCat.createElement("a", {
	href: "#",
	target: "_blank",
	textContent: "This is anchor"
});
document.body.appendChild(element);

//<a href="#" target="_blank">This is anchor</a>
```
```js
var element = jCat.createElement("img.logo", {
	alt: "",
	src: "../logo.png"
});
document.body.appendChild(element);

//<img alt="" src="../logo.png">
```
```js
var element = jCat.createElement("input.field#login", {
	maxLength: 32,
	name: "login",
	placeholder: "Your login"
});
document.body.appendChild(element);

//<input class="field" id="login" maxlength="32" name="login" placeholder="Your login">
```
```js
var element = jCat.createElement("button.my-button", {
	innerHTML: "<b>CLICK ME</b>",
	onclick: function() {
		alert("Hello world!");
	}
});
document.body.appendChild(element);

//<button class="my-button"><b>CLICK ME</b></button>
```

##### 6. How to create an element using styles

```js
var element = jCat.createElement("span", "This is text", "color: red; font-size: 2em");
document.body.appendChild(element);

//<span style="color: red; font-size: 2em;">This is text</span>
```
```js
var element = jCat.createElement("", "Hello world!", {
	backgroundColor: "#000000",
	color: "#FFFFFF",
	fontSize: "16px"
});
document.body.appendChild(element);

//<div style="background-color: #000000; color: #FFFFFF; font-size: 16px;">Hello world!</div>
```
```js
var element = jCat.createElement("section.comments", null, {
	display: "flex",
	justifyContent: "space-between"
});
document.body.appendChild(element);

//<section class="comments" style="display: flex; justify-content: space-between;"></section>
```
```js
var element = jCat.createElement("img#pixel", {
	alt: "",
	src: "../../pixel.php"
}, {
	height: 0,
	position: "absolute",
	visibility: "hidden",
	width: 0
});
document.body.appendChild(element);

//<img alt="" src="../../pixel.php" style="height: 0; position: absolute; visibility: hidden; width: 0;">
```

### Features

##### 1. Using _`properties.classList`_

```js
var element = jCat.createElement("span", {
	classList: "text"
});
document.body.appendChild(element);

//<span class="text"></span>
```
```js
var element = jCat.createElement("span.text", {
	classList: "foo bar"
});
document.body.appendChild(element);

//<span class="text foo bar"></span>
```
```js
var element = jCat.createElement("span.text", {
	classList: ["foo", "bar"]
});
document.body.appendChild(element);

//<span class="text foo bar"></span>
```

##### 2. Overriding properties

```js
var element = jCat.createElement("span#text-1#text-2");
document.body.appendChild(element);

//<span id="text-2"></span>
```
```js
var element = jCat.createElement("span#text-1.foo.bar#text-2");
document.body.appendChild(element);

//<span id="text-2"></span>
```
```js
var element = jCat.createElement("span.foo.bar", {
	className: "text"
});
document.body.appendChild(element);

//<span class="text"></span>
```
```js
var element = jCat.createElement("span.text", {
	classList: ["foo", "bar"],
	className: ""
});
document.body.appendChild(element);

//<span class=""></span>
```
```js
var element = jCat.createElement("span#text-1", {
	id: "text-2"
});
document.body.appendChild(element);

//<span id="text-2"></span>
```
```js
var element = jCat.createElement("span#text-1#text-2", {
	id: "text-3"
});
document.body.appendChild(element);

//<span id="text-3"></span>
```

##### 3. Ignoring properties

_If there is no property in the element prototype or it is not «setter», then it will be ignored._

```js
var element = jCat.createElement("span#text", {
	
	//Not ignored. This «setter» exists in the element prototype
	onclick: function() {
		alert("Hello World!");
	},
	
	//Ignored. This property does not exist in the element prototype
	customProperty: "Hello world!",
	
	//Not ignored. This «setter» exists in the element prototype
	hidden: true,
	
	//Ignored, because the «insertBefore» is the method from the element prototype.
	//Do not override any methods from the element prototype!
	insertBefore: null,
	
	//Properties are ignored, because «parentNode» and «tagName» are only «getter».
	parentNode: document.body,
	tagName: "div"
	
});
```

## License

[MIT](./LICENSE)

## Languages

![](./assets/flag-eng.png) English  [![](./assets/flag-ru.png) Русский](./README.ru.md)