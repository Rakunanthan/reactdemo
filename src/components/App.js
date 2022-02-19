import React, { Component } from 'react';
import Header from './bootstrap/header';
 class App extends Component{
   state={
     Dark:false
   };
   toggleheader = () =>{
     window.alert("clicked")

   };
   render()
   {
     return(
       <div className='App'>
         <Header dark={this.state.Dark} className="mb-4">portfolio genereator</Header>
      
         <div className='container'>
           <div className='row'>
             <div className='col-12 text-center'>
               <button className='btn.btn-primary' onClick={this.toggleheader}>Button </button>
             </div>
           </div>
         </div>
       </div>
     )
   }
 }
 export default App;