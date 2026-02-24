import React from 'react';
import Image from "next/image";

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
    liprops: string[];
};

const Card = ({title, description, imageUrl, liprops = []}: CardProps) => {
    return (
        <div className="flex flex-col w-full rounded-lg overflow-hidden border border-gray-300">
            <h2 className="font-bold text-xl text-start mt-6 ml-12 mb-2">{title}</h2>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="ml-12 w-1/4">

                    <Image className="w-60 h-auto"
                           width={252}
                           height={230}
                           src={imageUrl}
                           alt="Image de la carte"
                    />

                </div>
                <div className="justify-center items-center px-6 py-4 text-2xl">
                    <ul className="list-disc ">
                        {liprops?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>


                </div>


            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4 flex justify-end">

            </div>
        </div>

    );
};

export default Card