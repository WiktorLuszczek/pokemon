import styles from '../styles/Home.module.css'
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import Link from 'next/link';


export type PokemonsApi = {
  count: number;
  next: string;
  previous: string;
  results: { name: string; url: string }[];
};
export async function getStaticProps() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );
  const data: PokemonsApi = await response.json();
  return {
    props: { data },
  };
}

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
    <Head>
      <title>Pokemon App</title>
      <style></style>
    </Head>
    <div>
      <h1>Welcome to Pokemon App</h1>
      <div className={styles.container}>
      {data.results.map((res, index) => 
      <div key={index} className={styles.card}>
        <Link href={`card/${index}`} >
          <h1>{res.name}</h1>
        </Link>
        </div>
        )}
      </div>
    </div>
    </>
  );
}