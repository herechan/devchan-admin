import  'element-ui/lib/theme-chalk/index.css';
import siderbar from "@siderbar/index.vue"
import ElementUI from 'element-ui'; 
import Editor from "@twitter/editor.vue"
import '@assets/common.scss'
import  "./index.scss"
Vue.use(ElementUI)
new Vue({
    el:".multi-wrap",
    data:{
        name:'Casper'
    },
    components:{
        siderbar,
        Editor
    },
    mounted() {
        // document.querySelector(".temp").style.display = 'block'
        console.log(defineName)
    },
})
