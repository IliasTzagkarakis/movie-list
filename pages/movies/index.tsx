import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Movies.module.css';
import {GetServerSideProps } from 'next'

export const getServerSideProps:GetServerSideProps = async()=>{

    const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1ff58e561da5250b07adf375846d925c');
    const data = await res.json();
    
    console.log(res);
    
      return {
        props:{
          movies:data
        }
      }
    }

const Movies = ({
    movies
    }:{
        movies:{
            page: number
            results:[movie:{
                id:number
                title:string
            }]
            total_pages: number
            total_results: number
        }
    }) => {
    console.log(movies)
    return ( 
        <>
        <Head>
            <title>Movie List</title>
        </Head>
        <div>
            {movies && movies.results.map(movie =>(
                <Link href={'/movies/'+ movie.id} key={movie.id}>
                    <a className={styles.single}>
                        <h3>{movie.title}</h3>
                    </a>
                </Link>
            ))} 
        </div>
        </>
     );
}
 
export default Movies;