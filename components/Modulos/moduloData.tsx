import { Blog } from "@/types/modulo";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Aprende herramientas de alto rendimiento",
    paragraph:
      "",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/modulos/author-01.png",
      designation: "Graphic Designer",
    },
    

    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: " Analiza tus cifras",
    paragraph:
      "",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/modulos/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Declara tus impuestos",
    paragraph:
      "",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/modulos/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
 
];

export default blogData;
