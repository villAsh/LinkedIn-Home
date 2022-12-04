import React from 'react';
import connectImg1 from '../Images/connectImg1.svg';
import connectImg2 from '../Images/connectImg2.svg';
export default class ConnectPage extends React.Component{
    render(){
        return(
            <section className='grid grid-cols-1 md:grid-cols-2 mt-32'>
                <div className='flex flex-col justify-start items-start ml-10'>
                    <img src={connectImg1} alt={"connect 1"} className="md:max-w-[30vw] mx-5 ms:mx-0"/>
                    <h1 className='text-3xl md:text-5xl 
                                  mt-10 md:pr-16 
                                  md:text-start font-light md:leading-[4rem]'>
                                  
                                Connect with people who can help
                    </h1>
                    <h1 className='border border-black font-semibold
                     px-6 py-3 rounded-full text-xl
                     hover:bg-gray-300 cursor-pointer mt-5 md:items-start'>
                        Find people you may know
                    </h1>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <img src={connectImg2}  alt={"connect 2"} className="max-w-[30vw]"/>
                    <h1 className='text-3xl md:text-5xl mt-10 
                                  md:text-start font-light md:leading-[4rem]'>
                                  
                                  Learn the skills you need to succeed
                    </h1>
                    <h1 className='border border-black font-semibold
                     px-6 py-3 rounded-full text-xl
                     hover:bg-gray-300 cursor-pointer mt-5 md:items-start'>
                        Find people you may know
                    </h1>
                </div>
            </section>
        );
    }
}