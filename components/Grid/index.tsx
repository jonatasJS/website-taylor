import Card from '../Card';

import styles from './styles.module.scss';

function Grid() {
  return (
    <div className={styles.Grid}>
      <Card href="https://www.instagram.com/taylorief/" title="Instagram" />
      <Card href="https://t.me/+M2TQPo5ZY4VjOGEx" title="Telegram" />
      <Card href="https://twitter.com/iefutebol1" title="Twitter" />
      <Card href="https://wa.me/message/W4NIZ7STXOAZI1" title="Whatsapp" />
      <Card href="https://api.whatsapp.com/send?phone=5563992809790&text=Ol%C3%A1%2C%20gostaria%20de%20conversa%20sobre%20publicidade" title="Contatos para publicidade" />
      <Card href="https://api.whatsapp.com/send?phone=5563992809790&text=Ol%C3%A1%2C%20gostaria%20de%20conversa%20sobre%20publicidade" title="Contato nerdilize" />
    </div>
  )
}

export default Grid;