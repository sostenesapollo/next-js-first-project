import {useState} from 'react';
import Head from 'next/head';


export default function Home () {
    return <Contador/>
}

function Contador() {
 
    const [contador, setContador] = useState(0)

    function incrementa() {
        setContador(contador + 1)
    }

    const arr = [
        {name:"Jon", age: 19},
        {name:"Mattew", age: 20},
        {name:"Igor", age: 14},
    ]

    return (

        <div>
            <Head>Test</Head>
            <button onClick={incrementa}>
                Incrementar contadores
            </button>
            <p>{contador}</p>
            {arr.map(o=>{
                return <p>
                    {o.name} {o.age} y.o.
                </p>
            })}
        </div>

    )
}