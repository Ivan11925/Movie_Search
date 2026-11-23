import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{a as t,d as n,l as r,n as i,o as a,r as o,t as s}from"./index-D5m5T8vZ.js";import{n as c}from"./moviedb-BHgL2uvn.js";var l=e(n(),1),u=i.div`
  padding-top: 50px;

  @media screen and (min-width: 480px) {
    padding: 0;
  }
`,d=i.div`
  width: 100vw;
  background-color: black;
`,f=i.img`
  display: block;
  width: 100vw;
  max-height: 700px;
  object-fit: cover;
`,p=i.div`
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 30px;
`,m=i.h2`
  position: absolute;
  bottom: calc(100% + 20px);
  max-width: 60%;
  text-align: bottom;
  font-size: 32px;
  color: white;

  @media screen and (min-width: 480px) {
    max-width: 70%;
    font-size: 48px;
  }

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`,h=i.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 10px 0;
`,g=i(t)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  color: #006aff;

  &.active {
    color: #ff00ff;
  }
`;function _(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5`},child:[]}]})(e)}function v(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z`},child:[]}]})(e)}function y(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10z`},child:[]}]})(e)}var b=o(),x=()=>{let{movieId:e}=r(),[t,n]=(0,l.useState)({}),[i,o]=(0,l.useState)(!1),[s,x]=(0,l.useState)(null);if((0,l.useEffect)(()=>{o(!0),c(e).then(n).catch(e=>x(e)).finally(()=>o(!1))},[e]),i)return(0,b.jsx)(`p`,{children:`Loading...`});if(s)return(0,b.jsx)(`p`,{children:`Error!`});if(!t)return null;let{backdrop_path:S,name:C,title:w}=t;return(0,b.jsxs)(u,{children:[(0,b.jsx)(d,{children:(0,b.jsx)(f,{src:`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${S}`,alt:``})}),(0,b.jsxs)(p,{children:[(0,b.jsx)(m,{children:w||C}),(0,b.jsxs)(h,{children:[(0,b.jsxs)(g,{to:`.`,end:!0,children:[(0,b.jsx)(v,{}),` Overview`]}),(0,b.jsxs)(g,{to:`./cast`,children:[(0,b.jsx)(_,{}),` Cast`]}),(0,b.jsxs)(g,{to:`./reviews`,children:[(0,b.jsx)(y,{}),` Reviews`]})]}),(0,b.jsx)(a,{context:t})]})]})};export{x as default};