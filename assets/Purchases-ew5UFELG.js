import{_ as i}from"./back-4JRWkuiK.js";import{u as d,r as l,o as t,c as e,a as r,b as o,w as n,d as s,F as u,e as m,_ as p,f as h,g as k}from"./index-ROs1Czji.js";const f="/sneakers/assets/down-OrbckORw.png",g={class:"container"},v={key:0,class:"purchases"},y=s("img",{src:i,alt:""},null,-1),x=s("h3",{class:"purchases__title"},"Мои покупки",-1),L={key:1,class:"purchased"},b=s("img",{src:f,alt:""},null,-1),w=s("h3",{class:"empty__title"},"У вас нет заказов",-1),C=s("p",{class:"empty__text"},"Вы нищеброд? Оформите хотя бы один заказ.",-1),P=s("button",{class:"empty_btn"},[s("img",{src:h,alt:""}),k("Вернуться назад")],-1),B={class:"mainlist__cards-grid"},S={__name:"Purchases",setup(N){const a=d();return(R,V)=>{const _=l("RouterLink");return t(),e("div",g,[r(a).CardLikeProduct.length?(t(),e("div",v,[o(_,{to:"/"},{default:n(()=>[y]),_:1}),x])):(t(),e("div",L,[b,w,C,o(_,{to:"/"},{default:n(()=>[P]),_:1})])),s("div",B,[(t(!0),e(u,null,m(r(a).CardLikeProduct,c=>(t(),e("div",{class:"mainlist__cards",key:c.id},[o(p,{product:c},null,8,["product"])]))),128))])])}}};export{S as default};
