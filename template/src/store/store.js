import Vue from "vue"{{#if_eq lintConfig "airbnb"}};{{/if_eq}}  
import Vuex from "vuex"{{#if_eq lintConfig "airbnb"}};{{/if_eq}}  

export const store = new Vuex.Store({
  //All data goes in to this object
  state: {
    count: 0
  },
  
  //all changing of data happens in here (no async)
  mutations: {
    increment (state) {
      state.count++{{#if_eq lintConfig "airbnb"}};{{/if_eq}} 
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}  
  },
  
  //if async is needed in datachaingn make method here an call the mutation when it is done.
  actions: {
  
  },
  
  //if data needs to be returned in another format e.g.
  getters: {
    getCount (state){
      return state.count{{#if_eq lintConfig "airbnb"}};{{/if_eq}} 
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}  
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}  
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}  
