import React from 'react';
export default class Join extends React.Component{
    render(){
        return(
            <section className='min-h-[40vh] p-5 flex flex-col justify-start items-start text-center md:text-justify '>
            <div className='p-10 md:p-20'>   
            <h1 className='text-6xl font-light text-gray-900'>Join your colleagues, classmates, and friends on LinkedIn.</h1>
            </div>
            <div className='px-10 md:px-20 mx-auto md:mx-0'>
                <button className='px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold'>Get Started</button>
            </div>
            </section>
        );
    }
}