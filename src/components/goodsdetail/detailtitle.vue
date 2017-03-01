 <!--左上侧测搜索头 
 标签的值应为查询页传过来的值，然后再一级一级渲染

 -->
<template>
    <el-breadcrumb separator="/" class="detailtitle">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{first}}></el-breadcrumb-item>
        <el-breadcrumb-item>{{second}}></el-breadcrumb-item>
        <el-breadcrumb-item>{{third}}></el-breadcrumb-item>
        <el-breadcrumb-item>{{forth}}></el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
    // 具体页面数据应为路由跳转过来的参数
    export default {
        name : 'detailtitle',
        data(){
            return{
                first : '颌面外科与种植',
                second : '骨修复材料（外科种植',
                third : '骨粉',
                forth : 'TPC 抛光杯'
            }
        }
    }
</script>
