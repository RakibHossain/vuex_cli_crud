<template>

	<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

		<!-- Brand/logo -->
		<router-link to="/" class="navbar-brand">Vue JS</router-link>

		<!-- Links -->
		<ul class="navbar-nav">
			<li class="nav-item">
				<router-link to="/vuex" class="nav-link">Vuex</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/axios" class="nav-link">Axios</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/gql" class="nav-link">GraphQL</router-link>
			</li>
		</ul>

		<marquee class="scroll">This is basic Vuex CLI CRUD</marquee>
		
	</nav>
	
</template>

<script>

export default {
	name: "Navbar",
}
	
</script>

<style scoped>

	.scroll {
		color: white;
	}

</style>
