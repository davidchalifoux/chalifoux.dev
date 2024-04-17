import headshotImage from "@/assets/headshot.png";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-neutral-900 from-50% to-neutral-950">
      <div className="container py-32 lg:py-64">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl lg:col-span-2 xl:col-auto">
            Hey there!
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-neutral-400">
              My name is David Chalifoux.
            </p>
            <p className="text-lg leading-8 text-neutral-400">
              I&apos;m a developer who loves the web.
            </p>
            <p className="text-lg leading-8 text-neutral-400">
              You can learn more about my work below.
            </p>
            <ArrowDownIcon className="mt-6 h-6 w-6 text-yellow-300 animate-bounce" />
          </div>
          <Image
            src={headshotImage}
            priority
            quality={90}
            alt="Headshot of David Chalifoux"
            className="mt-12 aspect-[6/5] w-full rounded-2xl object-cover xl:row-span-2 xl:row-end-2 xl:mt-42 max-w-lg xl:mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
