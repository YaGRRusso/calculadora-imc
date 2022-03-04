import { Levels } from "../../helpers/imc"
import styles from './GridItem.module.css'
import UpImg from '../../assets/img/up.png'
import DownImg from '../../assets/img/down.png'

type Props = {
   data: Levels
}

const GridItem = ({ data }: Props) => {
   return (
      <div className={styles.gridCard} style={{ backgroundColor: data.color }}>
         <div className={styles.gridIcon}>
            <img src={data.icon === 'up' ? UpImg : DownImg} alt="Rate" width='30' />
         </div>
         <div className={styles.gridTitle}>{data.title}</div>
         <div className={styles.gridInfo}>
            {data.result ? <>Seu IMC é de <strong style={{ fontSize: '18px' }}>{data.result.toFixed(2)}</strong> kg/m²</> : <>IMC entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong></>}
         </div>
      </div>
   )
}

export default GridItem