var VM=new function(){function it(n){n.style.display="block",n.tabIndex="0"}function e(n){n.style.display="none",n.tabIndex="-1"}function h(){it(i),e(s)}function y(){e(i),it(s)}function ft(n){if(_w.B_er)throw n;}function o(){try{n&&n.play&&n.play()}catch(t){ft(t)}}function v(){try{n&&n.pause&&n.pause()}catch(t){ft(t)}}function et(){h(),v()}function ot(){t===!0&&(y(),o())}function nt(n){var t=n?sj_be:sj_ue;rt?(g(),t(_d,r,g),t(_w,"unload",st)):(t(_w,"blur",et),t(_w,"focus",ot))}function g(){_d[c]?n.pause():t===!0&&o()}function st(){sj_ue(_d,r,g)}var tt="hidden",f="Hidden",d="visibilitychange",k="undefined",b="ms",w="webkit",n,i=_ge("sh_pl"),s=_ge("sh_ps"),p,ut,c,r,t,u,rt,a,l;this.Loaded=!1,this.InFoc=1,t=!0,this._autoPlay=!0,u="hpVideoPause",rt=function(){if(typeof _d[tt]!==k)c=tt,r=d;else if(typeof _d[b+f]!==k)c=b+f,r=b+d;else if(typeof _d[w+f]!==k)c=w+f,r=w+d;else return!1;return!0}(),i&&(a=i.parentNode,l=s.parentNode,sj_be(a,"click",function(){l.focus()}),sj_be(l,"click",function(){a.focus()})),this.hideControls=function(){e(i),e(s),nt(!1)},this.end=function(){h()},this.playAction=function(){this.play(),_w.g_hpLocal&&localStorage.removeItem(u)},this.pauseAction=function(){this.pause(),_w.g_hpLocal&&localStorage.setItemE(u,1,1440)},this.play=function(){y(),o(),t=!0},this.pause=function(){h(),v(),t=!1},this.fade=function(){!VM.Loaded&&VM.InFoc&&(VM._autoPlay?(o(),y()):(v(),h()),_anim.fadeE(n).up(),VM.Loaded=!0,typeof HPV_lat=="function"&&(ut=sb_gt()-p,HPV_lat(ut))),_w.g_NPLE&&!--_w.g_NPLE&&sj_evt.fire("onRBComplete")},this.sa_vid_ld=function(i){var f,r,e;if(n=_ge("vid"),!VM.Loaded&&_w.g_vid&&n&&n.play){for(f=_w.g_vid,sj_be(n,"canplaythrough",function(){nt(!0),i?i():VM.fade()}),r=0;r<f.length;r++)if(!!(n.canPlayType&&n.canPlayType(f[r][0]).match(/^(probably|maybe)$/i))){n.type=f[r][0],n.src=f[r][1],p=sb_gt();break}p&&(sj_so(n,0),VM._autoPlay=!0,_w.g_hpLocal&&(e=localStorage.getItemE(u),e!=null&&e===1&&(VM._autoPlay=!1,t=!1)))}}},ImgViewer;sj_evt.bind("onBgSet",function(){VM.Loaded===!1&&VM.sa_vid_ld()},1),ImgViewer=function(){function nr(n,t,i){var r=sj_gx(),u=hp_pushparams(["format=js","idx="+n,"n="+t,"nc="+sb_gt(),"pid=hp"]),f;_w.g_vidOn&&u.push("video=1"),f="/HPImageArchive.aspx?"+u.join("&"),r.open("GET",f,!0),sj_be(r,"readystatechange",function(){r.readyState==4&&r.status==200&&(c=wr(r.responseText),tt=Math.min(ti,n+(c&&c.images&&c.images.length)||0),i(!!c))}),r.send(null)}function wr(n){if(typeof n!="string"||!n)return null;if(_w.JSON&&_w.JSON.parse)try{return _w.JSON.parse(n)}catch(t){}try{return new Function("return "+n)()}catch(t){return null}}function dr(){for(var n=0,t=c.images.length;n<t;n++)vt(n,n)}function vt(n,i){if(t[n]=c.images[i]||null,ir){var r=Math.max(screen.height,screen.width),u=Math.min(screen.height,screen.width),f="//"+window.location.host+"/iod/";t[n].url=f+r+"/"+u+"/"+t[n].fullstartdate,t[n].portraiturl=f+u+"/"+r+"/"+t[n].fullstartdate}}function ki(){var i=n+1;ft[i]||i>=ti?g():t[i]?wi(i):nr(i,1,function(n){n?(vt(i,0),wi(i)):g()})}function iu(){var n=g_prefetch;n&&(n.Im&&tr(n.Im),n.Vid&&vr(n.Vid))}function tr(n){var t=new Image;t.onload=function(){var t=sj_cook.get("_SS","bIm");t=t&&t.length>=3?t.substring(t.length-3)+n.hash:n.hash,sj_cook.set("_SS","bIm",t,0,"/")},t.src=n[et]}function vr(n){var t=sj_ce("video","prefVid"),i,u,r;try{t.setAttribute("preload","auto")}catch(f){}for(t.width=956,t.height=512,i=0,u=n.length;i<u;i++)r=sj_ce("source"),r.src=n[i][1],r.type=n[i][0],t.appendChild(r);t.style.display="none",sj_b.appendChild(t),sj_be(t,"canplaythrough",function(){var n=_ge("prefVid");n&&sj_b.removeChild(n)})}function wi(n){if(!ft[n]){g();var i=t[n],r=new Image;r.onload=function(){sj_evt.fire("onHPIVImg"+n,n),ft[n]=1},r.src=i.pano?i.pano.image:_w.g_vidOn&&i.vid?i.vid.image:i[et]}}function pi(t){n==0||b||(n--,bi(),ci(1,n)),typeof t!==e&&t&&sj_pd(t)}function yi(t){if(n<tt-1&&!b&&!ri){var i=n+1;ri=1,ft[i]||gr(),sj_evt.bind("onHPIVImg"+i,uu,1),ci(-1,i)}typeof t!==e&&t&&sj_pd(t)}function uu(t){t[1]==n+1&&(n++,ri=0,bi())}function g(){var r=t[n],u=r[si]=="1"?ot:ut,h,c,l;r.vid&&(h=r.vid.dark,_ge("sh_pl").parentNode.className=h?"sh_pll":"sh_pld",_ge("sh_ps").parentNode.className=h?"sh_psl":"sh_psd",u=h?ot:ut),c=u+"dis",s.className=u,l=s.href===rt?dt:wt,s.style.cursor=l,i.firstChild.className=n===tt-1?c:u,o.firstChild.className=n==0?c:u,i.title=v.previous,o.title=v.next,sj_evt.fire("updateHpImg",r),f&&typeof hpWall!==e&&(r.wp&&!r.vid?(hpWall.enabled=!0,hpWall.hash=r.hsh,f.firstChild.className=u,f.title=v.walls,f.style.cursor=wt):(hpWall.hash="",hpWall.enabled=!1,hpWall.tB(0),f.firstChild.className=c,f.title=v.walle,f.style.cursor=dt))}function gr(){i.title=v.loading}function bi(){b=1,lt&&clearTimeout(lt),ki(),a&&a.disable();var n=_ge("vid");if(_w.g_vidOn&&(VM.InFoc=0,n&&n.style.opacity!="0"&&(n.onended=null,VM.hideControls())),r&&r.style.opacity!="0"){_ge("panoControls").style.visibility=gt,h.style.backgroundImage="url()",nt.down(function(){h.removeChild(r),nt=r=null,ai()});return}bt.down(ai)}function ai(){var i=t[n],r=_ge("vid"),f=_ge("sc_mktb"),e=t[n].fullstartdate,s=e.substr(0,8)+"_"+e.substr(8,4),u,o;if(r&&_w.g_vidOn&&VM&&(r.pause&&!r.paused&&r.pause(),r.style.display="none",sj_so(r,0),VM.Loaded=!1,_w.g_vid=null,i.vid)){if(pt(i.vid.caption,i.copyrightlink),u="url('"+i.vid.image+"');",h.style.backgroundImage=u,i.vid.loop){r.onended=VM.play;try{r.setAttribute("loop","true")}catch(c){}}else{r.onended=VM.end;try{r.removeAttribute("loop")}catch(c){}}_w.g_vid=i.vid.codecs,VM.InFoc=1,VM.sa_vid_ld(br),bt.up(li)}i.pano&&st(i.pano),i.vid||(pt(i.copyright,i.copyrightlink),u=i[et],i.pano&&(u=i.pano.image),u="url('"+u+"')",h.style.backgroundImage=u,h.style.filter=sb_i8l?"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+i[et]+"', sizingMethod='scale') progid:DXImageTransform.Microsoft.Alpha(opacity=0);":"",bt.up(li)),sj_evt.fire("onHPImgViewerNavigation",s),f&&(o=_ge("hp_husb"),f.style.display=!!o||i.vid||i.pano?"none":"block")}function pt(n,t){var i=typeof t==e||t==""||t==rt;at&&ht?(at.href=i?rt:t,ht.innerHTML=n,s.title=n):(s.title=n,s.href=i?rt:t,s.style.cursor=i?dt:wt)}function br(){var n=_ge("vid");n&&VM&&VM.InFoc&&(VM._autoPlay===!1?VM.pause():VM.play(),VM.Loaded=!0,n.style.display="block",sj_so(n,100))}function li(){var f,s,l,r,v,h,y,w,i,o,u,c;if(b=0,f=t[n],_w.g_hot&&(!f.pano||f.pano.hs===!0)){for(s=f.hs,i=0,c=s.length;i<c;i++){if(i>=s.length){typeof g_triggerElems!==e&&(g_triggerElems[i].isHotSpotDisabled=!0);continue}else typeof g_triggerElems!==e&&(g_triggerElems[i].isHotSpotDisabled=!1);l=i+1,r=s[i],v=_ge("sc_hst"+l),v.style.left=r.locx+"%",v.style.top=r.locy+"%",h=_ge("sc_hs"+l),h.href=r.link,h.firstChild.innerHTML=r.desc,h.firstChild.nextSibling.innerHTML=r.query}a&&a.intro(1)}var k=_ge("hp_pgNav"),d=k?2:0,p=_ge("hp_pgbar");if(p)for(y=p.getElementsByTagName("h3"),w=f.msg,i=0,c=y.length;i<c;i++){if(o=w[i],!o)break;if(u=y[i+d],!u)break;u.parentNode.id!==ar&&(u.innerHTML=o.title,u.nextSibling.innerHTML=o.text,u.nextSibling.href=o.link)}}function ci(n){if(typeof hpl!==e){if(hpl&&(y=hpl),y&&y.ssd){var i=y.ssd,r=new Date(parseInt(i.substr(0,4),10),i.substr(4,2)-1,parseInt(i.substr(6,2),10)+n);y.ssd=r.getFullYear().toString()+hi(r.getMonth()+1)+hi(r.getDate())+"_"+i.substr(9,4)}y&&(hpl=y)}}function hi(n){return(n<10?"0":"")+n}function yr(n){var t,u,i;if(pt(n.cap,n.caplink),n.spots)for(t=0,u=n.spots.length;t<u;t++)i=n.spots[t],Pano.CreateHotspot(i[0],i[1],i[2]);b=1,r.style.opacity=0,h.style.opacity=1,r.style.visibility=l,nt.up(function(){_ge("panoControls").style.visibility=l,sj_evt.bind(ni,function(){Pano.StopAnimation()}),n.an===!0&&(lt=sb_st(function(){Pano.IdleAnimate()},500)),b=0})}function u(n){return sj_ce(er,n)}function ru(){var c,i,s,o,e,tt,n,k;if(_ge("panoDiv")||(r=u("panoDiv"),h.appendChild(r),nt=_anim.fadeE(r,ui)),c=_ge("hp_ctrls"),c&&!_ge("panoControls")){var p=u("panoLeft"),y=u("panoRight"),v=u("panoUp"),a=u("panoDown"),l=u("panoZoomIn"),b=u("panoZoomOut"),f=u("panoPosition");f.appendChild(v),f.appendChild(p),f.appendChild(y),f.appendChild(a),i=u("panoControlSet"),i.appendChild(b),i.appendChild(f),i.appendChild(l),s=u("panoControls"),s.appendChild(i),o=[p,y,v,a,l,b];function t(n,t){Pano.SetCameraFidelity(!1),kt=!1,d(n,t)}function d(n,t){kt==!1?(Pano.MovePano(n,t),sb_st(sj_wf(d,n,t),25)):Pano.SetCameraFidelity(!0)}function g(){kt=!0}for(e=0,tt=o.length;e<tt;e++)sj_be(o[e],di,g);sj_be(_d,di,g),sj_be(l,w,sj_wf(t,"z",1)),sj_be(b,w,sj_wf(t,"z",-1)),n=.05,k=_G&&_G.RTL===!0,sj_be(p,w,sj_wf(t,"x",k?-n:n)),sj_be(y,w,sj_wf(t,"x",k?n:-n)),sj_be(v,w,sj_wf(t,"y",n)),sj_be(a,w,sj_wf(t,"y",-n)),sj_be(_w,"blur",Pano.StopAnimation),c.appendChild(s)}}function st(n){function t(){ru(),n.hs===!1&&a&&a.disable();var t=_w.location.search.indexOf("debug=1")!=-1,i="?h="+_w.location.host;Pano.InitializePano(n.url,r,function(){yr(n)},t,n.pos,n.maxfov,i),sj_evt.fire("onPanoComplete")}typeof Pano===e?(sj_evt.bind("onPanoLoad",function(){t()}),sj_jb("HomepagePano_c"),sj_be(_w,"resize",function(){r&&typeof Pano!==e&&typeof Pano.SetViewportSize===cr&&Pano.SetViewportSize(r.offsetWidth,r.offsetHeight)})):t()}function yt(){sj_evt&&sj_evt.fire(ni)}function hr(){var n=sj_cook&&sj_cook.get("_UR","D"),t=sj_cook&&sj_cook.get("_UR","DHP");return n&&n!="0"&&n!="1"||t&&t!="0"?!0:!1}function sr(){var t="isHomepage",i="http://"+_d.domain+"/",r=i.replace(/www\./i,""),n=or();return n?oi(n,t,i)||oi(n,t,r):0}function oi(n,t,i){try{return n[t](i)}catch(r){return 0}}function or(){var n=_ge("dhp_detect");return n||(n=sj_ce("span","dhp_detect"),n.style.behavior="url(#default#homepage)",sj_b.appendChild(n)),n}function ei(){it&&p&&p.style.display!="none"&&(hr()||sr()?p.style.display="none":p.style.visibility=p.offsetLeft<it.offsetLeft+it.clientWidth?"hidden":"visible")}function fr(){var u=_ge("id_la"),i=_ge("id_lt"),n=_ge("id_r"),t,r;i&&u&&n&&(t=sj_ce("td"),i.removeChild(n.parentNode),t&&t.appendChild(n),i.insertBefore(t,u.parentNode),r=_ge("id_d_u"),r&&(r.parentNode.colSpan=3),n.className+=" visible")}var wt="pointer",dt="default",e="undefined",cr="function",l="visible",gt="hidden",ar="hp_pgps",kr="focus",d="click",nu="keydown",w="mousedown",di="mouseup",ni="hpsbact",er="div",ur="dhplink",ti=8,ui=500,tt=0,n=0,ri=0,y=null,t=[],ft=[],a,et="url",si="bot",h=_ge("bgDiv"),ir=_ge("bgDivPortrait"),i=_ge("sh_igl"),o=_ge("sh_igr"),f=_ge("sh_igw"),b=0,s,ot="sc_light",ut="sc_dark",rt="javascript:void(0)",c=null,kt=!0,tu="ontouchstart"in _w,r=null,lt=null,k=_ge("sb_form_q"),gi=k&&k.parentNode,v,bt=_anim.fadeE(h,ui),nt,ht,at,it=_ge("sc_hdu"),p=_ge("dhp"),lr=_ge("id_h"),pr=_ge("hp_table"),fi;if(_w.hpPanoLoad=function(n){st(n)},!_w.g_IMVL){typeof _w.g_IMVL!==e&&(_w.g_IMVL=1),pr&&fr(),sj_evt.bind("onHPHS",function(n){a=n[1]},1),k&&(sj_be(k,kr,yt),sj_be(k,nu,yt),gi&&sj_be(gi,d,yt)),sj_evt.bind("onRBComplete",function(){var n=_w.sched;_w.g_hptse&&n&&n.schedule({ns:"H",task:function(){n.complete("H")}}),iu()},1),fi=_ge("dhplink"),!fi&&it&&p&&lr&&(sj_evt.bind(ur,ei,1),sj_be(_w,"resize",ei,!1));var rr=new RegExp("[\\?&]ssd=([^&#]*)"),ct=rr.exec(_w.location.href),vi=1,ii;ct!=null&&ct[1]!=null&&(ii=ct[1].replace("_",""),vi=ti),nr(0,vi,function(r){function u(){sb_st(ki,1),sj_ue(i,"mouseover",u),sj_ue(o,"mouseover",u),sj_ue(i,"focus",u),sj_ue(o,"focus",u),tu&&(this===i?yi(null):pi(null))}var e,a,y,p,h;if(r){if(n=0,ii!=null)for(dr(),e=0;e<tt;e++)t[e].fullstartdate==ii&&(n=e);else vt(0,0);v=v||c.tooltips,s=_ge("sh_cp"),at=_ge("iibCCLink"),ht=_ge("iibCCText"),sj_be(i,d,yi),sj_be(o,d,pi),i.firstChild.style.visibility=l,o.firstChild.style.visibility=l,a=_ge("sh_igf"),a&&(a.firstChild.style.visibility=l),y=_ge("sh_pl"),p=_ge("sh_ps"),g(),i.firstChild.className=t[n][si]=="1"?ot:ut,t[n].pano?st(t[n].pano):t[n].vid&&(h=t[n].vid.dark,y.parentNode.className=h?"sh_pll":"sh_pld",p.parentNode.className=h?"sh_psl":"sh_psd",i.firstChild.className=h?ot:ut),sj_be(i,"mouseover",u),sj_be(o,"mouseover",u),sj_be(i,"focus",u),sj_be(o,"focus",u),f&&hpWall&&(_G.Mkt=="zh-CN"?sj_be(f,d,hpWall.dLFree):sj_be(f,d,hpWall.dL))}}),function(){var o="px",it="click",w="block",tt="none",p="height",y="HPTBD",n=400,v=35,nt=1,d=.5,b=_ge("sh_igf"),e=_ge("hp_sw_hdr"),t=e.style,a=_ge("sb_foot"),c=_ge("sb_form_q"),h=c&&c.parentNode,s=_ge("sh_fu"),f,u,r,i=!1;if(b&&e&&a&&h){var rt=function(){f=_anim.animE(e,p,0,v,{duration:n,unit:o}),u=_anim.animE(a,p,0,v,{duration:n,unit:o}),r=_anim.fadeE(h,n,n,d,nt),sj_be(b,it,et),sj_evt.bind(ni,k)},ut=function(){t.display=tt,t.overflow=l,i=!0,sj_evt.fire(y)},ft=function(){t.overflow=l,i=!1,sj_evt.fire(y)},et=function(n){i?k():g(),sj_pd(n)},g=function(){i||(t.display=w,t.overflow=gt,_w.bhptb&&bhptb.hide&&bhptb.hide(n),_w.bhppgb&&bhppgb.hide&&bhppgb.hide(n),_w.bhpnav&&bhpnav.hide&&bhpnav.hide(),f.revert(ut),u.revert(),r.down(),s.className="hpcSmall")},k=function(){i&&(t.display=w,t.overflow=gt,_w.bhptb&&bhptb.show&&bhptb.show(n),_w.bhppgb&&bhppgb.show&&bhppgb.show(n),_w.bhpnav&&bhpnav.show&&bhpnav.show(),f.start(ft),u.start(),r.up(),s.className="hpcFull")};rt()}}()}},sj_evt.bind("onBgSet",ImgViewer,1)