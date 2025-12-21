import React from "react";

type Props = {
  title: string;
  description: string;
  image?: string;
  reverse?: boolean;
};

export default function ServiceCard({ title, description, image, reverse }: Props) {
  return (
    <div className={`w-full rounded-lg overflow-hidden shadow-lg bg-black/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1`}>
      <div className="relative">
        {image ? (
          <div
            className={`h-56 md:h-80 bg-cover bg-center transition-transform duration-500 hover:scale-110`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ) : (
          <div className="h-56 md:h-72 bg-neutral-800" />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="absolute left-6 right-6 bottom-6 text-white">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-sm md:text-base text-gray-200 max-w-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
}
