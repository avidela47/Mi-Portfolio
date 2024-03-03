import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import FramerImage from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/miportfolio.png";
import project2 from "../../public/images/projects/saboresargentinos.png";
import project3 from "../../public/images/projects/valhallawine.png";
import project4 from "../../public/images/projects/birmghamburger.png";
import project5 from "../../public/images/projects/selflick.png";
import project6 from "../../public/images/projects/cafenormandia.png";

const FeaturedProject = ({ type, title, sumary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border-solid border-dark bg-light shadow-2xl p-6 dark:bg-dark dark:border-light">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{sumary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold shadow-2xl hover:bg-light hover:text-dark hover:border-dark border-2 border-solid border-transparent dark:bg-light dark:text-dark"
          >
            Ver Proyecto
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, sumary, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border-solid  border-dark bg-light p-2 relative dark:bg-dark dark:border-light">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-2">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-1xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p>{sumary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark hover:border-dark border-2 border-solid border-transparent"
          >
            Ver
          </Link>
          <Link href={github} target="_blank" className="w-8">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Ariel Developer | Proyectos</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-col-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Mi Portfolio"
                img={project1}
                sumary="Sitio web realizado con Nextjs, Tailwind CSS y Framer-motion"
                link="#"
                github="https://github.com/avidela47/Mi-Portfolio"
                type="Proyecto destacado"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Sabores Argentinos"
                img={project2}
                sumary="Sitio web realizado HTML, CSS y JavaScript."
                link="https://avidela47.github.io/saboresargentinos/"
                github="https://github.com/avidela47/saboresargentinos"
                type="Proyecto 2"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Valhalla Wines & Beers"
                img={project3}
                sumary="Sitio web realizado HTML, CSS y JavaScript."
                link="https://avidela47.github.io/valhallawinesvidela/"
                github="https://github.com/avidela47/valhallawinesvidela"
                type="Proyecto 3"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Birmg Hamburger"
                img={project4}
                sumary="Sitio web realizado HTML, CSS y JavaScript."
                link="https://avidela47.github.io/birmghamburgervidela/"
                github="https://github.com/avidela47/birmghamburgervidela"
                type="Proyecto destacado"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Selflick soluciones graficas"
                img={project5}
                sumary="Sitio web realizado HTML, CSS y JavaScript."
                link="https://avidela47.github.io/selflick/"
                github="https://github.com/avidela47/selflick"
                type="Proyecto 5"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Cafe Normandia"
                img={project6}
                sumary="Sitio web realizado HTML, CSS y JavaScript."
                link="/"
                github="https://github.com/avidela47/NormandiaCafeVidela"
                type="Proyecto 6"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;