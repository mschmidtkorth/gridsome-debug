<template>
	<div>
		<header>
			<g-link to="/">HOME</g-link>&nbsp;
			<g-link to="/pagea">PAGE-A</g-link>&nbsp;
			<g-link to="/pageb">PAGE-B</g-link>&nbsp;
			<g-link to="/pagec">PAGE-C</g-link>
		</header>

		<slot />
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>