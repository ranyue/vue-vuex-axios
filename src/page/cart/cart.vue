<template>
	<div>
		<h1>
			购物车
		</h1>
	</div>
</template>
<script>
	import { mapMutaions } from 'vuex'
	import {queryCartList} from '../../api/api.js'
	export default{
		name: 'Cart',
		data (){
			return {
				productlist:'5656'
			}
		},
		computed: {
			
		},
		mounted(){
			queryCartList().then((res)=>{
				console.log(res)
				if(res.code === 'A0000'){
					this.productlist = res
				}
			})
		},
		methods:{
			
		}
	}
</script>