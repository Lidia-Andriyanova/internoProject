export default {
    state: {
        projectItems: [],
        newsItems: [],
        firstNewsItems: [],
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
    },
    mutations: {
        SET_PROJECT(state, project) {
            state.projectItems = project;
        },
        SET_NEWS(state, news) {
            state.newsItems = news;
            state.firstNewsItems = news.slice(0, 3);            
        }        
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
        }        
    }
}
