import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home({pizzaList, admin}) {
  const [close, setClose] = useState(true);


  return (
    <div className={styles.container}>
      <Head>
        <title>Best Restaurant in Dhaka</title>
        <meta name="description" content="Best pizza shop in the Town" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    <Featured />
    { admin && <AddButton setClose={setClose} />}
    <PizzaList pizzaList={pizzaList} />
    {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const DUMMY_DATA = [
    {
      _id: "6235b9e22a1d83b461c229b2",
      title: "Beef Burger",
      desc: "Fresh meat with the softest buns.",
      img: "http://res.cloudinary.com/dqnmks4e7/image/upload/v1647688076/uploads/lkrzt8xkaezqhnhknkmp.jpg",
      prices: [
        3.79,
        4.79,
        5.79
      ],
      extraOptions: [
        {
          text: "sauce",
          price: 1,
          _id: "6235b9e22a1d83b461c229b3"
        },
        {
          text: "cheese",
          price: 1.5,
          _id: "6235b9e22a1d83b461c229b4"
        }
      ],
      createdAt: "2022-03-19T11:09:22.429Z",
      updatedAt: "2022-03-19T11:09:22.429Z",
      __v: 0
    },
    {
      _id: "6235bb342a1d83b461c229ba",
      title: "Cheese Pizza",
      desc: "The cheesiest pizza, melts right in your mouth.",
      img: "http://res.cloudinary.com/dqnmks4e7/image/upload/v1647688405/uploads/lzj048g114ksm8fh1kne.jpg",
      prices: [
        11.99,
        14.99,
        15.99
      ],
      extraOptions: [
        {
          text: "cheese",
          price: 2,
          _id: "6235bb342a1d83b461c229bb"
        },
        {
          text: "sauce",
          price: 1,
          _id: "6235bb342a1d83b461c229bc"
        },
        {
          text: "garlic sauce",
          price: 1,
          _id: "6235bb342a1d83b461c229bd"
        }
      ],
      createdAt: "2022-03-19T11:15:00.363Z",
      updatedAt: "2022-03-19T11:15:00.363Z",
      __v: 0
    },
    {
      _id: "6235bbd12a1d83b461c229c0",
      title: "Mexican Pizza",
      desc: "The best Mexican pizza, period.",
      img: "http://res.cloudinary.com/dqnmks4e7/image/upload/v1647688556/uploads/f4rtsvgumzdf1npjlwtr.jpg",
      prices: [
        12.99,
        15.99,
        18.99
      ],
      extraOptions: [
        {
          text: "cheese",
          price: 2,
          _id: "6235bbd12a1d83b461c229c1"
        },
        {
          text: "garlic sauce",
          price: 3,
          _id: "6235bbd12a1d83b461c229c2"
        },
        {
          text: "extra toppings",
          price: 2,
          _id: "6235bbd12a1d83b461c229c3"
        }
      ],
      createdAt: "2022-03-19T11:17:37.754Z",
      updatedAt: "2022-03-19T11:17:37.754Z",
      __v: 0
    },
    {
      _id: "6235bc3c2a1d83b461c229c6",
      title: "Sandwich",
      desc: "Sandwich Sandwich Sandwich, yes.",
      img: "http://res.cloudinary.com/dqnmks4e7/image/upload/v1647688659/uploads/lopokxc1q6c2rvfkr5jn.jpg",
      prices: [
        3.39,
        5.39,
        7.39
      ],
      extraOptions: [
        {
          text: "cheese",
          price: 1,
          _id: "6235bc3c2a1d83b461c229c7"
        },
        {
          text: "sauce",
          price: 1,
          _id: "6235bc3c2a1d83b461c229c8"
        },
        {
          text: "garlic sauce",
          price: 1,
          _id: "6235bc3c2a1d83b461c229c9"
        }
      ],
      createdAt: "2022-03-19T11:19:24.038Z",
      updatedAt: "2022-03-19T11:19:24.038Z",
      __v: 0
    },
    {
      _id: "6235bc9e2a1d83b461c229cc",
      title: "Combo",
      desc: "The all in one combo you need.",
      img: "http://res.cloudinary.com/dqnmks4e7/image/upload/v1647688827/uploads/sadyjeley6kw0dsgfqw0.jpg",
      prices: [
        21.76,
        22.76,
        25.76
      ],
      extraOptions: [
        {
          text: "coke",
          price: 3,
          _id: "6235bc9e2a1d83b461c229cd"
        },
        {
          text: "fries",
          price: 2,
          _id: "6235bc9e2a1d83b461c229ce"
        },
        {
          text: "chips",
          price: 1,
          _id: "6235bc9e2a1d83b461c229cf"
        },
        {
          text: "sauce",
          price: 1,
          _id: "6235bc9e2a1d83b461c229d0"
        }
      ],
      createdAt: "2022-03-19T11:21:02.550Z",
      updatedAt: "2022-03-19T11:21:02.550Z",
      __v: 0
    },
    {
      _id: "623614ed529ead136fcd548e",
      title: "croissant",
      desc: "el croissant!",
      img: "http://res.cloudinary.com/dqnmks4e7/image/upload/v1647711398/uploads/bkso7chvr70xsc9efih0.jpg",
      prices: [
        2.76,
        3.76,
        5.76
      ],
      extraOptions: [
        {
          text: "sauce",
          price: 0.5,
          _id: "623614ed529ead136fcd548f"
        },
        {
          text: "green sauce",
          price: 0.5,
          _id: "623614ed529ead136fcd5490"
        }
      ],
      createdAt: "2022-03-19T17:37:49.577Z",
      updatedAt: "2022-03-19T17:37:49.577Z",
      __v: 0
    },
    {
      _id: "6236d8f4788b4be5cb96ec45",
      title: "Pepperoni Pizza",
      desc: "The Pepperoni Lover's Pizza",
      img: "http://res.cloudinary.com/dqnmks4e7/image/upload/v1647761597/uploads/x3kwkhrn6pdrfbadkorv.png",
      prices: [
        12.99,
        14.99,
        16.99
      ],
      extraOptions: [
        {
          text: "sauce",
          price: 0.5,
          _id: "6236d8f4788b4be5cb96ec46"
        },
        {
          text: "garlic sauce",
          price: 0.5,
          _id: "6236d8f4788b4be5cb96ec47"
        }
      ],
      createdAt: "2022-03-20T07:34:12.459Z",
      updatedAt: "2022-03-20T07:34:12.459Z",
      __v: 0
    }
  ]

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);

  return {
    props: {
      pizzaList: res.data || DUMMY_DATA,
      admin,
    },
  };
};
