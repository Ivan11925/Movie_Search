import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{d as t,l as n,n as r,r as i}from"./index-D5m5T8vZ.js";import{t as a}from"./moviedb-BHgL2uvn.js";import{t as o}from"./image_placeholder-CtbIfqkD.js";var s=e(t(),1),c=r.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`,l=r.li`
  display: flex;
  flex-direction: column;
  width: 138px;
  height: 260px;
  border: 2px solid transparent;
  border-radius: 15px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);

  @media (prefers-color-scheme: dark) {
    border-color: #ffffff30;
    box-shadow: none;
  }
`,u=r.div`
  border-radius: 15px;
  max-width: 138px;
  width: 100%;
  height: 175px;
  background-color: #dbdbdb;
  background-size: ${({$path:e})=>e?`cover`:`100px`};
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({$path:e})=>`url("https://media.themoviedb.org/t/p/w138_and_h175_face${e}"), url("${o}")`};
`,d=r.div`
  padding: 10px;
`,f=r.h3`
  font-size: 14px;
`,p=r.p`
  font-size: 12px;
`,m=i(),h=(0,s.memo)(()=>{let{movieId:e}=n(),[t,r]=(0,s.useState)([]),[i,o]=(0,s.useState)(!1),[h,g]=(0,s.useState)(null);return(0,s.useEffect)(()=>{o(!0),a(e).then(({cast:e})=>r(e)).catch(e=>g(e)).finally(()=>o(!1))},[e]),i?(0,m.jsx)(`p`,{children:`Loading...`}):h?(0,m.jsx)(`h2`,{children:`Error`}):t?(0,m.jsx)(c,{children:t.map(e=>(0,m.jsxs)(l,{children:[(0,m.jsx)(u,{$path:e.profile_path}),(0,m.jsxs)(d,{children:[(0,m.jsx)(f,{children:e.name}),(0,m.jsx)(p,{children:e.character})]})]},e.id))}):null});export{h as default};