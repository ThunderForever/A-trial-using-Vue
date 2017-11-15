import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    note:[],
    activeNote:{}
}

const mutations={}

export default new Vuex.Store({
    state,
    mutations
})
