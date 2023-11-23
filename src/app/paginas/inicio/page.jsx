import Image from 'next/image'
import Link from 'next/link'
import "./inicio.scss"


export default function Home({ children }) {
  return (
    <div className=''>
      <header>
        <div>
          <div className='img'>
              <Image
                src="/img/sangue.png"
                alt='sangue'
                width={450}
                height={450}
              />
          </div>
          <h1>Doação de Sangue</h1>
          <h2>A doação de sangue é um ato simples mas muito importante que pode salvar muitas vidas. 
            Infelizmente, a necessidade de doadores de sangue é constante e muitas vezes maior que a quantidade de doações.</h2>
        </div>
        
        <nav>
          <p><Link href="/paginas/compromisso"></Link></p>
        </nav>
      </header>
    </div>
  )
}