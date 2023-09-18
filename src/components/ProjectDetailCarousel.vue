<template>
    <div class="center">
    <div class="wrapper">
        <div class="carousel" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%'}">
            <ProjectDetailItem
                v-for="item in carouselData" 
                :key="item.id"
                :itemData="item"
            />
        </div>
        <div class="slider">
            <button class="slider-button" @click="move(0)"></button>
            <button class="slider-button" @click="move(1)"></button>
            <button class="slider-button" @click="move(2)"></button>
        </div>
    </div>
</div>
</template>

<script>
import ProjectDetailItem from './ProjectDetailItem.vue';

export default {
    name: 'ProjectDetailCarousel',

    components: {
        ProjectDetailItem,
    },

    props: {
        carouselData: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            currentSlideIndex: 0,
        }
    },

    methods: {
        move(id)  {
            this.currentSlideIndex = id;
        },
    },
};
</script>

<style lang="scss" scoped>

    .wrapper {
        max-width: 1201px;
        overflow: hidden;
        margin-bottom: 150px;
    }

    .carousel {
        display: flex;
        transition: all ease .5s;
    }

    .slider {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 20px;
    

    &-button {
        width: 25px;
        height: 25px;
        border-radius: 25px;
        background-color: $siteColor;
        border: 3px solid $titleFontColor;
    }
}
</style>