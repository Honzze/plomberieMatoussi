import React from "react";

export const Hero = () => {
    return (
        <div className="bg-[url(/bg-hero2.jpg)] bg-no-repeat bg-center bg-cover w-full h-220 object-cover place-content-evenly">
            <div className="flex flex-row items-center justify-around ">
                <div className="flex flex-col items-center w-full">
                    <h1 className="text-foreground font-medium text-5xl ">Plomberie & Multi-services à Nantes<br/></h1>
                    <h2 className="text-foreground font-medium text-xl pt-5 " >Plomberie & Multi-services Matoussi intervient dans nantes et ces alentours (Bougeunais, Rezé, Carquefou...)   </h2>
                <div className="flex flex-row items-center justify-around pt-10">
                    <button
                    className="border-2 text-base px-4 py-2 text-lg font-normal bg-background  border-white-500 rounded-full mx-10 ">Nous contacter
                </button>
                <button
                    className="border-2 text-base px-4 py-2 text-lg font-normal bg-background  border-white-500 rounded-full mx-10">Nos services
                </button>

                </div>
                </div>


            </div>
        </div>
    )
}

