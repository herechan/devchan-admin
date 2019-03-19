import indexLess from "./index.less"
import Vue from 'vue'
import siderbar from "siderbarPath/index.vue"
// document.body.appendChild(siderbar.render())
const siderbarGen = Vue.extend(siderbar)
new siderbarGen().$mount('.temp')
