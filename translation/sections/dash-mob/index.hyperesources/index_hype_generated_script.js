//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_600","HYPE_dtl_600",!0==(null!=a&&10>a||false==!0)?"HYPE-600.full.min.js":"HYPE-600.thin.min.js"),false==!0&&(a=a||l("HYPE_w_600","HYPE_wdtl_600","HYPE-600.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"speak",source:"function(hypeDocument, element, event) {// Example from: https://usefulangle.com/post/98/javascript-text-to-speech\n// list of languages is probably not loaded, wait for it\nif(window.speechSynthesis.getVoices().length == 0) {\n\twindow.speechSynthesis.addEventListener('voiceschanged', function() {\n\t\ttextToSpeech();\n\t});\n}\nelse {\n\t// languages list available, no need to wait\n\ttextToSpeech()\n}\n\nfunction textToSpeech() {\n\t// get all voices that browser offers\n\tvar available_voices = window.speechSynthesis.getVoices();\n\n\t// this will hold an english voice\n\tvar english_voice = '';\n\n\t// find voice by language locale \"en-US\"\n\t// if not then select the first voice\n\tfor(var i=0; i<available_voices.length; i++) {\n\t\tif(available_voices[i].lang === 'en-US'||available_voices[i].lang === 'en') {\n\t\t\tenglish_voice = available_voices[i];\n\t\t\tbreak;\n\t\t}\n\t}\n\tif(english_voice === '')\n\t\tenglish_voice = available_voices[0];\n\n\t// new SpeechSynthesisUtterance object\n\tvar utter = new SpeechSynthesisUtterance();\n\tutter.rate = 0.8;\n\tutter.pitch = 0.9;\n\tutter.text = \"The ukulele is commonly associated with music from Hawaii where the name roughly translates as jumping flea\";\n\tutter.voice = english_voice;\n\t\n\tutter.onstart = function() {\n\t\t//alert('Speech has finished');\n\t\thypeDocument.continueTimelineNamed('preview', hypeDocument.kDirectionReverse, false)\n\t}\n\n\t// event after text has been spoken\n\tutter.onend = function() {\n\t\t//alert('Speech has finished');\n\t\thypeDocument.continueTimelineNamed('preview', hypeDocument.kDirectionForward, false)\n\t}\n\n\t// speak\n\twindow.speechSynthesis.speak(utter);\n\t\n\t//Second part:\n\tutter = new SpeechSynthesisUtterance();\n\tutter.rate = 0.8;\n\tutter.pitch = 0.9;\n\tutter.text = \"perhaps because of the movement of the player's fingers.\";\n\tutter.voice = english_voice;\n\n\twindow.speechSynthesis.speak(utter);\n\n\t\n\t\n}\n\n\t\n}",identifier:"228"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_600(c,e,{"3":{p:1,n:"mob-section-selector.jpg",g:"18",o:true,t:"@1x"},"12":{p:1,n:"mob-trans-header.jpg",g:"71",o:true,t:"@1x"},"21":{p:1,n:"mob-trans-sen2.png",g:"151",t:"@1x"},"4":{p:1,n:"mob-selected-suggestion.jpg",g:"13",o:true,t:"@1x"},"30":{p:1,n:"mob-published-section-highlight.png",g:"188",t:"@1x"},"13":{p:1,n:"mob-trans-highlight-title.png",g:"73",t:"@1x"},"5":{p:1,n:"mob-navigation.png",g:"32",t:"@1x"},"22":{p:1,n:"mob-ve-preview.jpg",g:"123",o:true,t:"@1x"},"6":{p:1,n:"mob-section-overview-original.png",g:"34",t:"@1x"},"31":{p:1,n:"mob-ve-preview2.jpg",g:"220",o:true,t:"@1x"},"14":{p:1,n:"mob-trans-panel-title.png",g:"78",t:"@1x"},"7":{p:1,n:"mob-section-overview-target.jpg",g:"36",o:true,t:"@1x"},"23":{p:1,n:"keyboard.png",g:"125",t:"@1x"},"32":{p:1,n:"mob-ve-preview-text1.png",g:"222",t:"@1x"},"15":{p:1,n:"mob-trans-translated-highlighted-title.png",g:"103",t:"@1x"},"8":{p:1,n:"mob-section-overview.png",g:"29",t:"@1x"},"24":{p:1,n:"mob-trans-panel-sen2.png",g:"153",t:"@1x"},"9":{p:1,n:"mob-welcome1.png",g:"53",t:"@1x"},"33":{p:1,n:"mob-ve-preview-text2.png",g:"224",t:"@1x"},"16":{p:1,n:"mob-search.png",g:"87",t:"@1x"},"25":{p:1,n:"mob-trans-sen3.png",g:"164",t:"@1x"},"17":{p:1,n:"mob-new-selected.jpg",g:"89",o:true,t:"@1x"},"26":{p:1,n:"mob-trans-panel-sen3.png",g:"166",t:"@1x"},"18":{p:1,n:"mob-trans-sen1.png",g:"112",t:"@1x"},"27":{p:1,n:"mob-publish-preview.png",g:"173",t:"@1x"},"19":{p:1,n:"mob-ve-editor.png",g:"121",t:"@1x"},"28":{p:1,n:"mob-published-followup.png",g:"186",t:"@1x"},"-1":{n:"PIE.htc"},"29":{p:1,n:"mob-article-published.jpg",g:"184",o:true,t:"@1x"},"-2":{n:"blank.gif"},"10":{p:1,n:"mob-welcome2.png",g:"55",t:"@1x"},"0":{p:1,n:"mob-suggestions.jpg",g:"5",o:true,t:"@1x"},"1":{p:1,n:"mob-section-overview-compact-header-tar.png",g:"42",t:"@1x"},"11":{p:1,n:"mob-trans-content.png",g:"69",t:"@1x"},"2":{p:1,n:"mob-section-overview-compact-header-src.png",g:"40",t:"@1x"},"20":{p:1,n:"mob-trans-panel-sen1.png",g:"115",t:"@1x"}},h,[],d,[{n:"Suggestions",o:"1",X:[0]},{n:"NewTranslation",o:"83",X:[1]},{n:"SelectedSuggestion",o:"10",X:[2]},{n:"SectionSelector",o:"15",X:[3]},{n:"SectionOverview",o:"26",X:[4]},{n:"Welcome",o:"50",X:[5]},{n:"TranslationTitle",o:"66",X:[6]},{n:"TranslationSen1",o:"99",X:[7]},{n:"EditSen1",o:"118",X:[8]},{n:"TranslationSen2",o:"144",X:[9]},{n:"TranslationSen3",o:"157",X:[10]},{n:"PublishPreview",o:"170",X:[11]},{n:"Published",o:"181",X:[12]}],[{o:"3",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["238","235","236","234","237"],n:"Untitled Layout","_":0,v:{"234":{h:"32",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:599,j:"absolute",bS:15,z:3,k:"div",dB:"img",d:69,c:375,r:"inline"},"238":{w:"",h:"5",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"235",d:1065,c:375,cQ:1,r:"inline",cR:1},"235":{k:"div",x:"auto",c:375,d:667,z:1,a:0,j:"absolute",bS:52,b:0},"236":{c:186,d:52,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"235",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:10,b:55},"237":{c:298,d:116,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"235",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,e:"10"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:16,b:793}}},{o:"85",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"95":{i:"95",n:"search",z:0.02,b:[],a:[{f:"c",y:0,z:0.02,i:"cY",e:"1",s:"0",o:"239"},{y:0.02,i:"cY",s:"1",z:0,o:"239",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["241","243","239","246","244","240","245","242","247"],n:"Untitled Layout","_":1,v:{"239":{x:"visible",cY:"0",k:"div",c:375,d:667,z:3,a:0,j:"absolute",b:-1},"242":{c:374,d:65,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"239",A:"#D8DDE4",x:"visible",aA:{a:[{b:"95",p:8,z:false,symbolOid:"84",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:151},"245":{c:41,d:46,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"244",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:334,b:7},"241":{c:267,d:47,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"239",A:"#D8DDE4",x:"visible",aA:{a:[{b:"95",p:8,z:false,symbolOid:"84",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"244":{x:"visible",cY:"0",k:"div",c:375,d:1000,z:1,a:-1,j:"absolute",b:-1},"247":{c:278,d:58,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"244",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:6,e:"15"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:49,b:178},"240":{c:41,d:46,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"239",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:2}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:334,b:1},"243":{w:"",h:"87",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"239",d:667,c:375,r:"inline",e:1},"246":{h:"89",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"244",d:1000,c:375,cQ:1,r:"inline",cR:1}}},{o:"12",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["249","250","248"],n:"Untitled Layout","_":2,v:{"248":{c:269,d:59,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:6,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:53,b:76},"249":{h:"13",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:1000,r:"inline",cQ:1,cR:1},"250":{c:41,d:64,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:2}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:334,b:0}}},{o:"17",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["253","251","254","252"],n:"Untitled Layout","_":3,v:{"251":{k:"div",x:"auto",c:375,d:667,z:1,a:0,j:"absolute",b:0},"252":{c:374,d:54,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"251",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:5,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1,b:185},"253":{h:"18",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"251",d:1014,c:375,cQ:1,r:"inline",cR:1},"254":{c:67,d:66,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"251",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:7,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:309,b:0}}},{o:"28",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"47":{i:"47",n:"swap-preview",z:0.03,b:[],a:[{f:"c",y:0,z:0.03,i:"e",e:0,s:1,o:"259"},{f:"c",y:0,z:0.03,i:"e",e:0,s:1,o:"267"},{y:0.03,i:"e",s:0,z:0,o:"259",f:"c"},{y:0.03,i:"e",s:0,z:0,o:"267",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["259","257","255","256","258","260","269","268","261","262","265","267","264","263","266"],n:"Untitled Layout","_":4,v:{"269":{c:229,d:66,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"261",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:4,f:2}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"258":{c:154,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"255",A:"#D8DDE4",x:"visible",aA:{a:[{b:"47",p:8,z:true,symbolOid:"27",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:64},"264":{h:"36",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"263",d:922,c:375,cQ:1,r:"inline",cR:1},"267":{h:"34",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"263",d:922,c:375,cQ:1,e:1,r:"inline",cR:1},"256":{c:141,d:59,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"255",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:234,b:1},"262":{c:236,d:59,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"261",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:8,b:141},"265":{c:154,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"263",A:"#D8DDE4",x:"visible",aA:{a:[{b:"47",p:8,z:true,symbolOid:"27",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"260":{c:189,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"47",p:8,z:false,symbolOid:"27",J:false}]},j:"absolute",O:0,k:"div",dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",bF:"255",P:0,a:156,b:64},"259":{h:"40",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"255",d:114,c:375,r:"inline",e:1},"268":{h:"29",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"261",z:1,k:"div",dB:"img",d:318,c:375,r:"inline"},"257":{h:"42",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"255",z:1,k:"div",dB:"img",d:114,c:375,r:"inline"},"263":{x:"visible",k:"div",bF:"261",c:375,d:922,z:2,a:0,j:"absolute",bN:{a:[{c:0,y:true,A:1,p:10,K:1,symbolOid:"27",b:"47"}]},b:318},"266":{c:189,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"263",A:"#D8DDE4",x:"visible",aA:{a:[{b:"47",p:8,z:false,symbolOid:"27",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:156,b:0},"255":{k:"div",x:"visible",c:375,d:114,z:13,a:-1,j:"absolute",b:-114},"261":{k:"div",x:"auto",c:375,d:667,z:1,a:0,j:"absolute",b:0}}},{o:"52",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"65":{i:"65",n:"welcome",z:0.03,b:[],a:[{f:"c",y:0,z:0.02,i:"e",e:0,s:1,o:"272"},{f:"c",p:2,y:0.02,z:0.01,i:"ActionHandler",e:{a:[{}]},s:{a:[{b:"65",symbolOid:"51",p:7}]},o:"65"},{y:0.02,i:"e",s:0,z:0,o:"272",f:"c"},{f:"c",p:2,y:0.03,z:0,i:"ActionHandler",s:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},o:"65"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["272","270","271"],n:"Untitled Layout","_":5,v:{"270":{h:"55",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:667,r:"inline"},"271":{c:200,d:52,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"65",p:8,z:false,symbolOid:"51",J:true}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:175,b:599},"272":{w:"",h:"53",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",c:375,d:667,r:"inline",e:1}}},{o:"68",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{"102":{i:"102",n:"translate",z:0.15,b:[],a:[{f:"c",y:0,z:0.06,i:"e",e:1,s:0,o:"281"},{y:0.06,i:"e",s:1,z:0,o:"281",f:"c"},{f:"c",p:2,y:0.15,z:0,i:"ActionHandler",s:{a:[{d:0.10000000149011612,p:1,g:2,f:1}]},o:"102"}],f:30},"82":{i:"82",n:"intro",z:0.18,b:[],a:[{f:"c",y:0,z:0.06,i:"e",e:1,s:0,o:"278"},{y:0.06,i:"e",s:1,z:0,o:"278",f:"c"},{f:"e",y:0.12,z:0.06,i:"b",e:411,s:461,o:"282"},{f:"e",y:0.12,z:0.06,i:"e",e:1,s:0,o:"282"},{y:0.18,i:"b",s:411,z:0,o:"282",f:"c"},{y:0.18,i:"e",s:1,z:0,o:"282",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.12,b:[],a:[{f:"c",p:2,y:0.12,z:0,i:"ActionHandler",s:{a:[{b:"82",p:3,z:false,symbolOid:"67"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["276","275","273","274","281","280","278","279","277","284","282","283"],n:"Untitled Layout","_":6,v:{"281":{h:"103",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:4,k:"div",bF:"277",d:67,c:375,r:"inline",e:0},"275":{h:"71",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"273",z:1,k:"div",dB:"img",d:49,c:375,r:"inline"},"278":{h:"73",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"277",d:67,c:375,r:"inline",e:0},"284":{h:"78",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"282",z:1,k:"div",dB:"img",d:257,c:375,r:"inline"},"273":{k:"div",x:"visible",c:375,d:49,z:6,a:0,j:"absolute",b:0},"276":{c:44,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"273",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:4,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"282":{x:"visible",k:"div",c:375,d:257,z:1,e:0,a:0,j:"absolute",bS:15,b:461},"279":{h:"69",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"277",z:1,k:"div",dB:"img",d:619,c:375,r:"inline"},"274":{c:103,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"273",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",P:0,a:271,b:0},"280":{h:"103",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:3,k:"div",bF:"277",d:67,c:375,r:"inline",e:0},"277":{k:"div",x:"visible",c:375,d:619,z:0,a:0,j:"absolute",bS:52,b:49},"283":{c:87,d:44,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"282",A:"#D8DDE4",x:"visible",aA:{a:[{b:"102",p:8,z:false,symbolOid:"67",J:true}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:106,b:200}}},{o:"101",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["288","286","285","287","289","293","292","290","291"],n:"Untitled Layout","_":7,v:{"291":{c:176,d:47,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"290",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:188,b:201},"287":{c:103,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"285",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",P:0,a:271,b:0},"290":{k:"div",x:"visible",c:375,d:257,z:5,a:0,j:"absolute",bS:15,b:410},"293":{k:"div",x:"visible",c:375,d:618,z:2,a:-1,j:"absolute",bS:52,b:49},"286":{h:"71",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"285",z:1,k:"div",dB:"img",d:49,c:375,r:"inline"},"289":{h:"112",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"293",z:1,k:"div",dB:"img",d:618,c:375,r:"inline"},"292":{w:"",h:"115",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"290",d:257,c:375,r:"inline"},"285":{k:"div",x:"visible",c:375,d:49,z:1,a:0,j:"absolute",bS:36,b:0},"288":{c:44,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"285",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:4,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0}}},{o:"120",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"226":{i:"226",n:"preview",z:2,b:[],a:[{f:"c",y:0,z:1.17,i:"a",e:-260,r:true,s:0,o:"296"},{f:"c",y:0,z:1.17,i:"e",e:0,r:true,s:1,o:"296"},{f:"c",y:0.13,z:1.17,i:"a",e:0,r:true,s:260,o:"295"},{f:"c",y:0.13,z:1.17,i:"e",e:1,r:true,s:0,o:"295"},{f:"c",y:0.27,z:0.06,i:"e",e:1,r:true,s:0,o:"298"},{y:1.03,i:"e",s:1,z:0,o:"298",f:"c"},{y:1.17,i:"a",s:-260,z:0,o:"296",f:"c"},{y:1.17,i:"e",s:0,z:0,o:"296",f:"c"},{y:2,i:"a",s:0,z:0,o:"295",f:"c"},{y:2,i:"e",s:1,z:0,o:"295",f:"c"}],f:30},"132":{i:"132",n:"intro",z:0.24,b:[],a:[{f:"c",y:0,z:0.15,i:"e",e:0.70000000000000007,s:0,o:"306"},{f:"c",y:0,z:0.15,i:"b",e:96,s:414,o:"299"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"299"},{f:"c",y:0,z:0.15,i:"b",e:96,s:410,o:"307"},{f:"c",y:0.08,z:0.09,i:"e",e:1,s:0,o:"294"},{y:0.15,i:"b",s:96,z:0,o:"299",f:"c"},{y:0.15,i:"e",s:1,z:0,o:"299",f:"c"},{y:0.15,i:"b",s:96,z:0,o:"307",f:"c"},{y:0.15,i:"e",s:0.70000000000000007,z:0,o:"306",f:"c"},{y:0.17,i:"e",s:1,z:0,o:"294",f:"c"},{f:"c",y:0.21,z:0.03,i:"b",e:409,s:667,o:"302"},{y:0.24,i:"b",s:409,z:0,o:"302",f:"c"}],f:30},"156":{i:"156",n:"outro",z:1,b:[],a:[{f:"c",p:2,y:0,z:1,i:"ActionHandler",e:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},s:{a:[{b:"132",p:8,z:true,symbolOid:"119",J:false}]},o:"156"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{d:0.25,p:1,g:2,f:1}]},o:"156"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.03,b:[],a:[{f:"c",p:2,y:0.03,z:0,i:"ActionHandler",s:{a:[{b:"132",p:8,z:false,symbolOid:"119",J:false}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["296","298","297","294","306","305","304","295","309","308","303","301","299","307","300","302"],n:"Untitled Layout","_":8,v:{"307":{h:"115",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:410,j:"absolute",bF:"304",z:4,k:"div",dB:"img",d:257,c:375,r:"inline"},"302":{h:"125",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:667,j:"absolute",dB:"img",z:14,k:"div",c:375,d:258,r:"inline"},"295":{h:"224",p:"no-repeat",x:"visible",a:260,q:"100% 100%",b:0,j:"absolute",dB:"img",z:4,k:"div",bF:"294",d:96,c:375,r:"inline",e:0},"305":{h:"71",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:0,j:"absolute",bF:"304",z:2,k:"div",dB:"img",d:49,c:375,r:"inline"},"300":{I:"None",x:"visible",a:13,J:"None",K:"None",j:"absolute",b:56,z:2,k:"div",L:"None",d:156,U:"iframe-editor.html",bF:"299",c:340,V:"0",W:""},"298":{h:"220",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"294",d:96,c:375,r:"inline",e:0},"308":{h:"112",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:49,j:"absolute",bF:"304",z:1,k:"div",dB:"img",d:618,c:375,r:"inline"},"303":{c:68,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"156",p:3,z:false,symbolOid:"119"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:15,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:307,b:96},"296":{h:"222",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:3,k:"div",bF:"294",d:96,c:375,r:"inline",e:1},"299":{x:"visible",k:"div",c:375,d:571,z:2,e:0,a:0,j:"absolute",b:414},"294":{x:"visible",k:"div",c:375,d:96,z:11,e:0,a:0,j:"absolute",bN:{a:[{c:0,y:true,A:1,p:10,K:1,symbolOid:"119",b:"226"}]},b:0},"301":{w:"",h:"121",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"299",d:571,c:375,r:"inline",e:1},"306":{c:375,d:667,I:"None",e:0,J:"None",K:"None",g:"#EAECF0",L:"None",M:0,N:0,bF:"304",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",a:1,b:0},"309":{c:45,d:41,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"228"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:12,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:330,b:0},"304":{k:"div",x:"visible",c:376,d:667,z:1,a:-1,j:"absolute",b:0},"297":{h:"123",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"294",d:96,c:375,r:"inline",e:1}}},{o:"146",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{"168":{i:"168",n:"next",z:0.09,b:[],a:[{f:"c",y:0,z:0.09,i:"b",e:-179,s:0,o:"316"},{f:"c",p:2,y:0.09,z:0,i:"ActionHandler",s:{a:[{d:0.10000000149011612,p:1,g:2,f:1}]},o:"168"},{y:0.09,i:"b",s:-179,z:0,o:"316",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["314","312","311","313","316","317","310","318","315"],n:"Untitled Layout","_":9,v:{"317":{k:"div",x:"visible",c:375,d:618,z:1,a:0,j:"absolute",bS:52,b:49},"310":{h:"153",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"318",z:1,k:"div",dB:"img",d:257,c:375,r:"inline"},"313":{c:103,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"311",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",P:0,a:271,b:0},"316":{h:"151",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"317",z:1,k:"div",dB:"img",d:618,c:375,r:"inline"},"312":{h:"71",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"311",z:1,k:"div",dB:"img",d:49,c:375,r:"inline"},"315":{c:91,d:52,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"318",A:"#D8DDE4",x:"visible",aA:{a:[{b:"168",p:3,z:false,symbolOid:"145"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:101,b:197},"318":{k:"div",x:"visible",c:375,d:257,z:3,a:0,j:"absolute",bS:15,b:410},"311":{k:"div",x:"visible",c:375,d:49,z:6,a:0,j:"absolute",b:0},"314":{c:44,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"311",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:4,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0}}},{o:"159",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["324","326","322","321","320","323","319","325"],n:"Untitled Layout","_":10,v:{"320":{k:"div",x:"visible",c:375,d:49,z:5,a:0,j:"absolute",b:0},"323":{c:103,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"320",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:271,b:0},"326":{k:"div",x:"visible",c:375,d:618,z:1,a:0,j:"absolute",bS:52,b:-130},"319":{h:"166",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"325",z:1,k:"div",dB:"img",d:257,c:375,r:"inline"},"322":{c:44,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"320",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:4,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"325":{k:"div",x:"visible",c:375,d:257,z:3,a:0,j:"absolute",bS:15,b:410},"321":{h:"71",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"320",z:1,k:"div",dB:"img",d:49,c:375,r:"inline"},"324":{h:"164",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"326",z:1,k:"div",dB:"img",d:618,c:375,r:"inline"}}},{o:"172",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["329","327","328"],n:"Untitled Layout","_":11,v:{"327":{w:"",h:"173",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:667,r:"inline"},"328":{c:91,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:2,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:284,b:0},"329":{c:39,d:46,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,f:2}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0}}},{o:"183",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{"194":{i:"194",n:"intro",z:1.03,b:[],a:[{f:"c",y:0,z:0.27,i:"b",e:-534,s:0,o:"334"},{f:"c",y:0.24,z:0.06,i:"e",e:1,s:0,o:"335"},{y:0.27,i:"b",s:-534,z:0,o:"334",f:"c"},{y:1,i:"e",s:1,z:0,o:"335",f:"c"},{f:"c",p:2,y:1.03,z:0,i:"ActionHandler",s:{a:[{b:"195",p:3,z:false,symbolOid:"182"}]},o:"194"}],f:30},"195":{i:"195",n:"followup",z:0.09,b:[],a:[{f:"e",y:0,z:0.09,i:"e",e:1,r:true,s:0,o:"330"},{f:"e",y:0,z:0.09,i:"b",e:389,r:true,s:489,o:"330"},{y:0.09,i:"e",s:1,z:0,o:"330",f:"c"},{y:0.09,i:"b",s:389,z:0,o:"330",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.03,b:[],a:[{f:"c",p:2,y:0.03,z:0,i:"ActionHandler",s:{a:[{b:"194",p:3,z:false,symbolOid:"182"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["336","334","333","331","330","335","332"],n:"Untitled Layout","_":12,v:{"330":{x:"visible",k:"div",c:375,d:278,z:5,e:0,a:0,j:"absolute",bS:15,b:489},"333":{k:"div",x:"visible",c:375,d:667,z:1,a:0,j:"absolute",bS:52,b:0},"336":{h:"184",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"334",d:1201,c:375,cQ:1,r:"inline",cR:1},"332":{c:375,d:55,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"330",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"15"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1,b:223},"335":{h:"188",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:579,j:"absolute",dB:"img",z:2,k:"div",bF:"334",d:325,c:375,r:"inline",e:0},"331":{h:"186",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"330",z:1,k:"div",dB:"img",d:278,c:375,r:"inline"},"334":{k:"div",x:"visible",c:375,d:1201,z:1,a:0,j:"absolute",bF:"333",b:0}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
