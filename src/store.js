import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url="";
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    
    addPackage(context,values){
      const url="http://localhost:9000/packages"
      console.log(15,values)
      axios.post(url,values)
           .then(function(response){
                  console.log(response)
            }).catch(function(error){
           console.log(error.response);
            })
    }
  }
})
