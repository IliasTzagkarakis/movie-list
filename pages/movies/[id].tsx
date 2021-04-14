import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/[id].module.css';
import { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1ff58e561da5250b07adf375846d925c');
    const data = await res.json();

    const paths = data.results.map((movie:any) => {
        return {
            params: { id: movie.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async (context) => {
    const id = context?.params?.id;
    const res = await fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=1ff58e561da5250b07adf375846d925c');
    const data = await res.json();

    return {
        props: { movie: data }
    }
}



const Details = ({
     movie 
    }: {
        movie:{
            adult: boolean
            backdrop_path: string
            belongs_to_collection: object
            budget: number
            genres: []
            homepage: string
            id: number
            imdb_id: string
            original_language: string
            original_title: string
            overview: string
            popularity: number
            poster_path: string
            production_companies: []
            production_countries: []
            release_date: string
            revenue: number
            runtime: number
            spoken_languages: []
            status: string
            tagline: string
            title: string
            video: false
            vote_average: number
            vote_count: number
        }
    }) => {
    console.log(movie)
    return (
        <>
            <Head>
                <title>{movie.title}</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>{movie.title}</h1>
                <img src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt="Picture of the author" className={styles.image}></img>
                <p>{movie.overview}</p>
            </div>
            <Link href='/movies'><a className={styles.link}>Back to Movies</a></Link>
        </>
    );
}

export default Details;