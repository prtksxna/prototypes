//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("index_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_526","HYPE_dtl_526",!0==(null!=a&&10>a||false==!0)?"HYPE-526.full.min.js":"HYPE-526.thin.min.js"),false==!0&&(a=a||l("HYPE_w_526","HYPE_wdtl_526","HYPE-526.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"setMuted",source:"function(hypeDocument, element, event) {\tmuted = true;\n\t\n}",identifier:"55"},{name:"setUnmuted",source:"function(hypeDocument, element, event) {\tmuted = false;\n\t\n}",identifier:"56"},{name:"checkMuted",source:"function(hypeDocument, element, event) {\tif(muted){\n\t\thypeDocument.startTimelineNamed('muted', hypeDocument.kDirectionForward)\n\t}\n\t\n}",identifier:"68"},{name:"saveState",source:"function(hypeDocument, element, event) {\t\n\tupdateState();\n}",identifier:"70"},{name:"toggleMuted",source:"function(hypeDocument, element, event) {\tif(muted){\n\t\thypeDocument.startTimelineNamed('unmute-thanks', hypeDocument.kDirectionForward);\n\t}else{\n\t\thypeDocument.startTimelineNamed('mute-thanks', hypeDocument.kDirectionForward);\n\t\n\t}\n\tmuted = !muted;\n\t\n}",identifier:"78"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_526(c,e,{"10":{p:1,n:"settings-blacklist.jpg",g:"33",o:true,t:"@1x"},"2":{p:1,n:"notice-initial-inactive.png",g:"9",t:"@1x"},"3":{p:1,n:"notifs-initial.png",g:"18",t:"@1x"},"11":{p:1,n:"unmute-menu.png",g:"41",t:"@1x"},"4":{p:1,n:"article-page.jpg",g:"5",o:true,t:"@1x"},"5":{p:1,n:"notice-muted.png",g:"11",t:"@1x"},"12":{p:1,n:"settings-page-muted.jpg",g:"58",o:true,t:"@1x"},"6":{p:1,n:"panel.png",g:"16",t:"@1x"},"13":{p:1,n:"menu-settings-mute.png",g:"63",t:"@1x"},"7":{p:1,n:"settings-page.jpg",g:"31",o:true,t:"@1x"},"0":{p:1,n:"notice-initial-active.png",g:"7",t:"@1x"},"8":{p:1,n:"notifs-muted.png",g:"20",t:"@1x"},"14":{p:1,n:"menu-settings-unmute.png",g:"65",t:"@1x"},"1":{p:1,n:"bubble.png",g:"48",t:"@1x"},"9":{p:1,n:"mute-menu.png",g:"36",t:"@1x"}},h,[],d,[{n:"article",o:"1",X:[0]},{n:"settings",o:"25",X:[1]},{n:"blacklist",o:"28",X:[2]}],[{o:"3",p:"600px",x:0,cA:false,Z:768,Y:1024,c:"#FFFFFF",L:[],bY:1,d:1024,U:{},T:{"52":{i:"52",n:"open-unmute-menu",z:0.09,b:[],a:[{f:"c",y:0,z:0.03,i:"cY",e:"0",s:"0",o:"97"},{f:"c",y:0.03,z:0.06,i:"cY",e:"1",s:"0",o:"97"},{f:"c",p:2,y:0.06,z:0,i:"ActionHandler",s:{a:[{p:7,b:"52",symbolOid:"2"}]},o:"52"},{y:0.09,i:"cY",s:"1",z:0,o:"97",f:"c"}],f:30},"47":{i:"47",n:"mute-thanks",z:0.03,b:[],a:[{f:"c",y:0,z:0.02,i:"cY",e:"1",s:"0",o:"85"},{f:"c",y:0,z:0.02,i:"cY",e:"1",s:"0",o:"90"},{f:"c",p:2,y:0,z:0.01,i:"ActionHandler",e:{a:[{b:"46",p:8,z:false,symbolOid:"2",J:false}]},s:{a:[{b:"53",p:3,z:false,symbolOid:"2"}]},o:"47"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"0",o:"94"},{f:"c",y:0,z:0.02,i:"cY",e:"1",s:"0",o:"97"},{f:"c",y:0,z:0.01,i:"cY",e:"1",s:"0",o:"81"},{f:"c",p:2,y:0.01,z:0.02,i:"ActionHandler",e:{a:[{}]},s:{a:[{b:"46",p:8,z:false,symbolOid:"2",J:false}]},o:"47"},{y:0.01,i:"cY",s:"1",z:0,o:"81",f:"c"},{y:0.02,i:"cY",s:"1",z:0,o:"85",f:"c"},{y:0.02,i:"cY",s:"1",z:0,o:"90",f:"c"},{y:0.02,i:"cY",s:"0",z:0,o:"94",f:"c"},{y:0.02,i:"cY",s:"1",z:0,o:"97",f:"c"},{f:"c",p:2,y:0.03,z:0,i:"ActionHandler",s:{a:[{p:4,h:"55"}]},o:"47"}],f:30},"45":{i:"45",n:"open-panel",z:0.06,b:[],a:[{f:"c",y:0,z:0.03,i:"cY",e:"0",r:true,s:"0",o:"88"},{f:"c",y:0,z:0.03,i:"cY",e:"1",r:true,s:"0",o:"80"},{f:"c",y:0.03,z:0.01,i:"cY",e:"0",s:"0",o:"88"},{y:0.03,i:"cY",s:"1",z:0,o:"80",f:"c"},{f:"c",p:2,y:0.04,z:0,i:"ActionHandler",s:{a:[{p:7,b:"45",symbolOid:"2"}]},o:"45"},{f:"c",y:0.04,z:0.02,i:"cY",e:"1",s:"0",o:"88"},{y:0.06,i:"cY",s:"1",z:0,o:"88",f:"c"}],f:30},"53":{i:"53",n:"show-bubble",z:3.14,b:[],a:[{f:"c",y:0,z:0.24,i:"b",e:582,s:784,o:"100"},{f:"a",y:0,z:0.11,i:"e",e:0,s:0,o:"100"},{f:"c",y:0.11,z:0.13,i:"e",e:1,s:0,o:"100"},{f:"c",y:0.24,z:2.09,i:"b",e:582,s:582,o:"100"},{f:"c",y:0.24,z:1.21,i:"e",e:1,s:1,o:"100"},{f:"c",y:2.15,z:0.15,i:"e",e:0,s:1,o:"100"},{y:3,i:"e",s:0,z:0,o:"100",f:"c"},{f:"c",y:3.03,z:0.11,i:"b",e:782,s:582,o:"100"},{y:3.14,i:"b",s:782,z:0,o:"100",f:"c"}],f:30},"71":{i:"71",n:"muted",z:0.04,b:[],a:[{f:"c",y:0,z:0.04,i:"cY",e:"1",s:"1",o:"88"},{f:"c",y:0,z:0.04,i:"cY",e:"1",s:"1",o:"93"},{f:"c",y:0,z:0.04,i:"cY",e:"0",s:"0",o:"94"},{f:"c",y:0,z:0.04,i:"cY",e:"1",s:"1",o:"97"},{f:"c",y:0,z:0.04,i:"cY",e:"1",s:"0",o:"90"},{f:"c",y:0,z:0.04,i:"cY",e:"1",s:"0",o:"85"},{f:"c",y:0,z:0.04,i:"cY",e:"1",s:"0",o:"80"},{f:"c",y:0,z:0.04,i:"cY",e:"1",s:"0",o:"81"},{y:0.04,i:"cY",s:"1",z:0,o:"88",f:"c"},{y:0.04,i:"cY",s:"1",z:0,o:"93",f:"c"},{y:0.04,i:"cY",s:"0",z:0,o:"94",f:"c"},{y:0.04,i:"cY",s:"1",z:0,o:"97",f:"c"},{y:0.04,i:"cY",s:"1",z:0,o:"90",f:"c"},{y:0.04,i:"cY",s:"1",z:0,o:"85",f:"c"},{y:0.04,i:"cY",s:"1",z:0,o:"80",f:"c"},{y:0.04,i:"cY",s:"1",z:0,o:"81",f:"c"}],f:30},"46":{i:"46",n:"open-mute-menu",z:0.08,b:[],a:[{f:"c",y:0,z:0.03,i:"cY",e:"0",s:"0",o:"93"},{f:"c",y:0.03,z:0.05,i:"cY",e:"1",s:"0",o:"93"},{f:"c",p:2,y:0.05,z:0,i:"ActionHandler",s:{a:[{p:7,b:"46",symbolOid:"2"}]},o:"46"},{y:0.08,i:"cY",s:"1",z:0,o:"93",f:"c"}],f:30},"54":{i:"54",n:"unmute-thanks",z:0.03,b:[],a:[{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"0",o:"85"},{f:"c",y:0,z:0.02,i:"cY",e:"1",s:"0",o:"94"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"0",o:"90"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"0",o:"81"},{f:"c",y:0.01,z:0.02,i:"cY",e:"1",s:"0",o:"93"},{f:"c",p:2,y:0.01,z:0.02,i:"ActionHandler",e:{a:[{}]},s:{a:[{b:"52",p:8,z:false,symbolOid:"2",J:false}]},o:"54"},{y:0.02,i:"cY",s:"0",z:0,o:"85",f:"c"},{y:0.02,i:"cY",s:"1",z:0,o:"94",f:"c"},{y:0.02,i:"cY",s:"0",z:0,o:"90",f:"c"},{y:0.02,i:"cY",s:"0",z:0,o:"81",f:"c"},{y:0.03,i:"cY",s:"1",z:0,o:"93",f:"c"},{f:"c",p:2,y:0.03,z:0,i:"ActionHandler",s:{a:[{p:4,h:"56"}]},o:"54"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.01,b:[],a:[{f:"c",y:0,z:0.01,i:"cY",e:"1",s:"0",o:"88"},{f:"c",y:0,z:0.01,i:"cY",e:"1",s:"0",o:"93"},{f:"c",y:0,z:0.01,i:"cY",e:"1",s:"0",o:"97"},{f:"c",p:2,y:0.01,z:0,i:"ActionHandler",s:{a:[{p:4,h:"68"}]},o:"kTimelineDefaultIdentifier"},{y:0.01,i:"cY",s:"1",z:0,o:"88",f:"c"},{y:0.01,i:"cY",s:"1",z:0,o:"93",f:"c"},{y:0.01,i:"cY",s:"1",z:0,o:"97",f:"c"}],f:30}},bZ:180,O:["99","100","89","90","98","92","91","93","94","96","95","97","85","86","87","84","88","80","81","82","83","79"],v:{"92":{c:331,d:36,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"93",A:"#D8DDE4",x:"visible",aA:{a:[{b:"47",p:3,z:false,symbolOid:"2"}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:2,O:0,D:"#D8DDE4",P:0,a:1,b:38},"85":{h:"18",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"87",z:2,k:"div",cY:"0",d:396,c:452,r:"inline"},"93":{x:"visible",cY:"0",k:"div",c:347,d:77,z:5,r:"inline",a:133,j:"absolute",bF:"88",b:223},"86":{h:"20",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"87",c:452,k:"div",z:1,d:396,r:"inline"},"79":{h:"5",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:1,d:768},"94":{c:34,d:25,I:"None",cY:"0",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"88",A:"#D8DDE4",x:"visible",aA:{a:[{b:"52",p:8,z:false,symbolOid:"2",J:true}]},B:"#D8DDE4",j:"absolute",O:0,C:"#D8DDE4",z:4,k:"div",D:"#D8DDE4",P:0,a:134,b:280},"87":{k:"div",x:"visible",c:452,d:396,z:2,a:1,j:"absolute",bF:"88",b:67},"95":{h:"41",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"97",c:347,k:"div",z:1,d:77,r:"inline"},"88":{x:"visible",cY:"0",k:"div",c:454,d:600,z:4,a:410,j:"absolute",b:35},"80":{h:"7",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"83",z:3,k:"div",cY:"0",d:18,c:24,r:"inline"},"100":{x:"visible",k:"div",c:503,d:179,z:8,e:1,a:516,j:"absolute",b:784},"96":{c:345,d:36,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"97",A:"#D8DDE4",x:"visible",aA:{a:[{b:"54",p:8,z:false,symbolOid:"2",J:true}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:2,O:0,D:"#D8DDE4",P:0,a:0,b:39},"89":{c:225,d:46,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"88",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"25"},{p:4,h:"70"}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:7,O:0,D:"#D8DDE4",P:0,a:227,b:552},"81":{h:"9",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"83",z:2,k:"div",cY:"0",d:18,c:24,r:"inline"},"97":{x:"visible",cY:"0",k:"div",c:347,d:77,z:3,a:133,j:"absolute",bF:"88",b:304},"82":{h:"11",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"83",c:24,k:"div",z:1,d:18,r:"inline"},"98":{h:"48",p:"no-repeat",x:"visible",a:913,q:"100% 100%",b:556,j:"absolute",bF:"93",c:216.37430167597765,k:"div",z:3,d:77,r:"inline"},"90":{c:34,d:25,I:"None",cY:"0",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"88",A:"#D8DDE4",x:"visible",aA:{a:[{b:"46",p:8,z:false,symbolOid:"2",J:true}]},B:"#D8DDE4",j:"absolute",O:0,C:"#D8DDE4",z:6,k:"div",D:"#D8DDE4",P:0,a:134,b:200},"83":{aA:{a:[{b:"45",p:8,z:false,symbolOid:"2",J:true}]},x:"visible",k:"div",c:24,d:18,z:2,a:625,aP:"pointer",j:"absolute",b:8},"99":{h:"48",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"100",z:1,k:"div",c:503,d:179,r:"inline",e:1},"91":{h:"36",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"93",c:347,k:"div",z:1,d:77,r:"inline"},"84":{h:"16",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"88",c:454,k:"div",z:1,d:600,r:"inline"}}},{o:"27",p:"600px",x:1,cA:false,Z:768,Y:1024,c:"#FFFFFF",L:[],bY:1,d:1024,U:{},T:{"57":{i:"57",n:"muted",z:0.14,b:[],a:[{f:"c",y:0,z:0.01,i:"cY",e:"1",s:"0",o:"103"},{f:"c",y:0,z:0.14,i:"cY",e:"1",s:"0",o:"106"},{y:0.01,i:"cY",s:"1",z:0,o:"103",f:"c"},{y:0.14,i:"cY",s:"1",z:0,o:"106",f:"c"}],f:30},"69":{i:"69",n:"open-menu",z:0.1,b:[],a:[{f:"c",y:0,z:0.04,i:"cY",e:"0",s:"1",o:"108"},{y:0.04,i:"cY",s:"0",z:0,o:"108",f:"c"},{f:"c",p:2,y:0.06,z:0,i:"ActionHandler",s:{a:[{p:7,b:"69",symbolOid:"26"}]},o:"69"},{f:"c",y:0.06,z:0.04,i:"e",e:0,s:1,o:"108"},{y:0.1,i:"e",s:0,z:0,o:"108",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.01,b:[],a:[{f:"c",p:2,y:0.01,z:0,i:"ActionHandler",s:{a:[{p:4,h:"68"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["105","106","107","108","101","103","102","104"],v:{"102":{h:"58",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"104",c:1024,k:"div",z:1,d:768,r:"inline"},"105":{c:39,d:23,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"69",p:8,z:false,symbolOid:"26",J:true}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:5,O:0,D:"#D8DDE4",P:0,a:512,b:492},"108":{x:"visible",a:512,b:512,j:"absolute",cY:"1",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"28"},{p:4,h:"70"}]},k:"div",c:184,d:47,z:4,e:1,aP:"pointer"},"101":{h:"31",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"103",z:1,k:"div",cY:"0",d:768,c:1024,r:"inline"},"104":{k:"div",x:"visible",c:1024,d:768,z:1,a:0,j:"absolute",b:0},"107":{h:"65",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"108",c:184,k:"div",z:1,d:47,r:"inline"},"103":{x:"visible",cY:"0",k:"div",c:1024,d:768,z:3,r:"inline",a:0,j:"absolute",b:0},"106":{h:"63",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"108",z:2,k:"div",cY:"0",d:47,c:184,r:"inline"}}},{o:"30",p:"600px",x:2,cA:false,Z:768,Y:1024,c:"#FFFFFF",L:[],bY:1,d:1024,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:4,h:"68"}]},o:"kTimelineDefaultIdentifier"}],f:30},"77":{i:"77",n:"unmute-thanks",z:0.02,b:[],a:[{f:"c",y:0,z:0.02,i:"cY",e:"1",r:true,s:"1",o:"110"},{y:0.02,i:"cY",s:"1",z:0,o:"110",f:"c"}],f:30},"76":{i:"76",n:"mute-thanks",z:0.01,b:[],a:[{f:"c",y:0,z:0.01,i:"cY",e:"0",s:"1",o:"110"},{y:0.01,i:"cY",s:"0",z:0,o:"110",f:"c"}],f:30},"72":{i:"72",n:"muted",z:0.01,b:[],a:[{f:"c",y:0,z:0.01,i:"cY",e:"0",s:"1",o:"110"},{y:0.01,i:"cY",s:"0",z:0,o:"110",f:"c"}],f:30}},bZ:180,O:["111","112","110","109"],v:{"109":{h:"33",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:1,d:768},"111":{c:128,d:37,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"25"}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:4,O:0,D:"#D8DDE4",P:0,a:199,b:630},"112":{c:785,d:385,I:"None",J:"None",K:"None",L:"None",aP:"text",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"78"}]},B:"#D8DDE4",j:"absolute",k:"div",C:"#D8DDE4",z:3,O:0,D:"#D8DDE4",P:0,a:204,b:221},"110":{aV:8,w:"Moai",a:209,x:"visible",Z:"break-word",b:227,y:"preserve",cY:"1",z:2,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,j:"absolute",k:"div",aS:8,t:16,aU:8,G:"#000000",r:"inline"}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();