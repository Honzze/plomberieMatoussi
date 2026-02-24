import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  liprops: string[];
};

const Card = ({ title, description, imageUrl, liprops = [] }: CardProps) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg border border-gray-300">
      <h2 className="mt-6 mb-2 ml-12 text-start text-xl font-bold">{title}</h2>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="ml-12 w-1/4">
          <Image
            className="h-auto w-60"
            width={252}
            height={230}
            src={imageUrl}
            alt="Image de la carte"
          />
        </div>
        <div className="items-center justify-center px-6 py-4 text-2xl">
          <ul className="list-disc">
            {liprops?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="flex justify-end px-6 py-4"></div>
    </div>
  );
};

export default Card;
