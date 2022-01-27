import Card from '../Card';

import styles from '../../styles/Home.module.scss';

function Grid() {
  return (
    <div className={styles.Grid}>
      <Card href="https://www.instagram.com/taylorief/" title="Canal de Vendas" />
      <Card href="https://www.instagram.com/taylorief/" title="Contato paa Publicidade" />
      <Card href="https://www.instagram.com/taylorief/" title="1XBET (bonus130porcento)" />
      <Card href="https://www.instagram.com/taylorief/" title="Canal FREE" />
      <Card href="https://www.instagram.com/taylorief/" title="Twitter" />
      <Card href="https://www.instagram.com/taylorief/" title="Facebook" />
    </div>
  )
}

export default Grid;