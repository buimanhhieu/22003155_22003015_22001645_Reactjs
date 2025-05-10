import{d as l,j as e,P as c}from"./index-CUTTF5Og.js";import{B as m}from"./BaseInputNumber-DUhs_eMo.js";const v=l.div`
  display: flex;
  align-items: center;
`,x=l.button`
  outline: none;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  background: transparent;
  width: 32px;
  height: 32px;
  svg {
    width: 10px;
    height: 10px;
  }
  &[disabled] {
    border-color: rgba(0, 0, 0, 0.09);
    color: #ccc;
    svg {
      fill: #ccc;
    }
  }
`,y=l(m)`
  width: 50px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-left: none;
  border-right: none;
  cursor: text;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding: 1px 2px;
  &[disabled] {
    border-color: rgba(0, 0, 0, 0.09);
    color: #ccc;
  }
`;function j({onIncrease:p,onDecrease:u,onInput:d,onBlur:a,disabled:n,onChange:o,max:s,value:i}){const g=r=>{let t=Number(r);t>s?t=s:t<1&&(t=1),o&&o(t),d&&d(t)},b=()=>{let r=i+1;r>s&&(r=s),o&&o(r),p&&p(r)},h=()=>{let r=i-1;r<1&&(r=1),o&&o(r),u&&u(r)},f=r=>{a&&a(Number(r))};return e.jsxs(v,{children:[e.jsx(x,{onClick:()=>{!n&&h()},disabled:n,children:e.jsx("svg",{enableBackground:"new 0 0 10 10",viewBox:"0 0 10 10",x:0,y:0,className:"shopee-svg-icon ",children:e.jsx("polygon",{points:"4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"})})}),e.jsx(y,{value:i,onChange:g,onBlur:f,disabled:n}),e.jsx(x,{onClick:()=>{!n&&b()},disabled:n,children:e.jsx("svg",{enableBackground:"new 0 0 10 10",viewBox:"0 0 10 10",x:0,y:0,className:"shopee-svg-icon icon-plus-sign",children:e.jsx("polygon",{points:"10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"})})})]})}j.propTypes={onChange:c.func,max:c.number,value:c.number};export{j as P};
