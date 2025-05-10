import{d as n,r as l,j as a,P as o,K as u}from"./index-DzK2o4QI.js";const m=n.div`
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.14);
  box-shadow: inset 0 2px 0 rga(0 0 0/2%);
  border-color: ${({focus:e})=>e?"rgba(0,0,0,0.54)":""};
  border-radius: 2px;
  display: flex;
  height: 4rem;
  input {
    outline: none;
    border: 0;
    padding: 1.2rem;
    flex-grow: 1;
  }
`;function f(e){const[t,s]=l.useState(!1);return a.jsx(m,{$focus:t,children:a.jsx("input",{...e,onFocus:()=>s(!0),onBlur:()=>s(!1)})})}const g=n.div`
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.14);
  box-shadow: inset 0 2px 0 rga(0 0 0/2%);
  border-color: ${({focus:e})=>e?"rgba(0,0,0,0.54)":""};
  border-radius: 2px;
  display: flex;
  height: 4rem;
  input {
    outline: none;
    border: 0;
    padding: 1.2rem;
    flex-grow: 1;
  }
  button {
    padding: 0 1.5rem;
    flex-shrink: 0;
    background: transparent;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 2rem;
    }
  }
`;function v({...e}){const[t,s]=l.useState(!1),[r,i]=l.useState(!1),d=()=>{i(c=>!c)};return a.jsxs(g,{focus:t,children:[a.jsx("input",{...e,type:r?"text":"password",onFocus:()=>s(!0),onBlur:()=>s(!1)}),a.jsx("button",{type:"button",onClick:()=>d(),tabIndex:"-1",children:r?a.jsx("svg",{fill:"none",viewBox:"0 0 20 12",className:"t5jqkM",children:a.jsx("path",{stroke:"none",fill:"#000",fillOpacity:".54",fillRule:"evenodd",d:"M19.975 5.823V5.81 5.8l-.002-.008v-.011a.078.078 0 01-.002-.011v-.002a.791.791 0 00-.208-.43 13.829 13.829 0 00-1.595-1.64c-1.013-.918-2.123-1.736-3.312-2.368-.89-.474-1.832-.867-2.811-1.093l-.057-.014a2.405 2.405 0 01-.086-.02L11.884.2l-.018-.003A9.049 9.049 0 0010.089 0H9.89a9.094 9.094 0 00-1.78.197L8.094.2l-.016.003-.021.005a1.844 1.844 0 01-.075.017l-.054.012c-.976.226-1.92.619-2.806 1.09-1.189.635-2.3 1.45-3.31 2.371a13.828 13.828 0 00-1.595 1.64.792.792 0 00-.208.43v.002c-.002.007-.002.015-.002.022l-.002.01V5.824l-.002.014a.109.109 0 000 .013L0 5.871a.206.206 0 00.001.055c0 .01 0 .018.002.027 0 .005 0 .009.003.013l.001.011v.007l.002.01.001.013v.002a.8.8 0 00.208.429c.054.067.11.132.165.197a13.9 13.9 0 001.31 1.331c1.043.966 2.194 1.822 3.428 2.48.974.52 2.013.942 3.09 1.154a.947.947 0 01.08.016h.003a8.864 8.864 0 001.596.16h.2a8.836 8.836 0 001.585-.158l.006-.001a.015.015 0 01.005-.001h.005l.076-.016c1.079-.212 2.118-.632 3.095-1.153 1.235-.66 2.386-1.515 3.43-2.48a14.133 14.133 0 001.474-1.531.792.792 0 00.208-.43v-.002c.003-.006.003-.015.003-.022v-.01l.002-.008c0-.004 0-.009.002-.013l.001-.012.001-.015.001-.019.002-.019a.07.07 0 01-.01-.036c0-.009 0-.018-.002-.027zm-6.362.888a3.823 3.823 0 01-1.436 2.12l-.01-.006a3.683 3.683 0 01-2.178.721 3.67 3.67 0 01-2.177-.721l-.009.006a3.823 3.823 0 01-1.437-2.12l.014-.01a3.881 3.881 0 01-.127-.974c0-2.105 1.673-3.814 3.738-3.816 2.065.002 3.739 1.711 3.739 3.816 0 .338-.047.662-.128.975l.011.009zM8.145 5.678a1.84 1.84 0 113.679 0 1.84 1.84 0 01-3.679 0z",clipRule:"evenodd"})}):a.jsx("svg",{fill:"none",viewBox:"0 0 20 10",className:"_2nnXgl",children:a.jsx("path",{stroke:"none",fill:"#000",fillOpacity:".54",d:"M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"})})})]})}const h=n.div`
  color: #ff424f;
  font-size: 1.2rem;
  padding-top: 0.5rem;
`;function p({errors:e,name:t}){const s=e[t];return a.jsx(h,{children:s&&s.message})}p.propTypes={errors:o.object,name:o.string};const b={name:{maxLength:{value:160,message:"Tên có độ dài tối đa là 160 ký tự"}},phone:{maxLength:{value:20,message:"Số điện thoại có độ dài tối đa là 20 ký tự"}},address:{maxLength:{value:160,message:"Địa chỉ có độ dài tối đa là 160 ký tự"}},email:{required:{value:!0,message:"Email là bắt buộc nhập"},minLength:{value:5,message:"Email có độ dài từ 5 - 160 ký tự"},maxLength:{value:160,message:"Email có độ dài từ 5 - 160 ký tự"},validate:{email:e=>u(e)||"Email không dúng định dạng"}},password:{required:{value:!0,message:"Mật khẩu là bắt buộc nhập"},minLength:{value:6,message:"Mật khẩu có độ dài từ 6 - 160 ký tự"},maxLength:{value:160,message:"Mật khẩu có độ dài từ 6 - 160 ký tự"}},confirmPassword:{required:{value:!0,message:"Nhập lại mật khẩu là bắt buộc"},minLength:{value:6,message:"Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự"},maxLength:{value:160,message:"Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự"}}};export{p as E,f as I,v as a,b as r};
