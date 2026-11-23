import{r as e,t}from"./rolldown-runtime-XKyaHtl9.js";import{d as n,i as r,n as i,r as a,s as o}from"./index-D5m5T8vZ.js";var s=t(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),c=t(((e,t)=>{var n=s();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),l=e(t(((e,t)=>{t.exports=c()()}))(),1),u=i.li`
  max-width: 300px;
  height: 600px;
  border-radius: 20px;
`,d=i(r)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`,f=i.img`
  width: 100%;
  border-radius: 20px;
`,p=i.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0;
  color: #3b3b3b;

  @media (prefers-color-scheme: dark) {
    color: #e6e6e6;
  }
`,m=i.p`
  font-size: 12px;
  margin: 10px 0;
  color: #747474;

  @media (prefers-color-scheme: dark) {
    color: #adadad;
  }
`,h=i.p`
  font-size: 14px;
  font-family: 400px;
  color: #4b4b4b;

  @media (prefers-color-scheme: dark) {
    color: #cbcbcb;
  }
`,g=e(n(),1),_=a(),v=(e,t,n)=>{if(e)return e.length<t?e:`${e.substr(0,e.substr(0,t-n.length).lastIndexOf(` `))}${n}`},y=(0,g.memo)(({id:e,title:t,posterPath:n,overview:r,releaseDate:i})=>{let a=o(),s=new Date(i);return(0,_.jsx)(u,{children:(0,_.jsxs)(d,{to:`/movies/${e}`,state:{from:a},children:[(0,_.jsx)(f,{src:`https://image.tmdb.org/t/p/w600_and_h900_face${n}`,alt:`${t}'s Poster`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(p,{children:t}),!!s&&(0,_.jsx)(m,{children:s.toDateString()}),!!r&&(0,_.jsx)(h,{children:v(r,150,`...`)})]})]})})});y.propTypes={id:l.default.number.isRequired,title:l.default.string.isRequired,posterPath:l.default.string.isRequired,overview:l.default.string,releaseDate:l.default.string};var b=i.ul`
  display: flex;
  max-width: 1440px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 50px;
  list-style: none;
`,x=(0,g.memo)(({movies:e})=>(0,_.jsx)(b,{children:e.map(e=>(0,_.jsx)(y,{id:e.id,title:e.title||e.name,overview:e.overview,posterPath:e.poster_path,releaseDate:e.release_date||e.first_air_date},e.id))}));x.propTypes={movies:l.default.array.isRequired};export{x as t};