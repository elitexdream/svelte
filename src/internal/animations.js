import { identity as linear, noop } from './utils.js';
import { loop } from './loop.js';
import { create_rule, delete_rule } from './style_manager.js';

export function wrapAnimation(node, from, fn, params) {
	if (!from) return;

	const to = node.getBoundingClientRect();
	if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return;

	const {
		delay = 0,
		duration = 300,
		easing = linear,
		start: start_time = window.performance.now() + delay,
		end = start_time + duration,
		tick = noop,
		css
	} = fn(node, { from, to }, params);

	let running = true;
	let started = false;
	let name;

	const cssText = node.style.cssText;

	function start() {
		if (css) {
			if (delay) node.style.cssText = cssText;

			name = create_rule({ a: 0, b: 1, delta: 1, duration }, easing, css);

			node.style.animation = (node.style.animation || '')
				.split(', ')
				.filter(anim => anim && !/__svelte/.test(anim))
				.concat(`${name} ${duration}ms linear 1 forwards`)
				.join(', ');
		}

		started = true;
	}

	function stop() {
		if (css) delete_rule(node, name);
		running = false;
	}

	const { abort, promise } = loop(now => {
		if (!started && now >= start_time) {
			start();
		}

		if (started && now >= end) {
			tick(1, 0);
			stop();
		}

		if (!running) {
			return false;
		}

		if (started) {
			const p = now - start_time;
			const t = 0 + 1 * easing(p / duration);
			tick(t, 1 - t);
		}

		return true;
	});

	tick(0, 1);

	if (delay) {
		if (css) node.style.cssText += css(0, 1);
	} else {
		start();
	}

	// TODO just return the function
	return { stop };
}

export function fixPosition(node) {
	const style = getComputedStyle(node);

	if (style.position !== 'absolute' && style.position !== 'fixed') {
		const { width, height } = style;
		const a = node.getBoundingClientRect();
		node.style.position = 'absolute';
		node.style.width = width;
		node.style.height = height;
		const b = node.getBoundingClientRect();

		if (a.left !== b.left || a.top !== b.top) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
		}
	}
}