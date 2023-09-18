<template>
    <div>
        <div class="heading-center">
            <div class="heading">
                <h3 class="heading__title">{{ itemData.name }}</h3>
                <p class="heading__text">{{ itemData.text }}</p>
            </div>
        </div>

        <img class="slider-item" :src="require(`../assets/` + itemData.img)" alt="Project details item">           
    </div>
</template>

<script>
export default {
    name: 'ProjectDetailItem',

    props: {
        itemData: {
            type: Object,
            default: () => {}
        }
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

    .heading-center {
        width: $siteWidth;
        display: flex;
        justify-content: center;
    }

    .heading {
        width: 660px;
        margin-bottom: 100px;

        &__title {
            color: #292F36;
            font-family: 'DM Serif Display';
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%; 
            letter-spacing: 1px; 
            margin-bottom: 20px; 
        }   
        
        &__text {
            color: $textFontColor;
            font-family: 'Jost';
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; 
            letter-spacing: 0.22px;
        }
    }

    .slider-item {
         border-radius: 100px;
    }
</style>