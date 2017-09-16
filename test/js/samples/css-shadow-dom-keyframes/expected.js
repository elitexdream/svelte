import { appendNode, assign, createElement, createText, detachNode, insertNode, noop, proto } from "svelte/shared.js";

function create_main_fragment(state, component) {
	var div, text;

	return {
		create: function() {
			div = createElement("div");
			text = createText("fades in");
		},

		mount: function(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(text, div);
		},

		update: noop,

		unmount: function() {
			detachNode(div);
		},

		destroy: noop
	};
}

class SvelteComponent extends HTMLElement {
	constructor(options = {}) {
		super();
		this.options = options;
		this._state = options.data || {};

		this._observers = {
			pre: Object.create(null),
			post: Object.create(null)
		};

		this._handlers = Object.create(null);

		this._root = options._root || this;
		this._yield = options._yield;
		this._bind = options._bind;

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `<style>div{animation:foo 1s}@keyframes foo{0%{opacity:0}100%{opacity:1}}</style>`;

		this._fragment = create_main_fragment(this._state, this);

		this._fragment.create();
		this._fragment.mount(this.shadowRoot, null);

		if (options.target) this._mount(options.target, options.anchor || null);
	}

	static get observedAttributes() {
		return [];
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		this.set({ [attr]: newValue });
	}
}

customElements.define("custom-element", SvelteComponent);
assign(SvelteComponent.prototype, proto, {
	_mount(target, anchor) {
		target.insertBefore(this, anchor);
	},

	_unmount() {
		this.parentNode.removeChild(this);
	}
});

export default SvelteComponent;