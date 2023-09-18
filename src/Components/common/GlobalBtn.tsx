import react from "react"
import styled from "styled-components"


interface iButton{
    text:string,
    bgc:string,
    color:string,
    pd:string,
    bd:string,
    br:string
}
const GlobalBtn:React.FC<iButton> = ({text,bgc,color,pd,bd,br}) =>{
   return(
    <div>
       <Button bgc={bgc} color={color} pd={pd} bd={bd} br={br}>{text}</Button> 
    </div>
   )
}

export default GlobalBtn;
const Button = styled.div<{bgc:string, color:string, pd:string, bd:string, br:string}>`
// height:40px;
// width:120px;
color:${({color})=>color};
background-color:${({bgc})=>bgc};
padding:${({pd})=>pd};
border:${({bd})=>bd};
display:flex;
border-radius:${({br})=>br};
justify-content:center;
align-items:center;

`

// import React from 'react'
// import styled from 'styled-components'

// interface iButton{
//   text: string;
//   bcc:string;
//   color: string;
// }

// const Globalbutto:React.FC<iButton> = ({
// text,color,bcc
// }) => {
//   return (
//     <Button bcc={bcc} color={color}>
//       {text}
//     </Button>
//   )
// }

// export default Globalbutto

// const Button = styled.button<{bcc:string;color:string}>`
// background-color:${({bcc})=>bcc};
// width:90px;
// height:40px;
// padding:5px 5px 5px 5px;
// color:${({ color }) => color};
// border-radius: 7px;
// border: 1px solid lightgray;
// margin-right: 20px;

// @media screen and (max-width: 768px) {
//         display: none;
//     }
// `