import Vue from 'vue'
import Vuex from 'vuex'
import TestModule from './TestModule'
import TodoModule from './TodoModule'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		testModule: TestModule,
		todoModule: TodoModule
	}
})

export default store
