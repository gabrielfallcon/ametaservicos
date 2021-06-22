import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 380px;
  overflow: hidden;
  align-items: c;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .bg_video {
    width: 100%;
  }
  .content-banner {
    width: 100%;
    height: 100%;
    background: rgba(31, 47, 132, .9);
    z-index: 100;
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 10%;
    
    @media (max-width: 768px) {
      height: 65%;
    }

    h1 {
      width: 100%;
      max-width: 650px;
      font-size: 36px;
      color: #fafafa;
      margin-bottom: 40px;

      @media (max-width: 768px) {
        font-size: 24px;
      }
    }

    a {
      width: 169px;
      height: 45px;
      background: #fafafa;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1F2F84;
      font-size: 14px;
      letter-spacing: 0.02em;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;
