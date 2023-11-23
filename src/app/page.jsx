import Image from 'next/image'
import Link from 'next/link'
import "./inicio.scss"

export default function Home({ children }) {
  return (
    <div className=''>
      <header>
        <div>
          <div className='d_titulo'>
          <h1 className='titulo'>Doação de Sangue</h1>
          <h2 className='subt'>A doação de sangue é um ato simples mas muito importante que pode salvar muitas vidas. 
            Infelizmente, <br></br> a necessidade de doadores de sangue é constante e muitas vezes maior que a quantidade de doações.</h2>
          </div>
          <div className='img'>
              <Image
                src="/img/sangue.png"
                alt='sangue'
                width={600}
                height={600}
              />
            <h1 className='ajudando'>Por que doar sangue é importante?</h1>

            <div class="card">
              <div class="bg"><h3>Você pode salvar vidas!</h3>
              <p>Doar sangue é uma forma direta de ajudar outras pessoas e pode fazer a diferença entre a vida e a morte para quem precisa.</p>
              </div>
              <div class="blob"></div>
            </div>
            <div class="card_2">
              <div class="bg_2"><h3>Renovação do estoque de sangue</h3>
              <p>Doar sangue é uma forma direta de ajudar outras pessoas e pode fazer a diferença entre a vida e a morte para quem precisa.</p>
              </div>
              <div class="blob_2"></div>
            </div>
            <div class="card_3">
              <div class="bg_3"><h3>Exames gratuitos</h3>
              <p>Antes de doar sangue, você passa por uma triagem que pode identificar problemas de saúde que você desconhecia.</p>
              </div>
              <div class="blob_3"></div>
            </div>
          </div>
          <div>
            <div>
            <h1 className='request_blood'>Requisitos para doar sangue</h1>
            <h3>Idade</h3>
            <p>Você precisa ter entre 16 e 69 anos para doar sangue. Menores de 18 anos precisam de autorização dos pais ou responsáveis.</p>
            </div>
            <div>
            <h3>Peso</h3>
            <p>Você precisa pesar no mínimo 50 Kg e ter um índice de massa corporal (IMC) dentro da faixa permitida.</p>
            </div>
            <div>
            <h3>Outros requisitos</h3>
            <ul>
              <li>Estar descansado e alimentado</li>
              <li>Não ter ingerido bebidas alcoólicas nas últimas 12 horas</li>
              <li>Não ter tido doenças infecciosas nos últimos dias</li>
            </ul>
            </div>
          </div>

        </div>
        
        <nav>
          <p><Link href="/paginas/compromisso"></Link></p>
        </nav>
      </header>
    </div>
  )
}