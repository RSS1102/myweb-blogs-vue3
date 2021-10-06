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
    //直接修改值
    mutations:{
        //传输用户信息
        setUser(state,step){
            state.user.username=step
            //    用户信息持久化(应该设置过期时间)
            localStorage.setItem('username',step)

        },



    },
    //Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    actions:{

    },
    //方便直接生成一些可以直接用的数据
    getters:{
        getUser(){
            return this.state.user
        },



    }
})