<template>
    <div>
        <div class="project-details">        
            <img class="project-details__img" :src="require(`@/assets/${projectDetailsImg}`)" alt="Project details">         
        </div>

        <ProjectDetailCarousel
        :carouselData="sliderItems"
        />
    </div>
</template>

<script>
import ProjectDetailCarousel from '@/components/ProjectDetailCarousel.vue';

export default {
    name: 'ProjectDetailsPage',

    components: {
        ProjectDetailCarousel,
    },

    data() {
        return {
            projectDetailsImg: 'projectDetails.jpg', 
            sliderItems: [ 
                {id: 1, name: 'Minimal Look Bedrooms', img: 'projectSlider1.jpg', 
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'},
                {id: 2, name: 'System Kichen', img: 'projectSlider2.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'},
                {id: 3, name: 'Classic Living Room', img: 'projectSlider3.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'},
            ]
        };
    },
};
</script>

<style lang="scss" scoped>

    .project-details {         
        width: 100vw;
        display: flex;
        justify-content: center;
        margin-bottom: 200px;
    }

</style>