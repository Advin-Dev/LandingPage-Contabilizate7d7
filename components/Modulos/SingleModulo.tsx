import { Blog } from "@/types/modulo";
import Image from "next/image";
import Link from "next/link";  // Importamos Link de Next.js

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph } = blog; // Eliminamos 'tags' de la desestructuración

  return (
    <div className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark">
      {/* Imagen del blog */}
      <div className="relative block aspect-[37/22] w-full">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <span className="mb-4 block text-xl font-bold text-black dark:text-white sm:text-2xl">
            {title}
          </span>
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>

        {/* Contenedor del botón centrado */}
        <div className="flex justify-center mt-4">
          <Link href="/" passHref>
            <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              Saber más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
