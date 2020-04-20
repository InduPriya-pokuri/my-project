import React from 'react';
import './App.css';
import Profile from './Profile';
import Data from './data/data.json';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function App(){
  var info=Data.profiles;
  return(
    <section>
      
       <BrowserRouter>
       <header className="header">
      {info.map((k,l)=>(
        <Link to={{pathname:"/profile",data:{id:l}}} key={l}> {"Profile"+(l+1)} </Link>
      ))}
    
    </header> <br/> <br/> 
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />

       
      </BrowserRouter>
    
     
      </section>
  )
}

let Home=()=>{
  var info=Data.profiles;
return(
<section className="parent">
{info.map((i,index)=>(
        <div className="card" key={index}>
          <div className="card-top">
          <h2> {i.basicInformation.name} </h2> <br />
      <h5> <em> {i.basicInformation.role}</em></h5>
      </div>

      <div className="card-bottom">
        <a href={"mailto:"+i.basicInformation.email}> {i.basicInformation.email}  </a> <br />

        <a href={"tel:"+i.basicInformation.mobile}> {i.basicInformation.mobile}</a> <br />
        <Link to={{pathname:"/profile",data:{id:index}}}> View Profile >> </Link>
      </div>
        </div>
      ))}
</section>
)
}

export default App;












// import React from 'react';
// import ReactDom  from 'react-dom';
// //import logo from './logo.svg';
// import './App.css';

// function App() {
//   var name="Lucky"
//   ReactDom.render(<p>Priya</p>,document.getElementById("header"));
//   ReactDom.render(<h4>Indu</h4>,document.getElementById("header"));

//   return (
//     <div className="App">
//        <h2>Hi This is Indu</h2>
//        <h3>Hello</h3>
//        <h5>Hey</h5>
//        {/* Using both html and java script */}
//   <h3>{name}</h3>


//   <h3>{4+5}</h3>
//     </div>
      
//   );
// }

// export default App;






// import React from 'react';


// class App extends React.Component{
//   render(){

//     // Only single statement supported thats why use div

//     // return{
//       <div>
//         <h2>Class Component</h2>
//         <p>Indu Priya</p>
//         );
//         </div>

// //         /* // return <h2>Class Component</h2>    .......Single tag only support
// //     // already app name in indexedDB.js
// //  */


//       }
// }
// export default App;




// import React from 'react';


// function App(){
//   return(
//     <div>
//       <h3>Hiiii</h3>
//       <h2>Hello</h2>
//     </div>
//   )
// }




// Profil.js  file
// {component} inside braces is child and used as a react for the child component


// import React from 'react';
// import Profile from './Profile'

// function App(){
//   return(
//     {

//     }
//   )
// }



// import React from 'react';
// import Profile from '/Profile';


// function App(){
//   var style={
//     background="#000",
//     color:"#fff",
//     padding:"1%",
//     textAlign:"center"
//   };
//     return(
//         <div>

// {/* 
// Inline css */}
// {/* <h4 style={{background :"blue",padding:"1%",color:'#fff'}}App Component></h4>   */}

// <h4 style={style}>App Component</h4>
//             <Profile style={style}></Profile>
//         </div>
//     )
// }

// export default App;



// import React from 'react';
// import Profile from '/Profile';


// function App(){
//   var style={
//     background="#000",
//     color:"#fff",
//     padding:"1%",
//     textAlign:"center"
//   };

//   let array=["A","B","C","D"];
//   return(
    
//         <div>
//           <h4 style={style}>App Component</h4>
//           {array.map(i=>(i,index=>(
//             <Profile name={i} key={index}></Profile>
//           ))}
//         </div>
//         )
//           }
//         }

// export default App;


//-------------------------------------
// import React from 'react';
// import './App.css';
// import Data from './data/data.json';
// //import ReactDOM from 'react-dom';
// //import Profile from './Profile';

// // import logo from './logo.svg';
// // import './App.css';
// // import { render } from '@testing-library/react';

// function App(){
//   var info=Data.profiles;
//   // var style={
//   //   background:"#000";,
//   //   color:"#fff",
//   //   padding:"1%",
//   //   textAlign:"center"
//   // }

//   // let array=["mounika","Indu","IBM","Sadest"];
//   // let array2=["Indu","Mounika","Friends Forever","Psycho"];
//  return(

//   <section className="parent">
//     <BrowseRouter></BrowseRouter>
//     {info.map((i,index)=>(
//       <div className="card" key={index}>
//         <div className="card-top">
//         <h2>{i.basicInformation.name}</h2><br/>
//         <h5><em>{i.basicInformation.role}</em></h5>
//       </div>


// <div className="card-bottom">
// <a href={"mailto:+i.basicInformation.email"}>
//   {i.basicInformation.email}
// </a><br/>


// <a href={"+tel:" + i.basicInformation.mobile}>
//   {i.basicInformation.mobile}</a><br/>
//   <Link to={{pathname:"/profile",data{id:index}}}>View Profile>></Link>

// </div>
// </div>

//     ))}

   
//   </section>
//  )
//     }


// export default App;
// }
// }






//---------------------------------------------------------










  //----------------------------------------------------
    //  <div class="container">
    //    <div className="col-md- offset-4">
    //      <div className="card" style={{marginTop:"2%",boxShadow"0px 8px 8px -8px>}}
    //      <div className="card-body">
    //      <h2> InduPriya</h2>
    //      <a href=
    //    </div>
    //  </div>




//----------------------------------

//    <div>
//      <h3>Indu</h3>
//      <h4 style={{background:'blue',padding:'1%'}}>Mounika app comp</h4>
//      {/* <Profile  name='IBM'></Profile>
//      <Profile  name='mounika indu'></Profile>
//     { array.map((i,index)=>(
//         // <Profile name={i} key={index}></Profile>
//         <Profile name={array[index]} bestfriend={array2[index]} key={index}></Profile> */}
// <Profile></Profile>


//     {/* ))} */}
//    </div>
//  )
// }

//export default App;