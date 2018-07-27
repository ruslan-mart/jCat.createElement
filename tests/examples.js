document.addEventListener('DOMContentLoaded', function () {

	var container = document.getElementById('container');

	/*
		Create a element without params
		Setting "div" for first param by default
		Result: <div></div>
	*/
	var elem_1 = jCat.createElement();
	container.appendChild(elem_1);


	/*
		Create a span-element
		Result: <span></span>
	*/
	var elem_2 = jCat.createElement('span');
	container.appendChild(elem_2);


	/*
		Create a element with the className "foo"
		Setting "div" for "tagName" by default
		Result: <div class="foo"></div>
	*/
	var elem_3 = jCat.createElement('.foo');
	container.appendChild(elem_3);


	/*
		Create a span-element with the className "bar"
		Result: <span class="bar"></span>
	*/
	var elem_4 = jCat.createElement('span.bar');
	container.appendChild(elem_4);


	/*
		Create a div-element with the className "foo bar"
		Result: <div class="foo bar"></div>
	*/
	var elem_5 = jCat.createElement('div.foo.bar');
	container.appendChild(elem_5);


	/*
		Create a span-element with the id "text-1"
		Result: <span id="text-1"></span>
	*/
	var elem_6 = jCat.createElement('span#text-1');
	container.appendChild(elem_6);


	/*
		Create a span-element with the id "text-2" and className "foo"
		Result: <span id="text-2" class="foo"></span>
	*/
	var elem_7 = jCat.createElement('span#text-2.foo');
	container.appendChild(elem_7);


	/*
		Create a span-element with the id "text-3" and className "bar"
		Result: <spanid="text-3" class="bar" ></span>
	*/
	var elem_8 = jCat.createElement('span.bar#text-3');
	container.appendChild(elem_8);


	/*
		Create a span-element with the id "text-4" and className "foo bar"
		Result: <spanid="text-4" class="foo bar" ></span>
	*/
	var elem_9 = jCat.createElement('span.foo#text-4.bar');
	container.appendChild(elem_9);


	/*
		Create a element with the id "box-1"
		Setting "div" for "tagName" by default
		Result: <div id="box-1"></div>
	*/
	var elem_10 = jCat.createElement('#box-1');
	container.appendChild(elem_10);


	/*
		Create a element with the id "box-2" and className "foo bar baz"
		Setting "div" for "tagName" by default
		Result: <div id="box-2" class="foo bar baz"></div>
	*/
	var elem_11 = jCat.createElement('#box-2.foo.bar.baz');
	container.appendChild(elem_11);


	/*
		Create a element with the id "box-3" and className "foo bar baz"
		Setting "div" for "tagName" by default
		Result: <div id="box-3" class="foo bar baz"></div>
	*/
	var elem_12 = jCat.createElement('.foo.bar.baz#box-3');
	container.appendChild(elem_12);


	/*
		Create a element with the id "box-4" and className "foo bar baz"
		Setting "div" for "tagName" by default
		Result: <div id="box-4" class="foo bar baz"></div>
	*/
	var elem_13 = jCat.createElement('.foo#box-4.bar.baz');
	container.appendChild(elem_13);


	/*
		Create a div-element with the className "box" and properties: "textContent", "title"
		Result: <div class="box" title="Hello">Hello world!</div>
	*/
	var elem_14 = jCat.createElement('div.box', {
		textContent: 'Hello world!',
		title: 'Hello'
	});
	container.appendChild(elem_14);


	/*
		Create a element with the className "box" and property "innerHTML"
		Setting "div" for "tagName" by default
		Result: <div class="box"><b>This text is bold!</b></div>
	*/
	var elem_15 = jCat.createElement('.box', {
		innerHTML: '<b>This text is bold!</b>'
	});
	container.appendChild(elem_15);


	/*
		Create a anchor-element with the className "link" and properties: "href", "target", "textContent"
		Result: <a class="link" href="https://google.com" target="_blank">Click me</a>
	*/
	var elem_16 = jCat.createElement('a.link', {
		href: 'https://google.com',
		target: '_blank',
		textContent: 'Click me'
	});
	container.appendChild(elem_16);


	/*
		Create a div-element with the property "innerHTNL"
		Result: <div><i>Italic</i> and <b>bold</b></div>
	*/
	var elem_17 = jCat.createElement('div', '<i>Italic</i> and <b>bold</b>');
	container.appendChild(elem_17);


	/*
		Create a element with the property "innerHTNL"
		Setting "div" for first param by default
		Result: <div>This is div-element</div>
	*/
	var elem_18 = jCat.createElement(null, 'This is div-element');
	container.appendChild(elem_18);


	/*
		Create a element with the property "innerHTNL"
		Setting "div" for "tagName" by default
		Result: <div>This is div-element</div>
	*/
	var elem_19 = jCat.createElement('', 'This is div-element');
	container.appendChild(elem_19);


	/*
		Create a element with the className "foo bar" and property "innerHTML"
		Setting "div" for "tagName" by default
		Result: <div class="foo bar">This is div-element</div>
	*/
	var elem_20 = jCat.createElement('.foo', {
		classList: 'bar',
		innerHTML: 'This is div-element'
	});
	container.appendChild(elem_20);


	/*
		Create a element with the className "foo bar baz" and property "innerHTML"
		Setting "div" for "tagName" by default
		Result: <div class="foo bar baz">This is div-element</div>
	*/
	var elem_21 = jCat.createElement('.foo', {
		classList: ['bar', 'baz'],
		innerHTML: 'This is div-element'
	});
	container.appendChild(elem_21);


	/*
		Create a anchor-element with the className "foo bar baz" and properties: "href", "id", "innerHTML"
		Result: <a class="foo bar baz">This is anchor</a>
	*/
	var elem_22 = jCat.createElement('a.foo', {
		classList: ['bar', 'baz'],
		href: '#',
		id: 'link-1',
		innerHTML: 'This is anchor'
	});
	container.appendChild(elem_22);


	/*
		Create a span-element with the className "foo bar" and property "innerHTML" and param "styles"
		Result: <span class="foo bar" style="background-color: #E7D9BB; text-decotation: underline;">Span-element with the styles</span>
	*/
	var elem_23 = jCat.createElement('span.foo.bar', 'Span-element with the styles', {
		backgroundColor: '#E7D9BB',
		textDecoration: 'underline'
	});
	container.appendChild(elem_23);


	/*
		Create a element with the className "bar baz" and property "innerHTML" and param "styles" by cssText string
		Setting "div" for "tagName" by default
		Result: <div class="bar baz" style="background-color: #D6D9E7; text-align: center;">This is styled div-element</div>
	*/
	var elem_24 = jCat.createElement('.bar.baz', 'This is styled div-element', 'background-color:#D6D9E7;text-align:center');
	container.appendChild(elem_24);


	/*
		Create a anchor-element with the className "foo bar baz link" and properties: "href", "id", "innerHTML", "target"; and param "styles".
		Result: <a class="foo bar baz link" id="link-2" style="background-color: AA5470; color: #FFF; font-weight: bold; text-align: center;">This is super anchor, click me!</a>
	*/
	var elem_25 = jCat.createElement('a.foo#link-2.bar', {
		classList: ['baz', 'link'],
		href: '#',
		innerHTML: 'This is super anchor, click me!',
		onclick: function() {
			alert('Thank you!');
			return false;
		}
	}, {
		backgroundColor: '#AA5470',
		color: '#FFF',
		fontWeight: 'bold',
		textAlign: 'center'
	});
	container.appendChild(elem_25);

});