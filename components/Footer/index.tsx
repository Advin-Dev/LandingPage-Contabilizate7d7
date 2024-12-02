"use client";
import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-3.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo-3.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="dark:text-body-color-dark mb-9 text-base leading-relaxed text-body-color">
                  Visita nuestras redes sociales para mantenerte al tanto.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/people/Contabil%C3%ADzate-en-7-de-7/61552596747097/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/contabilizate_en7_de7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@Contabilizateen7de7/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <i className="fab fa-youtube text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Enlaces útiles
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.quarzoc.com/"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Sobre Nostros
                    </a>
                  </li>
                  <li>
                    <a
                      href="/modulos"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Nuestros Servicios
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Términos
                </h2>
                <ul>
                  <li>
                    <a
                      href="https://quarzoc.com/politica-privacidad"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <a
                      href="/terms"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Contactanos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-body-color py-6 text-center">
            <p className="text-base text-body-color dark:text-body-color-dark">
              © 2024 Contablizate en 7 de 7 | Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
