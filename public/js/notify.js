"undefined"===typeof window.$&&"undefined"!==typeof window.jQuery&&(window.$=window.jQuery);
(function(d,c){var f=function(e,a){function b(){this.prefix="__vnative";this.random=(1E32*a.Math.random()).toString(36)}b.prototype={set:function(a,b,c,h){a=this.prefix+a;var d=new Date;d.setTime(d.getTime()+864E5*c);c="expires="+d.toUTCString();a=a+"="+b+"; "+c+"; ";h&&(a+=" path="+h+";");e.cookie=a},get:function(a){a=this.prefix+a;a+="=";for(var b=e.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return""},
erase:function(a){a=this.prefix+a;e.cookie=a+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC";'}};return new b}(d.document,d),k=function(c,a){function b(){this.loaded=!1;this.result=this.parser=null;this.domain="track.vnative.com"}b.prototype={init:function(){this.loaded=!0;this.parser=new c.UAParser},_result:function(){var a=this.parser.getResult();this.result={screen:{height:c.screen.height,width:c.screen.width},device:{browser:a.browser.name,os:a.os.name,model:a.device.model||"Desktop"}}},send:function(b){this._result();
this.result.aduid=b.aduid;this.result.cid=b.cid;this.result.loc=btoa(c.location.hostname);a.ajax({url:"//"+this.domain+"/impression/?callback=?",type:"GET",async:!0,jsonpCallback:"jsonCallback",contentType:"application/json",dataType:"jsonp",data:this.result}).always(function(){})}};var d=new b;a.ajaxSetup({cache:!0});a.getScript("//serve.vnative.com/uaparser.min.js",function(a){d.init()});return d}(d,c);(function(c){var a=c("head style");0===a.length?c("head").append('<style>#bsaHolder{ right: 25px;position: absolute; top: 0; width: 345px;z-index: 10;} #bsaHolder span{ text-shadow:1px 1px 0 #fff;} #bsap_aplink, #bsap_aplink:visited{ bottom: 10px;color: #aaa;font: 11px arial, sans-serif;position: absolute;right: 14px;border:none;} #bsaHolder .vn_it_p{ display: block; } #bsaHolder .vn_it_ad{ background: -moz-linear-gradient(#F3F3F3, #FFFFFF, #F3F3F3) repeat scroll 0 0 transparent; background: -webkit-gradient(linear,0% 0%,0% 100%,color-stop(0, #f3f3f3),color-stop(0.5, #fff),color-stop(1, #f3f3f3)); background-color:#f4f4f4; border-color: #fff;overflow: hidden;padding: 10px 10px 0;-moz-box-shadow: 0 0 2px #999;-webkit-box-shadow: 0 0 2px #999;box-shadow: 0 0 2px #999; -moz-border-radius: 0 0 4px 4px;-webkit-border-radius: 0 0 4px 4px;border-radius: 0 0 4px 4px;} #bsaHolder img{ display:block;border:none;} .vn_closeAd{ width:15px;height:15px;overflow:hidden;position:absolute;top:10px;right:11px;border:none !important;z-index:1; text-decoration:none !important;background:url("http://cdn.tutorialzine.com/misc/enhance/x_icon.png") no-repeat;} .vn_closeAd:hover{ background-position:left bottom;} .one{position:relative}.one .vn_it_ad{display:block;padding:15px;border:1px solid #e1e1e1;background:#f9f9f9;font-family:helvetica,arial,sans-serif;line-height:100%;position:relative}.one .vn_it_ad a{text-decoration:none}.one .vn_it_ad a:hover{text-decoration:none}.one .vn_it_ad .vn_it_t{display:block;font-size:12px;font-weight:bold;color:#212121;line-height:125%;padding:0 0 5px 0}.one .vn_it_ad .vn_it_d{display:block;color:#434343;font-size:12px;line-height:135%}.one .vn_it_ad .vn_it_i{float:left;margin:0 15px 10px 0}body .one .vn_it_p{text-align:center;display:block !important}.one .vn_it_p a{font-size:10px;color:#666;text-decoration:none}.one .vn_it_ad .vn_it_p a:hover{font-style:italic}</style>'):
a.append('#bsaHolder{ right: 25px;position: absolute; top: 0; width: 345px;z-index: 10;} #bsaHolder span{ text-shadow:1px 1px 0 #fff;} #bsap_aplink, #bsap_aplink:visited{ bottom: 10px;color: #aaa;font: 11px arial, sans-serif;position: absolute;right: 14px;border:none;} #bsaHolder .vn_it_p{ display: block; } #bsaHolder .vn_it_ad{ background: -moz-linear-gradient(#F3F3F3, #FFFFFF, #F3F3F3) repeat scroll 0 0 transparent; background: -webkit-gradient(linear,0% 0%,0% 100%,color-stop(0, #f3f3f3),color-stop(0.5, #fff),color-stop(1, #f3f3f3)); background-color:#f4f4f4; border-color: #fff;overflow: hidden;padding: 10px 10px 0;-moz-box-shadow: 0 0 2px #999;-webkit-box-shadow: 0 0 2px #999;box-shadow: 0 0 2px #999; -moz-border-radius: 0 0 4px 4px;-webkit-border-radius: 0 0 4px 4px;border-radius: 0 0 4px 4px;} #bsaHolder img{ display:block;border:none;} .vn_closeAd{ width:15px;height:15px;overflow:hidden;position:absolute;top:10px;right:11px;border:none !important;z-index:1; text-decoration:none !important;background:url("http://cdn.tutorialzine.com/misc/enhance/x_icon.png") no-repeat;} .vn_closeAd:hover{ background-position:left bottom;} .one{position:relative}.one .vn_it_ad{display:block;padding:15px;border:1px solid #e1e1e1;background:#f9f9f9;font-family:helvetica,arial,sans-serif;line-height:100%;position:relative}.one .vn_it_ad a{text-decoration:none}.one .vn_it_ad a:hover{text-decoration:none}.one .vn_it_ad .vn_it_t{display:block;font-size:12px;font-weight:bold;color:#212121;line-height:125%;padding:0 0 5px 0}.one .vn_it_ad .vn_it_d{display:block;color:#434343;font-size:12px;line-height:135%}.one .vn_it_ad .vn_it_i{float:left;margin:0 15px 10px 0}body .one .vn_it_p{text-align:center;display:block !important}.one .vn_it_p a{font-size:10px;color:#666;text-decoration:none}.one .vn_it_ad .vn_it_p a:hover{font-style:italic}');
c("html").css("background-attachment","scroll")})(c);var g=function(){function e(){this.domain="serve.vnative.com";this.trackingDomain="track.vnative.com";this.contentOpts={adunit:null,publisher:null,campaign:null,dest:null,time:d.Date.now()};this.showContent=!0;this.ckid=null}e.prototype={_init:function(a){var b=this.contentOpts;b.adunit=c(".byvnative").data("slot")||"slot";b.publisher=c(".byvnative").data("client")||"publisher";b.publisher=b.publisher.replace(/pub-/g,"");b.dest=a._url;b.campaign=
a._id;f.get("Notify")||f.set("Notify",f.random,365);this.ckid=f.get("Notify");k.send({aduid:b.adunit,cid:b.campaign});this._attach(a)},get:function(){var a=this;if(!a.showContent)return!1;0<c("#bsaHolder").length&&c("#bsaHolder").remove();c.ajax({url:"//"+a.domain+"/?callback=?",type:"GET",async:!0,jsonpCallback:"jsonCallback",contentType:"application/json",dataType:"jsonp"}).done(function(b){a._init(b)}).fail(function(a){})},_trackLink:function(){var a=this.contentOpts,b;b="//"+(this.trackingDomain+
"/click");b+="?slot="+a.adunit;b+="&pid="+a.publisher;b+="&cid="+a.campaign;b+="&ckid="+this.ckid;b+="&dest="+btoa(a.dest);return b+="&ti="+a.time},_attach:function(a){c("body").append('<div id="bsaHolder"><a class="vn_closeAd" title="Hide this ad!" href="#"></a><div class="bsap"><div class="vn_it one"><div class="vn_it_ad"><a class="vn_link" href="'+a._url+'" target="_blank"><span class="vn_it_i"><img src="'+a._image+'" width="130" height="100" alt="Content Image"></span></a><a class="vn_link" href="'+
a._url+'" target="_blank"><span class="vn_it_d">'+a._title+'</span></a><div style="clear:both"></div></div><span class="vn_it_p"><a href="http://vnative.com/" target="_blank">ads via vNative</a></span></div></div></div>');a=c(".vn_link");var b=this._trackLink();a.on("click",function(a){a.preventDefault();d.location.href=b})}};return new e}();c(document.body).on("click",".vn_closeAd",function(d){d.preventDefault();c(this).parent().remove();return g.showContent=!1});d[d.vNativeNotifyObj||"vnotify"]=
g;g.get()})(window,$);