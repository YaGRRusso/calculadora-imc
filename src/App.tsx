import { useState } from 'react'
import styles from './App.module.css'
import poweredImg from "./assets/img/powered.png"
import leftarrowImg from "./assets/img/leftarrow.png"
import GridItem from './components/GridItem/GridItem';

import { levels, calculateImc, Levels } from './helpers/imc'

function App() {
  const [altura, setAltura] = useState(0.0);
  const [peso, setPeso] = useState(0.0);
  const [resultado, setResultado] = useState<Levels | null>(null)

  function calcularImc() {
    if (altura && peso) {
      setResultado(calculateImc(altura, peso))
    } else {
      alert('Preencha os campos!')
    }
  }

  function resetImc() {
    setResultado(null)
    setAltura(0)
    setPeso(0)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.container}>
          <img src={poweredImg} alt="powered" />
        </div>
      </header>
      <div className={styles.container}>
        <section className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>

          <input type="number" placeholder='Digite sua altura em metros...' value={altura > 0 ? altura : ''} onChange={(ev) => { setAltura(+ev.target.value) }} disabled={resultado ? true : false} />
          <input type="number" placeholder='Digite seu peso em kilos...' value={peso > 0 ? peso : ''} onChange={(ev) => { setPeso(+ev.target.value) }} disabled={resultado ? true : false} />
          <button onClick={calcularImc} disabled={resultado ? true : false}>Calcular</button>
        </section>
        <section className={styles.rightSide}>
          {!resultado &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <div key={key}><GridItem data={item} /></div>
              ))}
            </div>
          }
          {resultado &&
            <div className={styles.result}>
              <div className={styles.returnArrow} onClick={resetImc}><img src={leftarrowImg} alt="Voltar" width={30} /></div>
              <GridItem data={resultado} />
            </div>
          }
        </section>
      </div>
    </div>
  )
}

export default App