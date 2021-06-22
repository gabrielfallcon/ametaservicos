import { Container } from './styles';

export function BannerWrapper() {
  return (
    <Container>

      <div className="content-banner">
        <h1>
          AMeta Serviços - atender para entender e resolver soluções complexas em projetos de telecom
        </h1>

        <a href="">Saiba Mais</a>
      </div>
      <video loop autoPlay={true} src="videos/video-ameta.mp4"  className="bg_video">
      </video>
    </Container>
  )
}