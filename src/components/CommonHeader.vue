<template>
    <header class="header center">
        <div class="header-left">
            <router-link class="header-left__link" to="/main"> 
                <img :src="require(`@/assets/${logoImg}`)" alt="Logo">Interno 
            </router-link>
        </div>
        <div class="header-right">  
            <router-link class="header-right__link" to="/main">Home</router-link>
            <router-link class="header-right__link" to="/blog">Blog</router-link>
            <router-link class="header-right__link" to="/project">Project</router-link>
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
                font-weight: 400; 

                &:hover {
                   color: $infoColor; 
                }
            }
        }
    }
</style>