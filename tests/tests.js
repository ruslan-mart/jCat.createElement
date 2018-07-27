(function() {
	'use strict';

	var elem;


	elem = jCat.createElement();
	console.log(
		elem.tagName.toLowerCase() === 'div' && elem.className === '' && elem.id === ''
	);


	elem = jCat.createElement(null);
	console.log(
		elem.tagName.toLowerCase() === 'div' && elem.className === '' && elem.id === ''
	);


	elem = jCat.createElement(undefined);
	console.log(
		elem.tagName.toLowerCase() === 'div' && elem.className === '' && elem.id === ''
	);


	elem = jCat.createElement('');
	console.log(
		elem.tagName.toLowerCase() === 'div' && elem.className === '' && elem.id === ''
	);


	elem = jCat.createElement('div');
	console.log(
		elem.tagName.toLowerCase() === 'div' && elem.className === '' && elem.id === ''
	);


	elem = jCat.createElement('span');
	console.log(
		elem.tagName.toLowerCase() === 'span' && elem.className === '' && elem.id === ''
	);


	elem = jCat.createElement('#test');
	console.log(
		elem.tagName.toLowerCase() === 'div' && elem.className === '' && elem.id === 'test'
	);


	elem = jCat.createElement('div#test');
	console.log(
		elem.tagName.toLowerCase() === 'div' && elem.className === '' && elem.id === 'test'
	);


	elem = jCat.createElement('.foo');
	console.log(
		elem.tagName.toLowerCase() === 'div' && elem.className === 'foo' && elem.id === ''
	);


	elem = jCat.createElement('div.foo.bar');
	console.log(
		elem.tagName.toLowerCase() === 'div' && elem.className === 'foo bar' && elem.id === ''
	);


	elem = jCat.createElement('span.foo.bar#test');
	console.log(
		elem.tagName.toLowerCase() === 'span' && elem.className === 'foo bar' && elem.id === 'test'
	);


	elem = jCat.createElement('div', {
		title: 'Test'
	});
	console.log(
		elem.title === 'Test'
	);


	elem = jCat.createElement('#test', {
		title: 'Test'
	});
	console.log(
		elem.id ==='test' && elem.title === 'Test'
	);


	elem = jCat.createElement('#foo', {
		id: 'bar'
	});
	console.log(
		elem.id === 'bar'
	);


	elem = jCat.createElement('.foo.bar', {
		className: 'block-1 block-2'
	});
	console.log(
		elem.className === 'block-1 block-2'
	);


	elem = jCat.createElement('.foo.bar#test', {
		className: 'block-1 block-2'
	});
	console.log(
		elem.className === 'block-1 block-2' && elem.id === 'test'
	);


	elem = jCat.createElement('.foo.bar#test', {
		className: 'block-1 block-2'
	});
	console.log(
		elem.className === 'block-1 block-2' && elem.id === 'test'
	);


	elem = jCat.createElement('.foo.bar#test', {
		className: 'block-1 block-2',
		id: 'my-div'
	});
	console.log(
		elem.className === 'block-1 block-2' && elem.id === 'my-div'
	);


	elem = jCat.createElement('.foo.bar', {
		classList: 'baz'
	});
	console.log(
		elem.className === 'foo bar baz'
	);


	elem = jCat.createElement('.foo.bar', {
		classList: ['block-1', 'block-2']
	});
	console.log(
		elem.className === 'foo bar block-1 block-2'
	);


	elem = jCat.createElement('.foo.bar', {
		classList: 'block-1 block-2'
	});
	console.log(
		elem.className === 'foo bar block-1 block-2'
	);


	elem = jCat.createElement('.foo.bar', {
		classList: ['block-1', 'block-2'],
		className: 'block-3 block-4'
	});
	console.log(
		elem.className === 'block-3 block-4'
	);


	elem = jCat.createElement('span.foo', 'Hello world!');
	console.log(
		elem.tagName.toLowerCase() === 'span' && elem.className === 'foo' && elem.innerHTML === 'Hello world!'
	);


	elem = jCat.createElement('div', '<b>This text is bold</b>');
	console.log(
		elem.getElementsByTagName('b').length === 1
	);


	elem = jCat.createElement('.foo', 'Hello world!', {
		display: 'none',
		paddingLeft: '16px'
	});
	console.log(
		elem.style.display === 'none' && elem.style.paddingLeft === '16px'
	);


	elem = jCat.createElement('.foo', 'Hello world!', 'display:none; padding-left:16px;');
	console.log(
		elem.style.display === 'none' && elem.style.paddingLeft === '16px'
	);

})();