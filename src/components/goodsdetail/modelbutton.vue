<template>
    <div>
        <button type="button" v-bind:click="handleClick">{{model}}</button>
    </div>
</template>
<script>
    export default {
        name : 'modelbutton',
        props : [],
        data(){
            return{

            }
        },
        methods : {
            handleClick : function(){
                // 选择或者取消对应的商品规格
                this.$store.commit('chickModelButton',{
                    model
                })
            }
        }
    }
</script>