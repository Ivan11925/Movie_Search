import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{d as t,n,r,u as i}from"./index-D5m5T8vZ.js";import{a}from"./moviedb-BHgL2uvn.js";import{t as o}from"./MovieList-CI2Rl0qm.js";var s=e(t(),1),c=n.div`
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
`,l=n.input`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  border: 2px solid #000;
  border-radius: 15px;
  box-shadow: 0px 5px 20px 0px #0000007f;
  background-color: transparent;

  @media (prefers-color-scheme: dark) {
    border-color: #fff;
    color: #fff;
    box-shadow: none;
  }
`,u=r(),d=()=>{let[e,t]=(0,s.useState)([]),[n,r]=i(``),d=n.get(`query`),[f,p]=(0,s.useState)(d??``),[m,h]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{if(!d){t([]),h(!1);return}h(!0);let e=setTimeout(async()=>{let e=await a(d,1);t(e.results),h(!1)},300);return()=>clearTimeout(e)},[d]),(0,u.jsxs)(c,{children:[(0,u.jsx)(l,{type:`text`,placeholder:`Enter your search query`,value:f,onChange:e=>{let{value:t}=e.target;p(t),r(t?{query:t.trim()}:{},{replace:!0})},autoFocus:!0}),(0,u.jsx)(`h2`,{children:d?`Search results for `+d:`Search movies`}),!!e&&!m&&(0,u.jsx)(o,{movies:e}),m&&(0,u.jsx)(`p`,{children:`Loading...`})]})};export{d as default};