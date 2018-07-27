# jCat.createElement

<p align="center">
	<a href="#jcatcreateelement"><img alt="" src="./assets/logo.png"></a>
</p>

<p align="center">
	<a href="https://www.npmjs.com/package/jcat-create-element/"><img alt="" src="https://nodei.co/npm/jcat-create-element.png"></a>
</p>


## Описание
Создаёт элемент согласно параметру «[selector](#selector)», или `HTMLUnknownElement` если элемент неизвестен.

## Установка

**1.** Вы можете установить `jcat-create-element` и подключить как модуль

```
$ npm install jcat-create-element
```

```js
import {createElement} from "jcat-create-element";
```

**2.** Или подключить напрямую к сайту

```html
<script src="/path_to_libs/jCat.createElement.js"></script>
```

```html
<script src="/path_to_libs/jCat.createElement.min.js"></script>
```

## Синтаксис

```
jCat.createElement([selector[, content[, styles]]]);
jCat.createElement([selector[, properties[, styles]]]);
```

### Параметры

#### _`selector`_

Шаблон селектора для создания нового элемента. Тип параметра должен быть `string`. Если параметр равен `null`, `undefined`, `""` или вовсе не указан, то значением по умолчанию будет - `"div"`.

В шаблоне зелектора разрешено указывать:
+ *tagName* — тип элемента (`div`, `span`, `img` и другие). Если он присутствует, то обязательно должен быть в начале. Если же tagName отсутствует, то значением по умолчению будет - «div».
+ *className* — каждое имя класса должно быть указано с «.» (например: `.hello`, `.foo.bar`).
+ *id* — идентификатор должен начинаться с символа «#» и должен быть единственным (пример: `#test`, `#hello`). Если указано несколько идентификаторов, то будет применяться только последний, а остальные будут проигнорированы.

«_id_» и «_className_» могут быть объеденены в любом порядке.

#### _`content`_

Параметр типа `string`, который будет являться содержимым для нового элемента. Параметр работает аналогично свойству [`Element.prototype.innerHTML`](https://developer.mozilla.org/ru/docs/Web/API/Element/innerHTML), т.е. значение может быть HTML-разметкой.

#### _`properties`_

Параметр типа `object`, который содержит набор свойств для нового элемента. Допустимо указывать только те свойства, которые существуют в прототипе элемента как `setter`, любые другие свойства будут проигнорированы.

Additional Properties:

+ _`properties.classList`_ — дополнительный список имён классов. Дополнительные имена классов будут добавлены к уже существующимим у элемента именам классов. Тип значения должен быть `array`, либо `string` - в этом случае, имена классов разделяются пробелом.

#### _`styles`_

Параметр типа `object` или `string`. Если `object`, то он должен содержать набор стилей в формате `{propertyName: propertyValue, ...}`. А если строка - то она должна иметь формат `cssText`: `"property-name: property-value; ..."`.

### Возвращаемое значение

Возвращает элемент, согласно параметру «[selector](#selector)», или `HTMLUnknownElement` если элемент неизвестен.

## Примеры

### Создание элемента

##### 1. Создание обычного элемента

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

##### 2. Создание элемента по умолчанию

```js
var element = jCat.createElement();
document.body.appendChild(element);

console.log(element.tagName); // "DIV"
```
```js
var element = jCat.createElement(null); //параметр `selector` = null, undefined or ""
document.body.appendChild(element);

console.log(element.tagName); // "DIV"
```

##### 3. Создание элемента с использованием селектора

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
var element = jCat.createElement("p.foo#text.bar"); //.className и #id можно комбинировать в любом порядке 
document.body.appendChild(element);

//<p class="foo bar" id="text"></p>
```

##### 4. Создание элемента с содержимым

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

##### 5. Создание элемента с использованием свойств

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
	innerHTML: '<b>CLICK ME</b>',
	onclick: function() {
		alert("Hello world!");
	}
});
document.body.appendChild(element);

//<button class="my-button"><b>CLICK ME</b></button>
```

##### 6. Создание элемента с использованием стилей

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

##### 1. Использование _`properties.classList`_

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

##### 2. Переопределение свойств

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

##### 3. Игнорирование свойств

_Если свойство в прототипе элемента отсутствует или не является «setter», то оно будет проигнорировано._

```js
var element = jCat.createElement("span#text", {
	
	//Не игнорируется. Такой «setter» существует в прототипе элемента
	onclick: function() {
		alert("Hello World!");
	},
	
	//Игнорируется. Такого свойства не существует в прототипе элемента
	customProperty: "Hello world!",
	
	//Не игнорируется. Такой «setter» существует в прототипе элемента
	hidden: true,
	
	//Игнорируется, так как «insertBefore» является методом из прототипа элемента.
	//Методы из прототипа переопределять нельзя!
	insertBefore: null,
	
	//Свойства игнорируются, так как «parentNode» и «tagName» являются только «getter».
	parentNode: document.body,
	tagName: "div"
	
});
```

## Лецензия

[MIT](./LICENSE)

## Языки

[![](./assets/flag-eng.png) English](./README.md)  ![](./assets/flag-ru.png) Русский