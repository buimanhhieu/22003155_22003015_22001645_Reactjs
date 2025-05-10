import{r as b,d as r,u as S,j as e,c as N,p as f,q as k,P,L as V,B as re,a as se,N as ne,_ as ie,b as oe,e as ae,g as le,h as ce,f as E,i as O,k as de,l as ge,m as R,H as he}from"./index-DGzCVaFN.js";import{B as me}from"./BaseInputNumber-BhZtdAHK.js";import{u as pe,C as T}from"./index.esm-sseFTSVY.js";import{P as ue,p as xe}from"./product.api-zs1I7g7t.js";function fe({controlled:n,default:s,name:d,state:i="value"}){const{current:a}=b.useRef(n!==void 0),[g,h]=b.useState(s),l=a?n:g,c=b.useCallback(p=>{a||h(p)},[]);return[l,c]}const je=r.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &.active {
    background-color: #ebebeb;
    border-radius: 1rem;
  }
  svg {
    width: 14px;
    margin-right: 4px;
  }
`;function H({filters:n}){const s=S(),d=i=>{const a={...n,rating:i};s(f.home+`?${k.stringify(a)}`)};return e.jsx("div",{children:Array(5).fill(0).map((i,a)=>e.jsxs(je,{onClick:()=>d(5-a),className:N({active:Number(n.rating)===5-a}),children:[Array(5).fill(0).map((g,h)=>h<5-a?e.jsxs("svg",{viewBox:"0 0 9.5 8",className:"shopee-svg-icon rating-stars__star icon-rating-colored",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"ratingStarGradient",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[e.jsx("stop",{offset:0,stopColor:"#ffca11"}),e.jsx("stop",{offset:1,stopColor:"#ffad27"})]}),e.jsx("polygon",{id:"ratingStar",points:"14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"})]}),e.jsx("g",{fill:"url(#ratingStarGradient)",fillRule:"evenodd",stroke:"none",strokeWidth:1,children:e.jsx("g",{transform:"translate(-876 -1270)",children:e.jsx("g",{transform:"translate(155 992)",children:e.jsx("g",{transform:"translate(600 29)",children:e.jsx("g",{transform:"translate(10 239)",children:e.jsx("g",{transform:"translate(101 10)",children:e.jsx("use",{stroke:"#ffa727",strokeWidth:".5",xlinkHref:"#ratingStar"})})})})})})})]},h):e.jsxs("svg",{viewBox:"0 0 30 30",className:"_3c6iA8",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"star__hollow",x1:"50%",x2:"50%",y1:"0%",y2:"99.0177926%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFD211"}),e.jsx("stop",{offset:"100%",stopColor:"#FFAD27"})]})}),e.jsx("path",{fill:"none",fillRule:"evenodd",stroke:"url(#star__hollow)",strokeWidth:2,d:"M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"})]},h)),a!==0&&e.jsx("span",{children:"trở lên"})]},a))})}H.propTypes={filters:P.object.isRequired};const ve=r(V)`
  font-weight: 700;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  svg {
    width: 1.25rem;
    margin-right: 1rem;
    stroke: currentColor;
  }
`,be=r.ul``,Pe=r.li`
  padding: 8px 12px 10px;
  display: flex;
  align-items: center;
  a {
    color: rgba(0, 0, 0, 0.8);
    &.active {
      font-weight: 700;
      color: #ee4d2d;
    }
  }
`,ye=r.div`
  font-weight: 700;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  svg {
    width: 1.25rem;
    margin-right: 1rem;
    stroke: currentColor;
  }
`,M=r.div`
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`,$=r.div`
  margin-bottom: 1rem;
`,we=r.div`
  margin: 1rem auto 2rem;
`,ke=r.div`
  display: flex;
  align-items: center;
`,A=r(me)`
  width: 8rem;
  padding: 1px 5px 2px;
  height: 3rem;
  border-radius: 1px;
  border: 1px solid rgba(0, 0, 0, 0.26);
`,Ce=r.div`
  flex: 1;
  height: 1px;
  background: #bdbdbd;
  margin: 0 1rem;
`,Be=r.div`
  padding: 1rem 0;
  text-align: center;
  color: #ff424f;
  font-size: 1.2rem;
`,q=r(re)`
  margin: 2rem 0 0;
  text-transform: uppercase;
  width: 100%;
`,_e=r(q)``;function W({categories:n,filters:s}){const d=S();se();const{control:i,handleSubmit:a,getValues:g,formState:{errors:h},clearErrors:l,reset:c,setValue:p}=pe({defaultValues:{minPrice:s.minPrice||"",maxPrice:s.maxPrice||""},reValidateMode:"onSubmit"});b.useEffect(()=>{p("minPrice",s.minPrice||""),p("maxPrice",s.maxPrice||"")},[p,s]);const t=()=>{const m=g("minPrice"),o=g("maxPrice"),y="Vui lòng điền khoảng giá phù hợp";return m!==""&&o!==""?Number(o)>=Number(m)||y:m!==""||o!==""||y},x=m=>{const{minPrice:o,maxPrice:y}=m;if(o!==""||y!==""){let v={...s};o!==""?v={...v,minPrice:o}:delete v.minPrice,y!==""?v={...v,maxPrice:y}:delete v.maxPrice,d(f.home+`?${k.stringify(v)}`)}},j=()=>{c(),d({pathname:f.home})};return e.jsxs("div",{children:[e.jsxs(ve,{to:f.home,children:[e.jsx("svg",{viewBox:"0 0 12 10",className:"shopee-svg-icon shopee-category-list__header-icon icon-all-cate",children:e.jsx("g",{fillRule:"evenodd",stroke:"none",strokeWidth:1,children:e.jsx("g",{transform:"translate(-373 -208)",children:e.jsx("g",{transform:"translate(155 191)",children:e.jsxs("g",{transform:"translate(218 17)",children:[e.jsx("path",{d:"m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"}),e.jsx("path",{d:"m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"}),e.jsx("path",{d:"m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"})]})})})})}),"Tất cả danh mục"]}),e.jsx(be,{children:n.map(m=>e.jsx(Pe,{children:e.jsx(ne,{to:f.home+`?category=${m._id}`,className:({isActive:o})=>o?"active":"",children:m.name})},m._id))}),e.jsxs(ye,{children:[e.jsx("svg",{enableBackground:"new 0 0 15 15",viewBox:"0 0 15 15",x:0,y:0,className:"shopee-svg-icon ",children:e.jsx("g",{children:e.jsx("polyline",{fill:"none",points:"5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10})})}),"Bộ lọc tìm kiếm"]}),e.jsxs(M,{children:[e.jsx($,{children:"Khoảng giá"}),e.jsxs(we,{children:[e.jsxs(ke,{children:[e.jsx(T,{name:"minPrice",control:i,rules:{validate:{validPrice:t}},render:({field:m})=>e.jsx(A,{placeholder:"Từ",onChange:o=>{l(),m.onChange(o)},value:g("minPrice")})}),e.jsx(Ce,{}),e.jsx(T,{name:"maxPrice",control:i,rules:{validate:{validPrice:t}},render:({field:m})=>e.jsx(A,{placeholder:"Đến",onChange:o=>{l(),m.onChange(o)},value:g("maxPrice")})})]}),Object.values(h).length!==0&&e.jsx(Be,{children:"Vui lòng điền khoảng giá phù hợp"}),e.jsx(q,{onClick:a(x),children:"Áp dụng"})]})]}),e.jsxs(M,{children:[e.jsx($,{children:"Đánh giá"}),e.jsx(H,{filters:s})]}),e.jsx(_e,{onClick:j,children:"Xoá tất cả"})]})}W.propTypes={categories:P.array.isRequired,filters:P.object.isRequired};const Se=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 4rem;
`,D=r.button`
  color: rgba(0, 0, 0, 0, 4);
  min-width: 4rem;
  height: 3rem;
  margin: 0 1.5rem;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  border-radius: 2px;
`,F=r(D)`
  svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: currentColor;
  }
`,G=r(D)`
  &.active {
    color: #fff;
    background: #ee4d2d;
    transition: background 0.2s ease;
    &:hover {
      background: #f05d40;
    }
  }
`,Ne=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function ze(n={}){const{boundaryCount:s=1,componentName:d="usePagination",count:i=1,defaultPage:a=1,disabled:g=!1,hideNextButton:h=!1,hidePrevButton:l=!1,onChange:c,page:p,showFirstButton:t=!1,showLastButton:x=!1,siblingCount:j=1}=n,m=ie(n,Ne),[o,y]=fe({controlled:p,default:a,name:d,state:"page"}),v=(u,w)=>{p||y(w),c&&c(u,w)},C=(u,w)=>{const ee=w-u+1;return Array.from({length:ee},(it,te)=>u+te)},Y=C(1,Math.min(s,i)),B=C(Math.max(i-s+1,s+1),i),z=Math.max(Math.min(o-j,i-s-j*2-1),s+2),L=Math.min(Math.max(o+j,s+j*2+2),B.length>0?B[0]-2:i-1),J=[...t?["first"]:[],...l?[]:["previous"],...Y,...z>s+2?["start-ellipsis"]:s+1<i-s?[s+1]:[],...C(z,L),...L<i-s-1?["end-ellipsis"]:i-s>s?[i-s]:[],...B,...h?[]:["next"],...x?["last"]:[]],I=u=>{switch(u){case"first":return 1;case"previous":return o-1;case"next":return o+1;case"last":return i;default:return null}},Z=J.map(u=>typeof u=="number"?{onClick:w=>{v(w,u)},type:"page",page:u,selected:u===o,disabled:g,"aria-current":u===o?"true":void 0}:{onClick:w=>{v(w,I(u))},type:u,page:I(u),selected:!1,disabled:g||u.indexOf("ellipsis")===-1&&(u==="next"||u==="last"?o>=i:o<=1)});return oe({items:Z},m)}function K({pagination:n,filters:s}){const d=ae(),{items:i}=ze({count:n.page_size||0,page:n.page||1}),a=()=>{if(n.page!==1){const l={...s,page:n.page-1};d.push(f.home+`?${k.stringify(l)}`)}},g=()=>{if(n.page!==n.page_size){const l={...s,page:n.page+1};d.push(f.home+`?${k.stringify(l)}`)}},h=l=>{const c={...s,page:l};d.push(f.home+`?${k.stringify(c)}`)};return e.jsx("div",{children:e.jsx(Se,{children:i.map(({page:l,type:c,selected:p},t)=>{let x=null;return c==="start-ellipsis"||c==="end-ellipsis"?x=e.jsx(G,{disabled:!0,children:"..."},t):c==="previous"?x=e.jsx(F,{disabled:n.page===1,onClick:a,children:e.jsx("svg",{enableBackground:"new 0 0 11 11",viewBox:"0 0 11 11",x:0,y:0,className:"shopee-svg-icon icon-arrow-left",children:e.jsx("g",{children:e.jsx("path",{d:"m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z"})})})},t):c==="next"?x=e.jsx(F,{disabled:n.page===n.page_size,onClick:g,children:e.jsx("svg",{enableBackground:"new 0 0 11 11",viewBox:"0 0 11 11",x:0,y:0,className:"shopee-svg-icon icon-arrow-right",children:e.jsx("path",{d:"m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"})})},t):c==="page"&&(x=e.jsx(G,{className:N({active:p}),onClick:()=>h(l),children:l},t)),x})})})}K.propTypes={pagination:P.object,filters:P.object};const Le=r.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding: 0 5px;
  margin: 5px 0;
`,Ie=r.div`
  color: rgba(0, 0, 0, 0.8);
  background: #fff;
  box-shadow: 0 0.1rem 0.25rem 0 rgb(0 0 0 /10%);
  border-radius: 0.25rem;
  transition: all 0.1s ease;
  &:hover {
    box-shadow: 0 0.1rem 2rem 0 rgb(0 0 0 /5%);
    transform: translateY(-0.0625rem);
  }
`,Re=r.div`
  position: relative;
  padding-top: 100%;
  width: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    object-fit: cover;
    object-position: center;
    vertical-align: middle;
  }
`,Te=r.div`
  padding: 0.5rem;
`,Me=r.div`
  display: inline-block;
  display: -webkit-box;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-bottom: 0.5rem;
`,$e=r.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 0.5rem;
  margin-bottom: 1rem;
`,Ae=r.div`
  flex-shrink: 0;
  max-width: 50%;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
  margin-right: 5px;
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Fe=r.div`
  flex-grow: 1;
  color: #ee4d2d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    &:first-child {
      font-size: 1.2rem;
      color: #ee4d2d;
    }
    &:last-child {
      font-size: 1.6rem;
      color: #ee4d2d;
    }
  }
`,Ge=r.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,Ve=r.div`
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 0.5rem;
  font-size: 1.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  span:first-child {
    margin-right: 3px;
  }
`;function U({product:n}){var s,d;return e.jsx(Le,{children:e.jsx(V,{to:f.product+`/${le(n)}`,children:e.jsxs(Ie,{children:[e.jsx(Re,{children:e.jsx("img",{src:n.image,alt:n.name})}),e.jsxs(Te,{children:[e.jsx(Me,{children:n.name}),e.jsxs($e,{children:[e.jsxs(Ae,{children:["đ",(s=n.price_before_discount)==null?void 0:s.toLocaleString()]}),e.jsxs(Fe,{children:["đ",(d=n.price)==null?void 0:d.toLocaleString()]})]}),e.jsxs(Ge,{children:[e.jsx(ue,{rating:n.rating}),e.jsxs(Ve,{children:[e.jsx("span",{children:n.sold<1e3?n.sold:`${n.sold/1e3}k`}),e.jsx("span",{children:"Đã bán"})]})]})]})]})})})}U.propTypes={product:P.object};const Ee=r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: rgba(0, 0, 0, 0.03);
  padding: 1.25rem 1.5rem;
  border-radius: 2px;
  margin-bottom: 1.5rem;
`,Oe=r.span``,He=r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
`,_=r.div`
  flex: 0 0 auto;
  cursor: pointer;
  background: #fff;
  margin-left: 1rem;
  height: 3.25rem;
  padding: 0 1.5rem;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  &.active {
    color: #fff;
    background: #ee4d2d;
  }
`,qe=r.select`
  flex: 0 0 auto;
  margin-left: 1rem;
  height: 3.25rem;
  border: 0;
  padding: 0 1.5rem;
  &.active {
    color: #ee4d2d;
  }
`,We=r.div`
  display: flex;
  align-items: center;
`,De=r.div`
  display: flex;
`,Ke=r.div`
  color: #ee4d2d;
`,Ue=r.div``,Q=r.button`
  box-shadow: 0 1px 1px 0 rgba(0 0 0/5%);
  width: 3.6rem;
  height: 3.4rem;
  border-radius: 2px;
  border: 0;
  background: ${({disabled:n})=>n?"#f9f9f9":"#fff"};
  svg {
    width: 1rem;
    height: 1rem;
    fill: ${({disabled:n})=>n?"#ccc":"#555"};
    margin-top: 0.125rem;
  }
`,Qe=r(Q)`
  margin-left: 2rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid #f2f2f2;
`,Xe=r(Q)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`,Ye=r.div`
  display: flex;
  flex-wrap: wrap;
`;function X({products:n,filters:s}){const{products:d,pagination:i}=n,a=S(),g=(t,x)=>{const j={...s,sortBy:t};x?j.order=x:delete j.order,a(f.home+`?${k.stringify(j)}`)},h=t=>N({active:t===s.sortBy}),l=()=>{let t=`${s.sortBy}:${s.order}`;return t!=="price:asc"&&t!=="price:desc"&&(t=""),t},c=()=>{if(i.page!==1){const t={...s,page:i.page-1};a(f.home+`?${k.stringify(t)}`)}},p=()=>{if(i.page!==i.page_size){const t={...s,page:i.page+1};a(f.home+`?${k.stringify(t)}`)}};return e.jsxs("div",{children:[e.jsxs(Ee,{children:[e.jsx(Oe,{children:"Sắp xếp theo"}),e.jsxs(He,{children:[e.jsx(_,{onClick:()=>g("view"),className:h("view"),children:"Phổ biến"}),e.jsx(_,{onClick:()=>g("createdAt"),className:h("createdAt"),children:"Mới nhất"}),e.jsx(_,{onClick:()=>g("sold"),className:h("sold"),children:"Bán chạy"}),e.jsxs(qe,{onChange:t=>g(...t.target.value.split(":")),className:h("price"),value:l(),children:[e.jsx("option",{disabled:!0,value:"",children:"Giá"}),e.jsx("option",{value:"price:asc",children:"Giá: Thấp đến Cao"}),e.jsx("option",{value:"price:desc",children:"Giá: Cao đến Thấp"})]})]}),e.jsxs(We,{children:[e.jsxs(De,{children:[e.jsx(Ke,{children:i.page}),"/",e.jsx(Ue,{children:i.page_size})]}),e.jsx(Qe,{onClick:c,disabled:i.page===1}),e.jsx(Xe,{onClick:p,disabled:i.page===i.page_size})]})]}),d&&e.jsx(Ye,{children:d.map(t=>e.jsx(U,{product:t},t._id))}),e.jsx(K,{pagination:i,filters:s})]})}X.propTypes={products:P.shape({products:P.array,pagination:P.object}),filters:P.object};const Je=r.div`
  display: flex;
  flex-wrap: wrap;
`,Ze=r.div`
  flex: 1;
`,et=r.div`
  flex: 0 0 19rem;
  margin-right: 2rem;
`,tt="categories",rt={getCategories(){return ce.get(tt)}},st=E("home/getCategories",O(rt.getCategories)),nt=E("home/getProducts",O(xe.getProducts));function dt(){const[n,s]=b.useState([]),[d,i]=b.useState({products:[],pagination:{}}),[a,g]=b.useState({}),[h,l]=b.useState(null),c=de(),p=ge();return b.useEffect(()=>{console.log("✅ Gọi API lấy danh mục"),c(st()).then(R).then(t=>{s(t.data),console.log("✅ Danh mục:",t.data)}).catch(t=>{console.error("❌ Lỗi danh mục:",t),l("Không thể tải danh mục.")})},[c]),b.useEffect(()=>{console.log("✅ Gọi API lấy sản phẩm");const t={...p,page:p.page||1,limit:p.limit||30,sortBy:p.sortBy||"view"};g(t);const x={page:t.page,limit:t.limit,category:t.category,exclude:t.exclude,rating_filter:t.rating,price_max:t.maxPrice,price_min:t.minPrice,sort_by:t.sortBy,order:t.order,name:t.name};(async()=>{try{const m=await c(nt({params:x})),o=R(m);console.log("✅ Sản phẩm:",o.data),i(o.data),l(null)}catch(m){console.error("❌ Lỗi lấy sản phẩm:",m),l("Không thể tải sản phẩm. Vui lòng thử lại sau.")}})()},[c,p]),console.log("✅ Home component đang được render"),e.jsxs("div",{children:[e.jsx(he,{children:e.jsx("title",{children:"Shopee Việt Nam | Mua và bán trên ứng dụng di động và website"})}),e.jsxs(Je,{className:"container",children:[e.jsx(et,{children:e.jsx(W,{categories:n,filters:a})}),e.jsx(Ze,{children:h?e.jsx("h2",{style:{color:"red",padding:20},children:h}):d.products.length===0?e.jsx("h2",{style:{padding:20},children:"Không có sản phẩm nào"}):e.jsx(X,{products:d,filters:a})})]})]})}export{dt as default};
