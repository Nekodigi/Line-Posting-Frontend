(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{6499:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archive/monthly/[YYMM]/[page]",function(){return __webpack_require__(2766)}])},2484:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return MonthlyArchive}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1664),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7294),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9603),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9417);function MonthlyArchive(param){let{counts}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"border"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{id:"MonthlyArchive",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"years",children:Object.keys(counts).sort().reverse().map((YY,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Year,{YY:YY,i:i,counts:counts},YY))})})]})}function Year(param){var counts;let{counts:counts1,YY,i}=param,[show,setShow]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0==i);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{onClick:()=>setShow(!show),className:"year",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.G,{icon:show?_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.eW2:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.I4f}),"\xa0\xa020",YY]}),show?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"months",id:YY,children:Object.keys(counts=counts1[YY]).sort().reverse().map(MM=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:"/archive/monthly/".concat(YY).concat(MM,"/1"),className:"month",children:"20".concat(YY," / ").concat(MM,"  (").concat(counts[MM],")")},MM))}):null]},YY)}},5054:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Posts}});var jsx_runtime=__webpack_require__(5893),firebase=__webpack_require__(6375);function Post(param){let{post}=param;return(0,jsx_runtime.jsxs)("a",{href:"/post/".concat(post.id),className:"outerPost",children:[0!==post.image_paths.length?(0,jsx_runtime.jsx)("img",{src:(0,firebase._)(post.image_paths[0]),className:"thumbnail",alt:"thumbnail"}):null,(0,jsx_runtime.jsxs)("div",{className:"discription",children:[(0,jsx_runtime.jsx)("h2",{children:post.title}),(0,jsx_runtime.jsx)("p",{children:post.body.replace(/\n/g,"")})]}),0===post.image_paths.length?(0,jsx_runtime.jsx)("div",{className:"thumbnail"}):null]})}function Posts(param){let{statusMessage,posts}=param;return(0,jsx_runtime.jsxs)("div",{children:[statusMessage?(0,jsx_runtime.jsx)("h1",{id:"statusMessage",children:statusMessage}):null,(0,jsx_runtime.jsx)("div",{className:"posts",children:posts.map(post=>(0,jsx_runtime.jsx)(Post,{post:post},post.id))})]})}},1089:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return SidePage}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1664),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9603),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9417);function SidePage(param){let{next,prev}=param;if(!(void 0===next&&void 0===prev))return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"movePageContainer",children:[void 0!==next?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{className:"movePageLeft",href:next,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.EyR})," 前のページ"]})}):null,void 0!==prev?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{className:"movePageRight",href:prev,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["次のページ ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.yOZ})]})}):null]})}},2766:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return index}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),components_monthlyArchive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2484),components_posts_posts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5054),components_sidePage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1089),__N_SSG=!0;function index(param){let{YYMM,posts,counts}=param,next_url=posts.prev_id?"/archive/monthly/".concat(YYMM.toString(),"/").concat(posts.prev_id.toString()):void 0,prev_url=posts.next_id?"/archive/monthly/".concat(YYMM.toString(),"/").concat(posts.next_id.toString()):void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_posts_posts__WEBPACK_IMPORTED_MODULE_2__.Z,{posts:posts.posts,statusMessage:"20".concat(YYMM.substring(0,2),"年").concat(YYMM.substring(2,4),"月の記事一覧")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_sidePage__WEBPACK_IMPORTED_MODULE_3__.Z,{prev:prev_url,next:next_url}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_monthlyArchive__WEBPACK_IMPORTED_MODULE_1__.Z,{counts:counts})]})}},6375:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_:function(){return imagePathUrl}});let projectDomain=()=>"foodbankbotdev.appspot.com",imagePathUrl=path=>"https://firebasestorage.googleapis.com/v0/b/".concat(projectDomain(),"/o/").concat(encodeURIComponent(path),"?alt=media")}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=6499)}),_N_E=__webpack_require__.O()}]);