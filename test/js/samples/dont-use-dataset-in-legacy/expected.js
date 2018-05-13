/* generated by Svelte vX.Y.Z */
import { assign, createElement, createText, detachNode, init, insertNode, proto, setAttribute } from "svelte/shared.js";

function create_main_fragment(component, ctx) {
	var div, text, div_1;

	return {
		c() {
			div = createElement("div");
			text = createText("\n");
			div_1 = createElement("div");
			setAttribute(div, "data-foo", "bar");
			setAttribute(div_1, "data-foo", ctx.bar);
		},

		m(target, anchor) {
			insertNode(div, target, anchor);
			insertNode(text, target, anchor);
			insertNode(div_1, target, anchor);
		},

		p(changed, ctx) {
			if (changed.bar) {
				setAttribute(div_1, "data-foo", ctx.bar);
			}
		},

		d(detach) {
			if (detach) {
				detachNode(div);
				detachNode(text);
				detachNode(div_1);
			}
		}
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;