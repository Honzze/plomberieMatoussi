import React from "react";
import Image from "next/image";

type CardEngagementProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const CardEngagement = ({
  title,
  description,
  imageUrl,
}: CardEngagementProps) => {
  return (
    <div className="flex max-w-sm flex-col items-center justify-center overflow-hidden rounded-lg">
      <h2 className="mb-2 text-center text-xl font-bold">{title}</h2>
      <Image
        className="h-auto w-28"
        width={96}
        height={96}
        src={imageUrl}
        alt="Image de la carte"
      />
      <div className="px-6 py-4">
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="flex justify-end px-6 py-4"></div>
    </div>
  );
};

export default CardEngagement;
