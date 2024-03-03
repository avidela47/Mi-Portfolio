import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-2 w[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold dark:text-light">
          {position}&nbsp;<p className="text-primary">{company}</p>
        </h3>
        <span className="font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
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
            position="Coordinador Área Administración y Cobranza"
            company="GAMA S.A"
            time="Enero 2016 - Septiembre 2021"
            address="Cordoba, Argentina"
            work="-Planificación de tareas teniendo en cuenta la carga de trabajo diaria.
          -Colaboración con otros empleados con el fin de llevar a cabo una acción
          coordinada y realizar las tareas asignadas.
          -Uso de Software interno de la empresa para la gestión y realización de
          las tareas diarias asignadas.
          -Proposición de soluciones que garanticen la satisfacción del cliente
          conforme a la política de la compañía.
          -Diagramación de la gestión de cobros y pagos a clientes.
          -Creación, gestión y presentación de informes y expedientes."
          />
          <Details
            position="Responsable administrativo de procesos judiciales"
            company="Estudio Jurídico Loyo & Asoc."
            time="Enero 2005 - Diciembre 2015"
            address="Cordoba, Argentina"
            work="- Gestión y Coordinación de las causas de las zonas asignadas y una
            cartera a cargo de aproximadamente quince mil cuentas.
            - Organización de estrategias legales para la procuración efectiva de
            las mismas.
            - Reuniones con Intendentes y Autoridades de las zonas en cuentas de
            cobranzas fiscales Municipales.
            - Elaboración de informes y reportes al superior.
            - Tareas de registro, recepción y distribución de escritos y
            documentos."
          />
          <Details
            position="Administrativo Junior en Procuración Fiscal"
            company="Estudio Jurídico Piñeiro & Asoc."
            time="Enero 1999 - Diciembre 2004"
            address="Cordoba, Argentina"
            work="- Procuración de las causas judiciales asignadas, y gestión de
            cobranzas de mora de cuentas extrajudiciales.
            - Creación de bases de datos informáticas.
            - Creación, gestión y presentación de informes y expedientes."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
