//	HYPE.documents["index"]

(function(){(function k(){var f="index.hyperesources",d="index",c="index_hype_container";if(false==!1)try{for(var g=document.getElementsByTagName("script"),a=0;a<g.length;a++){var b=g[a].src;if(null!=b&&-1!=b.indexOf("index_hype_generated_script.js")){f=b.substr(0,b.lastIndexOf("/"));break}}}catch(m){}if(false==!1&&null==window.HYPE_456)null==window.HYPE_dtl_456?(window.HYPE_dtl_456=[],window.HYPE_dtl_456.push(k),d=document.getElementsByTagName("head")[0],c=document.createElement("script"),
a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,c.type="text/javascript",c.src=f+"/"+(!0==(null!=a&&10>a||false==!0)?"HYPE-456.full.min.js":"HYPE-456.thin.min.js"),d.appendChild(c)):window.HYPE_dtl_456.push(k);else{window.HYPE_dtl_456=[];g=window.HYPE.documents;if(null!=g[d]){b=1;a=d;do d=""+a+"-"+b++;while(null!=g[d]);for(var e=document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==c&&null==e[a].getAttribute("HYP_dn")){var b=
1,h=c;do c=""+h+"-"+b++;while(null!=document.getElementById(c));e[a].id=c;b=!0;break}if(!1==b)return}b=[];b=[{name:"suggestionPath",source:"function(hypeDocument, element, event) {\t\n\tshowSuggestion = true;\n}",identifier:"45"},{name:"goToEdit",source:"function(hypeDocument, element, event) {\t\n\tif(!!showSuggestion){\n\t\thypeDocument.showSceneNamed('edit-with-suggestion', hypeDocument.kSceneTransitionInstant)\n\t} else {\n\t\thypeDocument.showNextScene(hypeDocument.kSceneTransitionInstant)\n\t}\n}",identifier:"46"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(l){window.console&&window.console.log(l),e[b[a].name]=function(){}}f=new HYPE_456(d,c,{"7":{p:1,n:"translate-dialog.png",g:"30",t:"@1x"},"3":{p:1,n:"editing.jpg",g:"24",o:true,t:"@1x"},"4":{p:1,n:"first-time-suggestions.jpg",g:"65",o:true,t:"@1x"},"0":{p:1,n:"wikipedia.jpg",g:"4",o:true,t:"@1x"},"5":{p:1,n:"first-time-suggestions%402x.jpg",g:"65",o:true,t:"@2x"},"1":{p:1,n:"searching.png",g:"9",t:"@1x"},"6":{p:1,n:"translate-suggestion.png",g:"47",t:"@1x"},"2":{p:1,n:"search-results.jpg",g:"18",o:true,t:"@1x"}},f,[],e,[{n:"wiki",o:"1",X:[0]},{n:"search",o:"15",X:[1]},{n:"edit",o:"20",X:[2]},{n:"edit-with-suggestion",o:"32",X:[3]},{n:"suggest",o:"42",X:[4]},{n:"translate",o:"62",X:[5]}],[{o:"3",p:"600px",x:0,cA:false,Z:2510,Y:1280,c:"#FFFFFF",L:[],bY:1,d:1280,U:{},T:{"11":{i:"11",n:"show-search",z:1,b:[],a:[{f:"a",y:0,z:0.06,i:"e",e:1,s:0,o:"70"},{y:0.06,i:"e",s:1,z:0,o:"70",f:"c"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{d:1.1000000000000001,p:1,g:1,e:"15"}]},o:"11"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["70","69"],v:{"69":{h:"4",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1280,k:"div",z:1,d:2510},"70":{h:"9",p:"no-repeat",x:"visible",a:1038,q:"100% 100%",b:49,j:"absolute",r:"inline",aA:{a:[{b:"11",p:8,z:false,symbolOid:"2"}]},k:"div",z:2,d:27,c:226,e:0,aP:"pointer"}}},{o:"17",p:"600px",x:1,cA:false,Z:2560,Y:1280,c:"#FFFFFF",L:[],bY:1,d:1280,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["72","71"],v:{"72":{c:71,d:21,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"46"}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:2,O:0,D:"#D8DDE4",P:0,a:275,b:273},"71":{h:"18",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1280,k:"div",z:1,d:2560}}},{o:"22",p:"600px",x:2,cA:false,Z:1191,Y:1280,c:"#FFFFFF",L:[],bY:1,d:1280,U:{},T:{"61":{i:"61",n:"hide-dialog",z:0.09,b:[],a:[{f:"c",y:0,z:0.09,i:"e",e:0,s:1,o:"74"},{f:"c",y:0,z:0.09,i:"a",e:1290,s:1060,o:"75"},{y:0.09,i:"e",s:0,z:0,o:"74",f:"c"},{y:0.09,i:"a",s:1290,z:0,o:"75",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.21,b:[],a:[{f:"c",y:0.15,z:0.06,i:"e",e:1,s:0,o:"74"},{f:"c",y:0.15,z:0.06,i:"b",e:26,s:16,o:"74"},{y:0.21,i:"e",s:1,z:0,o:"74",f:"c"},{y:0.21,i:"b",s:26,z:0,o:"74",f:"c"}],f:30}},bZ:180,O:["75","74","73"],v:{"75":{c:178,d:41,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"62"}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:3,O:0,D:"#D8DDE4",P:0,a:1060,b:265},"74":{h:"30",p:"no-repeat",x:"visible",a:896,q:"100% 100%",b:16,j:"absolute",r:"inline",c:371,k:"div",z:2,d:298,e:0},"73":{h:"24",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",aA:{a:[{b:"61",p:3,z:false,symbolOid:"21"}]},k:"div",z:1,d:1191,c:1280,aP:"default"}}},{o:"36",p:"600px",x:3,cA:false,Z:1191,Y:1280,c:"#FFFFFF",L:[],bY:1,d:1280,U:{},T:{"60":{i:"60",n:"hide-dialog",z:0.09,b:[],a:[{f:"c",y:0,z:0.09,i:"e",e:0,s:1,o:"77"},{f:"c",y:0,z:0.09,i:"a",e:1290,s:1060,o:"78"},{y:0.09,i:"e",s:0,z:0,o:"77",f:"c"},{y:0.09,i:"a",s:1290,z:0,o:"78",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.21,b:[],a:[{f:"c",y:0.15,z:0.06,i:"b",e:26,s:16,o:"77"},{f:"c",y:0.15,z:0.06,i:"e",e:1,s:0,o:"77"},{y:0.21,i:"b",s:26,z:0,o:"77",f:"c"},{y:0.21,i:"e",s:1,z:0,o:"77",f:"c"}],f:30}},bZ:180,O:["78","77","76"],v:{"78":{c:178,d:41,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"62"}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:3,O:0,D:"#D8DDE4",P:0,a:1065,b:236},"77":{h:"47",p:"no-repeat",x:"visible",a:867,q:"100% 100%",b:16,j:"absolute",r:"inline",c:396,k:"div",z:2,d:266,e:0},"76":{h:"24",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",aA:{a:[{b:"60",p:3,z:false,symbolOid:"33"}]},k:"div",z:1,d:1191,c:1280,aP:"default"}}},{o:"44",p:"600px",x:4,cA:false,Z:1000,Y:1280,c:"#FFFFFF",L:[],bY:1,d:1280,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.07,b:[],a:[{f:"c",p:2,y:0.03,z:0.04,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:4,h:"45"}]},o:"kTimelineDefaultIdentifier"},{f:"c",p:2,y:0.07,z:0,i:"ActionHandler",s:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:[],v:{}},{o:"64",p:"600px",x:5,cA:false,Z:672,Y:1280,c:"#FFFFFF",L:[],bY:1,d:1280,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["79"],v:{"79":{h:"65",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1280,k:"div",z:1,d:672.5}}}],{},h,{},
0,false,false,true,-1,true,true,true);g[d]=f.API;document.getElementById(c).setAttribute("HYP_dn",d);f.z_o(this.body)}})();})();