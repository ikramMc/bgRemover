import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
 
  constructor()
  {super();
    this.state={image:"",imagebg:'',resData:''}
    this.removebg=this.removebg.bind(this)
    this.imageChangeHandler=this.imageChangeHandler.bind(this)
  }
  removebg(event){
    event.preventDefault()
    const formdata=new FormData()
    const reader=new FileReader()
    formdata.append('image_file',this.state.image)
    console.log(this.state.image)
    console.log(formdata)
     axios.post("https://api.remove.bg/v1.0/removebg",formdata,{headers:{'X-Api-Key':'xxxxx*_*xxx"','Content-Type':'multipart/form-data'},responseType:'blob'}).then(res=>{reader.readAsDataURL(res.data);reader.onload=()=>{this.setState({imagebg:reader.result,resData:res.data})}})
  }
  imageChangeHandler(event){
    this.setState({image:event.target.files[0]})
  }
  downlodHandler(){
    
  }
  render()
  {console.log(this.state)
    return <div className="flex justify-center items-center gap-8 bg-blue-200 p-12 text-green-900 h-screen " >
   <div className='h-full flex flex-col gap-10'>
   <h1 className='text-3xl font-bold '>welcome to my website !</h1>
    <input id="file"  type="file" onChange={this.imageChangeHandler} className="hidden"/>
    <label for="file" className='p-1 text-white bg-yellow-400 rounded-md text-center '>choose image</label>
    <button onClick={this.removebg} className="p-1 text-white bg-yellow-400 rounded-md">remove the background!</button>
    <img src={this.state.imagebg} className="border border-gray-800"/>
    <a className="text-center font-bold bg-green-400 rounded-md p-1" href={this.state.resData!==''?URL.createObjectURL(this.state.resData):''} download={this.state.image.name}>download</a>
  
   </div>
  </div>
  }
}

export default App
/*<img src={this.state.image!==''?URL.createObjectURL(this.state.image):'none'} alt="loading"/>
  </d*/