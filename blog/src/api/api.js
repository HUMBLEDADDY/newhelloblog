export class Api {
    getRecentBlogByPage = async ()=>{
        let res = await this.$http.get("blog/recentBlogByPage");
        return res;
    }
}
    
export default new Api();