import react,{useState} from "react"
import styled from "styled-components"
import {LiaAngleDownSolid} from "react-icons/lia"
import {LiaAngleUpSolid} from "react-icons/lia"
import { Sign } from "crypto"
import GlobalBtn from "../common/GlobalBtn"
import {FiMenu} from "react-icons/fi"
import {MdClear} from "react-icons/md"


const Header = ()=>{

  const [line, setLine]=useState(true)
  const time =() =>{
    const liner = window.pageYOffset
    if( liner >= 40){
      setLine(false)
    }else{
      setLine(true)
    }
  }

  window.addEventListener("scroll", time)

  const [drop, setDrop]=useState(false)
  const reverse =() =>{
    setDrop(!drop)
  }
  
  const[menu, setMenu]=useState(false)

  const change =() =>{
     setMenu(!menu)
  }

    return(
      <div style={{overflow:"clip"}}>
        <Container>
          <Wrapper>
              <Logo>
                <svg
                  width="51"
                  height="30"
                  viewBox="0 0 76 65"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000"/>
                </svg>
                <span style={{fontSize:"25px", fontWeight:"bold", marginBottom:"5px"}}>Vercel</span>
              </Logo> 
              <Navs>
                <Angle onMouseEnter={reverse} onMouseLeave={reverse}>
                {drop?(
                  <Nav1>
                  Features
                    <LiaAngleUpSolid style={{height:"10px", width:"11px"}}/>
                </Nav1>
                ):(
                  <Nav1>
                  Features
                    <LiaAngleDownSolid style={{height:"10px", width:"11px"}}/>
                </Nav1>
                )}
                </Angle>
                
                <Nav>Docs</Nav>
                <Nav>Templates</Nav>
                <Nav>Integration</Nav>
                <Nav>Customers</Nav>
                <Nav>Enterprise</Nav>
                <Nav>Pricing</Nav>
              </Navs>
              {drop?(<DropDown></DropDown>):(null)}
              <Cls> 
              Contact Us
              <GlobalBtn
                text="Login"
                bgc="white"
                color="black"
                pd="7px 15px 7px 15px"
                bd="1px solid silver"
                br="7px"
              />
              <GlobalBtn
                text="Signin"
                bgc="black"
                color="white"
                pd="7px 17px 7px 17px"
                bd="1px solid silver"
                br="7px"
              />
              </Cls>
              <Icon onClick={change}>
              {menu?
                (<MdClear/>)
                :(<FiMenu/>)}
              </Icon>
              {menu?
              (<Card1>

              </Card1>)
              :(null)}
          </Wrapper>
          {line?
          (<div style={{height:"1px", width:"100%", backgroundColor:"transparent", position:"fixed"}}></div>)
          :(<div style={{height:"1px", width:"100%", backgroundColor:"silver", position:"sticky"}}></div>)
          }
        </Container>
      </div>
    )
}

export default Header;
const Angle = styled.div`
margin-top:15px;
margin-bottom:15px;
margin-left:30px;
`
const DropDown = styled.div`
height:37vh;
width:42vw;
border:1.5px solid silver;
border-radius:10px;
position:absolute;
top:75px;
left:190px;
`
const Card1 = styled.div`
width:100%;
height:60vh;
background-color:green;
position:absolute;
top:80px;
left:0px;
`
const Icon = styled.div`
display: flex;
align-items: center;
color: black;
font-size: 30px;
cursor: pointer;
@media screen and (max-width:768px){
  display:flex;
};
display:none;
@media screen and (max-width:1024px){
  display:flex;
};
display:none;
`
const Nav1 = styled.div`
width:80px;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:1px;
margin-bottom:2px;
margin-left:12px;
padding:7px 8px;
border-radius:19px;
transition:all ease-in-out 350ms;

&:hover{
  background-color:lightgray
}

`
const Nav = styled.div`
margin-top:23px;
`
const Navs = styled.div`
width:700px;
height:85%;
display:flex;
justify-content:space-between;
margin-right:200px;

@media screen and (max-width:768px){
  display:none;
}

@media screen and (max-width:1024px){
  display:none;
}
`
const Logo = styled.div`
 height:20px;
width:100px;
display:flex;
justify-content:flex-start;
align-items:center;
// margin-left:20px
`
const Cls = styled.div`
height:100%;
width:270px;
display:flex;
justify-content:space-between;
align-items:center;
// background-color:green;

@media screen and (max-width:768px){
  display:none;
}

@media screen and (max-width:1024px){
  display:none;
}
`
const Wrapper = styled.div`
width:95%;
height:80px;
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
margin-left:21px
`
const Container = styled.div`
height:80px;
width:100vw;
background-color:white;
display:flex;
flex-direction:column;
justify-content:center;
position:fixed;
top:0px;
`

// import React, {useState} from 'react'
// import styled from "styled-components"
// import Globalbutto from '../common/GlobalBtn'
// import {FiMenu} from "react-icons/fi"

// const Header = () => {

//     const [show, setShow] = useState(false)

//     const Toggle = () => {
//         setShow(!show);
//     }
//   return (
//     <Container>
//           <Wrapper>
//               <Wrap>
//                   <Holder>
//                   <svg
//                 width="76"
//                 height="40"
//                 viewBox="0 0 76 65"
//                 fill="none" xmlns="http://www.w3.org/2000/svg"><path
//                           d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" /></svg>
                  
//                   <h1>Vercel</h1>
//             </Holder>

//               <NavHolder>
//                   <Navs>Features</Navs>
//                   <Navs>Docs</Navs>
//                   <Navs>Templates</Navs>
//                   <Navs>Integrations</Navs>
//                   <Navs>Customers</Navs>
//                   <Navs>Enterprise</Navs>
//                   <Navs>Pricing</Navs>
//               </NavHolder>
//               </Wrap>

//               <ButtonHolder>
//                   <Navs>Contact</Navs>
//                   <Globalbutto
//                       text="Login"
//                       bcc="gray"
//                       color="white" />
//                  <Globalbutto text="Sign iUp" bcc="#fff" color="#000"/>
//               </ButtonHolder>
//               <Icon onClick={Toggle}>
//                 <FiMenu />
//               </Icon>

//               {show ? (
//                 <Card>
//               </Card>
//               ): null}
//         </Wrapper>
//     </Container>
//   )
// }

// export default Header
// const Card = styled.div`
// width: 100%;
// height: 300px;
// background-color: red;
// position: absolute;
// top: 80px;
// right: 0;
// `
// const Icon = styled.div`
// display: flex;
// align-items: center;
// color: #fff;
// font-size: 30px;
// cursor: pointer;

// @media screen and (max-width: 768px) {
//       display: flex;
// }
// display: none;
// `
// const ButtonHolder = styled.div`
//     display: flex;
//     align-items: center;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `
// const Wrap = styled.div`
//     display: flex;
//     align-items: center;
// `
// const Navs = styled.div`
//     color: gray;
//     margin-right: 35px;
//     transition: all ease-in-out 350ms;
//     cursor: pointer;
//     &:hover{
//         color: #fff;
//     }
// `
// const NavHolder = styled.div`
//     display: flex;
//     align-items: center;
//     margin-left: 20px;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `
// const Holder = styled.div`
//     display: flex;
//     align-items: center;
//     h1{
//         color: #fff;
//         margin-right: 15px;
//         font-size: 20px;
//     }
// `
// const Wrapper = styled.div`
//     width: 95%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     position: relative;
// `

// const Container = styled.div`
//     width: 100%;
//     height: 80px;
//     display: flex;
//     background-color: #000;
//     justify-content: center;
// `