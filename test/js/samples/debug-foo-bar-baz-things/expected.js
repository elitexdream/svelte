/* generated by Svelte vX.Y.Z */
import { SvelteComponentDev, addLoc, append, createElement, createText, destroyEach, detachNode, flush, init, insert, run, safe_not_equal, setData } from "svelte/internal";

const file = undefined;

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.thing = list[i];
	return child_ctx;
}

// (1:0) {#each things as thing}
function create_each_block(component, ctx) {
	var span, text0_value = ctx.thing.name, text0, text1;

	return {
		c: function create() {
			span = createElement("span");
			text0 = createText(text0_value);
			text1 = createText("\n\t");

			{
				const { foo, bar, baz, thing } = ctx;
				console.log({ foo, bar, baz, thing });
				debugger;
			}
			addLoc(span, file, 1, 1, 25);
		},

		m: function mount(target, anchor) {
			insert(target, span, anchor);
			append(span, text0);
			insert(target, text1, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.things) && text0_value !== (text0_value = ctx.thing.name)) {
				setData(text0, text0_value);
			}

			if (changed.foo || changed.bar || changed.baz || changed.things) {
				const { foo, bar, baz, thing } = ctx;
				console.log({ foo, bar, baz, thing });
				debugger;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				detachNode(span);
				detachNode(text1);
			}
		}
	};
}

function create_fragment(component, ctx) {
	var text0, p, text1, text2, current;

	var each_value = ctx.things;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text0 = createText("\n\n");
			p = createElement("p");
			text1 = createText("foo: ");
			text2 = createText(ctx.foo);
			addLoc(p, file, 5, 0, 91);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, text0, anchor);
			insert(target, p, anchor);
			append(p, text1);
			append(p, text2);
			current = true;
		},

		p: function update(changed, ctx) {
			if (changed.things) {
				each_value = ctx.things;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(text0.parentNode, text0);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if (changed.foo) {
				setData(text2, ctx.foo);
			}
		},

		i: function intro(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d: function destroy(detach) {
			destroyEach(each_blocks, detach);

			if (detach) {
				detachNode(text0);
				detachNode(p);
			}
		}
	};
}

function instance($$self, $$props) {
	let { things, foo, bar, baz } = $$props;

	$$self.$$.set = $$props => {
		if ('things' in $$props) things = $$props.things;
		if ('foo' in $$props) foo = $$props.foo;
		if ('bar' in $$props) bar = $$props.bar;
		if ('baz' in $$props) baz = $$props.baz;
	};

	return { things, foo, bar, baz };
}

class SvelteComponent extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.things === undefined && !('things' in props)) {
			console.warn("<SvelteComponent> was created without expected prop 'things'");
		}
		if (ctx.foo === undefined && !('foo' in props)) {
			console.warn("<SvelteComponent> was created without expected prop 'foo'");
		}
		if (ctx.bar === undefined && !('bar' in props)) {
			console.warn("<SvelteComponent> was created without expected prop 'bar'");
		}
		if (ctx.baz === undefined && !('baz' in props)) {
			console.warn("<SvelteComponent> was created without expected prop 'baz'");
		}
	}

	get things() {
		return this.$$.ctx.things;
	}

	set things(things) {
		this.$set({ things });
		flush();
	}

	get foo() {
		return this.$$.ctx.foo;
	}

	set foo(foo) {
		this.$set({ foo });
		flush();
	}

	get bar() {
		return this.$$.ctx.bar;
	}

	set bar(bar) {
		this.$set({ bar });
		flush();
	}

	get baz() {
		return this.$$.ctx.baz;
	}

	set baz(baz) {
		this.$set({ baz });
		flush();
	}
}

export default SvelteComponent;