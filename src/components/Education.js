import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-2 w-full mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold dark:text-light">
          {type}
        </h3>
        <span className="font-medium text-dark/75 dark:text-primary">
          {time} | {place}
        </span>
        <p className="font-medium w-full dark:text-light">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-34">
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-[75px]">
          <Details
            type="DESARROLLO FULL STACK"
            time="Febrero 2022 - Diciembre 2023"
            place="CoderHouse"
            info="Front-end: Conocimiento de HTML y CSS para crear la estructura y estilos de las páginas web. Capacidad para usar JavaScript para agregar interactividad y mejorar la experiencia del usuario. Conocimiento de frameworks de JavaScript como React, y Angular para desarrollar interfaces de usuario más complejas y dinámicas.
            Back-end: Dominio de Node.js, para construir la lógica del servidor y manejar la comunicación entre el front-end y la base de datos. También diseñarlas para optimizar la funcionalidad y la eficiencia.
            Bases de datos: Bases de datos, tanto relacionales (como MySQL) como no relacionales (como MongoDb), para almacenar, gestionar y recuperar datos de manera eficiente.
            HTTP y arquitectura web: Funcionar el protocolo HTTP para facilitar la comunicación entre el cliente y el servidor."
          />
          <Details
            type="PROGRAMADOR Jr. FULL STACK"
            time="Febrero 2022 - En curso"
            place="Argentina Programa 4.0"
            info="Programación Front End | Programación Back End | Base De Datos | Desarrollo de Software (nivel inicial)."
          />
          <Details
            type="PROGRAMADOR FULL JAVASCRIPT / NODE.JS"
            time="Febrero 2024 - En curso"
            place="<Codo a Codo/>"
            info="Desarrollo web con JavaScript y Node.js. Front-end: Utilizan JavaScript para crear interfaces de usuario interactivas, asegurando una navegación sencilla y una experiencia de usuario óptima. Back-end con Node.js, desarrollar aplicaciones de servidor eficientes y escalables."
          />
          <Details
            type="LIC. EN COMERCIO INTERNACIONAL"
            time="Febrero 1999 - Diciembre 2005"
            place="Universidad de la Marina Mercante"
            info="Análisis Económico y Financiero, Manejo de Divisas y Logística, Normas Aduaneras y Tránsito de Mercancía, Marketing Internacional, Normas Jurídicas, Procesos Administrativos, Comercio Electrónico y Tecnología."
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Education;
