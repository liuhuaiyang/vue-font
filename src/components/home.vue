<template>
  <el-container class="container">
    <el-header class="header">
    <el-row>
	    <el-col :span="12">
	      <div class="grid-content bg-purple">
	         <h3 style="color: white;float: left;">电商后台管理系统</h3>
	      </div>
	    </el-col>
	    <el-col :span="8" class="middle">
	      <el-menu :default-active="activeIndex2" class="el-menu-demo"
               mode="horizontal" @select="handleSelect" background-color="#b3c0d1"
               text-color="#fff" active-text-color="#ffd04b">
			  <el-menu-item index="1">处理中心</el-menu-item>
			  <el-submenu index="2">
			     <template slot="title">我的工作台</template>
			     <el-menu-item index="2-1">选项1</el-menu-item>
			     <el-menu-item index="2-2">选项2</el-menu-item>
			     <el-menu-item index="2-3">选项3</el-menu-item>
			  </el-submenu>
			  <el-menu-item index="3">消息中心</el-menu-item>
			  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		   </el-menu>
	    </el-col>
	    <el-col :span="2">
	      <div class="grid-content bg-purple">
	        <a class="logout" @click="logout()" href="#">登录</a>
	      </div>
	    </el-col>
	    <el-col :span="2">
	      <div class="grid-content bg-purple">
	        <a class="logout" @click="logout()" href="#">退出</a>
	      </div>
	    </el-col>
	  </el-row>
      
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="200px">
        <el-scrollbar class="aside_scroll">
          <el-menu class="el-menu-vertical-demo" :router="true">
          <!--  1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="HelloWorld">
              <i class="el-icon-check"></i>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>
          <!--  2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="HelloWorld">
              <i class="el-icon-check"></i>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="table">
              <i class="el-icon-check"></i>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>
          <!--  3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-check"></i>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-check"></i>
              <span>分类参数</span>
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-check"></i>
              <span>商品分类</span>
            </el-menu-item>
          </el-submenu>
          <!--  4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-check"></i>
              <span>订单列表</span>
            </el-menu-item>
          </el-submenu>
          <!--  5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-check"></i>
              <span>数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
      </el-aside>
      <el-main class="main">
         <router-view> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    beforeCreate(){
//      const token = localStorage.getItem("token");
//      if(!token){
//        this.$router.push({name:'login'});
//      }
    },
    methods: {
      logout(){
        localStorage.removeItem("token");
        this.$router.push({name:'login'});
      },
      login(){
    	  
      }
    }
  }
</script>

<style>
  .container {
    height: 100%;
  }
  .header {
    background-color: #b3c0d1;
  }
  .aside {
    background-color: #d3dce6;
  }
  .main {
    background-color: #e9eef3;
  }
  .middle {
    text-align: center;
    color: white;
  }
  .logout {
    line-height: 60px;
    text-decoration: none;
    color: white;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-footer{
	  position:absolute;bottom:0;width:100%;height:100px; 
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
</style>