import React from "react";
import logo from '../Images/logo.svg';
export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            General:this.props.General.General,
            Browse:this.props.General.Browse,
            Solution:this.props.General.Solution,
            Dir:this.props.General.Dir
          }
    }
    render(){
        
        const show_gen =  this.state.General.map((data)=>{
                return  <li className="text-gray-600 font-semibold text-md hover:cursor-pointer hover:text-blue-700 hover:underline ">{data.text}</li>
            });
        const show_bl = this.state.Browse.map((data) =>{
            return  <li className="text-gray-600 font-semibold text-md hover:cursor-pointer hover:text-blue-700 hover:underline ">{data.text}</li>
        })
        const show_bs = this.state.Solution.map((data) =>{
            return  <li className="text-gray-600 font-semibold text-md hover:cursor-pointer hover:text-blue-700 hover:underline ">{data.text}</li>
        })
        const show_dir = this.state.Dir.map((data) =>{
            return  <li className="text-gray-600 font-semibold text-md hover:cursor-pointer hover:text-blue-700 hover:underline ">{data.text}</li>
        })

        return(
            <section className="bg-gray-200 min-h-[50vh]">
                <div className="flex flex-col text-center md:flex-row md:justify-around md:items-start pt-5">
                    <div className='flex gap-0 items-center justify-center mb-3 md:mb-0'>
                        <h1 className='text-3xl font-bold inline text-[#0068b5]  '>Linked</h1>
                        <img
                            src={logo}
                            alt={"logo"}
                            className='inline-block ml-[-3px]'
                        />
                    </div>
                    <div className="mb-5 md:mb-5">
                        <ul className="space-y-2">
                            <li className="font-semibold text-xl">General</li>
                            {show_gen}
                        </ul>
                    </div>
                    <div className="mb-5 md:mb-5">
                        <ul className="space-y-2">
                            <li className="font-semibold text-xl">Browse LinkedIn</li>
                            {show_bl}
                        </ul>
                    </div>
                    <div className="mb-5 md:mb-5">
                        <ul className="space-y-2">
                            <li className="font-semibold text-xl">Browse LinkedIn</li>
                            {show_bs}
                        </ul>
                    </div>
                    <div className="mb-5 md:mb-5">
                        <ul className="space-y-2">
                            <li className="font-semibold text-xl">Directories</li>
                            {show_dir}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}