/* generated by Svelte vX.Y.Z */
import { assign, assignTrue, callAll, init, noop, proto } from "svelte/shared.js";

function data_1() {
	return {
	foo: 'bar'
};
}

function oncreate() {
	alert(JSON.stringify(data()));
};

function create_main_fragment(component, ctx) {

	return {
		c: noop,

		m: noop,

		p: noop,

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign(data_1(), options.data);

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(() => {
		oncreate.call(this);
		this.fire("update", { changed: assignTrue({}, this._state), current: this._state });
	});

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor, true);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;