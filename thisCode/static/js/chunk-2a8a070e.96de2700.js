(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a8a070e"],{"0c42":function(e,t,i){},"78c1":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"3"}},[i("camera-selection")],1)],1)],1)},n=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-select",{staticClass:"videoSourceSelect mr-6",class:e.videoOn?"videoEnabled":"videoDisabled",attrs:{items:e.myVideoSources,"item-text":"deviceName","item-value":"deviceId",label:"Select Camera",dense:"",outlined:"",disabled:!e.videoOn},on:{change:e.changeMedia},model:{value:e.selectedVideoSource,callback:function(t){e.selectedVideoSource=t},expression:"selectedVideoSource"}})},c=[],r=(i("4160"),i("45fc"),i("b0c0"),i("d3b7"),i("96cf"),i("1da1")),s={name:"Camera Selection",data:function(){return{video:null,track:null,stream:null,videoOn:!1,defaultConstraints:{video:{width:{ideal:4096},height:{ideal:2160},frameRate:{ideal:30}}},myVideoSources:[{deviceName:"Camera is disabled",deviceId:0}],selectedVideoSource:0}},computed:{cameraBtnTxt:function(){return this.videoOn?"Off":"On"},toggleColor:function(){return this.videoOn?"#AFB42B":"#1E88E5"}},mounted:function(){this.video=this.$refs.video,this.toggleCamera()},methods:{getDevices:function(e){var t=this;console.log("getDevices: true");for(var i=[],o=[this.selectedVideoSource],n=0;n!==e.length;++n){var a=e[n],c={};c.deviceId=a.deviceId,"videoinput"===a.kind?(c.deviceName=a.label||"camera ".concat(i.length+1),i.push(c)):console.log("Some other kind of source/device: ",a),this.myVideoSources=i;var r=[i];r.forEach((function(e,n){if(e.some((function(e){return e.deviceId===o[n]})))switch(n){case 0:t.selectedVideoSource=o[n];break}else if(e.length>0)switch(n){case 0:t.selectedVideoSource=i[0].deviceId;break}}))}},toggleCamera:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.videoOn=!e.videoOn,!e.videoOn){t.next=7;break}return t.next=4,navigator.mediaDevices.enumerateDevices().then((function(t){e.getDevices(t)})).catch(e.handleError);case 4:e.getMedia(e.defaultConstraints),t.next=11;break;case 7:e.stream.getVideoTracks()[0].stop(),e.video.srcObject=null,e.myVideoSources=[{deviceName:"Camera is disabled",deviceId:0}],e.selectedVideoSource=0;case 11:case"end":return t.stop()}}),t)})))()},getMedia:function(e){var t=this;console.log("getMedia: true"),null!=this.stream&&(this.stream.getVideoTracks()[0].stop(),this.video.srcObject=null);var i=this.selectedVideoSource;console.log(JSON.stringify(i)),e.video.deviceId=i?{exact:i}:void 0,navigator.mediaDevices.getUserMedia(e).then(this.gotStream).then((function(e){t.getDevices(e)})).then(this.resolveVideo).catch(this.handleError)},gotStream:function(e){return console.log("gotStream: true"),this.stream=window.stream=e,this.video.srcObject=e,this.track=e.getVideoTracks()[0],navigator.mediaDevices.enumerateDevices()},resolveVideo:function(){var e=this;return console.log("resolveVideo: true"),new Promise((function(t){return e.video.onplaying=t}))},handleError:function(e){console.log("navigator.MediaDevices.getUserMedia error: ",e.message,e.name)},changeMedia:function(){this.getMedia(this.defaultConstraints)}}},d=s,l=(i("fc09"),i("a0f8"),i("2877")),u=i("6544"),v=i.n(u),m=i("b974"),h=Object(l["a"])(d,a,c,!1,null,"409f2947",null),f=h.exports;v()(h,{VSelect:m["a"]});var g={name:"Test",components:{CameraSelection:f}},S=g,b=i("62ad"),V=i("a523"),p=i("0fd9"),w=Object(l["a"])(S,o,n,!1,null,null,null);t["default"]=w.exports;v()(w,{VCol:b["a"],VContainer:V["a"],VRow:p["a"]})},"96a9":function(e,t,i){},a0f8:function(e,t,i){"use strict";var o=i("0c42"),n=i.n(o);n.a},fc09:function(e,t,i){"use strict";var o=i("96a9"),n=i.n(o);n.a}}]);
//# sourceMappingURL=chunk-2a8a070e.96de2700.js.map