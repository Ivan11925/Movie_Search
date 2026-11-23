import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{d as t,l as n,n as r,r as i}from"./index-D5m5T8vZ.js";import{r as a}from"./moviedb-BHgL2uvn.js";import{t as o}from"./image_placeholder-CtbIfqkD.js";var s=e(t(),1),c=r.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`,l=r.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 150px;
  border-radius: 30px;
  border: 2px solid #00000079;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #ffffff30;
  }
`,u=r.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 0 10px;
  margin: 0 0 10px;
  border-bottom: 2px solid #00000079;

  @media screen and (min-width: 480px) {
    border-bottom: none;
    border-right: 2px solid #00000079;
    flex-direction: column;
    padding-right: 10px;
    margin-right: 10px;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #ffffff30;
  }
`,d=r.div`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  background-color: #dbdbdb;
  background-size: ${({$path:e})=>e?`cover`:`100px`};
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({$path:e})=>`url("https://image.tmdb.org/t/p/original${e}"), url("${o}")`};

  @media (prefers-color-scheme: dark) {
    background-color: #616161;
  }
`,f=r.h3`
  font-size: 18px;
`,p=r.p`
  font-size: 14px;
  font-style: italic;
  color: #00000079;

  @media (prefers-color-scheme: dark) {
    color: #ffffff50;
  }
`,m=r.p`
  font-size: 14px;
  font-style: italic;
`,h=r.p`
  font-size: 16px;
`,g=i(),_=(0,s.memo)(()=>{let{movieId:e}=n(),[t,r]=(0,s.useState)([]),[i,o]=(0,s.useState)(!1),[_,v]=(0,s.useState)(null);return(0,s.useEffect)(()=>{o(!0),a(e,1).then(({results:e})=>r(e)).catch(e=>v(e)).finally(()=>o(!1))},[e]),i?(0,g.jsx)(`p`,{children:`Loading...`}):_?(0,g.jsx)(`h2`,{children:`Error`}):!t||!t.length?(0,g.jsx)(`h2`,{children:`No reviews found!`}):(console.log(t),(0,g.jsx)(c,{children:t.map(e=>(0,g.jsxs)(l,{children:[(0,g.jsxs)(u,{children:[(0,g.jsx)(d,{$path:e.author_details.avatar_path}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(f,{children:e.author}),(0,g.jsxs)(p,{children:[`@`,e.author_details.username]})]}),(0,g.jsx)(m,{children:new Date(e.created_at).toDateString()})]}),(0,g.jsx)(h,{children:e.content})]},e.id))}))});export{_ as default};