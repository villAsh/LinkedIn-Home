import React from "react";


export default class Explore extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            button: this.props.button,
            text: this.props.text,
            bg:this.props.bg,
        }
       
    }
    
    render(){
        const btn =  this.state.button.map((data) =>{
            return  data.id === 1 ? <h1 key={data.id} className="
                    text-blue-600 border border-blue-600
                     px-6 py-3 rounded-full text-xl font-semibold
                     hover:bg-gray-300">
                    {data.text}
                    </h1>:
                    <h1 key={data.id} className="
                     border border-black font-semibold
                     px-6 py-3 rounded-full text-xl
                     hover:bg-gray-300">
                    {data.text}
                    </h1>

        });
     console.log(this.props.button)
        return(
            <>
               <section className="">
                  <div  style={{backgroundColor: this.props.bg }} 
                  className="p-10 md:p-20
                   grid grid-cols-1 md:grid-cols-2 place-content-center">
                        <div className="md:text-start md:pr-16" id="heading">
                            <h1 className="text-3xl md:text-6xl text-slate-900  font-light md:leading-[4.5rem]">{this.props.text}</h1>
                        </div>
                        <div className="">
                            <h1 className="text-xl text-gray-700">CONTENT TOPICS</h1>
                            <div className="flex flex-row  flex-wrap mt-6 gap-2 cursor-pointer">
                                {btn}        
                            </div>
                        </div>
                  </div>
               </section>
            </>
         
        );
    }
}