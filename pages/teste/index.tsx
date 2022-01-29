import type { NextPage } from 'next';
import Link from 'next/link';

const Teste: NextPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',	
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    }}>
      <h1>Oiiii</h1>

      <Link href='/'>Home</Link>
    </div>
  )
}

export default Teste
