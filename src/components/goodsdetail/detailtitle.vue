 <!--左上侧测搜索头 
 标签的值应为查询页传过来的值，然后再一级一级渲染

 -->
<template>
    <el-breadcrumb separator="/" class="detailtitle">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{category[0]}}></el-breadcrumb-item>
        <el-breadcrumb-item>{{category[1]}}></el-breadcrumb-item>
        <el-breadcrumb-item>{{category[2]}}></el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
    // 具体页面数据应为路由跳转过来的参数
    export default {
        name : 'detailtitle',
        props:{
            category : {
                type:Array,
                default : [],
                required : true,
            }
        }
    }
</script>
