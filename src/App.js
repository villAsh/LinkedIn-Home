
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Explore from './Components/Explore';
import Postjob from './Components/Postjob';
import ConnectPage from './Components/ConnectPage';
import Video from './Components/Video';
import Join from './Components/Join';
import Footer from './Components/Footer';

//JSON DATA

const buttons = [
  {id:1,text:"See All Topics"},
  {id:2,text:"Workplace"},
  {id:3,text:"Job Search"},
  {id:4,text:"Careers"},
  {id:5,text:"Interviewing"},
  {id:6,text:"Salary"},
  {id:7,text:"Internships"},
  {id:8,text:"Employee Benefits"}
]


const buttons2 = [
  {id:1,text:"Engineering"},
  {id:2,text:"Business Developement"},
  {id:3,text:"Finance"},
  {id:4,text:"Retail Associate"},
  {id:5,text:"Operations"},
  {id:6,text:"Information Technology"},
  {id:7,text:"Marketing"},
  {id:8,text:"Human Resource"}
]


const footer_list = {
   General:[
      {id:1,text:"Sign Up"},
      {id:2,text:"Help Center"},
      {id:3,text:"About"},
      {id:4,text:"Press"},
      {id:5,text:"Blog"},
      {id:6,text:"Careers"},
      {id:7,text:"Developers"}
    ],
    Browse:[
      {id:1,text:"Learnings"},
      {id:2,text:"Jobs"},
      {id:3,text:"Salary"},
      {id:4,text:"Mobile"},
      {id:5,text:"Services"},
      {id:6,text:"Products"}
    ],
    Solution:[
      {id:1,text:"Talent"},
      {id:2,text:"Marketing"},
      {id:3,text:"Sales"},
      {id:4,text:"Learning"},
      {id:5,text:"Services"},
      {id:6,text:"Products"}
    ],
    Dir:[
      {id:1,text:"Members"},
      {id:2,text:"Jobs"},
      {id:3,text:"Companies"},
      {id:4,text:"Featured"},
      {id:5,text:"Learning"},
      {id:6,text:"Posts"},
      {id:7,text:"Articles"},
      {id:8,text:"News"},
      {id:9,text:"New Articles"},
      {id:10,text:"Services"},
      {id:11,text:"Products"},
      {id:12,text:"Content Topic"}
    ]

  }
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore button={buttons} text="Explore topics you are interested in" bg="#f1f5f9"/>
      <Explore button={buttons2} text="Find the right job or internship for you" />
      <Postjob  text="Post your job for millions of people to see"/>
      <ConnectPage />
      <Video />
      <Join />
      <Footer General={footer_list}/>
    {/* <h1 className='text-white'>hello world</h1> */}
    </>


  );
}

export default App;
