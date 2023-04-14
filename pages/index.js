import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PizzaBox from '../components/PizzaBox'

export default function Home({pizzas}) {
  return (
    <div className={styles.container}>
      <PizzaBox pizzas={pizzas}/>
    </div>
  )
}

export async function getStaticProps() {
  let res = await fetch('http://localhost:3000/api/pizzas/getPizzas')
  const pizzas = await res.json()
  return {
      props: {
          pizzas,
      }
  }
}
