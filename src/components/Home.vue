<template>

	<div class="container">

		<center>
			<h1>{{ message }}</h1>
			<Qrcode :background="background" :size="size" :cls="qrCls" :value="qrText"></Qrcode>
		</center>
		
	</div>

</template>

<script>

import Qrcode from 'v-qrcode/src/index'

export default {
	name: 'Home',
	components: {
		Qrcode
	},
	data() {
		return {
			qrCls: 'qrcode',
			qrText: 'Hello World! This is VueJS QRCode Scanner.',
			size: 200,
			background: '#E91E63',
			message: 'Welcome To The Vue JS World !!!'
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
