import React from "react";
import Image from "next/image";

export const Hero = () => {
    return (
        <div
            className=" bg-no-repeat bg-center bg-cover w-full h-220 object-cover place-content-evenly px-20">
            <div className="flex flex-row  items-center ">
                <div className="flex flex-col items-start basis-1/2 ">
                    <h1 className="text-foreground font-bold text-4xl ">Plomberie & Multi-services à <a
                        className="text-primary">Nantes</a></h1>
                    <h2 className="text-foreground font-medium text-xl pt-5 ">Plomberie & Multi-services Matoussi
                        intervient dans nantes et ces alentours (Bougeunais, Rezé, Carquefou...) </h2>
                    <div className="flex flex-row">
                        <button
                            className="bg-primary text-amber-50 mt-6 px-6 py-4 text-lg font-medium rounded-3xl mr-2  ">Nous
                            contacter
                        </button>
                        <button
                            className="bg-primary text-amber-50 mt-6 px-6 py-4 text-lg font-medium rounded-3xl ml-2 ">Nos
                            Services
                        </button>


                    </div>
                </div>
                <div className="flex flex-row items-center justify-around border-2  rounded-lg">
                    <Image
                        className="rounded-lg "
                        src="/bg-hero2.jpg"
                        width={800}
                        height={800}
                        alt="Image de la carte"
                    />


                </div>


            </div>
        </div>
    )
}

