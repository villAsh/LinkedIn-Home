import React from 'react';

export default class Postjob extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:this.props.text
        }
    }
    render(){
        return(
            <section className='mt-5 bg-orange-50'>
                <div className='flex flex-row px-20  items-center p-10'>
                    <h1 className='text-3xl md:text-6xl text-orange-800  font-light md:leading-[4.5rem] md:max-w-[45vw] pr-10'>{this.props.text}</h1>
                    <button className='text-blue-600 border border-blue-600
                     px-6 py-3 rounded-full text-xl font-semibold
                     hover:bg-gray-300'>Post Job</button>
                </div>
            </section>
        );
    }
}