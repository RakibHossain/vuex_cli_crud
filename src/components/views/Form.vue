<template>

	<div class="container">

		<div class="form-inline">
			<label for="country" class="mb-2 mr-sm-2">Select Country:</label>
			<select class="form-control mb-2 mr-sm-2" id="country" @change="getCountryCity">
				<option value="">Select Option</option>
				<option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name }}</option>
			</select>
			<label for="city" class="mb-2 mr-sm-2">Select City:</label>
			<select class="form-control mb-2 mr-sm-2" id="city">
				<option value="">Select Option</option>
			</select>
		</div>

		<div class="form-inline">
			<label for="name" class="mb-2 mr-sm-2">What's your name ? </label>
			<input type="text" @input="changed" v-model="name" class="form-control mb-2 mr-sm-2" placeholder="enter your name" />
			<button @click="pressed" class="btn btn-info mb-2">Increment Counter</button>
		</div>

		<Display></Display>

		<div class="toggle">
			<p v-if="seen">Message Can Be Seen !</p>
			<p><button class="btn btn-danger mb-2" v-on:click="seen = !seen">Toggle</button></p>
		</div>

		<hr>
		<UploadImage></UploadImage>

		<hr>
		<AddMore></AddMore>

	</div>

</template>

<script>

import { mapGetters } from 'vuex'
import Display from './Display.vue'
import AddMore from './AddMore.vue'
import UploadImage from './UploadImage.vue'

export default {
	name: 'Form',
	components: {
		Display,
		AddMore,
		UploadImage
	},
	data() {
		return {
			name: '',
			seen: true,
			country: '',
			city: ''
		}
	},
	methods: {
		changed(event) {
			var input_value = event.target.value
			this.$store.dispatch('change', input_value)
		},
		pressed() {
			this.$store.dispatch('increment', 1)
		},
		getCountryCity(event) {
			var country_id = event.target.selectedIndex
			this.$store.dispatch('getCountryCity', country_id)
		}
	},
	computed: mapGetters([
		'countries', 'country_cities'
	])
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-inline {
	position: relative;
	top: 20px;
}

.toggle {
	position: relative;
	top: 20px;
}

</style>
