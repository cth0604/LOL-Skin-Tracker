(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{161:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),r=n(43),o=n.n(r),s=n(10),j=n(12),l=n(14),h=n(196),u=n(195),d=n(28),m=n(93),b=n.n(m)()({palette:{secondary:{main:"#EDB852"}},typography:{h6:{lineHeight:1}}}),p=n(182),O=n(184),x=n(185),f=n(183),g=n(186),v=n(164),y=n(25),w=n.n(y),k=n.p+"static/media/league.f53843a6.svg",C=Object(p.a)((function(e){return{logo:{"&:hover":{background:"transparent"}},toolbarMargin:Object(j.a)(Object(j.a)({},e.mixins.toolbar),{},{marginBottom:"2em"}),buttons:{marginLeft:"auto",marginRight:"10px"},leftButton:{marginRight:"10px"},title:{textDecoration:"none",marginLeft:"50px"}}}));var N=function(e){var t,n=C(),a=Object(d.b)(),r=a.loginWithRedirect,o=a.logout;return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(O.a,{children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(g.a,{component:s.b,to:"/",disableRipple:!0,classes:{root:n.logo},children:Object(c.jsx)("img",{alt:"logo",src:k,style:{height:"1.5em"}})}),Object(c.jsx)(v.a,{color:"inherit",variant:"h6",component:s.b,to:"/",className:n.title,children:"HOME"}),Object(c.jsx)(v.a,{color:"inherit",variant:"h6",component:s.b,to:"/champions",className:n.title,children:"CHAMPIONS"}),Object(c.jsx)(v.a,{color:"inherit",variant:"h6",component:s.b,to:"/skins",className:n.title,children:"SKINS"}),(t=e.isAuth,t?Object(c.jsxs)("div",{className:n.buttons,children:[Object(c.jsx)(f.a,{variant:"outlined",color:"secondary",className:n.leftButton,onClick:function(){return o({returnTo:window.location.origin})},children:"SIGN OUT"}),Object(c.jsx)(f.a,{variant:"outlined",color:"secondary",component:s.b,to:"/wishlist",startIcon:Object(c.jsx)(w.a,{}),children:"Wishlist"})]}):Object(c.jsxs)("div",{className:n.buttons,children:[Object(c.jsx)(f.a,{variant:"outlined",color:"secondary",className:n.leftButton,onClick:r,children:"SIGN IN"}),Object(c.jsx)(f.a,{variant:"outlined",color:"secondary",onClick:r,children:"SIGN UP"})]}))]})}),Object(c.jsx)("div",{className:n.toolbarMargin})]})},R=Object(p.a)((function(e){return{root:{width:"85%",margin:"auto"}}}));var S=Object(d.c)((function(){var e=R();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(v.a,{variant:"h4",children:"Account Settings"})})}),{onRedirecting:function(){return null}}),I=n(8),T=n(187),A=n(188),E=n(189),P=n(190),B=n(191),L=n(29),D=n.n(L),U=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center"},image:{width:"50%",borderRadius:"10px"},gridContainer:{width:"30%",textAlign:"center"}}}));var M=function(e){var t=U(),n=Object(a.useState)(!1),i=Object(I.a)(n,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){e.isAuthenticated&&fetch("/api/wishlist/champion/wishlisted/".concat(encodeURIComponent(e.champion.name),"/").concat(e.user.email)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return o(e)})).catch((function(e){console.error("Error: ",e)}))}),[]),Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)("img",{src:e.champion.imageURL,className:t.image}),Object(c.jsxs)(T.a,{container:!0,className:t.gridContainer,direction:"column",justify:"space-around",children:[Object(c.jsx)(T.a,{item:!0,children:Object(c.jsxs)(v.a,{variant:"h5",children:["Champion: ",e.champion.name]})}),Object(c.jsx)(T.a,{item:!0,children:Object(c.jsxs)(v.a,{variant:"h5",children:["RP: ",e.champion.originalRP]})}),Object(c.jsx)(T.a,{item:!0,children:Object(c.jsxs)(v.a,{variant:"h5",children:["Release Date: ",new Date(e.champion.releaseDate).toDateString()]})}),Object(c.jsx)(T.a,{item:!0,children:Object(c.jsx)(g.a,{onClick:function(){e.isAuthenticated&&fetch(r?"/api/wishlist/champion/remove":"/api/wishlist/champion/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.user.email,name:e.champion.name})}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){o(!r)})).catch((function(e){console.error("Error: ",e)}))},children:r?Object(c.jsx)(w.a,{color:"primary"}):Object(c.jsx)(D.a,{color:"primary"})})})]})]})};var J=function(){return Object(c.jsx)("div",{className:"Error",children:Object(c.jsx)("h1",{children:"Error"})})},W=Object(p.a)((function(e){return{root:{width:"85%",margin:"auto"},championInfo:{display:"flex",justifyContent:"center"},image:{width:"50%",borderRadius:"10px"},gridContainer:{width:"30%",textAlign:"center"},gridItem:{maxWidth:"100%"},skinsText:{marginTop:"30px",marginBottom:"10px"}}}));var G=function(e){var t=Object(l.f)().championID,n=Object(a.useState)(null),i=Object(I.a)(n,2),r=i[0],o=i[1],j=Object(a.useState)(!0),h=Object(I.a)(j,2),u=h[0],d=h[1];Object(a.useEffect)((function(){fetch("/api/champions/".concat(t)).then((function(e){if(!e.ok)throw J(e.statusText);return e.json()})).then((function(e){o(e)})).catch((function(e){console.error("Error:",e),d(!1)}))}),[]);var m=W();return null===r&&u?null:u?Object(c.jsxs)("div",{className:m.root,children:[Object(c.jsx)(M,{champion:r,isAuthenticated:e.isAuthenticated,user:e.user}),Object(c.jsx)(v.a,{className:m.skinsText,variant:"h4",align:"center",children:"Skins"}),Object(c.jsx)(T.a,{container:!0,spacing:3,children:r.skins.map((function(e){return Object(c.jsx)(T.a,{item:!0,xs:3,children:Object(c.jsx)(A.a,{children:Object(c.jsxs)(E.a,{component:s.b,to:"/skin/".concat(encodeURIComponent(e.name)),children:[Object(c.jsx)(P.a,{component:"img",image:e.imageURL}),Object(c.jsx)(B.a,{children:Object(c.jsx)(v.a,{className:m.name,variant:"h5",component:"h2",align:"center",children:e.name})})]})},e.name)})}))})]}):Object(c.jsx)(J,{})},K=n(31),H=n(198),z=n(19),F=n(70),Y=n.n(F),$=Object(p.a)((function(e){return{root:{flexGrow:1,borderStyle:"solid",borderWidth:"2px",borderColor:"#3f51b5"},title:Object(K.a)({marginRight:"20px",display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(z.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(z.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},appBar:{backgroundColor:"white",color:"black"}}}));var q=function(e){var t=$();return Object(c.jsx)("div",{className:t.root,children:Object(c.jsx)(O.a,{position:"static",className:t.appBar,children:Object(c.jsx)(x.a,{children:Object(c.jsxs)("div",{className:t.search,children:[Object(c.jsx)("div",{className:t.searchIcon,children:Object(c.jsx)(Y.a,{})}),Object(c.jsx)(H.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(t){e.setKeywordAndCurrentPage({keyword:t.target.value,currentPage:1})}})]})})})})},Q=n(192),V=Object(p.a)((function(e){return{name:{textAlign:"center"},heartIcon:{padding:0,margin:"auto"},iconContainer:{padding:0,paddingBottom:"5px"}}}));var X=function(e){var t=V(),n=Object(a.useState)(!1),i=Object(I.a)(n,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){e.isAuthenticated&&fetch("/api/wishlist/champion/wishlisted/".concat(encodeURIComponent(e.name),"/").concat(e.user.email)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return o(e)})).catch((function(e){console.error("Error: ",e)}))}),[]),Object(c.jsx)(T.a,{item:!0,xs:3,children:Object(c.jsxs)(A.a,{children:[Object(c.jsxs)(E.a,{component:s.b,to:"/champion/".concat(encodeURIComponent(e.championID)),children:[Object(c.jsx)(P.a,{component:"img",image:e.img}),Object(c.jsx)(B.a,{children:Object(c.jsx)(v.a,{className:t.name,variant:"h5",component:"h2",children:e.name})})]}),Object(c.jsx)(Q.a,{className:t.iconContainer,children:r?Object(c.jsx)(g.a,{className:t.heartIcon,onClick:function(){e.isAuthenticated&&fetch("/api/wishlist/champion/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.user.email,name:e.name})}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){console.log(e),o(!1)})).catch((function(e){console.error("Error: ",e)}))},children:Object(c.jsx)(w.a,{color:"primary"})}):Object(c.jsx)(g.a,{className:t.heartIcon,onClick:function(){e.isAuthenticated&&fetch("/api/wishlist/champion/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.user.email,name:e.name})}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){console.log(e),o(!0)})).catch((function(e){console.error("Error: ",e)}))},children:Object(c.jsx)(D.a,{color:"primary"})})})]})})},Z=Object(p.a)((function(e){return{root:{flexGrow:1}}}));var _=function(e){var t=Z();return Object(c.jsx)("div",{className:t.root,children:Object(c.jsx)(T.a,{container:!0,spacing:3,children:e.champions.map((function(t){return Object(c.jsx)(X,{name:t.name,img:t.imageURL,championID:t.championID,isAuthenticated:e.isAuthenticated,user:e.user},t.championID)}))})})},ee=n(197),te=Object(p.a)((function(e){return{root:{width:"85%",margin:"auto"},searchBar:{marginBottom:e.spacing(4)},paginationContainer:{marginTop:e.spacing(4)},pagination:{justifyContent:"center"}}}));var ne=function(e){var t=Object(a.useState)({keyword:"",currentPage:1}),n=Object(I.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)([]),s=Object(I.a)(o,2),l=s[0],h=s[1];Object(a.useEffect)((function(){fetch("/api/champions").then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){h(e)})).catch((function(e){console.error("Error: ",e)}))}),[]);var u=te(),d=function(){return l.filter((function(e){return e.name.toLowerCase().includes(i.keyword.toLocaleLowerCase())}))};return Object(c.jsxs)("div",{className:u.root,children:[Object(c.jsx)("h1",{children:"Champions"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:u.searchBar,children:Object(c.jsx)(q,{setKeywordAndCurrentPage:r})}),Object(c.jsx)(_,{isAuthenticated:e.isAuthenticated,user:e.user,champions:d().slice(20*i.currentPage-20,20*i.currentPage)}),Object(c.jsx)(ee.a,{classes:{root:u.paginationContainer,ul:u.pagination},color:"primary",page:i.currentPage,count:Math.ceil(d().length/20),onChange:function(e,t){r(Object(j.a)(Object(j.a)({},i),{},{currentPage:t}))}})]})]})},ce=n(81),ae=n.n(ce),ie=n(94),re=n(95),oe=n.n(re),se=(n(159),n(160),n(161),Object(p.a)((function(e){return{root:{},salePercent:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,borderRadius:"10px",margin:"auto 10px auto 0px",padding:"5px"},prices:{margin:"auto 0px"},name:{margin:"auto 0px"},favoriteIcon:{padding:0,margin:"auto"},iconContainer:{padding:0,paddingBottom:"5px"},cardContent:{padding:"10px 10px 10px 5px"},originalRP:{textDecorationLine:"line-through"}}})));function je(e){var t=se(),n=Object(a.useState)(!1),i=Object(I.a)(n,2),r=i[0],o=i[1];Object(a.useEffect)((function(){e.isAuthenticated&&fetch("/api/wishlist/".concat(e.type,"/wishlisted/").concat(e.content.name,"/").concat(e.user.email)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return o(e)})).catch((function(e){console.error("Error: ",e)}))}),[]);return Object(c.jsxs)(A.a,{className:t.root,children:[Object(c.jsxs)(E.a,{component:s.b,to:"/".concat(e.type,"/").concat("champion"===e.type?encodeURIComponent(e.content.championID):encodeURIComponent(e.content.name)),children:[Object(c.jsx)(P.a,{component:"img",image:e.content.imageURL}),Object(c.jsx)(B.a,{className:t.cardContent,children:Object(c.jsxs)(T.a,{container:!0,direction:"row",justify:"space-between",children:[Object(c.jsx)(T.a,{item:!0,children:Object(c.jsxs)(T.a,{container:!0,children:[Object(c.jsx)(T.a,{item:!0,classes:{root:t.salePercent},children:Object(c.jsxs)(v.a,{variant:"h6",children:["-",Math.ceil(100-e.content.saleRP/e.content.originalRP*100),"%"]})}),Object(c.jsx)(T.a,{item:!0,classes:{root:t.prices},children:Object(c.jsxs)(T.a,{container:!0,direction:"column",children:[Object(c.jsx)(T.a,{item:!0,children:Object(c.jsxs)(v.a,{variant:"caption",className:t.originalRP,children:[e.content.originalRP," RP"]})}),Object(c.jsx)(T.a,{item:!0,children:Object(c.jsxs)(v.a,{variant:"caption",children:[e.content.saleRP," RP"]})})]})})]})}),Object(c.jsx)(T.a,{item:!0,classes:{root:t.name},children:Object(c.jsx)(v.a,{variant:"h6",children:e.content.name})})]})})]}),Object(c.jsx)(Q.a,{className:t.iconContainer,children:Object(c.jsx)(g.a,{className:t.favoriteIcon,onClick:function(){if(e.isAuthenticated){var t="/api/wishlist/".concat(e.type,r?"/remove":"/add");fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.user.email,name:e.content.name})}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){o(!r)})).catch((function(e){console.error("Error: ",e)}))}},children:r?Object(c.jsx)(w.a,{color:"primary"}):Object(c.jsx)(D.a,{color:"primary"})})})]})}function le(e){return Object(c.jsx)(oe.a,Object(j.a)(Object(j.a)({},{dots:!0,slidesToShow:4,slidesToScroll:4}),{},{children:e.contents.map((function(t){return Object(c.jsx)(je,{type:e.type,content:t,isAuthenticated:e.isAuthenticated,user:e.user},t.name)}))}))}var he=Object(p.a)((function(e){return{root:{width:"85%",margin:"auto"},skinTypo:{marginTop:"50px"},title:{}}}));var ue=function(e){var t=Object(a.useState)({champions:[],skins:[]}),n=Object(I.a)(t,2),i=n[0],r=n[1];Object(a.useEffect)((function(){function e(){return(e=Object(ie.a)(ae.a.mark((function e(){var t,n;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["/api/champions/sales","/api/skins/sales"],e.prev=1,e.next=4,Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 4:n=e.sent,console.log(n),r({champions:n[0],skins:n[1]}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Error:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var o=he();return Object(c.jsxs)("div",{className:o.root,children:[Object(c.jsx)(v.a,{className:o.title,variant:"h5",children:"Champions on Sale"}),Object(c.jsx)(le,{type:"champion",className:o.carousel,contents:i.champions,isAuthenticated:e.isAuthenticated,user:e.user}),Object(c.jsx)(v.a,{className:o.skinTypo,variant:"h5",children:"Skins on Sale"}),Object(c.jsx)(le,{type:"skin",contents:i.skins,isAuthenticated:e.isAuthenticated,user:e.user})]})},de=Object(p.a)((function(e){return{root:{flexGrow:1,borderStyle:"solid",borderWidth:"2px",borderColor:"#3f51b5"},title:Object(K.a)({marginRight:"20px",display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(z.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(z.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},appBar:{backgroundColor:"white",color:"black"}}}));var me=function(e){var t=de();return Object(c.jsx)("div",{className:t.root,children:Object(c.jsx)(O.a,{position:"static",className:t.appBar,children:Object(c.jsx)(x.a,{children:Object(c.jsxs)("div",{className:t.search,children:[Object(c.jsx)("div",{className:t.searchIcon,children:Object(c.jsx)(Y.a,{})}),Object(c.jsx)(H.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(t){e.setKeywordAndCurrentPage({keyword:t.target.value,currentPage:1})}})]})})})})},be=Object(p.a)((function(e){return{name:{textAlign:"center"},heartIcon:{padding:0,margin:"auto"},iconContainer:{padding:0,paddingBottom:"5px"}}}));var pe=function(e){var t=be(),n=Object(a.useState)(!1),i=Object(I.a)(n,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){e.isAuthenticated&&fetch("/api/wishlist/skin/wishlisted/".concat(encodeURIComponent(e.name),"/").concat(e.user.email)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return o(e)})).catch((function(e){console.error("Error: ",e)}))}),[]),Object(c.jsx)(T.a,{item:!0,xs:3,children:Object(c.jsxs)(A.a,{children:[Object(c.jsxs)(E.a,{component:s.b,to:"/skin/".concat(encodeURIComponent(e.name)),children:[Object(c.jsx)(P.a,{component:"img",image:e.img}),Object(c.jsx)(B.a,{children:Object(c.jsx)(v.a,{className:t.name,variant:"h5",component:"h2",children:e.name})})]}),Object(c.jsx)(Q.a,{className:t.iconContainer,children:r?Object(c.jsx)(g.a,{className:t.heartIcon,onClick:function(){e.isAuthenticated&&fetch("/api/wishlist/skin/remove/${props.name}/${props.user.email}").then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){console.log(e),o(!1)})).catch((function(e){console.error("Error: ",e)}))},children:Object(c.jsx)(w.a,{color:"primary"})}):Object(c.jsx)(g.a,{className:t.heartIcon,onClick:function(){e.isAuthenticated&&fetch("/api/9000/wishlist/skin/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.user.email,name:e.name})}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){console.log(e),o(!0)})).catch((function(e){console.error("Error: ",e)}))},children:Object(c.jsx)(D.a,{color:"primary"})})})]})})},Oe=Object(p.a)((function(e){return{root:{flexGrow:1}}}));var xe=function(e){var t=Oe();return Object(c.jsx)("div",{className:t.root,children:Object(c.jsx)(T.a,{container:!0,spacing:3,children:e.skins.map((function(t){return Object(c.jsx)(pe,{name:t.name,img:t.imageURL,isAuthenticated:e.isAuthenticated,user:e.user},t.name)}))})})},fe=Object(p.a)((function(e){return{root:{width:"85%",margin:"auto"},searchBar:{marginBottom:e.spacing(4)},paginationContainer:{marginTop:e.spacing(4)},pagination:{justifyContent:"center"}}}));var ge=function(e){var t=Object(a.useState)({keyword:"",currentPage:1}),n=Object(I.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)([]),s=Object(I.a)(o,2),l=s[0],h=s[1];Object(a.useEffect)((function(){fetch("/api/skins").then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){h(e)})).catch((function(e){console.error("Error:",e)}))}),[]);var u=fe(),d=function(){return l.filter((function(e){return e.name.toLowerCase().includes(i.keyword.toLocaleLowerCase())}))};return Object(c.jsxs)("div",{className:u.root,children:[Object(c.jsx)("h1",{children:"Skins"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:u.searchBar,children:Object(c.jsx)(me,{setKeywordAndCurrentPage:r})}),Object(c.jsx)(xe,{isAuthenticated:e.isAuthenticated,user:e.user,skins:d().slice(20*i.currentPage-20,20*i.currentPage)}),Object(c.jsx)(ee.a,{classes:{root:u.paginationContainer,ul:u.pagination},color:"primary",page:i.currentPage,count:Math.ceil(d().length/20),onChange:function(e,t){r(Object(j.a)(Object(j.a)({},i),{},{currentPage:t}))}})]})]})},ve=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center"},image:{width:"50%",borderRadius:"10px"},gridContainer:{width:"30%",textAlign:"center"}}}));var ye=function(e){var t=ve(),n=Object(a.useState)(!1),i=Object(I.a)(n,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){e.isAuthenticated&&fetch("/api/wishlist/skin/wishlisted/".concat(encodeURIComponent(e.skin.name),"/").concat(e.user.email)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return o(e)})).catch((function(e){console.error("Error: ",e)}))}),[]),Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)("img",{src:e.skin.imageURL,className:t.image}),Object(c.jsxs)(T.a,{container:!0,className:t.gridContainer,direction:"column",justify:"space-around",children:[Object(c.jsx)(T.a,{item:!0,children:Object(c.jsxs)(v.a,{variant:"h5",children:["Skin: ",e.skin.name]})}),Object(c.jsx)(T.a,{item:!0,children:Object(c.jsxs)(v.a,{variant:"h5",children:["RP: ",0===e.skin.originalRP?"Special":e.skin.originalRP]})}),Object(c.jsx)(T.a,{item:!0,children:Object(c.jsxs)(v.a,{variant:"h5",children:["Release Date: ",new Date(e.skin.releaseDate).toDateString()]})}),Object(c.jsx)(T.a,{item:!0,children:Object(c.jsxs)(v.a,{variant:"h5",component:s.b,to:"/champion/".concat(encodeURIComponent(e.skin.champion.championID)),children:["Champion: ",e.skin.champion.name]})}),Object(c.jsx)(T.a,{item:!0,children:Object(c.jsx)(g.a,{onClick:function(){e.isAuthenticated&&fetch(r?"/api/wishlist/skin/remove":"/api/wishlist/skin/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.user.email,name:e.skin.name})}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){console.log(e),o(!r)})).catch((function(e){console.error("Error: ",e)}))},children:r?Object(c.jsx)(w.a,{color:"primary"}):Object(c.jsx)(D.a,{color:"primary"})})})]})]})},we=Object(p.a)((function(e){return{root:{width:"85%",margin:"auto"},skinInfo:{display:"flex",justifyContent:"center"},image:{width:"50%",borderRadius:"10px"},gridContainer:{width:"30%",textAlign:"center"},gridItem:{maxWidth:"100%"}}}));var ke=function(e){var t=Object(l.f)().name,n=Object(a.useState)(null),i=Object(I.a)(n,2),r=i[0],o=i[1],s=Object(a.useState)(!0),j=Object(I.a)(s,2),h=j[0],u=j[1];Object(a.useEffect)((function(){fetch("/api/skins/".concat(t)).then((function(e){if(!e.ok)throw J(e.statusText);return e.json()})).then((function(e){o(e)})).catch((function(e){console.error("Error:",e),u(!1)}))}),[]);var d=we();return null===r&&h?null:h?Object(c.jsx)("div",{className:d.root,children:Object(c.jsx)(ye,{skin:r,isAuthenticated:e.isAuthenticated,user:e.user})}):Object(c.jsx)(J,{})},Ce=n(96),Ne=n.n(Ce),Re=Object(p.a)((function(e){return{name:{textAlign:"center"},deleteIcon:{padding:0,margin:"auto"},iconContainer:{padding:0,paddingBottom:"5px"}}}));var Se=function(e){var t=Re();return Object(c.jsx)(T.a,{item:!0,xs:3,children:Object(c.jsxs)(A.a,{children:[Object(c.jsxs)(E.a,{component:s.b,to:"/".concat(e.type,"/").concat(encodeURIComponent(e.name)),children:[Object(c.jsx)(P.a,{component:"img",image:e.img}),Object(c.jsx)(B.a,{children:Object(c.jsx)(v.a,{className:t.name,variant:"h5",component:"h2",children:e.name})})]}),Object(c.jsx)(Q.a,{className:t.iconContainer,children:Object(c.jsx)(g.a,{className:t.deleteIcon,onClick:function(){fetch("/api/wishlist/".concat(e.type,"/remove"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.user.email,name:e.name})}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(t){e.setRefresh(!e.refresh)})).catch((function(e){console.error("Error: ",e)}))},children:Object(c.jsx)(Ne.a,{color:"primary"})})})]})})},Ie=Object(p.a)((function(e){return{root:{flexGrow:1}}}));var Te=function(e){var t=Ie();return Object(c.jsx)("div",{className:t.root,children:Object(c.jsx)(T.a,{container:!0,spacing:3,children:e.items.map((function(t){return Object(c.jsx)(Se,{name:t.name,img:t.imageURL,type:e.type,user:e.user,setRefresh:e.setRefresh,refresh:e.refresh},t.name)}))})})},Ae=Object(p.a)((function(e){return{root:{width:"85%",margin:"auto"},wishlistText:{marginBottom:"30px"},skinsText:{marginTop:"20px"}}}));var Ee=Object(d.c)((function(e){var t=Ae(),n=Object(a.useState)({champions:[],skins:[]}),i=Object(I.a)(n,2),r=i[0],o=i[1],s=Object(a.useState)(!0),j=Object(I.a)(s,2),l=j[0],h=j[1];return Object(a.useEffect)((function(){fetch("/api/wishlist/get/".concat(e.user.email)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return o(e)})).catch((function(e){console.error("Error: ",e)}))}),[l]),Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)(v.a,{className:t.wishlistText,variant:"h3",children:"Wishlist"}),Object(c.jsx)(v.a,{variant:"h4",children:"Champions"}),Object(c.jsx)(Te,{items:r.champions,type:"champion",user:e.user,setRefresh:h,refresh:l}),Object(c.jsx)(v.a,{className:t.skinsText,variant:"h4",children:"Skins"}),Object(c.jsx)(Te,{items:r.skins,type:"skin",user:e.user,setRefresh:h,refresh:l})]})}),{onRedirecting:function(){return null}}),Pe=n(194),Be=n(199),Le=n(193);var De=function(){return Object(c.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(c.jsx)(Le.a,{color:"inherit",href:"/",children:"LOL Skin Tracker"})," ",(new Date).getFullYear(),"."]})},Ue=n(97),Me=n.n(Ue),Je=n(98),We=n.n(Je),Ge=n(100),Ke=n.n(Ge),He=n(99),ze=n.n(He),Fe=Object(p.a)((function(e){var t;return{footer:(t={borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},Object(K.a)(t,e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)}),Object(K.a)(t,"textAlign","center"),t),typography:{fontSize:".9rem",opacity:.7,"&:hover":{opacity:1},textDecoration:"none",padding:"auto"},gridItem:{textAlign:"center"},logo:{"&:hover":{background:"transparent"}},gridContainer:{marginBottom:"10px"}}})),Ye=[{title:"HOME",to:"/"},{title:"CHAMPIONS",to:"/champions"},{title:"SKINS",to:"/skins"}];var $e=function(e){var t=Fe();return Object(c.jsxs)(Pe.a,{maxWidth:"md",component:"footer",className:t.footer,children:[Object(c.jsx)(T.a,{container:!0,justify:"space-evenly",className:t.gridContainer,children:Ye.map((function(e){return Object(c.jsx)(T.a,{className:t.gridItem,item:!0,children:Object(c.jsx)(v.a,{component:s.b,to:e.to,variant:"h6",color:"textPrimary",align:"center",className:t.typography,children:e.title})},e.title)}))}),Object(c.jsx)(g.a,{component:s.b,to:"/",disableRipple:!0,classes:{root:t.logo},children:Object(c.jsx)("img",{alt:"logo",src:k,style:{height:"2em",fill:"grey"}})}),Object(c.jsxs)("div",{children:[Object(c.jsx)(g.a,{children:Object(c.jsx)(Me.a,{})}),Object(c.jsx)(g.a,{children:Object(c.jsx)(We.a,{})}),Object(c.jsx)(g.a,{children:Object(c.jsx)(ze.a,{})}),Object(c.jsx)(g.a,{children:Object(c.jsx)(Ke.a,{})})]}),Object(c.jsx)(Be.a,{mt:5,children:Object(c.jsx)(De,{})})]})};var qe=function(){var e=Object(d.b)(),t=e.isAuthenticated,n=e.user;return e.isLoading?null:Object(c.jsxs)(u.a,{theme:b,children:[Object(c.jsx)(h.a,{}),Object(c.jsx)(N,{isAuth:t}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",render:function(e){return Object(c.jsx)(ue,Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:t,user:n}))},exact:!0}),Object(c.jsx)(l.a,{path:"/champions",render:function(e){return Object(c.jsx)(ne,Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:t,user:n}))},exact:!0}),Object(c.jsx)(l.a,{path:"/champion/:championID",render:function(e){return Object(c.jsx)(G,Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:t,user:n}))},exact:!0}),Object(c.jsx)(l.a,{path:"/skins",render:function(e){return Object(c.jsx)(ge,Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:t,user:n}))},exact:!0}),Object(c.jsx)(l.a,{path:"/skin/:name",render:function(e){return Object(c.jsx)(ke,Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:t,user:n}))},exact:!0}),Object(c.jsx)(l.a,{path:"/wishlist",render:function(e){return Object(c.jsx)(Ee,Object(j.a)(Object(j.a)({},e),{},{user:n}))},exact:!0}),Object(c.jsx)(l.a,{path:"/account",component:S,exact:!0}),Object(c.jsx)(l.a,{component:J})]}),Object(c.jsx)($e,{})]})};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d.a,{domain:"dev-f58tjqho.us.auth0.com",clientId:"YzDiH9ppe69e04ddiQkdTWBmdvKOlbBP",redirectUri:window.location.origin,children:Object(c.jsx)(s.a,{children:Object(c.jsx)(qe,{})})})}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.bf4cdd75.chunk.js.map