(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{265:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2bd177d2",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";n(265)},275:function(t,e,n){var o=n(19)(!1);o.push([t.i,"#mapContainer{width:600px;height:500px}",""]),t.exports=o},279:function(t,e,n){"use strict";n.r(e);n(38);var o={name:"InteractiveMap",data:function(){return{mapDiv:null}},methods:{setupLeafletMap:function(){this.mapDiv=L.map("mapContainer",{scrollWheelZoom:!1}).setView([43.844253460301644,10.795701361536759],9),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.mapDiv),L.marker([43.83,10.9]).addTo(this.mapDiv).bindPopup("I'm Here!").openPopup()}},mounted:function(){this.setupLeafletMap()},beforeDestroy:function(){null!==this.mapDiv&&this.mapDiv.remove()}},r=(n(274),n(7)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"mapContainer"}})}),[],!1,null,null,null);e.default=component.exports}}]);