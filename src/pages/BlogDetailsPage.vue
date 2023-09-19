<template>
    <div>
        <div class="blog-details">        
            <img class="blog-details__img" :src="require(`@/assets/${blogDetailsImg}`)" alt="Project details">         
        </div>        
    </div>
</template>

<script>
export default {
    name: 'BlogDetailsPage',

    data() {
        return {
            blogDetailsImg: 'ArticleDetails.jpg',   
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

.blog-details {         
        width: 100vw;
        display: flex;
        justify-content: center;
        margin-bottom: 200px;
    }

</style>
