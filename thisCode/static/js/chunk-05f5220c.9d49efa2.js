(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05f5220c"],{3969:function(e,t,a){"use strict";var i=a("e0a3"),o=a.n(i);o.a},"78c1":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("camera-selection")],1)],1)],1)},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-sheet",{staticClass:"v-sheet--offset d-flex mx-auto",attrs:{elevation:"6","max-width":"calc(100% - 32px)",color:"navigation"}},[a("v-icon",{staticClass:"py-6 pl-4",class:e.videoOn?"blinkingGreen":"blue--text",attrs:{large:"",dark:""}},[e._v("mdi-camera")]),a("span",{staticClass:"pl-4 d-flex align-center white--text"},[e._v("Live Camera Feed")]),a("v-spacer"),a("v-card-actions",{staticClass:"pr-4 d-flex align-center"},[a("v-select",{staticClass:"videoSourceSelect mr-6",class:e.videoOn?"videoEnabled":"videoDisabled",attrs:{items:e.myVideoSources,"item-text":"deviceName","item-value":"deviceId",label:"Select Camera",dense:"",outlined:"",disabled:!e.videoOn},on:{change:e.changeMedia},model:{value:e.selectedVideoSource,callback:function(t){e.selectedVideoSource=t},expression:"selectedVideoSource"}}),a("v-btn",{staticClass:"white--text",style:{"background-color":e.toggleColor},on:{click:e.toggleCamera}},[e._v(" "+e._s(e.cameraBtnTxt)+" ")])],1)],1),a("div",{attrs:{id:"camera"}},[a("video",{ref:"video",attrs:{id:"video",autoplay:""}})])],1)},c=[],r=(a("4160"),a("45fc"),a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),s={name:"Camera Selection",data:function(){return{video:null,track:null,stream:null,videoOn:!1,defaultConstraints:{video:{width:{ideal:4096},height:{ideal:2160},frameRate:{ideal:30}}},myVideoSources:[{deviceName:"Camera is disabled",deviceId:0}],selectedVideoSource:0}},computed:{cameraBtnTxt:function(){return this.videoOn?"Off":"On"},toggleColor:function(){return this.videoOn?"#AFB42B":"#1E88E5"}},mounted:function(){this.video=this.$refs.video},methods:{getDevices:function(e){var t=this;console.log("getDevices: true");for(var a=[],i=[this.selectedVideoSource],o=0;o!==e.length;++o){var n=e[o],c={};c.deviceId=n.deviceId,"videoinput"===n.kind?(c.deviceName=n.label||"camera ".concat(a.length+1),a.push(c)):console.log("Some other kind of source/device: ",n),this.myVideoSources=a;var r=[a];r.forEach((function(e,o){if(e.some((function(e){return e.deviceId===i[o]})))switch(o){case 0:t.selectedVideoSource=i[o];break}else if(e.length>0)switch(o){case 0:t.selectedVideoSource=a[0].deviceId;break}}))}},toggleCamera:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.videoOn=!e.videoOn,!e.videoOn){t.next=7;break}return t.next=4,navigator.mediaDevices.enumerateDevices().then((function(t){e.getDevices(t)})).catch(e.handleError);case 4:e.getMedia(e.defaultConstraints),t.next=11;break;case 7:e.stream.getVideoTracks()[0].stop(),e.video.srcObject=null,e.myVideoSources=[{deviceName:"Camera is disabled",deviceId:0}],e.selectedVideoSource=0;case 11:case"end":return t.stop()}}),t)})))()},getMedia:function(e){var t=this;console.log("getMedia: true"),null!=this.stream&&(this.stream.getVideoTracks()[0].stop(),this.video.srcObject=null);var a=this.selectedVideoSource;console.log(JSON.stringify(a)),e.video.deviceId=a?{exact:a}:void 0,navigator.mediaDevices.getUserMedia(e).then(this.gotStream).then((function(e){t.getDevices(e)})).then(this.resolveVideo).catch(this.handleError)},gotStream:function(e){return console.log("gotStream: true"),this.stream=window.stream=e,this.video.srcObject=e,this.track=e.getVideoTracks()[0],navigator.mediaDevices.enumerateDevices()},resolveVideo:function(){var e=this;return console.log("resolveVideo: true"),new Promise((function(t){return e.video.onplaying=t}))},handleError:function(e){console.log("navigator.MediaDevices.getUserMedia error: ",e.message,e.name)},changeMedia:function(){this.getMedia(this.defaultConstraints)}}},d=s,l=(a("fc09"),a("3969"),a("2877")),u=a("6544"),v=a.n(u),m=a("8336"),f=a("b0af"),h=a("99d9"),g=a("132d"),b=a("b974"),V=a("8dd9"),p=a("2fa4"),S=Object(l["a"])(d,n,c,!1,null,"4728f5b2",null),C=S.exports;v()(S,{VBtn:m["a"],VCard:f["a"],VCardActions:h["a"],VIcon:g["a"],VSelect:b["a"],VSheet:V["a"],VSpacer:p["a"]});var k={name:"Test",components:{CameraSelection:C}},w=k,x=a("62ad"),O=a("a523"),D=a("0fd9"),y=Object(l["a"])(w,i,o,!1,null,null,null);t["default"]=y.exports;v()(y,{VCol:x["a"],VContainer:O["a"],VRow:D["a"]})},"96a9":function(e,t,a){},e0a3:function(e,t,a){},fc09:function(e,t,a){"use strict";var i=a("96a9"),o=a.n(i);o.a}}]);
//# sourceMappingURL=chunk-05f5220c.9d49efa2.js.map