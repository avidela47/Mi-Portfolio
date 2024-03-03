import AnimatedText from "@/components/AnimatedText";
import Certification from "@/components/Certification";
import Education from "@/components/Education";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const education = () => {
  return (
    <>
      <Head>
        <title>Ariel Developer | Educación</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="FullStack Developer" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-12 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Datos Académicos
              </h2>
              <Education />
            </div>
          </div>
          <div className="grid w-full grid-cols-8 gap-16 mt-12">
            <div className="col-span-12 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Certificaciones
              </h2>
              <Certification />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default education;
