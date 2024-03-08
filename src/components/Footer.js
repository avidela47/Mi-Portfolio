import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { WhatsappIcon } from "./Icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-gray font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Build With <span className="text-primary dark:text-primaryDark text-2xl px-1">𓇼🧉࿔*</span>
          by&nbsp;
          <Link href="/projects" className="underline underline-offset-2">
            Ariel Videla
          </Link>
        </div>
        <motion.div
          className="flex items-center"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.a
            href="https://api.whatsapp.com/send?phone=3512890110&text=Hola"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 mr-3"
          >
            <WhatsappIcon className="flex items-center justify-center" />
          </motion.a>
          +54 9 351 289-0110
        </motion.div>
      </Layout>
    </footer>
  );
};

export default Footer;
