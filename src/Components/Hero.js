import React from "react";

import hero from '../Images/hero.svg';
export default class Hero extends React.Component {
    state = {
        tabs: [
            { id: 1, text: "Search for a job" },
            { id: 2, text: "Find a person you know" },
            { id: 3, text: "Learn a new Skill" }
        ]
    }

    render() {
        const show_tab = this.state.tabs.map((tab) => {
            return <div key={tab.id} className=" 
                                    px-4 py-5 my-5 lg:w-[60%]
                                    rounded-xl
                                    border-2 border-gray-200
                                    hover:shadow-xl
                                    ">{tab.text} <span className="float-right text-lg font-thin"> &gt; </span></div>
        })
        return (            
                <section className="
                    overflow-hidden
                    md:mt-32 mx-16 mb-20 lg:mt-0
                    grid grid-cols-1
                    md:grid-cols-2
                    place-content-center">
                    <div className="flex flex-col ">
                        <h1 className="text-6xl text-amber-800 font-light leading-[4.5rem]">
                            Welcome to your <br /> professional community
                        </h1>
                        <div className="mt-10">
                            {show_tab}
                        </div>
                    </div>
                    <div className="md:relative ">
                        <div className="">
                            <img src={hero} alt={"alternate Text"} className="md:absolute" />
                        </div>

                    </div>
                </section>

        );
    }
}