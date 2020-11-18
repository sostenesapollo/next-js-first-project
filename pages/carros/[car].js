import Link from 'next/link'
import {useRouter} from 'next/router'
import { NextSeo } from 'next-seo';

export default function Cars({car}) {
    var router = useRouter()    
    if (!router.query.car) return <p>Loading...</p>;
    return (
        <>
            <NextSeo
                title={"Car: "+router.query.car}
                description="Then with a short description here."
            />
            Carro nome:   {router.query.car}

            <p>
                <Link href="/">Home</Link>
            </p>
        </>
    )
}