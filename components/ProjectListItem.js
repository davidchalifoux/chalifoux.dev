import Image from "next/image";

export default function ProjectListItem({
  image,
  name,
  sourceURL,
  siteURL,
  description,
}) {
  return (
    <div className="p-4 bg-stone-800 flex flex-col rounded-lg my-8 md:flex-row">
      <div className="relative flex-shrink-0 w-full md:w-[400px] md:h-[300px] md:mb-0">
        <Image
          src={image}
          alt="Picture of Kaput-CLI"
          placeholder="blur"
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      <div className="flex-grow mt-4 md:mt-0 md:ml-4">
        {siteURL && (
          <div className="font-medium text-2xl hover:underline">
            <a href={siteURL}>{name}</a>
          </div>
        )}
        {!siteURL && <div className="font-medium text-2xl">{name}</div>}
        {sourceURL && (
          <div className="text-stone-500 text-sm mb-4 hover:underline">
            <a href={"https://" + sourceURL}>{sourceURL}</a>
          </div>
        )}
        {!sourceURL && (
          <div className="text-stone-500 text-sm mb-4">
            Source code not available
          </div>
        )}
        <div className="text break-words">{description}</div>
      </div>
    </div>
  );
}
