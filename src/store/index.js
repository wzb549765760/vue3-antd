import { createStore } from 'vuex'

import * as types from './action-types'

import * as api from '../api'

export default createStore({
    state: {
        planList: [],
    },
    getters: {
        allTime() {
            return 0
        },
    },
    mutations: {
        [types.ADD_PLAN](state, payload) {
            state.planList = [...state.planList, payload]
        },
        [types.DELECTE_PLAN](state, payload) {
            state.planList.filter((item) => {
                return item.id != payload.id;
            })
        },
        [types.SET_PLAN_LIST](state, payload) {
            state.planList = payload;
        },
    },
    actions: {
        async [types.ADD_PLAN]({ commit }, payload) {
            let plan = await api.addPlan(payload)
            commit(types.ADD_PLAN, plan)
        },
        async [types.DELECTE_PLAN]({ commit }, payload) {
            let plan = await api.delectePlan(payload)
            commit(types.DELECTE_PLAN, plan)
        },
        async [types.SET_PLAN_LIST]({ commit }, payload) {
            console.log(123);
            let plan = await api.getPlanList(payload)
            commit(types.SET_PLAN_LIST, plan)
        },
    },
    modules: {},
})