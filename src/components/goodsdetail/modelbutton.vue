<template>
    <div>
        <button type="button" v-bind:click="handleClick">{{data.specification}}</button>
    </div>
</template>
<script>
    export default {
       
        props : {
            data : {
                type : Object,
                required : true,
                default : {}
            },
            key : {
                type : Number,
                required : true,
            }
        },
        data(){
            return{
                isClick : false,
            }
        },
        methods : {
            handleClick : function(){
                // 选择或者取消对应的商品规格
                this.$emit('Selected_modelsChange',{productId : this.data.productId, key :this.key});
                this.isClick = !this.isClick;

            } 
        }
    }
</script>