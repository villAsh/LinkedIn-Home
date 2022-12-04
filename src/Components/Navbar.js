//import { data } from 'autoprefixer';
import React from 'react';
import logo from '../Images/logo.svg';
import briefcase from '../Images/briefcase.svg';
import compass from '../Images/compass.svg';
import group from '../Images/group.svg';
import leanpub from '../Images/leanpub.svg';

export default class Navbar extends React.Component {
    state = {
        nav_data: [
            { id: 1, text: 'Discover', src: compass },
            { id: 2, text: 'People', src: group },
            { id: 3, text: 'Learning', src: leanpub },
            { id: 4, text: 'Jobs', src: briefcase },
        ]
    }

    render() {
        const show_data = this.state.nav_data.map((data) => {
            return <div className='flex flex-col justify-center items-center opacity-70 hover:opacity-100 cursor-pointer '>
                <img src={data.src} alt={data.text} value={data.id} style={{ width: "28px" }} />
                <li className='list-none flex flex-row' key={data.id}>{data.text}</li>
            </div>
        });
        return (

            <>
                <section className='p-5 flex justify-between md:mx-[5%]'>
                    <div className='flex gap-0 items-center'>
                        <h1 className='text-3xl font-bold inline text-[#0068b5]  '>Linked</h1>
                        <img
                            src={logo}
                            alt={"logo"}
                            className='inline-block ml-[-3px]'

                        />
                    </div>
                    <div className='flex items-center'>
                        <div className='mr-7 hidden md:block'>
                            <ul className='flex space-x-10'>
                                {show_data}
                            </ul>
                        </div>
                        <span className='text-4xl font-thin hidden md:inline'>|</span>
                        <div className='ml-2'>
                            <button className='
                                hover:bg-slate-200 
                                hover:text-black 
                                  hover:rounded-full 
                                  px-4 py-2 font-semibold 
                                  '>
                                 Join Now
                            </button>
                            <button className='
                                 px-5 py-2 ml-2 
                                 border border-blue-500 rounded-full
                               hover:bg-blue-100
                               '>
                                Sign in
                            </button>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}