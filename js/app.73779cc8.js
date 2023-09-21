(function(){var t={675:function(t,e,i){"use strict";var s=i(144),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("CommonHeader"),e("router-view"),e("CommonFooter")],1)},o=[],n=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header center"},[e("div",{staticClass:"header-left"},[e("router-link",{staticClass:"header-left__link",attrs:{to:"/main"}},[e("img",{attrs:{src:i(173)(`./${t.logoImg}`),alt:"Logo"}}),t._v("Interno ")])],1),e("div",{staticClass:"header-right"},[e("router-link",{staticClass:"header-right__link",attrs:{to:"/main"}},[t._v("Home")]),e("router-link",{staticClass:"header-right__link",attrs:{to:"/blog"}},[t._v("Blog")]),e("router-link",{staticClass:"header-right__link",attrs:{to:"/project"}},[t._v("Project")])],1)])},a=[],c={name:"CommonHeader",data(){return{logoImg:"logo.svg"}},mounted(){},methods:{}},l=c,u=i(1),g=(0,u.Z)(l,n,a,!1,null,"af49a9fe",null),d=g.exports,m=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer center"},[e("div",{staticClass:"footer-info footer-left"},[e("router-link",{staticClass:"footer-info__logo",attrs:{to:"/main"}},[e("img",{attrs:{src:i(173)(`./${t.logoImg}`),alt:"Logo"}}),t._v("Interno ")]),e("p",{staticClass:"footer-info__text"},[t._v(" It is a long established fact that a reader will be distracted lookings. ")]),e("div",{staticClass:"footer-info__social"},[e("a",{staticClass:"footer-info__social__twitter",attrs:{href:"#"}},[e("img",{attrs:{src:i(173)(`./${t.sosialImg1}`),alt:"Logo"}})]),e("a",{staticClass:"footer-info__social__linkedin",attrs:{href:"#"}},[e("img",{attrs:{src:i(173)(`./${t.sosialImg2}`),alt:"Logo"}})])])],1),e("div",{staticClass:"footer-info footer-center"},[e("h4",{staticClass:"footer-info__title"},[t._v("Pages")]),e("router-link",{staticClass:"footer-info__link",attrs:{to:"/main"}},[t._v("Home")]),e("router-link",{staticClass:"footer-info__link",attrs:{to:"/blog"}},[t._v("Blog")]),e("router-link",{staticClass:"footer-info__link",attrs:{to:"/project"}},[t._v("Project")])],1),t._m(0)])},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-info footer-right"},[e("h4",{staticClass:"footer-info__title"},[t._v("Contact")]),e("p",{staticClass:"footer-info__text"},[t._v(" 55 East Birchwood Ave. Brooklyn, New York 11201 ")]),e("p",{staticClass:"footer-info__text"},[t._v(" contact@interno.com ")]),e("p",{staticClass:"footer-info__text"},[t._v(" (123) 456 - 7890 ")])])}],_={name:"CommonFooter",data(){return{logoImg:"logo.svg",sosialImg1:"social1.svg",sosialImg2:"social2.svg"}}},j=_,f=(0,u.Z)(j,m,p,!1,null,"fe9dc68c",null),h=f.exports,v=i(629),b={name:"App",components:{CommonHeader:d,CommonFooter:h},methods:{...(0,v.nv)(["getProjectTags","getSoldProjects","getProject","getNews","getProjectDetails","getArticles","getArticleTags"])},created(){this.getProjectTags(),this.getSoldProjects(),this.getProject(),this.getNews(),this.getProjectDetails(),this.getArticles(),this.getArticleTags()}},C=b,I=(0,u.Z)(C,r,o,!1,null,null,null),D=I.exports,P={state:{projectItems:[],newsItems:[],firstNewsItems:[],projectTags:[],soldProjects:[],projectDetails:[],articles:[],articleTags:[]},getters:{projectItems(t){return t.projectItems},newsItems(t){return t.newsItems},firstNewsItems(t){return t.firstNewsItems},projectTags(t){return t.projectTags},soldProjects(t){return t.soldProjects},projectDetails(t){return t.projectDetails},articles(t){return t.articles},articleTags(t){return t.articleTags}},mutations:{SET_PROJECT(t,e){t.projectItems=e},SET_NEWS(t,e){t.newsItems=e,t.firstNewsItems=e.slice(0,3)},SET_PROJECT_TAGS(t,e){t.projectTags=e},SET_SOLD_PROJECTS(t,e){t.soldProjects=e},SET_PROJECT_DETAILS(t,e){t.projectDetails=e},SET_ARTICLES(t,e){t.articles=e},SET_ARTICLE_TAGS(t,e){t.articleTags=e}},actions:{getProject({commit:t}){setTimeout((()=>{const e=[{id:1,title:"Modern Kitchan",breadcrumbs:["Decor","Artchitecture"],img:"product1.jpg",round:"top-right"},{id:2,title:"Modern Kitchan",breadcrumbs:["Decor","Artchitecture"],img:"product2.jpg",round:"top-left"},{id:3,title:"Modern Kitchan",breadcrumbs:["Decor","Artchitecture"],img:"product3.jpg",round:"bottom-right"},{id:4,title:"Modern Kitchan",breadcrumbs:["Decor","Artchitecture"],img:"product4.jpg",round:"bottom-left"}];t("SET_PROJECT",e)}),1)},getNews({commit:t}){setTimeout((()=>{const e=[{id:1,title:"Let’s Get Solution For Building",date:"26 December,2023",category:"Kitchan Design",img:"article1.jpg"},{id:2,title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2023",category:"Living Design",img:"article2.jpg"},{id:3,title:"Best For Any Office & Business Interior Solution",date:"25 December,2023",category:"Interior Design",img:"article3.jpg"},{id:4,title:"Best For Any Office & Business Interior Solution",date:"25 December,2023",category:"Interior Design",img:"article4.jpg"},{id:5,title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2023",category:"Living Design",img:"article5.jpg"},{id:6,title:"Best For Any Office & Business Interior Solution",date:"25 December,2023",category:"Interior Design",img:"article6.jpg"},{id:7,title:"Let’s Get Solution For Building",date:"26 December,2023",category:"Kitchan Design",img:"article1.jpg"},{id:8,title:"Let’s Get Solution For Building",date:"26 December,2023",category:"Kitchan Design",img:"article1.jpg"},{id:9,title:"Let’s Get Solution For Building",date:"26 December,2023",category:"Kitchan Design",img:"article1.jpg"},{id:10,title:"Let’s Get Solution For Building",date:"26 December,2023",category:"Kitchan Design",img:"article1.jpg"},{id:11,title:"Let’s Get Solution For Building",date:"26 December,2023",category:"Kitchan Design",img:"article1.jpg"},{id:12,title:"Let’s Get Solution For Building",date:"26 December,2023",category:"Kitchan Design",img:"article1.jpg"},{id:13,title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2023",category:"Living Design",img:"article2.jpg"},{id:14,title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2023",category:"Living Design",img:"article2.jpg"},{id:15,title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2023",category:"Living Design",img:"article2.jpg"},{id:16,title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2023",category:"Living Design",img:"article2.jpg"},{id:17,title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2023",category:"Living Design",img:"article2.jpg"},{id:18,title:"Low Cost Latest Invented Interior Designing Ideas.",date:"22 December,2023",category:"Living Design",img:"article2.jpg"},{id:19,title:"Best For Any Office & Business Interior Solution",date:"25 December,2023",category:"Interior Design",img:"article3.jpg"},{id:20,title:"Best For Any Office & Business Interior Solution",date:"25 December,2023",category:"Interior Design",img:"article3.jpg"},{id:21,title:"Best For Any Office & Business Interior Solution",date:"25 December,2023",category:"Interior Design",img:"article3.jpg"},{id:22,title:"Best For Any Office & Business Interior Solution",date:"25 December,2023",category:"Interior Design",img:"article3.jpg"},{id:23,title:"Best For Any Office & Business Interior Solution",date:"25 December,2023",category:"Interior Design",img:"article3.jpg"},{id:24,title:"Best For Any Office & Business Interior Solution",date:"25 December,2023",category:"Interior Design",img:"article3.jpg"}];t("SET_NEWS",e)}),1)},getProjectTags({commit:t}){setTimeout((()=>{const e=["Bathroom","Bedroom","Kichen","Living Area"];t("SET_PROJECT_TAGS",e)}),1)},getSoldProjects({commit:t}){setTimeout((()=>{const e=[{id:1,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject1.jpg",round:"none",tags:["Bedroom","Living Area"]},{id:2,title:"Classic Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject2.jpg",round:"none",tags:["Bedroom"]},{id:3,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject3.jpg",round:"none",tags:["Bedroom"]},{id:4,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject4.jpg",round:"none",tags:["Bedroom","Living Area"]},{id:5,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject5.jpg",round:"none",tags:["Bedroom","Living Area","Bathroom"]},{id:6,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject6.jpg",round:"none",tags:["Bedroom","Living Area"]},{id:7,title:"System Table",breadcrumbs:["Decor","Artchitecture"],img:"soldProject7.jpg",round:"none",tags:["Kichen"]},{id:8,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject8.jpg",round:"none",tags:["Bedroom","Bathroom"]},{id:9,title:"Classic Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject2.jpg",round:"none",tags:["Other"]},{id:10,title:"Classic Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject2.jpg",round:"none",tags:["Other"]},{id:11,title:"Classic Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject2.jpg",round:"none",tags:["Other"]},{id:12,title:"Classic Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject2.jpg",round:"none",tags:["Other"]},{id:13,title:"Classic Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject2.jpg",round:"none",tags:["Other"]},{id:14,title:"Classic Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject2.jpg",round:"none",tags:["Other"]},{id:15,title:"Classic Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject2.jpg",round:"none",tags:["Other"]},{id:16,title:"Classic Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject2.jpg",round:"none",tags:["Other"]},{id:17,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject4.jpg",round:"none",tags:["Other"]},{id:18,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject4.jpg",round:"none",tags:["Other"]},{id:19,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject4.jpg",round:"none",tags:["Other"]},{id:20,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject4.jpg",round:"none",tags:["Other"]},{id:21,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject4.jpg",round:"none",tags:["Other"]},{id:22,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject4.jpg",round:"none",tags:["Other"]},{id:23,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject4.jpg",round:"none",tags:["Other"]},{id:24,title:"Modern Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject4.jpg",round:"none",tags:["Other"]},{id:25,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject5.jpg",round:"none",tags:["Other"]},{id:26,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject5.jpg",round:"none",tags:["Other"]},{id:27,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject5.jpg",round:"none",tags:["Other"]},{id:28,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject5.jpg",round:"none",tags:["Other"]},{id:29,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject5.jpg",round:"none",tags:["Other"]},{id:30,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject5.jpg",round:"none",tags:["Other"]},{id:31,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject5.jpg",round:"none",tags:["Other"]},{id:32,title:"Minimal Bedroom",breadcrumbs:["Decor","Artchitecture"],img:"soldProject5.jpg",round:"none",tags:["Other"]}];t("SET_SOLD_PROJECTS",e)}),1)},getProjectDetails({commit:t}){setTimeout((()=>{const e=[{id:1,name:"Minimal Look Bedrooms",img:"projectSlider1.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor."},{id:2,name:"System Kichen",img:"projectSlider2.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor."},{id:3,name:"Classic Living Room",img:"projectSlider3.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor."}];t("SET_PROJECT_DETAILS",e)}),1)},getArticles({commit:t}){setTimeout((()=>{const e=[{id:1,name:"Let’s Get Solution for Building Construction Work",img:"BlogDetails1.jpg",text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",tags:["Kichen","Kichen Planning","Building"]},{id:2,name:"Design sprints are great",img:"BlogDetails2.jpg",text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",tags:["Kichen","Kichen Planning","Architecture"]},{id:3,name:"What is the classis Bedroom?",img:"projectSlider1.jpg",text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",tags:["Bedroom","Building"]}];t("SET_ARTICLES",e)}),1)},getArticleTags({commit:t}){setTimeout((()=>{const e=["Kichen","Bedroom","Building","Architecture","Kichen Planning","Bathroom"];t("SET_ARTICLE_TAGS",e)}),1)}}},x=i(345),w=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"banner center"},[e("div",{staticClass:"banner-content"},[e("img",{attrs:{src:i(173)(`./${t.bannerImg}`),alt:"Banner"}}),e("div",{staticClass:"banner-content-info"},[e("h3",{staticClass:"banner-content-info__title"},[t._v("Let Your Home Be Unique")]),e("p",{staticClass:"banner-content-info__text"},[t._v("There are many variations of the passages of lorem Ipsum fromavailable, majority.")]),e("router-link",{staticClass:"banner-content-info__link",attrs:{to:"/project"}},[t._v("Get Started"),e("img",{attrs:{src:i(173)(`./${t.arrowImg}`),alt:"Arrow"}})])],1)])]),e("InternoProjectList"),t._m(0),e("NewsList")],1)},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"counter"},[e("div",{staticClass:"counter-content center"},[e("div",{staticClass:"counter-content__info"},[e("h4",{staticClass:"counter-content__info__title"},[t._v("12")]),e("p",{staticClass:"counter-content__info__text"},[t._v("Years Of Experiance")])]),e("div",{staticClass:"counter-content__info"},[e("h4",{staticClass:"counter-content__info__title"},[t._v("85")]),e("p",{staticClass:"counter-content__info__text"},[t._v("Success Project")])]),e("div",{staticClass:"counter-content__info"},[e("h4",{staticClass:"counter-content__info__title"},[t._v("15")]),e("p",{staticClass:"counter-content__info__text"},[t._v("Active Project")])]),e("div",{staticClass:"counter-content__info"},[e("h4",{staticClass:"counter-content__info__title"},[t._v("95")]),e("p",{staticClass:"counter-content__info__text"},[t._v("Happy CUstomers")])])])])}],B=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"news center"},[t._m(0),e("div",{staticClass:"news-content"},t._l(t.firstNewsItems,(function(t){return e("NewsItem",{key:t.id,attrs:{newsItem:t}})})),1)])])},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"news-heading"},[e("h3",{staticClass:"news-heading__title"},[t._v("Articles & News")]),e("p",{staticClass:"news-heading__text"},[t._v("It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.")])])}],T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"news-content__article"},[e("img",{staticClass:"news-content__article__img",attrs:{src:i(173)(`./${t.newsItem.img}`),alt:"Article"}}),e("h4",{staticClass:"news-content__article__title"},[t._v(t._s(t.newsItem.title))]),e("div",{staticClass:"news-content__info"},[e("p",{staticClass:"news-content__info__date"},[t._v(t._s(t.newsItem.date))]),e("router-link",{attrs:{to:"/blogdetails"}},[e("button",{staticClass:"news-content__info__next"},[e("img",{attrs:{src:i(173)(`./${t.nextImg}`),alt:"Next"}})])])],1),e("div",{staticClass:"news-content__category"},[e("p",{staticClass:"news-content__category__text"},[t._v(t._s(t.newsItem.category))])])])},L=[],S={name:"NewsItem",props:["newsItem"],data(){return{nextImg:"next.svg"}}},k=S,O=(0,u.Z)(k,T,L,!1,null,"4a116f96",null),E=O.exports,M={name:"NewsList",components:{NewsItem:E},data(){return{}},computed:{...(0,v.Se)(["firstNewsItems"])}},N=M,$=(0,u.Z)(N,B,y,!1,null,"4b159874",null),F=$.exports,Z=function(){var t=this,e=t._self._c;return e("section",{staticClass:"project center"},[t._m(0),e("div",{staticClass:"project-content"},t._l(t.projectItems,(function(t){return e("InternoProjectItem",{key:t.id,attrs:{projectItem:t}})})),1)])},q=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-heading"},[e("h3",{staticClass:"project-heading__title"},[t._v("Follow Our Projects")]),e("p",{staticClass:"project-heading__text"},[t._v("It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.")])])}],K=function(){var t=this,e=t._self._c;return e("div",{class:["project-content__product",`${t.projectItem.round}`]},[e("img",{staticClass:"project-content__product__img",attrs:{src:i(173)(`./${t.projectItem.img}`),alt:"project"}}),e("div",{staticClass:"project-content__info"},[e("div",{staticClass:"project-content__heading"},[e("h4",{staticClass:"project-content__title"},[t._v(t._s(t.projectItem.title))]),e("nav",{staticClass:"project-content__nav"},t._l(t.projectItem.breadcrumbs,(function(i){return e("router-link",{key:i.id,staticClass:"project-content__breadcrumbs",attrs:{to:"/projectdetails"}},[t._v(t._s(i))])})),1)]),e("router-link",{staticClass:"project-content__next",attrs:{to:"/projectdetails"}},[e("button",{staticClass:"project-content__next"},[e("img",{attrs:{src:i(173)(`./${t.nextImg}`),alt:"Next"}})])])],1)])},G=[],R={name:"InternoProjectItem",props:["projectItem"],data(){return{nextImg:"next.svg"}}},H=R,J=(0,u.Z)(H,K,G,!1,null,"544ae6af",null),U=J.exports,W={name:"InternoProjectList",components:{InternoProjectItem:U},computed:{...(0,v.Se)(["projectItems"])}},V=W,Y=(0,u.Z)(V,Z,q,!1,null,"a3faf180",null),z=Y.exports,Q={name:"InternoMain",components:{NewsList:F,InternoProjectList:z},data(){return{bannerImg:"banner.jpg",arrowImg:"arrow.svg"}}},X=Q,tt=(0,u.Z)(X,w,A,!1,null,"45074559",null),et=tt.exports,it=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"articles"},[e("img",{staticClass:"articles__img",attrs:{src:i(173)(`./${t.articlesImg}`),alt:"Articles"}}),e("div",{staticClass:"articles-heading"},[e("h3",{staticClass:"articles-heading__title"},[t._v("Articles & News")]),e("nav",{staticClass:"articles-heading__nav"},[e("router-link",{staticClass:"articles-heading__nav__breadcrumbs",attrs:{to:"/main",href:"#"}},[t._v("Home")]),e("router-link",{staticClass:"articles-heading__nav__breadcrumbs",attrs:{to:"/blog",href:"#"}},[t._v("Blog")])],1)])]),e("section",{staticClass:"post center"},[e("h3",{staticClass:"post__title"},[t._v("Latest Post")]),e("div",{staticClass:"post-content"},[e("img",{staticClass:"post-content__img",attrs:{src:i(173)(`./${t.postImg}`),alt:"Latest post"}}),e("div",{staticClass:"post-content__info"},[e("h4",{staticClass:"post-content__info__title"},[t._v("Low Cost Latest Invented Interior Designing Ideas")]),e("p",{staticClass:"post-content__info__text"},[t._v(" Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. ")]),e("p",{staticClass:"post-content__info__text"},[t._v(" Lorem Ipsum is not simply random text. It has roots in a piece of classica. ")]),e("div",{staticClass:"post-content__info__page"},[e("p",{staticClass:"post-content__info__page__date"},[t._v("26 December,2022")]),e("router-link",{attrs:{to:"/blogdetails"}},[e("button",{staticClass:"post-content__info__page__next"},[e("img",{attrs:{src:i(173)(`./${t.nextImg}`),alt:"Next"}})])])],1)])])]),e("NewsBlogPage")],1)},st=[],rt=function(){var t=this,e=t._self._c;return e("section",{staticClass:"news center"},[t._m(0),e("div",{staticClass:"news-content"},t._l(t.currentProductList,(function(t){return e("NewsItem",{key:t.id,attrs:{newsItem:t}})})),1),e("div",{staticClass:"news-pages"},t._l(4,(function(s){return e("router-link",{key:s,attrs:{to:`/blog/${s}`}},[e("button",{staticClass:"news-pages__blog"},s<=3?[t._v("0"+t._s(s))]:[e("img",{attrs:{src:i(173)(`./${t.nextImg}`),alt:"Next"}})])])})),1)])},ot=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"news-heading news-heading__blog"},[e("h3",{staticClass:"news-heading__title news-heading__blog__title"},[t._v("Articles & News")])])}],nt={name:"NewsBlogPage",components:{NewsItem:E},data(){return{nextImg:"next.svg",currentPage:1,itemsPerPage:6}},computed:{...(0,v.Se)(["newsItems"]),currentProductList(){const{currentPage:t,itemsPerPage:e}=this,i=(t-1)*e,s=i+e;return this.newsItems.slice(i,s)}},watch:{$route(t,e){const{page:i}=this.$route.params;i&&(this.currentPage=+i),console.log(t,e)}}},at=nt,ct=(0,u.Z)(at,rt,ot,!1,null,"07cd77d4",null),lt=ct.exports,ut={name:"BlogPage",components:{NewsBlogPage:lt},data(){return{postImg:"post.jpg",nextImg:"next.svg",articlesImg:"articles.jpg"}}},gt=ut,dt=(0,u.Z)(gt,it,st,!1,null,"7a066ec9",null),mt=dt.exports,pt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"projects"},[e("img",{staticClass:"projects__img",attrs:{src:i(173)(`./${t.projectsImg}`),alt:"Project"}}),e("div",{staticClass:"projects-heading"},[e("h3",{staticClass:"projects-heading__title"},[t._v("Our Project")]),e("nav",{staticClass:"projects-heading__nav"},[e("router-link",{staticClass:"projects-heading__nav__breadcrumbs",attrs:{to:"/main"}},[t._v("Home")]),e("router-link",{staticClass:"projects-heading__nav__breadcrumbs",attrs:{to:"/project"}},[t._v("Project")])],1)])]),e("div",{staticClass:"tags center"},[e("div",{staticClass:"project-tags"},[e("div",{staticClass:"project-tags-buttons"},t._l(t.projectTags,(function(i){return e("button",{key:i.id,staticClass:"project-tags-buttons_button",style:{backgroundColor:i===t.selectedTag?"#CDA274":"white",color:i===t.selectedTag?"white":"black"},on:{click:function(e){return t.chooseTag(i)}}},[t._v(" "+t._s(i)+" ")])})),0)])]),e("section",{staticClass:"project center"},[e("ul",t._l(t.currentProductList,(function(t){return e("li",{key:t.id},[e("InternoProjectItem",{attrs:{projectItem:t}})],1)})),0),e("div",{staticClass:"news-pages"},t._l(4,(function(s){return e("router-link",{key:s,attrs:{to:`/project/${s}`}},[e("button",{staticClass:"news-pages__blog"},s<=3?[t._v("0"+t._s(s))]:[e("img",{attrs:{src:i(173)(`./${t.nextImg}`),alt:"Next"}})])])})),1)])])},_t=[],jt={name:"ProjectPage",components:{InternoProjectItem:U},data(){return{nextImg:"next.svg",projectsImg:"projects.jpg",selectedTag:"",currentPage:1,itemsPerPage:8}},methods:{chooseTag(t){this.selectedTag===t?this.selectedTag="":this.selectedTag=t}},computed:{...(0,v.Se)(["projectTags","soldProjects"]),filteredProjects(){return this.selectedTag?this.soldProjects.filter((t=>t.tags.includes(this.selectedTag))):this.soldProjects},currentProductList(){const{currentPage:t,itemsPerPage:e}=this,i=(t-1)*e,s=i+e;return this.filteredProjects.slice(i,s)}},watch:{$route(t,e){const{page:i}=this.$route.params;i&&(this.currentPage=+i),console.log(t,e)}}},ft=jt,ht=(0,u.Z)(ft,pt,_t,!1,null,"e18b946c",null),vt=ht.exports,bt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"project-details"},[e("img",{staticClass:"project-details__img",attrs:{src:i(173)(`./${t.projectDetailsImg}`),alt:"Project details"}})]),e("ProjectDetailCarousel",{attrs:{carouselData:t.projectDetails}})],1)},Ct=[],It=function(){var t=this,e=t._self._c;return e("div",{staticClass:"center"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"carousel",style:{"margin-left":"-"+100*t.currentSlideIndex+"%"}},t._l(t.carouselData,(function(t){return e("ProjectDetailItem",{key:t.id,attrs:{itemData:t}})})),1),e("div",{staticClass:"slider"},[e("button",{staticClass:"slider-button",on:{click:function(e){return t.move(0)}}}),e("button",{staticClass:"slider-button",on:{click:function(e){return t.move(1)}}}),e("button",{staticClass:"slider-button",on:{click:function(e){return t.move(2)}}})])])])},Dt=[],Pt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"heading-center"},[e("div",{staticClass:"heading"},[e("h3",{staticClass:"heading__title"},[t._v(t._s(t.itemData.name))]),e("p",{staticClass:"heading__text"},[t._v(t._s(t.itemData.text))])])]),e("img",{staticClass:"slider-item",attrs:{src:i(173)("./"+t.itemData.img),alt:"Project details item"}})])},xt=[],wt={name:"ProjectDetailItem",props:{itemData:{type:Object,default:()=>{}}},data(){return{}},mounted(){},methods:{}},At=wt,Bt=(0,u.Z)(At,Pt,xt,!1,null,"408faef0",null),yt=Bt.exports,Tt={name:"ProjectDetailCarousel",components:{ProjectDetailItem:yt},props:{carouselData:{type:Array,default:()=>[]}},data(){return{currentSlideIndex:0}},methods:{move(t){this.currentSlideIndex=t}}},Lt=Tt,St=(0,u.Z)(Lt,It,Dt,!1,null,"3dc1707a",null),kt=St.exports,Ot={name:"ProjectDetailsPage",components:{ProjectDetailCarousel:kt},data(){return{projectDetailsImg:"projectDetails.jpg"}},computed:{...(0,v.Se)(["projectDetails"])}},Et=Ot,Mt=(0,u.Z)(Et,bt,Ct,!1,null,"c51c07bc",null),Nt=Mt.exports,$t=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"blog-details"},[e("img",{staticClass:"blog-details__img",attrs:{src:i(173)(`./${t.blogDetailsImg}`),alt:"Project details"}})]),e("section",{staticClass:"articles center"},[e("div",{staticClass:"articles-content"},[e("div",{staticClass:"articles-content-list"},t._l(t.filteredProjects,(function(t){return e("div",{key:t.id},[e("BlogDetailsItem",{attrs:{article:t}})],1)})),0),e("div",{staticClass:"tags"},[e("h4",{staticClass:"tags__title"},[t._v("Tags")]),t._l(t.articleTags,(function(i){return e("button",{key:i.id,staticClass:"tags__button",style:{backgroundColor:i===t.selectedTag?"#292F36":"#F4F0EC",color:i===t.selectedTag?"white":"black"},on:{click:function(e){return t.chooseTag(i)}}},[t._v(" "+t._s(i)+" ")])}))],2)])])])},Ft=[],Zt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"article"},[e("h4",{staticClass:"article__title"},[t._v(t._s(t.article.name))]),e("img",{staticClass:"article__img",attrs:{src:i(173)(`./${t.article.img}`),alt:"article"}}),e("p",{staticClass:"article__text"},[t._v(t._s(t.article.text))])])])},qt=[],Kt={name:"BlogDetailsItem",props:["article"]},Gt=Kt,Rt=(0,u.Z)(Gt,Zt,qt,!1,null,"25190eae",null),Ht=Rt.exports,Jt={name:"BlogDetailsPage",components:{BlogDetailsItem:Ht},data(){return{blogDetailsImg:"ArticleDetails.jpg",selectedTag:""}},methods:{chooseTag(t){this.selectedTag===t?this.selectedTag="":this.selectedTag=t}},computed:{...(0,v.Se)(["articleTags","articles"]),filteredProjects(){return this.selectedTag?this.articles.filter((t=>t.tags.includes(this.selectedTag))):this.articles}}},Ut=Jt,Wt=(0,u.Z)(Ut,$t,Ft,!1,null,"553a471a",null),Vt=Wt.exports;const Yt=[{path:"/",component:et},{path:"/main",component:et},{path:"/blog",component:mt},{path:"/blog/:page",component:mt},{path:"/blogdetails",component:Vt},{path:"/project",component:vt},{path:"/project/:page",component:vt},{path:"/projectdetails",component:Nt}];var zt=Yt;s.ZP.use(v.ZP),s.ZP.use(x.Z),s.ZP.config.productionTip=!1;const Qt=new x.Z({routes:zt}),Xt=new v.ZP.Store(P);new s.ZP({render:t=>t(D),store:Xt,router:Qt}).$mount("#app")},173:function(t,e,i){var s={"./ArticleDetails.jpg":681,"./BlogDetails1.jpg":565,"./BlogDetails2.jpg":220,"./arrow.svg":719,"./article1.jpg":20,"./article2.jpg":672,"./article3.jpg":480,"./article4.jpg":291,"./article5.jpg":2,"./article6.jpg":450,"./articles.jpg":262,"./banner.jpg":146,"./logo.svg":574,"./next.svg":31,"./post.jpg":412,"./product1.jpg":759,"./product2.jpg":255,"./product3.jpg":974,"./product4.jpg":357,"./projectDetails.jpg":18,"./projectSlider1.jpg":422,"./projectSlider2.jpg":51,"./projectSlider3.jpg":219,"./projects.jpg":633,"./social1.svg":118,"./social2.svg":335,"./soldProject1.jpg":699,"./soldProject2.jpg":991,"./soldProject3.jpg":779,"./soldProject4.jpg":704,"./soldProject5.jpg":229,"./soldProject6.jpg":570,"./soldProject7.jpg":102,"./soldProject8.jpg":61};function r(t){var e=o(t);return i(e)}function o(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id=173},719:function(t,e,i){"use strict";t.exports=i.p+"img/arrow.a40edf8c.svg"},574:function(t,e,i){"use strict";t.exports=i.p+"img/logo.cbdb00be.svg"},31:function(t,e,i){"use strict";t.exports=i.p+"img/next.bd717167.svg"},118:function(t,e,i){"use strict";t.exports=i.p+"img/social1.ad8ca39d.svg"},335:function(t,e,i){"use strict";t.exports=i.p+"img/social2.e55dfc92.svg"},681:function(t,e,i){"use strict";t.exports=i.p+"img/ArticleDetails.360b1063.jpg"},565:function(t,e,i){"use strict";t.exports=i.p+"img/BlogDetails1.2be79783.jpg"},220:function(t,e,i){"use strict";t.exports=i.p+"img/BlogDetails2.bfb2adc5.jpg"},20:function(t,e,i){"use strict";t.exports=i.p+"img/article1.deeec166.jpg"},672:function(t,e,i){"use strict";t.exports=i.p+"img/article2.6aa38599.jpg"},480:function(t,e,i){"use strict";t.exports=i.p+"img/article3.157ec226.jpg"},291:function(t,e,i){"use strict";t.exports=i.p+"img/article4.a77c4536.jpg"},2:function(t,e,i){"use strict";t.exports=i.p+"img/article5.8236a00c.jpg"},450:function(t,e,i){"use strict";t.exports=i.p+"img/article6.973a97ad.jpg"},262:function(t,e,i){"use strict";t.exports=i.p+"img/articles.db69cfc9.jpg"},146:function(t,e,i){"use strict";t.exports=i.p+"img/banner.8e6e89f2.jpg"},412:function(t,e,i){"use strict";t.exports=i.p+"img/post.3b6ec386.jpg"},759:function(t,e,i){"use strict";t.exports=i.p+"img/product1.9567d4a3.jpg"},255:function(t,e,i){"use strict";t.exports=i.p+"img/product2.e0250fee.jpg"},974:function(t,e,i){"use strict";t.exports=i.p+"img/product3.7ec08b43.jpg"},357:function(t,e,i){"use strict";t.exports=i.p+"img/product4.948a7709.jpg"},18:function(t,e,i){"use strict";t.exports=i.p+"img/projectDetails.90263d36.jpg"},422:function(t,e,i){"use strict";t.exports=i.p+"img/projectSlider1.4d90077f.jpg"},51:function(t,e,i){"use strict";t.exports=i.p+"img/projectSlider2.5dc300b5.jpg"},219:function(t,e,i){"use strict";t.exports=i.p+"img/projectSlider3.421a38e0.jpg"},633:function(t,e,i){"use strict";t.exports=i.p+"img/projects.a3090f61.jpg"},699:function(t,e,i){"use strict";t.exports=i.p+"img/soldProject1.8743f06b.jpg"},991:function(t,e,i){"use strict";t.exports=i.p+"img/soldProject2.4295259d.jpg"},779:function(t,e,i){"use strict";t.exports=i.p+"img/soldProject3.b119888d.jpg"},704:function(t,e,i){"use strict";t.exports=i.p+"img/soldProject4.5165bc7c.jpg"},229:function(t,e,i){"use strict";t.exports=i.p+"img/soldProject5.470803f1.jpg"},570:function(t,e,i){"use strict";t.exports=i.p+"img/soldProject6.5b36f153.jpg"},102:function(t,e,i){"use strict";t.exports=i.p+"img/soldProject7.3ad30811.jpg"},61:function(t,e,i){"use strict";t.exports=i.p+"img/soldProject8.7cfb11b4.jpg"}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,s,r,o){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],o=t[u][2];for(var a=!0,c=0;c<s.length;c++)(!1&o||n>=o)&&Object.keys(i.O).every((function(t){return i.O[t](s[c])}))?s.splice(c--,1):(a=!1,o<n&&(n=o));if(a){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[s,r,o]}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,o,n=s[0],a=s[1],c=s[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(c)var u=c(i)}for(e&&e(s);l<n.length;l++)o=n[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(u)},s=self["webpackChunkinterno_project"]=self["webpackChunkinterno_project"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(675)}));s=i.O(s)})();
//# sourceMappingURL=app.73779cc8.js.map