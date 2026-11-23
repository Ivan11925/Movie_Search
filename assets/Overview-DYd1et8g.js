import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{c as t,d as n,n as r,r as i}from"./index-D5m5T8vZ.js";var a=r.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 50px;
`,o=r.h3`
  font-size: 24px;
`,s=r.p`
  font-size: 18px;
  margin-top: 20px;
  text-wrap: wrap;
`,c=r.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 15px;
  border-radius: 15px;
  background-color: #dedede;

  @media (prefers-color-scheme: dark) {
    background-color: #454545;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`,l=e(n(),1),u=i(),d=(0,l.memo)(()=>{let e=t();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{children:`Describtion`}),(0,u.jsxs)(a,{children:[(0,u.jsx)(s,{children:e.overview}),(0,u.jsxs)(c,{children:[!!e.status&&(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h3`,{children:`Status`}),(0,u.jsx)(`p`,{children:e.status})]}),!!e.release_date&&(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h3`,{children:`Release Date`}),(0,u.jsx)(`p`,{children:new Date(e.release_date).toDateString()})]}),!!e.budget&&(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h3`,{children:`Budget`}),(0,u.jsxs)(`p`,{children:[`$`,e.budget]})]}),!!e.revenue&&(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h3`,{children:`Revenue`}),(0,u.jsxs)(`p`,{children:[`$`,e.revenue]})]}),!!e.genres&&(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h3`,{children:`Genres`}),(0,u.jsx)(`p`,{children:e.genres.map(e=>e.name).join(`, `)})]}),!!e.homepage&&(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h3`,{children:`Website`}),(0,u.jsx)(`a`,{href:e.homepage,target:`_blank`,children:e.homepage})]})]})]})]})});export{d as default};