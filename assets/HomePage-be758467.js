import{u as p,E as A}from"./goToRouter-40345755.js";import{s as w,m as D,a as I,u as L,b as B,r as h,g as i,o as N,c as b,d as v,t as o,e as c,w as u,f as r,h as C,i as l}from"./index-5d612983.js";const e={LIGHT:"light",DARK:"dark",AUTO:"auto"};function T(){return localStorage.getItem("vueuse-color-scheme")}function d(){switch(T()){case e.LIGHT:return I;case e.DARK:return D;case e.AUTO:return w}}function m(t){localStorage.setItem("vueuse-color-scheme",t);const a=L();B(a)}function G(){switch(T()){case e.DARK:m(e.LIGHT);break;case e.LIGHT:m(e.AUTO);break;case e.AUTO:default:m(e.DARK);break}}const H={id:"homePage"},R={__name:"HomePage",setup(t){const a=h(d()),f=()=>{G(),a.value=d()},g=h(i()),_=()=>{C(),g.value=i()},k=p();return(s,P)=>{const n=A;return N(),b("div",H,[v("h1",null,o(s.$t("homePage.title")),1),c(n,{onClick:f,icon:r(a)},{default:u(()=>[l(o(s.$t("homePage.swatchThemeButton")),1)]),_:1},8,["icon"]),c(n,{onClick:r(k)},{default:u(()=>[l(o(s.$t("homePage.notFoundButton")),1)]),_:1},8,["onClick"]),c(n,{onClick:_},{default:u(()=>[l(o(r(g)),1)]),_:1})])}}};export{R as default};
