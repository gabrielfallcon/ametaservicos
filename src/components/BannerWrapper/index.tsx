import Link from 'next/link';
import styles from './bannerWrapper.module.scss';

export function BannerWrapper() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBanner}>
        <h1>
          Ameta Serviços - atender para entender e resolver soluções complexas em projetos de telecom
        </h1>

        <Link href="/services">
       
            Saiba Mais
         
        </Link>
      </div>

      <div className={styles.contentVideo}>
        <video muted loop autoPlay={true} src="videos/video-ameta.mp4"  className={styles.bgVideo}>
        </video>
      </div>
    </div>
  )
}