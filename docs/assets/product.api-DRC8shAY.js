import{d as i,j as o,P as l,h as r}from"./index-C6_8q1gc.js";const d=i.div`
  display: flex;
`,c=i.div`
  position: relative;
  margin-right: 0px;
  svg {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
    position: relative;
    display: inline-block;
  }
  > svg {
    color: #d5d5d5;
    display: block;
  }
`,p=i.div`
  overflow: hidden;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  svg {
    color: #ffce3d;
    fill: #ffce3d;
    display: block;
    position: absolute;
    left: 0;
  }
`;function g({rating:e=4.5}){const a=s=>{const t=s+1;return t<=e?"100%":0<t-e&&t-e<1?`${(1-(t-e))*100}%`:0};return o.jsx(d,{children:Array(5).fill(0).map((s,t)=>o.jsxs(c,{children:[o.jsx(p,{style:{width:a(t)},children:o.jsx("svg",{enableBackground:"new 0 0 15 15",viewBox:"0 0 15 15",x:0,y:0,className:"shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid",children:o.jsx("polygon",{points:"7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10})})}),o.jsx("svg",{enableBackground:"new 0 0 15 15",viewBox:"0 0 15 15",x:0,y:0,className:"shopee-svg-icon shopee-rating-stars__gold-star icon-rating-solid",children:o.jsx("polygon",{points:"7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10})})]},t))})}g.propTypes={rating:l.number};const n="products",h={getProducts(e){return r.get(n,e)},getProductDetail(e){return r.get(`${n}/${e}`)}};export{g as P,c as R,p as a,h as p};
