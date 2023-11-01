import React, { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.css";
import Head from "next/head";
import { Navbar } from "../Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Santiago</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <Navbar></Navbar>

        { children }
      </main>
    </>
  );
};
