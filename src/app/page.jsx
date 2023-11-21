import Image from 'next/image'
import Link from 'next/link'


export default function Home({ children }) {
  return (
    <div className=''>
      <header>
        <div className="img_blood">

          <div className='img'>
              <Image
                src="/img/Blood.png"
                alt='sangue'
                width={300}
                height={220}
              />
          </div>
        </div>
      </header>
    </div>
  )
}