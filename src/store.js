import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const url="http://localhost:9000/packages"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    packageList:[]
  },
  mutations: {
    setPackageList(state,data){
      state.packageList=data
    }
  },
  actions: {
    
    addPackage(context,values){
      
      console.log(15,values)
      axios.post(url,values)
           .then(function(response){
                  console.log(response)
            }).catch(function(error){
           console.log(error.response);
            })
    },
    getPackageInfos(context){
      axios.get(url).then(
        function(response){
            console.log("29",response.data)
            context.commit('setPackageList',response.data)
        }).catch(
        function(error){
            console.log(error)
    });    
    }
  }
})
