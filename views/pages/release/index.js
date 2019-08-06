import  'element-ui/lib/theme-chalk/index.css';
import siderbar from "@siderbar/index.vue"
import ElementUI from 'element-ui'; 
import '@assets/common.scss'
import  "./index.scss"
import axios from 'axios'
Vue.use(ElementUI)
new Vue({
    el:".multi-wrap",
    data:{
        name:'Casper',
        releaseBranch:'',
        releaseInfo:'',
        noUpdate: true,
        releaseProject: '',
        env: ''
    },
    components:{
        siderbar,
    },
    mounted() {
        
    },
    methods: {
        checkUpdate() {
            if (!this.releaseProject) {
                return this.$message({
                    type: 'error',
                    message: '请选择要发布的项目'
                })
            }
            if (!this.releaseBranch) {
                return this.$message({
                    type: 'error',
                    message: '请选择要发布的分支'
                })
            }
            if (!this.env) {
                return this.$message({
                    type: 'error',
                    message: '请选择要发布的环境'
                })
            }
            const env = this.env === 'dev' ? '测试' : '线上'
            this.releaseInfo = `正在检查---${env}---${this.releaseBranch}---分支的更新...`
            axios.get(`${RELEASE_API}/checkUpdate`,{
                params:{
                    branch: this.releaseBranch || 'master',
                    project: this.releaseProject,
                    env: this.env
                }
            })
            .then(r=>{
                if (r.status === 200) {
                    this.releaseInfo = r.data.data
                    if(r.data.status === 1){
                        this.noUpdate = false
                    } else {
                        this.noUpdate = true
                    }
                }
            }).catch(e=>{

            })
        },
        versionReplace(){
            axios.get(`${RELEASE_API}/replaceVersion`, {
                params: {
                    branch: this.releaseBranch || 'master',
                    project: this.releaseProject,
                    env: this.env
                }
            }).then(r =>{
                if(r.status === 200){
                    this.releaseInfo = r.data.data
                    if(r.data.status === 1){
                        this.noUpdate = false
                    } else {
                        this.noUpdate = true
                    }
                }
            })
        },
        releaseTest(){
            this.$confirm('确认发布到测试环境吗？', '提示',{
                'confirmButtonText': '确定',
                'cancelButtonText': '取消',
                'type': 'warning',
                closeOnClickModal: false
            }).then(() => {
                axios.get(`${RELEASE_API}/releaseTest`)
                .then(r =>{
                    if(r.status === 200){

                    }
                })
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '取消发布'
                });          
              });
        },
        startRelease(){
            const env = this.env === 'dev' ? '测试' : '线上'
            this.$confirm(`确认发布到${env}环境吗？`, '提示',{
                'confirmButtonText': '确定',
                'cancelButtonText': '取消',
                'type': 'warning',
                closeOnClickModal:false
            }).then(() => {
                this.$message({
                  type: 'success',
                  message: '开始发布正式环境...'
                });
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '取消发布'
                });          
              });
        }
    },
})
