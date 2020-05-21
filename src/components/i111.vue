<template>
  <ul class="item">
    <li v-for="(item, index) in itemArr" :key="index"
      :class="{'clickBg':index==clickIndex,'hoverBg':index==hoverIndex}"
      @click="clickIndex = index"
      @mouseover="hoverIndex = index"
      @mouseout="hoverIndex = -1">
      {{item}}
    </li>
  </ul>
  
</template>
 
<script>
 export default {
   data: function(){
     return {
       itemArr:['A','B','C','D'],
       hoverIndex: -1, //表示当前hover的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li
       clickIndex: -1, //表示当前点击的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li
     }
   },
 }
</script>
 
<style>
 .item{
   width: 600px;
   height: 60px;
 }
 .item li{
   width: 80px;
   height: 60px;
   line-height: 60px;
   margin-left: 20px;
   float: left;
   text-align: center;
   cursor: pointer;
 }
 .hoverBg{
   background: #ccc;
   color: #fff;
 }
 .clickBg{
   background: red;
   color: #fff;
 }
 li{
   list-style: none;
 }
</style>