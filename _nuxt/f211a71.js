(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{264:function(e,t,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("21f861e0",content,!0,{sourceMap:!1})},268:function(e,t,r){"use strict";r(264)},269:function(e,t,r){var n=r(19)(!1);n.push([e.i,".card{overflow:hidden;border-radius:20px;background:#fff;text-decoration:none;color:#444;box-shadow:0 2px 5px rgba(0,0,0,.1);display:flex;flex-direction:column;min-height:100%;position:relative;top:0;transition:all .1s ease-in;cursor:pointer}.card:hover{top:-2px;box-shadow:0 4px 5px rgba(0,0,0,.2)}.card article{padding:20px;flex:1;display:flex;flex-direction:column;justify-content:space-between}.card h1{font-size:20px;margin:0;color:#333}[dir=ltr] .card p{margin-left:0}[dir=ltr] .card p,[dir=rtl] .card p{margin-right:0}[dir=rtl] .card p{margin-left:0}.card p{flex:1;line-height:1.4;display:block;margin-top:1em;margin-bottom:1em}.card article span{font-size:12px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:.05em;margin:2em 0 0}.card .thumb{padding-bottom:60%;background-size:cover;background-position:50%}@media (min-width:60em){.size-1{grid-column:span 1}.size-2{grid-column:span 2}.size-3{grid-column:span 3}}.article-card{-webkit-animation:article-appear .45s;animation:article-appear .45s}@-webkit-keyframes article-appear{0%{opacity:0;transform:translateX(150px)}}@keyframes article-appear{0%{opacity:0;transform:translateX(150px)}}",""]),e.exports=n},278:function(e,t,r){"use strict";r.r(t);var n={props:["articleSlug","img","title","preview","size","index","date"],methods:{formatDate:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},computed:{computedClasses:function(){return{"size-1":2!==this.size&&3!==this.size,"size-2":2===this.size,"size-3":3===this.size}},computedAppear:function(){return"animation: 0.3s article-appear "+.3*this.index+";"}},name:"article-card"},c=(r(268),r(7)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"article-card",class:e.computedClasses},[r("nuxt-link",{staticClass:"card",attrs:{to:{path:e.articleSlug},append:""}},[r("div",{directives:[{name:"lazy-background",rawName:"v-lazy-background"}],staticClass:"thumb",attrs:{"lazy-background":e.img.src}}),e._v(" "),r("article",[r("h1",[e._v(e._s(e.title))]),e._v(" "),r("p",[e._v(e._s(e.preview))]),e._v(" "),r("span",[e._v(e._s(e.formatDate(e.date)))])])])],1)}),[],!1,null,null,null);t.default=component.exports},307:function(e,t,r){"use strict";r.r(t);r(29),r(49);var n={props:["articlesData"],data:function(){return{renderedArticles:[]}},mounted:function(){var e=this;this.articlesData.forEach((function(article,i){setTimeout((function(){e.renderedArticles.push(article)}),80*i)}))}},c=r(7),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.renderedArticles,(function(article,i){return r("article-card",{key:article.title,attrs:{title:article.title,articleSlug:article.slug,img:article.cardImg,preview:article.description?article.description:"",size:article.size?article.size:1,date:article.creationDate,index:i}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ArticleCard:r(278).default})}}]);