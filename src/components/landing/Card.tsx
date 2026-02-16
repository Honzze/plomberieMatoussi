import React from 'react';
import Image from "next/image";

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
};

const Card = ({ title, description, imageUrl }: CardProps) => {
    return (
        <div className="flex flex-col justify-center items-center max-w-sm rounded-lg overflow-hidden ">
            <h2 className="font-bold text-xl text-center mb-2">{title}</h2>
            <Image className="w-48 h-auto"
                   width={152}
                   height={130}
                   src={imageUrl}
                   alt="Image de la carte"
            />
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4 flex justify-end">

            </div>
        </div>

    );
};

export default Card;