(self.webpackChunk=self.webpackChunk||[]).push([[788],{661:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const s={name:"admin-bans",data:function(){return{route:this.$route.name,loading:!0}},created:function(){var t=this;axios.post("user").then((function(e){200==e.status&&1==e.data.id?(t.isAdmin=!0,t.loading=!1):t.$router.push({name:"sports"})}))}};const o=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main pages"},[n("construction"),t._v(" "),n("small",{staticClass:"w-100 text-center mt-5"},[t._v(t._s(t.route))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"})],1)}),[],!1,null,null,null).exports},1900:(t,e,n)=>{"use strict";function s(t,e,n,s,o,i,a,r){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),s&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):o&&(c=r?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(t,e){return c.call(e),u(t,e)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:d}}n.d(e,{Z:()=>s})}}]);
//# sourceMappingURL=bans.js.map