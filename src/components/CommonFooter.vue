<template>
    <footer class="footer center">
        <div class="footer-info footer-left">
            <router-link class="footer-info__logo" to="/main">
                <img :src="require(`@/assets/${logoImg}`)" alt="Logo">Interno
            </router-link>
            <p class="footer-info__text">
                It is a long established fact that a reader will be distracted lookings.
            </p>
            <div class="footer-info__social">
                <a href="#" class="footer-info__social__twitter"><img :src="require(`@/assets/${sosialImg1}`)" alt="Logo"></a>
                <a href="#" class="footer-info__social__linkedin"><img :src="require(`@/assets/${sosialImg2}`)" alt="Logo"></a>
            </div>
        </div>
        <div class="footer-info footer-center">
            <h4 class="footer-info__title">Pages</h4>
            <router-link class="footer-info__link" to="/main">Home</router-link>
            <router-link class="footer-info__link" to="/blog">Blog</router-link>
            <router-link class="footer-info__link" to="/project">Project</router-link>            
        </div>
        <div class="footer-info footer-right">
            <h4 class="footer-info__title">Contact</h4>
            <p class="footer-info__text">
                55 East Birchwood Ave. Brooklyn, New York 11201
            </p>
            <p class="footer-info__text">
                contact@interno.com
            </p>       
            <p class="footer-info__text">
                (123) 456 - 7890
            </p>                    
        </div>
    </footer>
</template>

<script>
export default {
    name: 'CommonFooter',

    data() {
        return {
            logoImg: 'logo.svg',
            sosialImg1: 'social1.svg',
            sosialImg2: 'social2.svg'     
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .footer {
        display: flex;
        justify-content: space-between;
        margin-bottom: 134px;

        &-info {
            width: calc($siteWidth / 3 - 1.5%); 
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 20px;

            &__logo {
                color: $titleFontColor;
                font-family: 'DM Serif Display';
                font-size: 40px;
                font-style: normal;
                font-weight: 400;
                text-align: center;

                img {
                padding-right: 10px;
                }
            }

            &__title {
                color: $titleFontColor;
                font-family: 'DM Serif Display';
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
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

            &__link {
                color: $textFontColor;
                font-family: 'Jost';
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.22px;     

                &:hover {
                   color: $infoColor; 
                }                
            }

            &__social {         
                padding-top: 14px;

                &__linkedin {
                    margin-left: 40px;
                }
            }
        }

        &-center {
            padding-left: 110px;
        }

        &-right {
            padding-left: 110px;
        }
    }

</style>