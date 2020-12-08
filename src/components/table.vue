<template>
  <div>
      <el-form  label-width="120px" size="small">
         <el-row :span="24">
           <el-col :span="11">
             <el-form-item label="中心机房id *">
               <el-input  placeholder="请输入机房id"></el-input>
             </el-form-item>
           </el-col>
           
           <el-col :span="3">
             <el-button type="primary"  @click.native="getStore()">11</el-button>
             <el-button type="warning"  @click="get2()">22</el-button>
           </el-col>
         </el-row>
         <el-row>
		  <el-button>默认按钮</el-button>
		  <el-button type="primary" @click.native="getStore()">主要按钮11</el-button>
		  <el-button type="success">成功按钮11</el-button>
		  <el-button type="info">信息按钮11</el-button>
		  <el-button type="warning">警告按钮11</el-button>
		  <el-button type="danger">危险按钮11</el-button>
		</el-row>
       </el-form>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期errrr"
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
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
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
       //
       get2(){
          debugger;
		  let that = this;
		  that.$axios.get("/api/test/getTest", function (res) { 
		    var a=1; 
		 })
       }
       //
       
     }
      
    }
  </script>