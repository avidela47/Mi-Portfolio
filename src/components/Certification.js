import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import FramerImage from "next/image";
import Cert1 from "../../public/images/articles/DesarrolloFullStack2.png";
import Cert2 from "../../public/images/articles/Programación Backend2.png";
import Cert3 from "../../public/images/articles/ReactJs2.png";
import Cert4 from "../../public/images/articles/JavaScript2.png";
import Cert5 from "../../public/images/articles/Desarrollo Web2.png";
import Cert6 from "../../public/images/articles/DesarrolloWebProgramaAcademy_page-0001.jpg";
import Cert7 from "../../public/images/articles/SeProgramar2022_page-0001.jpg";
import Cert8 from "../../public/images/articles/Primerosdesarrollofrontend_page-0001.jpg";

const Details = ({ type, place }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-2 w[60%] mx-auto flex flex-col items-center justify-between md:w-[100%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold dark:text-light sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="font-medium text-dark/75 dark:text-primary/75 xs:text-sm">
          {place}
        </span>
      </motion.div>
    </li>
  );
};

const Certification = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-34">
      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full xs:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[0px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-[75px] xs:ml-2">
          <Details
            type="DESARROLLO FULL STACK"
            place="CoderHouse - Caba - Argentina"
          />
          <FramerImage
            src={Cert1}
            alt="CoderHouse"
            className="w-[700px] h-[400px]"
            priority
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 50vw"
          />
          <Details
            type="PROGRAMADOR BACK END"
            place="CoderHouse - Caba - Argentina"
          />
          <FramerImage
            src={Cert2}
            alt="CoderHouse"
            className="w-[700px] h-[400px]"
            priority
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 50vw"
          />
          <Details
            type="PROGRAMADOR REACT JS"
            place="CoderHouse - Caba - Argentina"
          />
          <FramerImage
            src={Cert3}
            alt="CoderHouse"
            className="w-[700px] h-[400px]"
            priority
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 50vw"
          />
          <Details
            type="PROGRAMADOR JAVASCRIPT"
            place="CoderHouse - Caba - Argentina"
          />
          <FramerImage
            src={Cert4}
            alt="CoderHouse"
            className="w-[700px] h-[400px]"
            priority
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 50vw"
          />
          <Details
            type="DESARROLLO WEB"
            place="CoderHouse - Caba - Argentina"
          />
          <FramerImage
            src={Cert5}
            alt="CoderHouse"
            className="w-[700px] h-[400px]"
            priority
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 50vw"
          />
          <Details
            type="DESARROLLO WEB"
            place="XAcademy - Cordoba - Argentina"
          />
          <FramerImage
            src={Cert6}
            alt="XAcademy"
            className="w-[700px] h-[400px]"
            priority
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 50vw"
          />
          <Details
            type="DESARROLLO FULL STACK (1º Etapa)"
            place="Argentina Programa 4.0 - Caba - Argentina"
          />
          <FramerImage
            src={Cert7}
            alt="Programa 4.0"
            className="w-[700px] h-[400px]"
            priority
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 50vw"
          />
          <Details
            type="DESARROLLO WEB"
            place="Argentina Programa 4.0 - Caba - Argentina"
          />
          <FramerImage
            src={Cert8}
            alt="Programa 4.0"
            className="w-[700px] h-[400px]"
            priority
            sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw, 50vw"
          />
        </ul>
      </div>
    </div>
  );
};

export default Certification;
