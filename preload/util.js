module.exports=function(){const e=async e=>{try{const t=`https://www.xuexi.cn/lgdata/${e}.json?_st=${Math.floor(Date.now()/6e4)}`,a=await fetch(t,{credentials:"include"});return await a.json()}catch(e){return[]}},t=(e,t)=>Math.random()*(t-e)+e,a=async()=>{const{webFrame:e}=require("electron");return new Promise(t=>{e.executeJavaScript("window",!0,t)})};return{domContentLoadedThen:async e=>"loading"==document.readyState?new Promise(t=>{document.addEventListener("DOMContentLoaded",()=>t(e()),{once:!0})}):e(),getData:async(e=location.href)=>{const t=e.replace(/\/(\w+)\.html$/,"/data$1.js"),a=await fetch(t,{credentials:"include"}),n=(await a.text()).replace("globalCache = ","").replace(/;$/,"");return JSON.parse(n)},getChannelData:e,getChannelsData:async t=>{return(await Promise.all(t.map(t=>e(t)))).reduce((e,t)=>e.concat(t),[])},getRandomElement:e=>{return e[Math.floor(Math.random()*e.length)]},createArrayOf:(e,t)=>new Array(t).fill(e),arrayShuffle:e=>{e=e.concat();for(let t=1;t<e.length;t++){const a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}return e},getRandomNumberBetween:t,getHostname:(e=location.href)=>{try{return new URL(e).hostname}catch(e){return""}},realMouseClickOn:e=>{const{ipcRenderer:a}=require("electron");let{x:n,y:r,width:o,height:c}=e.getBoundingClientRect();n+=t(2,o-2),r+=t(2,c-2),a.send("realMouseClick",n,r)},sleep:async e=>{await new Promise(t=>{setTimeout(t,1e3*e)})},getRealWindowObject:a,getRealDocumentObject:async()=>{return(await a()).document}}}();