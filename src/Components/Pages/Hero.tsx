import react,{useState, useEffect, useRef} from "react"
import styled from "styled-components"
import pix1 from "../../asset/images-removebg-preview (2).png"
import pix2 from "../../asset/cylinder-removebg-preview.png"
import pix3 from "../../asset/angle_-removebg-preview.png"
import pix4 from "../../asset/adobe-removebg-preview.png"
import pix5 from "../../asset/okta-removebg-preview.png"
import pix6 from "../../asset/under-removebg-preview.png"
import pix7 from "../../asset/ebay-removebg-preview.png"
import pix8 from "../../asset/zapier-removebg-preview.png"
import pix9 from "../../asset/loom-removebg-preview.png"
import pix10 from "../../asset/hashi-removebg-preview.png"
import pix11 from "../../asset/twail-removebg-preview.png"
import pix12 from "../../asset/The-removebg-preview.png"
import pix13 from "../../asset/node-removebg-preview.png"
import pix14 from "../../asset/react-removebg-preview.png"
import pix15 from "../../asset/S-removebg-preview.png"
import pix16 from "../../asset/hill-removebg-preview.png"
import pix17 from "../../asset/Vlogo-removebg-preview.png"
import pix18 from "../../asset/Elogo-removebg-preview (1).png"
import pix19 from "../../asset/Alogo-removebg-preview.png"
import pix20 from "../../asset/Hlogo-removebg-preview.png"
import pix21 from "../../asset/Glogo-removebg-preview.png"
import pix22 from "../../asset/{5B5FF0ED-FDCC-43E6-B342-E35DD5B6925D}.png.jpg"




interface T{
    color:string
}

const Hero = () =>{

  const [set,setSet] = useState(0)

  const incr = () =>{
   if (set < 20){
    setSet(set + 1)    
  }
}
  const dcr = () =>{
   if (set > 0){
    setSet(set - 1)
   }
}

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minute, setMinute] = useState(0)
  const [seconds, setSeconds] = useState(0)

  
    useEffect(()=>{
      const target = new Date("9/13/2023 12:01:05")
      const interval = setInterval(()=>{
        const now = new Date()
        const dif = target.getTime() - now.getTime()

        const d = Math.floor(dif/(1000 * 60 * 60 * 24))
        setDays(d)

        const h = Math.floor((dif % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)))
        setHours(h)
        const m = Math.floor((dif % (1000 * 60 * 60)/(1000 * 60)))
        setMinute(m)

        const s = Math.floor((dif % (1000 * 60)/(1000)))
        setSeconds(s)
      })
    })
  


  const Dev:string[] = [
    "background-image:linear-gradient(to right, #007cf0, #00dfd8 );background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent;",
    "black",
    "black",
  ]

  const Prev:string[] = [
    "black",
    "background-image:linear-gradient(to right, #7928ca, #ff0080);background-clip:text;  -webkit-background-clip:text; -webkit-text-fill-color:transparent;",
    "black",
  ]

  const Shi:string[] = [
    "black",
    "black",
    "background-image:linear-gradient(to right, #ff4d4d, #f9cb28);background-clip:text;  -webkit-background-clip:text; -webkit-text-fill-color:transparent;",
  ]

  const Dep:string[] = [
    "background:linear-gradient(to right, #007cf0, #00dfd8);-webkit-background-clip: background;",
    "background:linear-gradient(to right, #7928ca, #ff0080);-webkit-background-clip: background;",
    "background:linear-gradient(to right, #ff4d4d, #f9cb28);-webkit-background-clip: background;",    
  ]
   
  let Dev_ref:any = useRef()
  let Prev_ref:any = useRef()
  let Shi_ref:any = useRef()
  let Dep_ref:any = useRef()

   const[count, setCount] = useState(0)

   useEffect(()=>{
    Dev_ref.current.style = Dev[count% Dev.length]
    Prev_ref.current.style = Prev[count% Prev.length]
    Shi_ref.current.style = Shi[count% Shi.length]
    Dep_ref.current.style = Dep[count% Dep.length]
   })


   useEffect(()=>{
    setInterval(()=>{
      setCount((el:number)=> el + 1*2)
    }, 3000)
   },[])
    
    return(
        <div>
          <Container>
            <Holder>
              <DevHold>
                <Devs ref={Dev_ref}>Develop.</Devs>
                <Devs ref={Prev_ref}>Preview.</Devs>
                <Devs ref={Shi_ref}>Ship.</Devs>
              </DevHold>
              <Span>Vercel's frontend cloud gives developers the frameworks, workflows,<br/> and infrastructure to build a faster, more personalized Web.</Span>
              <Botton>
                <Botton1>
                <svg style={{marginLeft:"15px"}}
                  width="25"
                  height="15"
                  viewBox="0 0 76 65"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white"/>
                </svg>
                <span style={{marginRight:"17px"}}>Start Deploying</span>
                </Botton1>
                <Botton2 ref = {Dep_ref}>Get a Demo</Botton2>
              </Botton>
            </Holder>
          </Container>
          <Dtlogos>
            <p style={{fontWeight:"bold", fontSize:"14px"}}>TRUSTED BY THE BEST FRONTEND TEAMS</p>
            <Logos>
            <Row1>
              <img src={pix4} style={{height:"100px", width:"160px"}}/>              
              <img src={pix5} style={{height:"30px", width:"100px"}}/>
              <img src={pix6} style={{height:"110px", width:"140px"}}/>
              <img src={pix7} style={{height:"80px", width:"90px"}}/>
              <img src={pix8} style={{height:"50px", width:"120px"}}/>              
            </Row1>
            <Row2>
              <img src={pix9} style={{height:"35px", width:"100px", marginLeft:"15px"}}/>              
              <img src={pix10} style={{height:"70px", width:"150px"}}/>
              <img src={pix11} style={{height:"130px", width:"190px"}}/>
              <img src={pix12} style={{height:"45px", width:"205px", marginRight:"9px"}}/>
            </Row2>
            </Logos>
          </Dtlogos>
          <Exp>
            <p style={{fontWeight:"bold", fontSize:"14px"}}>EXPLORE THE VERTICAL WAY</p>
            <Line/>
            <Circle>1</Circle>
            <H1>DEVELOP</H1>
          </Exp>
          <Build>
            <span style={{fontSize:"60px", fontWeight:"bold"}}>Build when inspiration strikes</span>
            <span style={{fontSize:"20px"}}>Free developers from time-consuming, unnecessary processes<br/>that slow your work, so you and your team can focus on creating.</span>   
          </Build>
          <Hero1>
            <Left>
              <img src={pix22} style={{}}/>
            </Left>
            <Right>
              <ImgT>
              <img src={pix1} style={{height:"55px", width:"55px"}}/><br/>
                <span style={{fontSize:"23px", fontWeight:"bold"}}>The complete toolkit for the Web</span><br/>
                <span style={{fontSize:"17px", }}>Everything you need to build your site exactly how you imagine,<br/> from automatic API handling to built-in image and performance<br/> optimizations.</span>           
              </ImgT>
              <ImgT>
              <img src={pix2} style={{height:"63px", width:"63px"}}/><br/>
                <span style={{fontSize:"23px", fontWeight:"bold"}}>Easy integration with your backend</span><br/>
                <span style={{fontSize:"17px", }}>Connect your pages to any data source, headless CMS, or API<br/> and make it work in everyone’s dev environment.</span>
              </ImgT>
              <ImgT>
              <img src={pix3} style={{height:"40px", width:"40px", margin:"5px"}}/><br/>
                <span style={{fontSize:"23px", fontWeight:"bold"}}>End-to-end testing on Localhost</span><br/>
                <span style={{fontSize:"17px", }}>From caching to Serverless Functions, all our cloud primitives<br/> work perfectly on localhost.</span>
              </ImgT>
            </Right>
          </Hero1>
          <AllLogos>
            <p style={{fontWeight:"bold", fontSize:"14px"}}>WORKS WITH 30+ FRAMEWORKS</p>
            <Dlogos>
              <img src={pix13} style={{height:"38px", width:"38px"}}/>
              <img src={pix14} style={{height:"70px", width:"70px"}}/>
              <img src={pix15} style={{height:"38px", width:"38px"}}/>
              <img src={pix16} style={{height:"38px", width:"38px"}}/>
              <img src={pix17} style={{height:"38px", width:"38px"}}/>
              <img src={pix18} style={{height:"38px", width:"38px"}}/>
              <img src={pix19} style={{height:"38px", width:"38px"}}/>
              <img src={pix20} style={{height:"38px", width:"38px"}}/>
              <img src={pix21} style={{height:"38px", width:"38px"}}/>              
            </Dlogos>
            <Line2/>
            <Circle2>2</Circle2>
            <H2>PREVIEW</H2>
          </AllLogos>
          <Iterate>
            <span style={{fontSize:"60px", fontWeight:"bold"}}>Iterate with your team</span>
            <span style={{fontSize:"20px"}}>Make frontend development a collaborative experience with<br/> automatic Preview Deployments for every code change, by<br/> seamlessly integrating with <span style={{color:"#ff0080"}}>GitHub</span>, <span style={{color:"#ff0080"}}>GitLab</span>, and <span style={{color:"#ff0080"}}>Bitbucket</span>.</span>   
          </Iterate>
          <Cont>
            <Time>
               <Day>Days</Day>
               <DayC>{days}:</DayC>
            </Time>
            <Time>
               <Day>Hrs</Day>
               <DayC>{hours}:</DayC>
            </Time>
            <Time>
               <Day>Mins</Day>
               <DayC>{minute}:</DayC>
            </Time>
            <Time>
               <Day>Secs</Day>
               <DayC>{seconds}</DayC>
            </Time>
          </Cont>
          <Cunt>
            <Div1 onClick={dcr}>-</Div1>
            <Div2>{set}</Div2>
            <Div3 onClick={incr}>+</Div3>
          </Cunt>
        </div>
    ) 
} 
export default Hero;
const Div1 = styled.div``
const Div2 = styled.div``
const Div3 = styled.div``
const Cunt = styled.div`
height:50px;
width:200px;
background-color:green;
display:flex;
justify-content:space-between;
align-items:center;
`
const DayC = styled.div``
const Day = styled.div``
const Time = styled.div``
const Cont = styled.div`
height:100px;
width:15%;
display:flex;
justify-content:space-between;
align-items:center;
margin-left:535px;
`
const Iterate = styled.div`
height:200px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
text-align:center;
`
const H2 = styled.div`
font-size:28px;
font-weight:bold;
background:linear-gradient(to right, #7928ca, #ff0080);
-webkit-text-fill-color:transparent;
-webkit-background-clip:text;
`
const Line2 = styled.div`
width:1px;
height:110px;
margin-top:68px;
background:linear-gradient(to top, #7928ca, #ff0080);
-webkit-background-clip:background;
`
const Circle2 = styled.div`
width:40px;
height:40px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
color:white;
background:linear-gradient(to right, #7928ca, #ff0080);
-webkit-background-clip:background;
margin-bottom:30px;
`
const Dlogos = styled.div`
height:70px;
width:640px;
display:flex;
justify-content:space-between;
align-items:center;
`
const AllLogos = styled.div`
height:400px;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const ImgT = styled.div`
height:170px;
width:95%;
margin-left:5px;
line-height:1.5rem;
`
const Right = styled.div`
height:650px;
width:40%;
margin-right:90px;
margin-bottom:10px;
display:flex;
flex-direction:column;
justify-content:space-between;

`
const Left = styled.div`
height:500px;
width:40%;
background-color:blue;
margin-left:90px;
margin-bottom:144px;
`
const Hero1 = styled.div`
height:800px;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
`
const Build = styled.div`
height:160px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
text-align:center;
`
const H1 = styled.div`
font-size:28px;
font-weight:bold;
background:linear-gradient(to right, #007cf0, #00dfd8);
-webkit-text-fill-color:transparent;
-webkit-background-clip:text;
`
const Circle = styled.div`
width:40px;
height:40px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
color:white;
background:linear-gradient(to right, #007cf0, #00dfd8);
-webkit-background-clip:background;
margin-bottom:20px;
`
const Line = styled.div`
width:1px;
height:110px;
background:linear-gradient(to top, #007cf0, #00dfd8);
-webkit-background-clip:background;
margin-top:45px;
`
const Exp = styled.div`
height:300px;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const Row2 = styled.div`
height:70px;
width:85%;
display:flex;
justify-content:space-between;
align-items:center;
`
const Row1 = styled.div`
height:70px;
width:85%;
display:flex;
justify-content:space-between;
align-items:center;
`
const Logos = styled.div`
height:180px;
width:80%;
// background-color:green;
margin-bottom:70px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center
`
const Dtlogos = styled.div`
height:310px;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center
`
const Botton2 = styled.div`
height:72%;
width:44%;
background-color:green;
border-radius:10px;
background-color:white;
color:black;
border:1px solid silver;
display:flex;
justify-content:center;
align-items:center; 

`
const Botton1 = styled.div`
height:72%;
width:44%;
background-color:blue;
border-radius:10px;
background-color:black;
color:white;
border:1px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Botton = styled.div`
height:70px;
width:36%;
display:flex;
justify-content:space-between;
align-items:center;
font-size:17px;
font-weight:bold;
`
const Span = styled.div`
height:80px;
width:70%;
font-size:25px;
line-height:2rem;
text-align:center
`
const Devs = styled.div`
font-size:110px;
font-weight:bold;
`
const DevHold = styled.div`
height:120px;
width:95%;
display:flex;
justify-content:center;
align-items:center;
color:black;
`
const Holder = styled.div`
width:87%;
height:73%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
// background:linear-gradient( 150deg, rgb(1, 1, 116),orangered, #ff8c00, yellow);
//     -webkit-text-fill-color: transparent;
//      -webkit-background-clip: text;  
//      font-size: 53px;  
`
const Container = styled.div`
height:78vh;
width:100%;
overflow:hidden;
margin-top:80px;
display:flex;
justify-content:center;
align-items:center;
`
