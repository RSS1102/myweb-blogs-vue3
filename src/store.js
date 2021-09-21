import Vue  from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export  default new Vuex.Store({
    //安全需求 Jwt验证

    state:{
        //用户
        user: {
            username:'',
        },

    },
    mutations:{
        //传输用户信息
        setUser(state,step){
            state.user.username=step
            //    用户信息持久化(应该设置过期时间)
            // window.localStorage.user.username= step
        },



    },
    actions:{

    },
})