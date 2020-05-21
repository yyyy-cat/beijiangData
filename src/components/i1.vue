<template>
  <div class="i1">
    <div v-for="items in msg" :key="items">
      <router-link :to="{path:'/i2',query:{name:items.name}}">{{items.name}}</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
 data(){
   return{
     msg:[
       {name:"nihao1"},
       {name:"nihao2"},
       {name:"nihao3"},
       {name:"nihao4"},
     ]
   }
 },
  methods:{
    
  }
}
</script>
<style scoped>

</style>
