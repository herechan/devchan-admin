import  'element-ui/lib/theme-chalk/index.css';
import siderbar from "@siderbar/index.vue"
import ElementUI from 'element-ui'; 
import '@assets/common.scss'
import  "./index.scss"
import axios from 'axios'
// SSNI-518
Vue.use(ElementUI)
new Vue({
    el:".multi-wrap",
    data:{
        name:'Casper',
        releaseBranch:'',
        releaseInfo:'',
        noUpdate: true,
        releaseProject: ''
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
            this.releaseInfo = `正在检查${this.releaseBranch}分支的更新...`
            this.noUpdate = false
            axios.get(`${RELEASE_API}/checkUpdate`,{
                params:{
                    branch: this.releaseBranch || 'master',
                    project: this.releaseProject
                }
            })
            .then(r=>{
                // console.log(r)
                if (r.status === 200) {
                    this.releaseInfo = r.data
                }
            }).catch(e=>{

            })
        },
        versionReplace(){
            // this.$confirm
        },
        releaseTest(){
            this.$confirm('确认发布到测试环境吗？', '提示',{
                'confirmButtonText': '确定',
                'cancelButtonText': '取消',
                'type': 'warning',
                closeOnClickModal: false
            }).then(() => {
                // this.$message({
                //   type: 'success',
                //   message: '开始发布测试环境!'
                // });
                // axios.get(`${RELEASE_API}/`)
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '取消发布'
                });          
              });
        },
        releaseOnline(){
            this.$confirm('确认发布到正式环境吗？', '提示',{
                'confirmButtonText': '确定',
                'cancelButtonText': '取消',
                'type': 'warning',
                closeOnClickModal:false
            }).then(() => {
                this.$message({
                  type: 'success',
                  message: '开始发布正式环境!'
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
