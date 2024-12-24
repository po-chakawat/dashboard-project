(function(){"use strict";var e={9287:function(e,a,t){var n=t(5130),s=t(6768);function i(e,a,t,n,i,r){const o=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(o)])}var r={name:"App"},o=t(1241);const l=(0,o.A)(r,[["render",i]]);var c=l,d=t(1387),p=t(4232);const u={id:"wrapper"},b={class:"d-flex"},h={class:"row"},v={class:"col-xl-12"},m={key:0,class:"loading"},g={key:1,class:"crypto-list"},f={class:"col-xl-6"},k={class:"card"},L={class:"card-body"},y={class:"ratio ratio-21x9 mb-3 chart-container"},w={class:"row"},D={class:"col-lg-6"},C={class:"col-lg-6"},O={class:"col-xl-6"};function S(e,a,t,n,i,r){const o=(0,s.g2)("TopHeader"),l=(0,s.g2)("NavMenu"),c=(0,s.g2)("CryptoCard"),d=(0,s.g2)("DashboardColumnChart"),S=(0,s.g2)("UsageStats"),M=(0,s.g2)("DashboardMap");return(0,s.uX)(),(0,s.CE)("div",u,[(0,s.bF)(o,{isDarkMode:i.isDarkMode,onToggleMenu:r.toggleMenu,onToggleDarkMode:r.toggleDarkMode,onSearch:r.handleSearch},null,8,["isDarkMode","onToggleMenu","onToggleDarkMode","onSearch"]),(0,s.Lk)("div",b,[(0,s.bF)(l,{ref:"navmenu"},null,512),(0,s.Lk)("div",{class:(0,p.C4)(["app-content",{"expanded-app-content":!i.isSidebarOpen,"collapsed-content":i.isSidebarOpen}])},[(0,s.Lk)("div",h,[(0,s.Lk)("div",v,[a[0]||(a[0]=(0,s.Lk)("h2",null,"Cryptocurrency Dashboard",-1)),i.loading?((0,s.uX)(),(0,s.CE)("div",m,"Loading...")):((0,s.uX)(),(0,s.CE)("div",g,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.coins,(e=>((0,s.uX)(),(0,s.Wv)(c,(0,s.v6)({key:e.id,coin:e,ref_for:!0},e),null,16,["coin"])))),128))]))]),(0,s.Lk)("div",f,[(0,s.Lk)("div",k,[(0,s.Lk)("div",L,[a[1]||(a[1]=(0,s.Lk)("div",{class:"d-flex fw-bold small"},[(0,s.Lk)("span",{class:"flex-grow-1"},"SERVER STATS")],-1)),(0,s.Lk)("div",y,[(0,s.bF)(d,{currentTheme:r.currentTheme},null,8,["currentTheme"])]),(0,s.Lk)("div",w,[(0,s.Lk)("div",D,[(0,s.bF)(S,{title:"DISK USAGE",usage:"20.04 / 256 GB",percent:"20",details:"Last updated 1 min ago",stats:"[{name: 'DISK C', value: '19.56GB'}, {name: 'DISK D', value: '0.50GB'}]"})]),(0,s.Lk)("div",C,[(0,s.bF)(S,{title:"BANDWIDTH",usage:"83.76GB / 10TB",percent:"20",details:"Last updated 1 min ago",stats:"[{name: 'HTTP', value: '19.56GB'}, {name: 'FTP', value: '0.50GB'}]"})])])])])]),(0,s.Lk)("div",O,[(0,s.bF)(M)])])],2)])])}var M=t.p+"img/logo-cat.88a85495.png",_=t.p+"img/kitbag-logo.3d9bb77f.svg";const x={class:"app-header"},E={class:"option"},T={class:"option-search-container"},A={class:"option-search-input"},F={class:"option-search-icon"},I=["innerHTML"];function X(e,a,t,n,i,r){return(0,s.uX)(),(0,s.CE)("header",x,[(0,s.Lk)("button",{class:"menu-toggler",type:"button",onClick:a[0]||(a[0]=a=>e.$emit("toggle-menu"))},a[6]||(a[6]=[(0,s.Lk)("span",{class:"bar"},null,-1),(0,s.Lk)("span",{class:"bar"},null,-1),(0,s.Lk)("span",{class:"bar"},null,-1)])),a[12]||(a[12]=(0,s.Fv)('<div class="brand"><a href="#" class="brand-inner"><img class="brand-logo" src="'+M+'" alt=""><span class="brand-text">Meow meow <i class="bi bi-hearts"></i></span></a></div>',1)),(0,s.Lk)("div",E,[(0,s.Lk)("div",{class:(0,p.C4)(["option-search",{active:i.isSearchActive}])},[(0,s.Lk)("div",T,[a[8]||(a[8]=(0,s.Lk)("div",{class:"option-search-icon"},[(0,s.Lk)("i",{class:"bi bi-search"})],-1)),(0,s.Lk)("div",A,[i.isSearchActive?((0,s.uX)(),(0,s.CE)("input",{key:0,type:"text",placeholder:"Search...",class:"form-control",onInput:a[1]||(a[1]=(...e)=>r.search&&r.search(...e))},null,32)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",F,[i.isSearchActive?((0,s.uX)(),(0,s.CE)("button",{key:0,class:"btn close-btn",onClick:a[2]||(a[2]=(...e)=>r.closeSearch&&r.closeSearch(...e))},a[7]||(a[7]=[(0,s.Lk)("i",{class:"bi bi-x-lg"},null,-1)]))):(0,s.Q3)("",!0)])])],2),i.isSearchActive?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("button",{key:0,class:"btn option-search-btn option-icon",onClick:a[3]||(a[3]=(...e)=>r.openSearch&&r.openSearch(...e))},a[9]||(a[9]=[(0,s.Lk)("i",{class:"bi bi-search"},null,-1)]))),(0,s.Lk)("button",{onClick:a[4]||(a[4]=(...e)=>r.toggleDarkMode&&r.toggleDarkMode(...e)),class:"btn option-icon",innerHTML:r.darkModeIcon},null,8,I),(0,s.Lk)("div",{class:(0,p.C4)(["option-dropdown",{show:i.isDropdownOpen}]),ref:"dropdown",onClick:a[5]||(a[5]=(...e)=>r.toggleDropdown&&r.toggleDropdown(...e))},[a[11]||(a[11]=(0,s.Lk)("button",{class:"btn option-dropdown-toggle",type:"button",id:"profileDropdown","aria-expanded":"isDropdownOpen"},[(0,s.Lk)("div",{class:"option-dropdown-img"},[(0,s.Lk)("img",{src:_,class:"profile-pic",alt:"Profile Picture"})]),(0,s.Lk)("div",{class:"option-dropdown-text"}," username@account.com ")],-1)),(0,s.Lk)("ul",{class:(0,p.C4)(["dropdown-menu dropdown-menu-end mt-1 me-lg-3",{show:i.isDropdownOpen}]),"aria-labelledby":"profileDropdown"},a[10]||(a[10]=[(0,s.Fv)('<li><a class="dropdown-item d-flex align-items-center" href="#">PROFILE <i class="bi bi-person-circle ms-auto my-n1"></i></a></li><li><a class="dropdown-item d-flex align-items-center" href="#">INBOX <i class="bi bi-envelope ms-auto my-n1"></i></a></li><li><a class="dropdown-item d-flex align-items-center" href="#">CALENDAR <i class="bi bi-calendar ms-auto my-n1"></i></a></li><li><a class="dropdown-item d-flex align-items-center" href="#">SETTINGS <i class="bi bi-gear ms-auto my-n1"></i></a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item d-flex align-items-center" href="#">LOGOUT <i class="bi bi-box-arrow-right ms-auto my-n1"></i></a></li>',6)]),2)],2)])])}var P={props:{isDarkMode:Boolean},data(){return{isSearchActive:!1,isDropdownOpen:!1}},computed:{darkModeIcon(){return this.isDarkMode?'<i class="bi bi-brightness-high"></i>':'<i class="bi bi-moon"></i>'}},methods:{toggleDarkMode(){const e=this.isDarkMode?"light":"dark";document.documentElement.setAttribute("data-bs-theme",e),this.$emit("toggle-dark-mode",e)},openSearch(){this.isSearchActive=!0},closeSearch(){this.isSearchActive=!1},toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen,this.isDropdownOpen?document.addEventListener("click",this.handleClickOutside):document.removeEventListener("click",this.handleClickOutside)},handleClickOutside(e){this.$refs.dropdown.contains(e.target)||(this.isDropdownOpen=!1,document.removeEventListener("click",this.handleClickOutside))},search(e){const a=e.target.value;this.$emit("search",a)}}};const j=(0,o.A)(P,[["render",X]]);var B=j;function G(e,a,t,n,i,r){return(0,s.uX)(),(0,s.CE)("div",{class:(0,p.C4)(["app-sidebar",{hide:!i.isOpen}])},a[0]||(a[0]=[(0,s.Fv)('<nav class="app-sidebar__inner" data-v-7bfb43e3><div class="menu" data-v-7bfb43e3><div class="menu-header" data-v-7bfb43e3>Navigation</div><div class="menu-item active" data-v-7bfb43e3><a href="#0" class="menu-link" data-v-7bfb43e3><span class="menu-icon" data-v-7bfb43e3><i class="bi bi-cpu" data-v-7bfb43e3></i></span><span data-v-7bfb43e3>Dashboard</span></a></div><div class="menu-item" data-v-7bfb43e3><a href="#0" class="menu-link" data-v-7bfb43e3><span class="menu-icon" data-v-7bfb43e3><i class="bi bi-cpu" data-v-7bfb43e3></i></span><span data-v-7bfb43e3>Dashboard</span></a></div><div class="menu-item" data-v-7bfb43e3><a href="#0" class="menu-link" data-v-7bfb43e3><span class="menu-icon" data-v-7bfb43e3><i class="bi bi-cpu" data-v-7bfb43e3></i></span><span data-v-7bfb43e3>Dashboard</span></a></div><div class="menu-item" data-v-7bfb43e3><a href="#0" class="menu-link" data-v-7bfb43e3><span class="menu-icon" data-v-7bfb43e3><i class="bi bi-cpu" data-v-7bfb43e3></i></span><span data-v-7bfb43e3>Dashboard</span></a></div><div class="menu-item" data-v-7bfb43e3><a href="#0" class="menu-link" data-v-7bfb43e3><span class="menu-icon" data-v-7bfb43e3><i class="bi bi-cpu" data-v-7bfb43e3></i></span><span data-v-7bfb43e3>Dashboard</span></a></div><div class="menu-item" data-v-7bfb43e3><a href="#0" class="menu-link" data-v-7bfb43e3><span class="menu-icon" data-v-7bfb43e3><i class="bi bi-cpu" data-v-7bfb43e3></i></span><span data-v-7bfb43e3>Dashboard</span></a></div></div></nav>',1)]),2)}var N={name:"NavMenu",data(){return{isOpen:!0}},methods:{toggleMenu(){this.isOpen=!this.isOpen}}};const U=(0,o.A)(N,[["render",G],["__scopeId","data-v-7bfb43e3"]]);var $=U;const R={id:"chart-server"};function W(e,a,t,n,i,r){const o=(0,s.g2)("apexchart");return(0,s.uX)(),(0,s.CE)("div",R,[(0,s.bF)(o,{type:"bar",width:"100%",height:"100%",options:i.chartOptions,series:i.series},null,8,["options","series"])])}var H={props:{currentTheme:{type:String,default:"light"}},data(){return{series:[{name:"MEMORY USAGE",data:[45,60,35,70,50,65,55,60,35,80,45,70]},{name:"CPU USAGE",data:[55,70,40,80,60,75,65,70,40,90,55,80]}],chartOptions:this.getChartOptions(this.currentTheme)}},watch:{currentTheme(e){this.chartOptions=this.getChartOptions(e)}},methods:{getChartOptions(e){const a="dark"===e;return{chart:{background:"transparent",toolbar:{show:!1},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},tooltip:{theme:a?"dark":"light",style:{fontSize:"12px",fontFamily:void 0,colors:a?["#fff"]:["#000"]},y:{formatter:function(e){return e+" UNITS"}},marker:{show:!0,fillColors:a?["rgba(255, 255, 255, 0.25)","rgba(60, 210, 165, 0.65)"]:["rgba(0, 0, 0, 0.25)","rgba(36, 157, 121, 0.65)"]}},plotOptions:{bar:{columnWidth:"50%",borderRadius:0}},dataLabels:{enabled:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{show:!1,style:{colors:a?"#fff":"#000"}}},yaxis:{labels:{style:{colors:a?"#fff":"#000"}}},grid:{borderColor:a?"#444":"#ddd"},legend:{position:"bottom",labels:{colors:a?"#fff":"#000"},markers:{fillColors:a?["rgba(255, 255, 255, 0.25)","rgba(60, 210, 165, 0.65)"]:["rgba(0, 0, 0, 0.25)","rgba(36, 157, 121, 0.65)"],strokeWidth:0}},colors:a?["rgba(255, 255, 255, 0.25)","rgba(60, 210, 165, 0.65)"]:["rgba(0, 0, 0, 0.25)","rgba(36, 157, 121, 0.65)"]}}}};const J=(0,o.A)(H,[["render",W],["__scopeId","data-v-ec4d8e5a"]]);var K=J;function Q(e,a,t,n,i,r){const o=(0,s.g2)("apexchart");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(o,{type:"line",height:"350",options:i.chartOptions,series:i.series},null,8,["options","series"])])}var q={data(){return{series:[{name:"Music",data:[10,41,35,51,49,62,69]},{name:"Photos",data:[20,42,31,35,60,45,59]},{name:"Files",data:[30,21,65,52,23,58,41]}],chartOptions:{chart:{type:"line",height:350,toolbar:{show:!1}},colors:["#1E90FF","#32CD32","#FFA500"],stroke:{width:2},tooltip:{enabled:!0,theme:"dark"},xaxis:{categories:["01/15/2002","01/16/2002","01/17/2002","01/18/2002","01/19/2002","01/20/2002"],labels:{rotate:-45}},legend:{position:"top"}}}}};const z=(0,o.A)(q,[["render",Q],["__scopeId","data-v-41080db2"]]);var V=z,Y=t(4373);const Z=Y.A.create({baseURL:"https://api.coingecko.com/api/v3",timeout:3e3}),ee=async()=>{const e=await Z.get("/coins/markets",{params:{vs_currency:"usd",order:"market_cap_desc",per_page:20,page:1,sparkline:!0}});return e.data},ae={class:"crypto-coin"},te=["src"],ne={class:"crypto-name"},se=["viewBox"],ie=["points","stroke"];function re(e,a,t,n,i,r){return(0,s.uX)(),(0,s.CE)("table",null,[a[1]||(a[1]=(0,s.Lk)("thead",null,[(0,s.Lk)("th",null,"#"),(0,s.Lk)("th",null,"Name"),(0,s.Lk)("th",null,"Price"),(0,s.Lk)("th",null,"24h %"),(0,s.Lk)("th",null,"Market Cap"),(0,s.Lk)("th",null,"Graph 24 hrs.")],-1)),(0,s.Lk)("tbody",null,[(0,s.Lk)("tr",null,[a[0]||(a[0]=(0,s.Lk)("td",null,null,-1)),(0,s.Lk)("td",null,[(0,s.Lk)("div",ae,[(0,s.Lk)("img",{src:t.coin.image,alt:"crypto",class:"crypto-image"},null,8,te),(0,s.Lk)("div",ne,[(0,s.Lk)("h2",null,(0,p.v_)(t.coin.name),1),(0,s.Lk)("span",null,(0,p.v_)(t.coin.symbol),1)])])]),(0,s.Lk)("td",null,[(0,s.Lk)("p",null,"Price: $"+(0,p.v_)(t.coin.current_price.toLocaleString()),1)]),(0,s.Lk)("td",null,[(0,s.Lk)("p",{class:(0,p.C4)({"text-success":t.coin.price_change_percentage_24h>0,"text-danger":t.coin.price_change_percentage_24h<0})}," 24h Change: "+(0,p.v_)(t.coin.price_change_percentage_24h.toFixed(2))+"% ",3)]),(0,s.Lk)("td",null,[(0,s.Lk)("p",null,"Market Cap: $"+(0,p.v_)(t.coin.market_cap.toLocaleString()),1)]),(0,s.Lk)("td",null,[((0,s.uX)(),(0,s.CE)("svg",{class:"sparkline",viewBox:"0 0 "+r.sparklineWidth+" 50",preserveAspectRatio:"none"},[(0,s.Lk)("polyline",{points:r.sparklinePoints,fill:"none",stroke:r.lineColor,"stroke-width":"2"},null,8,ie)],8,se))])])])])}var oe={props:{coin:{type:Object,required:!0}},computed:{sparklineWidth(){return 100},sparklinePoints(){const e=this.coin.sparkline_in_7d.price,a=Math.max(...e),t=Math.min(...e),n=this.sparklineWidth/e.length,s=50/(a-t);return e.map(((e,a)=>`${a*n},${50-(e-t)*s}`)).join(" ")},lineColor(){const e=this.coin.price_change_percentage_24h;return e>5?"#388E3C":e<-5?"#D32F2F":e>0?"#4caf50":"#f44336"}}};const le=(0,o.A)(oe,[["render",re],["__scopeId","data-v-c3eb14a0"]]);var ce=le,de={components:{TopHeader:B,NavMenu:$,DashboardColumnChart:K,DashboardMap:V,CryptoCard:ce},data(){return{isDarkMode:!1,isSidebarOpen:!0,coins:[],loading:!1,intervalId:null}},computed:{currentTheme(){return this.isDarkMode?"dark":"light"}},async created(){await this.fetchData()},mounted(){const e=localStorage.getItem("darkMode");e&&(this.isDarkMode="true"===e),this.applyTheme(),this.intervalId=setInterval(this.fetchData,6e4)},beforeUnmount(){clearInterval(this.intervalId)},methods:{async fetchData(){try{const e=await ee();JSON.stringify(e)!==JSON.stringify(this.coins)&&(this.coins=e)}catch(e){console.error("Error fetching data:",e)}},handleSearch(e){console.log("Search query:",e)},toggleMenu(){this.isSidebarOpen=!this.isSidebarOpen,this.$refs.navmenu.toggleMenu()},toggleDarkMode(){this.isDarkMode=!this.isDarkMode,localStorage.setItem("darkMode",this.isDarkMode),this.applyTheme()},applyTheme(){this.isDarkMode?document.body.setAttribute("data-bs-theme","dark"):document.body.removeAttribute("data-bs-theme")}}};const pe=(0,o.A)(de,[["render",S],["__scopeId","data-v-557fefaa"]]);var ue=pe;const be=[{path:"/",name:"UserDashboard",component:ue}],he=(0,d.aE)({history:(0,d.Bt)(),routes:be});var ve=he,me=t(1758);(0,n.Ef)(c).use(ve).use(me.A).mount("#app")}},a={};function t(n){var s=a[n];if(void 0!==s)return s.exports;var i=a[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,n,s,i){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],i=e[d][2];for(var o=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(o=!1,i<r&&(r=i));if(o){e.splice(d--,1);var c=s();void 0!==c&&(a=c)}}return a}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,s,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/dashboard-project/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var s,i,r=n[0],o=n[1],l=n[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(s in o)t.o(o,s)&&(t.m[s]=o[s]);if(l)var d=l(t)}for(a&&a(n);c<r.length;c++)i=r[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},n=self["webpackChunkdashboard_project"]=self["webpackChunkdashboard_project"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(9287)}));n=t.O(n)})();
//# sourceMappingURL=app.1598af0c.js.map