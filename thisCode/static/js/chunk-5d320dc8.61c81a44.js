(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d320dc8"],{6062:function(e,t,i){"use strict";var n=i("6d61"),s=i("6566");e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),s)},"78c1":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"3"}},[i("camera-selection")],1),i("v-col",{attrs:{cols:"4"}},[i("test-camera")],1)],1)],1)},s=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"100%"}},[i("v-card-title",[i("span",[e._v("Camera Selection")])]),i("v-card-subtitle",[i("span",{staticClass:"font-weight-light grey--text text--darken-2"},[e._v("Shows all cameras available.")])]),i("v-treeview",{attrs:{"open-all":"",items:e.CameraSources}})],1)},r=[],c=(i("4160"),i("45fc"),i("b0c0"),i("d3b7"),{name:"CameraSelection",data:function(){return{CameraSources:null,defaultConstraints:{video:{width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30}}}}},mounted:function(){this.video=this.$refs.video},methods:{getDevices:function(e){var t=this;console.log("getDevices: true");for(var i=[],n=[this.selectedVideoSource],s=0;s!==e.length;++s){var a=e[s],r={};r.deviceId=a.deviceId,"videoinput"===a.kind?(r.deviceName=a.label||"camera ".concat(i.length+1),i.push(r)):console.log("Some other kind of source/device: ",a),this.myVideoSources=i;var c=[i];c.forEach((function(e,s){if(e.some((function(e){return e.deviceId===n[s]})))switch(s){case 0:t.selectedVideoSource=n[s];break}else if(e.length>0)switch(s){case 0:t.selectedVideoSource=i[0].deviceId;break}}))}},getMedia:function(e){var t=this;console.log("getMedia: true"),null!=this.stream&&(this.stream.getVideoTracks()[0].stop(),this.video.srcObject=null);var i=this.selectedVideoSource;console.log(JSON.stringify(i)),e.video.deviceId=i?{exact:i}:void 0,navigator.mediaDevices.getUserMedia(e).then(this.gotStream).then((function(e){t.getDevices(e)})).then(this.resolveVideo).catch(this.handleError)},gotStream:function(e){return console.log("gotStream: true"),this.stream=window.stream=e,this.video.srcObject=e,this.track=e.getVideoTracks()[0],navigator.mediaDevices.enumerateDevices()},resolveVideo:function(){var e=this;return console.log("resolveVideo: true"),new Promise((function(t){return e.video.onplaying=t}))},handleError:function(e){console.log("navigator.MediaDevices.getUserMedia error: ",e.message,e.name)},changeMedia:function(){this.getMedia(this.defaultConstraints)}}}),o=c,d=i("2877"),h=i("6544"),l=i.n(h),u=i("b0af"),v=i("99d9"),p=(i("4de4"),i("d81d"),i("13d5"),i("4ec9"),i("b64b"),i("ac1f"),i("6062"),i("3ca3"),i("841c"),i("159b"),i("ddb0"),i("3835")),f=i("b85c"),m=i("2909"),g=i("5530"),b=(i("fa9e"),i("caad"),i("a9e3"),i("ade3")),C=i("0789"),O=i("132d"),S=i("3206"),y=i("a9ad"),w=i("58df"),j=i("80d2"),I=Object(w["a"])(y["a"],Object(S["a"])("treeview")),x={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},color:{type:String,default:"primary"},expandIcon:{type:String,default:"$subgroup"},indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},itemChildren:{type:String,default:"children"},itemDisabled:{type:String,default:"disabled"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},loadChildren:Function,loadingIcon:{type:String,default:"$loading"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"},openOnClick:Boolean,rounded:Boolean,selectable:Boolean,selectedColor:{type:String,default:"accent"},shaped:Boolean,transition:Boolean,selectionType:{type:String,default:"leaf",validator:function(e){return["leaf","independent"].includes(e)}}},k=I.extend().extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:Object(g["a"])({level:Number,item:{type:Object,default:function(){return null}},parentIsDisabled:Boolean},x),data:function(){return{hasLoaded:!1,isActive:!1,isIndeterminate:!1,isLoading:!1,isOpen:!1,isSelected:!1}},computed:{disabled:function(){return Object(j["q"])(this.item,this.itemDisabled)||this.parentIsDisabled&&"leaf"===this.selectionType},key:function(){return Object(j["q"])(this.item,this.itemKey)},children:function(){var e=this,t=Object(j["q"])(this.item,this.itemChildren);return t&&t.filter((function(t){return!e.treeview.isExcluded(Object(j["q"])(t,e.itemKey))}))},text:function(){return Object(j["q"])(this.item,this.itemText)},scopedProps:function(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon:function(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren:function(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created:function(){this.treeview.register(this)},beforeDestroy:function(){this.treeview.unregister(this)},methods:{checkChildren:function(){var e=this;return new Promise((function(t){if(!e.children||e.children.length||!e.loadChildren||e.hasLoaded)return t();e.isLoading=!0,t(e.loadChildren(e.item))})).then((function(){e.isLoading=!1,e.hasLoaded=!0}))},open:function(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel:function(){var e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genPrependSlot:function(){return this.$scopedSlots.prepend?this.$createElement("div",{staticClass:"v-treeview-node__prepend"},this.$scopedSlots.prepend(this.scopedProps)):null},genAppendSlot:function(){return this.$scopedSlots.append?this.$createElement("div",{staticClass:"v-treeview-node__append"},this.$scopedSlots.append(this.scopedProps)):null},genContent:function(){var e=[this.genPrependSlot(),this.genLabel(),this.genAppendSlot()];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle:function(){var e=this;return this.$createElement(O["a"],{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:function(t){t.stopPropagation(),e.isLoading||e.checkChildren().then((function(){return e.open()}))}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox:function(){var e=this;return this.$createElement(O["a"],{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected||this.isIndeterminate?this.selectedColor:void 0,disabled:this.disabled},on:{click:function(t){t.stopPropagation(),e.isLoading||e.checkChildren().then((function(){e.$nextTick((function(){e.isSelected=!e.isSelected,e.isIndeterminate=!1,e.treeview.updateSelected(e.key,e.isSelected),e.treeview.emitSelected()}))}))}}},[this.computedIcon])},genLevel:function(e){var t=this;return Object(j["i"])(e).map((function(){return t.$createElement("div",{staticClass:"v-treeview-node__level"})}))},genNode:function(){var e=this,t=[this.genContent()];return this.selectable&&t.unshift(this.genCheckbox()),this.hasChildren?t.unshift(this.genToggle()):t.unshift.apply(t,Object(m["a"])(this.genLevel(1))),t.unshift.apply(t,Object(m["a"])(this.genLevel(this.level))),this.$createElement("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-treeview-node__root",class:Object(b["a"])({},this.activeClass,this.isActive),on:{click:function(){e.openOnClick&&e.hasChildren?e.checkChildren().then(e.open):e.activatable&&!e.disabled&&(e.isActive=!e.isActive,e.treeview.updateActive(e.key,e.isActive),e.treeview.emitActive())}}}),t)},genChild:function(e,t){return this.$createElement(k,{key:Object(j["q"])(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,color:this.color,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemDisabled:this.itemDisabled,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick,rounded:this.rounded,shaped:this.shaped,level:this.level+1,selectionType:this.selectionType,parentIsDisabled:t},scopedSlots:this.$scopedSlots})},genChildrenWrapper:function(){var e=this;if(!this.isOpen||!this.children)return null;var t=[this.children.map((function(t){return e.genChild(t,e.disabled)}))];return this.$createElement("div",{staticClass:"v-treeview-node__children"},t)},genTransition:function(){return this.$createElement(C["a"],[this.genChildrenWrapper()])}},render:function(e){var t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--disabled":this.disabled,"v-treeview-node--rounded":this.rounded,"v-treeview-node--shaped":this.shaped,"v-treeview-node--selected":this.isSelected},attrs:{"aria-expanded":String(this.isOpen)}},t)}}),A=k,$=i("7560"),_=i("d9bd");i("c975");function T(e,t,i){var n=Object(j["q"])(e,i);return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function E(e,t,i,n,s,a,r){if(e(t,i,s))return!0;var c=Object(j["q"])(t,a);if(c){for(var o=!1,d=0;d<c.length;d++)E(e,c[d],i,n,s,a,r)&&(o=!0);if(o)return!0}return r.add(Object(j["q"])(t,n)),!1}var q=Object(w["a"])(Object(S["b"])("treeview"),$["a"]).extend({name:"v-treeview",provide:function(){return{treeview:this}},props:Object(g["a"])({active:{type:Array,default:function(){return[]}},dense:Boolean,filter:Function,hoverable:Boolean,items:{type:Array,default:function(){return[]}},multipleActive:Boolean,open:{type:Array,default:function(){return[]}},openAll:Boolean,returnObject:{type:Boolean,default:!1},search:String,value:{type:Array,default:function(){return[]}}},x),data:function(){return{level:-1,activeCache:new Set,nodes:{},openCache:new Set,selectedCache:new Set}},computed:{excludedItems:function(){var e=new Set;if(!this.search)return e;for(var t=0;t<this.items.length;t++)E(this.filter||T,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler:function(){var e=this,t=Object.keys(this.nodes).map((function(t){return Object(j["q"])(e.nodes[t].item,e.itemKey)})),i=this.getKeys(this.items),n=Object(j["c"])(i,t);if(n.length||!(i.length<t.length)){n.forEach((function(t){return delete e.nodes[t]}));var s=Object(m["a"])(this.selectedCache);this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),Object(j["k"])(s,Object(m["a"])(this.selectedCache))||this.emitSelected()}},deep:!0},active:function(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value:function(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open:function(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created:function(){var e=this,t=function(t){return e.returnObject?Object(j["q"])(t,e.itemKey):t};this.buildTree(this.items);var i,n=Object(f["a"])(this.value.map(t));try{for(n.s();!(i=n.n()).done;){var s=i.value;this.updateSelected(s,!0,!0)}}catch(o){n.e(o)}finally{n.f()}var a,r=Object(f["a"])(this.active.map(t));try{for(r.s();!(a=r.n()).done;){var c=a.value;this.updateActive(c,!0)}}catch(o){r.e(o)}finally{r.f()}},mounted:function(){var e=this;(this.$slots.prepend||this.$slots.append)&&Object(_["c"])("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach((function(t){return e.updateOpen(e.returnObject?Object(j["q"])(t,e.itemKey):t,!0)})),this.emitOpen())},methods:{updateAll:function(e){var t=this;Object.keys(this.nodes).forEach((function(i){return t.updateOpen(Object(j["q"])(t.nodes[i].item,t.itemKey),e)})),this.emitOpen()},getKeys:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=0;i<e.length;i++){var n=Object(j["q"])(e[i],this.itemKey);t.push(n);var s=Object(j["q"])(e[i],this.itemChildren);s&&t.push.apply(t,Object(m["a"])(this.getKeys(s)))}return t},buildTree:function(e){for(var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;n<e.length;n++){var s=e[n],a=Object(j["q"])(s,this.itemKey),r=Object(j["q"])(s,this.itemChildren,[]),c=this.nodes.hasOwnProperty(a)?this.nodes[a]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},o={vnode:c.vnode,parent:i,children:r.map((function(e){return Object(j["q"])(e,t.itemKey)})),item:s};if(this.buildTree(r,a),!this.nodes.hasOwnProperty(a)&&null!==i&&this.nodes.hasOwnProperty(i)?o.isSelected=this.nodes[i].isSelected:(o.isSelected=c.isSelected,o.isIndeterminate=c.isIndeterminate),o.isActive=c.isActive,o.isOpen=c.isOpen,this.nodes[a]=o,r.length){var d=this.calculateState(a,this.nodes),h=d.isSelected,l=d.isIndeterminate;o.isSelected=h,o.isIndeterminate=l}!this.nodes[a].isSelected||"independent"!==this.selectionType&&0!==o.children.length||this.selectedCache.add(a),this.nodes[a].isActive&&this.activeCache.add(a),this.nodes[a].isOpen&&this.openCache.add(a),this.updateVnodeState(a)}},calculateState:function(e,t){var i=t[e].children,n=i.reduce((function(e,i){return e[0]+=+Boolean(t[i].isSelected),e[1]+=+Boolean(t[i].isIndeterminate),e}),[0,0]),s=!!i.length&&n[0]===i.length,a=!s&&(n[0]>0||n[1]>0);return{isSelected:s,isIndeterminate:a}},emitOpen:function(){this.emitNodeCache("update:open",this.openCache)},emitSelected:function(){this.emitNodeCache("input",this.selectedCache)},emitActive:function(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache:function(e,t){var i=this;this.$emit(e,this.returnObject?Object(m["a"])(t).map((function(e){return i.nodes[e].item})):Object(m["a"])(t))},handleNodeCacheWatcher:function(e,t,i,n){var s=this;e=this.returnObject?e.map((function(e){return Object(j["q"])(e,s.itemKey)})):e;var a=Object(m["a"])(t);Object(j["k"])(a,e)||(a.forEach((function(e){return i(e,!1)})),e.forEach((function(e){return i(e,!0)})),n())},getDescendants:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=this.nodes[e].children;(t=i).push.apply(t,Object(m["a"])(n));for(var s=0;s<n.length;s++)i=this.getDescendants(n[s],i);return i},getParents:function(e){var t=this.nodes[e].parent,i=[];while(null!==t)i.push(t),t=this.nodes[t].parent;return i},register:function(e){var t=Object(j["q"])(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister:function(e){var t=Object(j["q"])(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},isParent:function(e){return this.nodes[e].children&&this.nodes[e].children.length},updateActive:function(e,t){var i=this;if(this.nodes.hasOwnProperty(e)){this.multipleActive||this.activeCache.forEach((function(e){i.nodes[e].isActive=!1,i.updateVnodeState(e),i.activeCache.delete(e)}));var n=this.nodes[e];n&&(t?this.activeCache.add(e):this.activeCache.delete(e),n.isActive=t,this.updateVnodeState(e))}},updateSelected:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.nodes.hasOwnProperty(e)){var n=new Map;if("independent"!==this.selectionType){var s,a=Object(f["a"])(this.getDescendants(e));try{for(a.s();!(s=a.n()).done;){var r=s.value;Object(j["q"])(this.nodes[r].item,this.itemDisabled)&&!i||(this.nodes[r].isSelected=t,this.nodes[r].isIndeterminate=!1,n.set(r,t))}}catch(C){a.e(C)}finally{a.f()}var c=this.calculateState(e,this.nodes);this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=c.isIndeterminate,n.set(e,t);var o,d=Object(f["a"])(this.getParents(e));try{for(d.s();!(o=d.n()).done;){var h=o.value,l=this.calculateState(h,this.nodes);this.nodes[h].isSelected=l.isSelected,this.nodes[h].isIndeterminate=l.isIndeterminate,n.set(h,l.isSelected)}}catch(C){d.e(C)}finally{d.f()}}else this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,n.set(e,t);var u,v=Object(f["a"])(n.entries());try{for(v.s();!(u=v.n()).done;){var m=Object(p["a"])(u.value,2),g=m[0],b=m[1];this.updateVnodeState(g),"leaf"===this.selectionType&&this.isParent(g)||(!0===b?this.selectedCache.add(g):this.selectedCache.delete(g))}}catch(C){v.e(C)}finally{v.f()}}},updateOpen:function(e,t){var i=this;if(this.nodes.hasOwnProperty(e)){var n=this.nodes[e],s=Object(j["q"])(n.item,this.itemChildren);s&&!s.length&&n.vnode&&!n.vnode.hasLoaded?n.vnode.checkChildren().then((function(){return i.updateOpen(e,t)})):s&&s.length&&(n.isOpen=t,n.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))}},updateVnodeState:function(e){var t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded:function(e){return!!this.search&&this.excludedItems.has(e)}},render:function(e){var t=this,i=this.items.length?this.items.filter((function(e){return!t.isExcluded(Object(j["q"])(e,t.itemKey))})).map((function(e){var i=A.options.methods.genChild.bind(t);return i(e,Object(j["q"])(e,t.itemDisabled))})):this.$slots.default;return e("div",{staticClass:"v-treeview",class:Object(g["a"])({"v-treeview--hoverable":this.hoverable,"v-treeview--dense":this.dense},this.themeClasses)},i)}}),V=Object(d["a"])(o,a,r,!1,null,null,null),K=V.exports;l()(V,{VCard:u["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VTreeview:q});var D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"videoContainer",attrs:{id:"videoContainer"}},[i("video",{ref:"video",attrs:{id:"video",autoplay:""}})])},L=[],P={},B=P,N=Object(d["a"])(B,D,L,!1,null,null,null),M=N.exports,W={name:"Test",components:{CameraSelection:K,TestCamera:M}},J=W,R=i("62ad"),F=i("a523"),U=i("0fd9"),z=Object(d["a"])(J,n,s,!1,null,null,null);t["default"]=z.exports;l()(z,{VCol:R["a"],VContainer:F["a"],VRow:U["a"]})},"841c":function(e,t,i){"use strict";var n=i("d784"),s=i("825a"),a=i("1d80"),r=i("129f"),c=i("14c3");n("search",1,(function(e,t,i){return[function(t){var i=a(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,i):new RegExp(t)[e](String(i))},function(e){var n=i(t,e,this);if(n.done)return n.value;var a=s(e),o=String(this),d=a.lastIndex;r(d,0)||(a.lastIndex=0);var h=c(a,o);return r(a.lastIndex,d)||(a.lastIndex=d),null===h?-1:h.index}]}))},fa9e:function(e,t,i){}}]);
//# sourceMappingURL=chunk-5d320dc8.61c81a44.js.map