import Link from "next/link";

import { BiShareAlt as ShareIcon } from 'react-icons/bi';

import styles from './styles.module.scss';

interface CardProps {
  href: string;
  title: string;
}

function Card({ href, title }: CardProps) {
  return (
    <Link href={href}>
      <a target="_blank" className={styles.Card}>{title} <ShareIcon /></a>
    </Link>
  )
}

export default Card;