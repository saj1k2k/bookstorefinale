import React from 'react'
import s from '../assets/css/Home.module.css'
import {BooksLine} from '../components/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewBooks } from '../redux/booksSlice';


const Home = () => {

  const dispatch = useDispatch()
  const {isLoading} = useSelector(store => store.books)


  React.useEffect(() => {
      dispatch(fetchNewBooks())
  }, [])
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <div className={s.main}>
        <BooksLine title='Новинки'/>
        <BooksLine title='Жанровые'/>
        <BooksLine title='Python'/>
        <BooksLine title='JavaScript'/>
    </div>
    </>
  )
}

export default Home