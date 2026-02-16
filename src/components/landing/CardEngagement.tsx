import React from 'react';
import Image from "next/image";

type CardEngagementProps = {
    title: string;
    description: string;
    imageUrl: string;
}

const CardEngagement = ({ title, description, imageUrl }:CardEngagementProps) => {
    return (
        <div className="flex flex-col justify-center items-center max-w-sm rounded-lg overflow-hidden ">
            <h2 className="font-bold text-xl text-center mb-2">{title}</h2>
            <Image className="size-24!"
                   fill
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

export default CardEngagement;