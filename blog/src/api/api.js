export class Api {
    getRecentBlogByPage = async ()=>{
        let res = await this.$http.get("blog/recentBlogByPage");
        return res;
    }
    // 小程序登录
     login = async () => {
        let code = await this.tempLogin();
        let res = await flyio.post("/login", {code: code})
        uni.setStorageSync('token',res.data.data);
        return res; 
    }
}
    
export default new Api();