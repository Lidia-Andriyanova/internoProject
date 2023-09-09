<template>
    <div>
        <CommonHeader/>
        <NewsList/>
        <CommonFooter/>
    </div>
</template>

<script>
import NewsList from './NewsList.vue'
import CommonHeader from './CommonHeader.vue'
import CommonFooter from './CommonFooter.vue'

export default {
    name: 'InternoMain',

    components: {
        NewsList,
        CommonHeader,
        CommonFooter,
    },   

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>