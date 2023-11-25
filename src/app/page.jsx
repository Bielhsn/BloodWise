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
            
            <button className="btn"><Link href="/paginas/formulario">Encontre um centro de doação de sangue perto de você</Link></button>
          </div>
          <div className='img'>
              <Image
                src="/img/sangue.png"
                alt='sangue'
                width={600}
                height={600}
              />
            <h1 className='ajudando'>Por que doar sangue é importante?</h1>

            <div className="card">
              <div className="bg"><h3>Você pode salvar vidas!</h3>
              <p>Doar sangue é uma forma direta de ajudar outras pessoas e pode fazer a diferença entre a vida e a morte para quem precisa.</p>
              </div>
              <div className="blob"></div>
            </div>
            <div className="card_2">
              <div className="bg_2"><h3>Renovação do estoque de sangue</h3>
              <p>Os estoques de sangue de um banco de sangue duram por um tempo limitado, então é necessário uma doação constante para manter o suprimento.</p>
              </div>
              <div className="blob_2"></div>
            </div>
            <div className="card_3">
              <div className="bg_3"><h3>Exames gratuitos</h3>
              <p>Antes de doar sangue, você passa por uma triagem que pode identificar problemas de saúde que você desconhecia.</p>
              </div>
              <div className="blob_3"></div>
            </div>
          </div>
          <div>
            <h1 className='request_blood'>Requisitos para doar sangue</h1>    
            <div className="card_request_blood">
              <div className="card_idade">
              <h3 className='request_blood' id='age'>Idade</h3>
              <p className='age_request'>Você precisa ter entre 16 e 69 <br></br> anos para doar sangue.<br></br> Menores de 18 anos precisam<br></br> de autorização dos pais ou <br></br>responsáveis.</p>
              </div>

              <div className="card_peso">
              <h3 className='request_blood' id='weight'>Peso</h3>
              <p className='weight_request'>Você precisa pesar no mínimo <br></br>50 Kg e ter um índice de <br></br>massa corporal (IMC) dentro<br></br> da faixa permitida.</p>
            </div>

            <div className="card_requisitos">
              <h3 className='request_blood' id='requirements'>Outros requisitos</h3>
              <ul className='requirements_request'>
                <li>Estar descansado e alimentado</li>
                <li>Não ter ingerido bebidas alcoólicas nas últimas 12 horas</li>
                <li>Não ter tido doenças infecciosas nos últimos dias</li>
              </ul>
            </div>
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