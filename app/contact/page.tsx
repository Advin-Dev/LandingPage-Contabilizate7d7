import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos | Contabilízate en 7 de 7",
  description: "Pagina de Contacto",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Página de contacto"
        description="Estamos aquí para apoyarte, cualquier duda que tengas la resolveremos lo antes posible."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
