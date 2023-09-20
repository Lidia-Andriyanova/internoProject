export default {
    state: {
        projectItems: [],
        newsItems: [],
        firstNewsItems: [],
        projectTags: [],
        soldProjects: [],
        projectDetails: [],
        articles: [],
        articleTags: []
    },
    getters: {
        projectItems(state) {
            return state.projectItems;
        },
        newsItems(state) {
            return state.newsItems;
        },        
        firstNewsItems(state) {
            return state.firstNewsItems;
        },  
        projectTags(state) {
            return state.projectTags;
        },           
        soldProjects(state) {
            return state.soldProjects;
        },       
        projectDetails(state) {
            return state.projectDetails;
        },             
        articles(state) {
            return state.articles;
        },             
        articleTags(state) {
            return state.articleTags;
        },             
    },
    mutations: {
        SET_PROJECT(state, projects) {
            state.projectItems = projects;
        },
        SET_NEWS(state, news) {
            state.newsItems = news;
            state.firstNewsItems = news.slice(0, 3);            
        },
        SET_PROJECT_TAGS(state, tags) {
            state.projectTags = tags;
        },         
        SET_SOLD_PROJECTS(state, soldProjects) {
            state.soldProjects = soldProjects;
        },     
        SET_PROJECT_DETAILS(state, projectDetails) {
            state.projectDetails = projectDetails;
        },     
        SET_ARTICLES(state, articles) {
            state.articles = articles;
        },            
        SET_ARTICLE_TAGS(state, articleTags) {
            state.articleTags = articleTags;
        },     
    },
    actions: {
        getProject({commit}) {
            setTimeout(() => {
                const projects = [
                    {
                        id: 1,
                        title: 'Modern Kitchan',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'product1.jpg',
                        round: 'top-right',
                    }, 
                    {
                        id: 2,
                        title: 'Modern Kitchan',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'product2.jpg',
                        round: 'top-left',
                    }, 
                    {
                        id: 3,
                        title: 'Modern Kitchan',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'product3.jpg',
                        round: 'bottom-right',
                    }, 
                    {
                        id: 4,
                        title: 'Modern Kitchan',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'product4.jpg',
                        round: 'bottom-left',
                    },    
                ];

                commit('SET_PROJECT', projects);
            }, 1);
        },
        getNews({commit}) {
            setTimeout(() => {
                const news = [
                    {
                        id: 1,
                        title: 'Let’s Get Solution For Building',
                        date: '26 December,2023',
                        category: 'Kitchan Design',
                        img: 'article1.jpg',
                    },
                    {
                        id: 2,
                        title: 'Low Cost Latest Invented Interior Designing Ideas.',
                        date: '22 December,2023',
                        category: 'Living Design',
                        img: 'article2.jpg',
                    },
                    {
                        id: 3,
                        title: 'Best For Any Office & Business Interior Solution',
                        date: '25 December,2023',
                        category: 'Interior Design',
                        img: 'article3.jpg',
                    },   
                    {
                        id: 4,
                        title: 'Best For Any Office & Business Interior Solution',
                        date: '25 December,2023',
                        category: 'Interior Design',
                        img: 'article4.jpg',
                    },                                        
                    {
                        id: 5,
                        title: 'Low Cost Latest Invented Interior Designing Ideas.',
                        date: '22 December,2023',
                        category: 'Living Design',
                        img: 'article5.jpg',
                    },
                    {
                        id: 6,
                        title: 'Best For Any Office & Business Interior Solution',
                        date: '25 December,2023',
                        category: 'Interior Design',
                        img: 'article6.jpg',
                    },                      
                ];

                commit('SET_NEWS', news);
            }, 1);
        },
        getProjectTags({commit}) {
            setTimeout(() => {
                const projectsTags = ['Bathroom', 'Bedroom', 'Kichen', 'Living Area'];
                commit('SET_PROJECT_TAGS', projectsTags);
            }, 1);
        },  
        getSoldProjects({commit}) {
            setTimeout(() => {
                const soldProjects = [
                    {
                        id: 1,
                        title: 'Minimal Bedroom',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'soldProject1.jpg',
                        round: 'none',
                        tags: ['Bedroom', 'Living Area'],
                    }, 
                    {
                        id: 2,
                        title: 'Classic Minimal Bedroom',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'soldProject2.jpg',
                        round: 'none',
                        tags: ['Bedroom'],
                    }, 
                    {
                        id: 3,
                        title: 'Minimal Bedroom',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'soldProject3.jpg',
                        round: 'none',
                        tags: ['Bedroom'],
                    }, 
                    {
                        id: 4,
                        title: 'Modern Bedroom',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'soldProject4.jpg',
                        round: 'none',
                        tags: ['Bedroom', 'Living Area'],
                    },  
                    {
                        id: 5,
                        title: 'Minimal Bedroom',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'soldProject5.jpg',
                        round: 'none',
                        tags: ['Bedroom', 'Living Area', 'Bathroom'],
                    },     
                    {
                        id: 6,
                        title: 'Modern Bedroom',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'soldProject6.jpg',
                        round: 'none',
                        tags: ['Bedroom', 'Living Area'],
                    },       
                    {
                        id: 7,
                        title: 'System Table',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'soldProject7.jpg',
                        round: 'none',
                        tags: ['Kichen'],
                    },   
                    {
                        id: 8,
                        title: 'Modern Bedroom',
                        breadcrumbs: ['Decor', 'Artchitecture'],
                        img: 'soldProject8.jpg',
                        round: 'none',
                        tags: ['Bedroom', 'Bathroom'], 
                    },                                                                             
                ];

                commit('SET_SOLD_PROJECTS', soldProjects);
            }, 1);
        },     
        getProjectDetails({commit}) {
            setTimeout(() => {
                const projectDetails = [
                    {id: 1, name: 'Minimal Look Bedrooms', img: 'projectSlider1.jpg', 
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'},
                    {id: 2, name: 'System Kichen', img: 'projectSlider2.jpg',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'},
                    {id: 3, name: 'Classic Living Room', img: 'projectSlider3.jpg',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'},
                ];
                commit('SET_PROJECT_DETAILS', projectDetails);
            }, 1);
        },                    

        getArticles({commit}) {
            setTimeout(() => {
                const articles = [
                    {id: 1, name: 'Let’s Get Solution for Building Construction Work', img: 'BlogDetails1.jpg', 
                        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                        tags: ['Kichen', 'Kichen Planning', 'Building']},
                    {id: 2, name: 'Design sprints are great', img: 'BlogDetails2.jpg',
                        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                        tags: ['Kichen', 'Kichen Planning', 'Architecture']},
                    {id: 3, name: 'What is the classis Bedroom?', img: 'projectSlider1.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    tags: ['Bedroom', 'Building']},
                ];
                commit('SET_ARTICLES', articles);
            }, 1);
        },           
        getArticleTags({commit}) {
            setTimeout(() => {
                const articleTags = ['Kichen', 'Bedroom', 'Building', 'Architecture', 'Kichen Planning', 'Bathroom'];
                commit('SET_ARTICLE_TAGS', articleTags);
            }, 1);
        },          
    }
}
