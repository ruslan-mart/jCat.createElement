const DEFAULT_SELECTOR = 'div';
const DEFAULT_TAG_NAME = 'div';

const SELECTOR_PATTERN = /^([\w-]*)((?:[.#][\w-]+)*)$/;


let createElement = {

	parseSelector(selector) {

		if (selector === null) {
			selector = DEFAULT_SELECTOR;
		}

		let matches = SELECTOR_PATTERN.exec(selector);

		if (matches !== null) {

			let classList = [],
				id = null,
				selectorItems = matches[2],
				tagName = matches[1] || DEFAULT_TAG_NAME;

			if (selectorItems !== '') {

				selectorItems = selectorItems.split(/(?=[.#])/);

				for (let i = 0; i !== selectorItems.length; i++) {

					let item = selectorItems[i],
						value = item.substring(1);

					if (item.charAt(0) === '.') {
						classList.push(value);
					}
					else {
						id = value;
					}

				}

			}

			return {
				classList,
				id,
				tagName
			};

		}
		else {
			throw new Error(`Create element error: invalid selector '${selector}'`);
		}
	},

	setProperties(element, properties) {
		let nodeParentProto = Object.getPrototypeOf(Node).prototype,
			object = element;

		do {
			for (let key in properties) {
				if (properties.hasOwnProperty(key)) {
					let descriptor = Object.getOwnPropertyDescriptor(object, key);

					if (descriptor && typeof descriptor.set === 'function') {
						element[key] = properties[key];
					}

				}
			}

			object = Object.getPrototypeOf(object);
		}
		while (object !== nodeParentProto && object !== null);
	},

	setStyles(element, styles) {
		for (let key in styles) {
			if (styles.hasOwnProperty(key)) {
				element.style[key] = styles[key];
			}
		}
	}

};


export default (selector = null, properties = null, styles = null) => {

	let data = createElement.parseSelector(selector),
		element = document.createElement(data.tagName),
		{classList} = data;

	if (data.id !== null) {
		element.id = data.id;
	}

	if (properties !== null && typeof properties === 'object' && 'classList' in properties) {

		let classListProperty = properties.classList;

		if (classListProperty !== null) {
			classList = classList.concat(classListProperty instanceof Array ? classListProperty : classListProperty.toString());
		}

		delete properties.classList;
	}

	if (classList.length !== 0) {
		element.className = classList.join(' ');
	}

	if (properties !== null) {
		switch (typeof properties) {

			case 'object':
				createElement.setProperties(element, properties);
				break;

			case 'string':
			case 'number':
				element.innerHTML = properties;
				break;

			default:
				throw new TypeError(`Invalid parameter 'content | properties', it is expected: 'object', 'string', 'number' or 'null'.`);
		}

	}

	if (styles !== null) {

		switch (typeof styles) {

			case 'object':
				createElement.setStyles(element, styles);
				break;

			case 'string':
				element.style.cssText = styles;
				break;

			default:
				throw new TypeError(`Invalid parameter 'styles', it is expected: 'object', 'string', or 'null'.`);
		}

	}

	return element;
}
