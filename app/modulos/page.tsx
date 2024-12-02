import SingleBlog from "@/components/Modulos/SingleModulo";
import blogData from "@/components/Modulos/moduloData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modulos",
  description: "Conoce nuestros Modulos",
  // other metadata
};

const Blog = () => {
  // Dividir los blogs en bloques de 3
  const groupedBlogs = [];
  for (let i = 0; i < blogData.length; i += 3) {
    groupedBlogs.push(blogData.slice(i, i + 3));
  }

  return (
    <>
      <Breadcrumb pageName="Módulos" description="Elige uno de nuestros módulos." />

      {/* Título principal de la página */}
      <h2 className="text-3xl font-bold text-center mb-4"></h2>

      {/* Texto debajo del título principal */}
      <p className="text-center text-lg mb-6"></p>

      <section className="pb-[80px] pt-[40px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {/* Mostrar los 3 blogs con un título al principio */}
            {groupedBlogs.map((group, index) => (
              <div key={index} className="w-full mb-12">
                {/* Título para cada grupo de 3 blogs, excepto el primero */}
                {index !== 0 && (
                  <>
                    <h3 className="text-2xl font-semibold text-center mb-6">
                      
                    </h3>
                    <p className="text-center text-lg mb-6"></p>
                  </>
                )}

                {/* Mostrar los 3 blogs de este grupo */}
                <div className="flex flex-wrap justify-center">
                  {group.map((blog) => (
                    <div key={blog.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                      <SingleBlog blog={blog} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
