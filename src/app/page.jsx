import Image from 'next/image'
import Link from 'next/link'


export default function Home({ children }) {
  return (
    <div className=''>
      <header>
        <div className="img_blood">
          <div className='img'>
              <Image
                src="/img/sangue.png"
                alt='sangue'
                width={750}
                height={750}
              />
          </div>
        </div>
        
        <nav>
          <p><Link href="/paginas/compromisso"></Link></p>
        </nav>
      </header>
    </div>
  )
}