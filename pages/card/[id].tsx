import { InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"
import { getStaticProps } from ".."

export default function Card ({
    data
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()
    const id = router.query.id
    console.log('data', data)
    return (
        <>
            <h1>card id</h1>
        </>
    )
}