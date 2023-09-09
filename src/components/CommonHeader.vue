<template>
    <header class="header center">
        <div class="header-left">
            <a class="header-left__link" href="index.html"><img :src="require(`@/assets/${logoImg}`)" alt="Logo">Interno</a>
        </div>
        <div class="header-right"> 
            <a class="header-right__link" href="index.html">Home</a>
            <a class="header-right__link" href="#">Project</a>
            <a class="header-right__link" href="blog.html">Blog</a>
        </div>
    </header>        
</template>

<script>
export default {
    name: 'CommonHeader',

    data() {
        return {
            logoImg: 'logo.svg',
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .header {
        margin-top: 52px;
        margin-bottom: 60px;
        min-height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-left {
            &__link {
                color: $titleFontColor;
                font-family: 'DM Serif Display';
                font-size: 40px;
                font-style: normal;
                font-weight: 400;
                text-align: center;
            }

            img {
                padding-right: 10px;
            }
        }
    
        &-right {
            width: 244px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &__link {   
                color: $titleFontColor;
                text-align: center;
                font-family: 'Jost';
                font-size: 20px;
                font-style: normal;
                font-weight: 400 
            }
        }
    }
</style>