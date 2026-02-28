import React from "react";
import Image from "next/image";

type CardProps = {
    title: string;
    description?: string; // Made optional for cleaner logic
    imageUrl: string;
    liprops?: string[];
    // Optional as per your content structure
};

const Card = ({ title, description, imageUrl, liprops = [] }: CardProps) => {
    return (
        <div className="flex h-full flex-col border border-slate-200 bg-white p-6 shadow-sm hover:border-primary/50 transition-colors">
            <div className="mb-4 flex items-center gap-3 border-l-4 border-primary pl-3">
                <h3 className="text-base font-bold uppercase tracking-tight text-slate-900">
                    {title}
                </h3>
            </div>

            <div className="flex flex-1 flex-col">
                <div className="mb-4 flex items-start gap-4">
                    <div className="relative aspect-square w-24 shrink-0 bg-slate-50 p-2 border border-slate-100">
                        {/* Sécurité : On ne rend l'image que si imageUrl existe */}
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-contain p-2"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-slate-200 text-[10px] text-slate-400">
                                No Image
                            </div>
                        )}
                    </div>

                    {liprops.length > 0 && (
                        <ul className="text-sm text-slate-800 font-bold space-y-1 text-slate-700">
                            {liprops.map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="h-1 w-1 bg-primary" /> {item}
                                </li>

                            ))}
                        </ul>
                    )}
                </div>

                <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;