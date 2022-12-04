import React from "react";
import video_poster from '../Images/video_poster.png';
export default class Video extends React.Component{
    render(){
        return(
            <section className="bg-green-100 mt-10 p-5">
                <div className="flex flex-col md:flex-row justify-around md:justify-start items-center p-5 h-[100vh]">
                    <div className="md:mr-5">   
                        <video width={500} controls poster={video_poster} className="rounded-md">
                            <source src="https://youtu.be/IlYUUN8rL_Y" type="video/mp4"></source>
                        </video>
                    </div>
                    <div className="md:ml-10">
                            <h1 className="text-5xl text-orange-600 ">In it to chase my dream.</h1>
                    </div>
                </div>
            </section>
        );
    }
}
