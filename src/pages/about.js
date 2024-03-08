import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";


const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value ) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Ariel Developer | Mi Perfil</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="FullStack Developer" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Perfil
              </h2>
              <p className="my-4 font-medium">
                Soy Lic. en Comercio Internacional, hace mas de dos años descubrí el
                mundo de la programación y busco experiencia laboral en el rubro
                para seguir aprendiendo. Actualmente soy desarrolador Jr. Full
                Stack.
              </p>
              <p className="font-medium">
                Tengo conocimientos en HTML, CSS, SASS, JAVA SCRIPT, REACT JS,
                ANGULAR, TypeScript y Firebase. Manejo de MERN, Wireframe y
                Frameworks Box Modeling, Flexbox, Grids y Bootstrap. Desarrollo
                páginas web, con contenido digital y multimedia, también
                aplicaciones E-commerce. Tambien poseo conocimientos de Manejo
                de paquetes NPM, YARN y EXPRESS con NODE JS, Servidores Web,
                ApiRest, Motores de Plantillas handlebarsjs, Pug & Ejs, NEST js.
                Manejo de bases de datos SQL y MONGO DB. Conocimiento de Linux
                -Ubuntu. Docker.
              </p>
              <p className="font-medium">
                Creo que el diseño es algo más que hacer que las cosas se vean
                bonitas: se trata de resolver problemas y creando experiencias
                intuitivas y agradables para los usuarios.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Ariel"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={20} />+</span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75">
                  Proyectos completos
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={3} />+</span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75">
                  Años de experiencia
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={15} />+</span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75">
                  Proyectos en proceso
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <div className="grid w-full grid-cols-8 gap-16 my-20">
            <div className="col-span-12 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Experiencia laboral
              </h2>
              <Experience />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
//4:59:23