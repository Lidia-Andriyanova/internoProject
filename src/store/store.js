export default {
    state: {
        projectItems: [],
        newsItems: [],
        firstNewsItems: [],
        projectTags: [],
        soldProjects: [],
        
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

    }
}
