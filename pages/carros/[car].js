import Link from 'next/link'
import {useRouter} from 'next/router'
import { NextSeo } from 'next-seo';


export async function getServerSideProps({params}) {  
    return { props: { data: params } }
}


export default function Cars({data}) {
       
    console.log(data)
    return (
        <>
            <NextSeo
                title={"Car: "+data.car}
                description="Then with a short description here."
            />
            {/* Carro nome:   {router.query.car} */}

            <p>
                <Link href="/">Home</Link>
            </p>
        </>
    )
}
