

<template>
    <div>
        <ul>
            <li v-if="second_info.unit">
                <span>单位</span>
                <span>{{second_info.unit}}</span>
            </li>
            <li v-if="second_info.attribute">
                <span>材质</span>
                <span>{{second_info.attribute}}</span>
            </li>
            <li v-if="second_info.boxBin">
                <span>箱规</span>
                <span>{{second_info.boxBin}}</span>
            </li>
            <li v-if="second_info.origin ">
                <span>产地</span>
                <span>{{second_info.origin}}</span>
            </li>
            <li v-if="second_info.length || second_info.width || second_info.height">
                <span>尺寸</span>
                <span>{{second_info.length}} cm X {{second_info.width}} cm X {{second_info.height}} cm</span>
            </li>
            <li v-if="second_info.weight">
                <span>毛重</span>
                <span>{{second_info.weight}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props : {
            second_info : {
                type : Object,
                required :true,
                default :{

                }
            }
        }
    }
</script>