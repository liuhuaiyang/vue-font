<template>
  <div>
      <el-form  label-width="120px" size="small">
         <el-row :span="24">
           <el-col :span="11">
             <el-form-item label="中心机房id *">
               <el-input  placeholder="请输入机房"></el-input>
             </el-form-item>
           </el-col>
           
           <el-col :span="3">
             <el-button type="primary"  @click.native="getStore()">11</el-button>
           </el-col>
         </el-row>
         <el-row>
		  <el-button>默认按钮</el-button>
		  <el-button type="primary" @click.native="getStore()">主要按钮</el-button>
		  <el-button type="success">成功按钮</el-button>
		  <el-button type="info">信息按钮</el-button>
		  <el-button type="warning">警告按钮</el-button>
		  <el-button type="danger">危险按钮</el-button>
		</el-row>
      </el-form>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    
    <el-card class="box-card" style="width: 520px; display: flex; justify-content: center;">
	    <el-container>
	        <el-header>
	            <el-date-picker v-model="newTime" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日">
	            </el-date-picker>
	        </el-header>
	        <el-main>
	            还剩下
	            <el-tag>{{time}}</el-tag>
	            秒
	            <el-tag>{{timeDay}}</el-tag>
	            天
	        </el-main>
	    </el-container>
	</el-card>
  </div>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          newTime: '2021-4-15',
          timeOut: null,
          time: 0,
          timeDay: 0
        }
      },
   
   methods:{
      getStore(){
         debugger;
		  let that = this;
		  that.$axios({
		    method: "get",//指定请求方式
		    url: "/api/test/getTest",//请求接口（相对接口，后面会介绍到）
		    
		  })
		  .then(function(res){
		    var a=1;
		  })
		  .catch(function(err){
		
		  })
       },
       //方法2
       //
       setTime() {
           this.timeOut = setInterval(() => {
               setTimeout(() => {
                   let timedate = new Date(this.newTime);
                   let now = new Date();
                   let date = timedate.getTime() - now.getTime();
                   let time = Math.ceil((date) / (1000));
                   let timeDay = Math.ceil((date) / (1000 * 60 * 60 * 24));
                   this.time = time > 0 ? time : 0;
                   this.timeDay = timeDay > 0 ? timeDay : 0;
               }, 0)
           }, 1000)
       }
     //方法3
       
   },
   created() {
       this.setTime()
   }
 
  }
  </script>
