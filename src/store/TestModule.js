const TestModule = {
	state: {
		name: '',
		count: 0,
		images: [],
		countries: [
			{
				'id': '1',
				'name': 'Bangladesh'
			},
			{
				'id': '2',
				'name': 'Pakistan'
			},
			{
				'id': '3',
				'name': 'India'
			}
		],
		cities: [
			{
				'id': '1',
				'country_id': '1',
				'name': 'Dhaka'
			},
			{
				'id': '2',
				'country_id': '1',
				'name': 'Chittagong'
			},
			{
				'id': '3',
				'country_id': '2',
				'name': 'Islamabad'
			},
			{
				'id': '4',
				'country_id': '2',
				'name': 'Karachi'
			},
			{
				'id': '5',
				'country_id': '3',
				'name': 'Delhi'
			},
			{
				'id': '5',
				'country_id': '3',
				'name': 'Kolkata'
			}
		],
		country_cities: []
	},
	mutations: {
		CHANGE(state, name) {
			state.name = name
		},
		INCREMENT(state, step) {
			state.count += step
		},
		UPLOAD_FILE(state, file) {
			var reader = new FileReader()
			reader.onload = (e) => {
				state.images.push(e.target.result)
			};

			reader.readAsDataURL(file)
		},
		REMOVE_FILE(state, index) {
			state.images.splice(index, 1)
		},
		GET_COUNTRY_CITY(state, country_id) {
			console.log(country_id)
		}
	},
	actions: {
		change(context, name) {
			context.commit('CHANGE', name)
		},
		increment(context, step) {
			context.commit('INCREMENT', step)
		},
		uploadFile(context, files) {
			if (!files.length) 
			{
				return;
			} 
			else 
			{
				for(var i = 0; i < files.length; i++) 
				{ 
					let file = files[i]
					context.commit('UPLOAD_FILE', file)
				}
			}
		},
		removeFile(context, index) {
			context.commit('REMOVE_FILE', index)
		},
		getCountryCity(context, country_id) {
			context.commit('GET_COUNTRY_CITY', country_id)
		}
	},
	getters: {
		name(state) {
			return state.name
		},
		counter(state) {
			return state.count
		},
		images(state) {
			return state.images
		},
		countries(state) {
			return state.countries
		},
		country_cities(state) {
			return state.country_cities
		}
	}
}

export default TestModule
