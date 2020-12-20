<template>
  <div class="main">
    <div class="head">
      <div class="indexlogo m-l-7 m-t-7 m-r-1"></div>
      <div class="bloginfo">
        <div class="logoname fs-11">ONEBLOG</div>
        <div class="mydream">{{ words.join("") }}</div>
      </div>
    </div>
    <!-- <div class="content">
      <div class="directory">
        <div class="function">
          <router-link class="nav-link" tag="div" to="/">Home</router-link>
        </div>
        <div class="function">
          <router-link class="nav-link" tag="div" to="/category"
            >Group by tag</router-link
          >
        </div>
        <div class="function">
          <router-link class="nav-link" tag="div" to="/date"
            >Group by year</router-link
          >
        </div>
      </div>
      <div class="maincontent">
        <router-view></router-view>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss">
.main {
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  .head {
    position: fixed;
    width: 80vw;
    height: 200px;
    .indexlogo {
      float:left;
      opacity: 0;
      animation: logoin 1s forwards;
      width: 100px; 
      height: 100px;
      border-radius: 150px;
      background-image: url(../assets/indexlogo.jpg);
      background-position: -9px -10px;
      background-size: 120%;
      background-repeat: no-repeat;
      position: relative;
    }
    .bloginfo{
      float: left;
      width: 150px;
      top: 50px;
      position: relative;
      .logoname {
        position: relative;
        letter-spacing: 5px;
        font-weight: bold;
      }
      .mydream {
        display: inline-block;
        color: rgb(201, 201, 201);
        margin-top: 2vh;
        font-size: 0.9em;
        white-space: nowrap;
        animation: blink-caret 0.75s infinite;
        border-right: 2px solid transparent;
        overflow: hidden;
      }
    }
    .writter,
    .studio {
      font-size: 0.3em;
      font-weight: lighter;
      color: rgb(53, 53, 53);
      position: absolute;
    }
    .writter {
      bottom: 50px;
    }
    .studio {
      bottom: 20px;
    }
  }
  .content {
    height: 100vh;
    width: 80%;
    position: relative;
    float: right;
    animation: contentin 1s forwards;
    .directory {
      position: relative;
      height: 10vh;
      width: 100%;
      border-bottom: 1px solid rgb(235, 235, 235);
      display: flex;
      line-height: 10vh;
      left: -1px;
      z-index: 1000;
      .function {
        position: relative;
        width: 150px;
        transition: 1s;
        transform-style: preserve-3d;
        z-index: 10;
        .nav-link {
          color: rgb(102, 102, 102);
          font-size: 1.1em;
          transition: 1s;
          letter-spacing: 1px;
          cursor: pointer;
        }
      }
      .function:hover {
        width: 200px;
        transition: 1s;
      }
      .function:hover .nav-link {
        letter-spacing: 5px;
        text-decoration: none;
        color: #fff;
        transition: 1s;
      }
      .function:hover::after {
        top: -102%;
        transition: 1s;
      }
      .function::after {
        transform: translateZ(-1px);
        position: relative;
        transition: 1s;
        top: -202%;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: #49726c;
      }
    }
    .maincontent {
      background-color: #f5f5f5;
      height: 90vh;
    }
  }
}


</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      words: [], //字母数组push，pop的载体
      str: "May The Force Be With You", //str初始化
      letters: [], //str分解后的字母数组
      order: 1, //表示当前是第几句话
    };
  },
  mounted() {
    //页面初次加载后调用begin()开始动画
    this.begin();
  },
  methods: {
    //开始输入的效果动画
    begin() {
      this.letters = this.str.split("");
      for (var i = 0; i < this.letters.length; i++) {
        setTimeout(this.write(i), i * 100);
      }
    },
    //开始删除的效果动画
    back() {
      let L = this.letters.length;
      for (var i = 0; i < L; i++) {
        setTimeout(this.wipe(i), i * 50);
      }
    },
    //输入字母
    write(i) {
      return () => {
        let L = this.letters.length;
        this.words.push(this.letters[i]);
        let that = this;
        /*如果输入完毕，在2s后开始删除*/
        if (i == L - 1) {
          setTimeout(function() {
            that.back();
          }, 2000);
        }
      };
    },
    //擦掉(删除)字母
    wipe(i) {
      return () => {
        this.words.pop(this.letters[i]);
        /*如果删除完毕，在300ms后开始输入*/
        if (this.words.length == 0) {
          this.order++;
          let that = this;
          setTimeout(function() {
            that.begin();
          }, 300);
        }
      };
    },
  },
};
</script>
