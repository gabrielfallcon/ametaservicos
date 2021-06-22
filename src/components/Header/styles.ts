import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .show-desktop {
    width: 100%;
    
    @media (max-width: 768px) {
      display: none;
    }
    
    &__content-blue {
      width: 100%;
      height: 40px;
      background: #1F2F84;
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        color: #ffffff;
        font-size: 20px;
        margin-inline: auto;
      }

    }
    &__content-logo {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .content {
        width: 100%;
        max-width: 1120px;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .contact {
          position: absolute;
          left: 0;

          span {
            strong {
              color: #1F2F84;
            }
          }
        }

        & > img {
          width: 100px;
        } 

        & > p {
          position: absolute;
          right: 0;
          font-weight: 600;
        }
      }
    }
    &__nav {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fafafa;

      .nav-content {
        width: 100%;
        max-width: 1120px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > ul {
          list-style: none;
          display: flex;
          gap: 16px;

          li {
            a {
              color: #1F2F84;
              font-weight: 700;
              text-decoration: none;
              font-size: 16px;
              text-transform: uppercase;
            }
          }
        }

        .btn--primary {
          width: 186px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1F2F84;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          font-size: 14px;
        }
      }
    }
  }
  .show-mobile {
    width: 100%;
    display: none;
    position: relative;

    @media (max-width: 768px) {
      display: flex;
    }

    &__content {
      width: 100%;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      & > svg {
        position: absolute;
        left: 8px;
        top: 20%;
        color: #1F2F84;
      }

      & > img {
        width: 60px;
      }
    }
    &__modal {
      width: 100vw;
      height: 100vh;
      position: fixed;
      background: #ffffff;
      top: 0;
      left: -110%;
      transition: .6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      display: flex;
      z-index: 999;

      & > svg {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #1F2F84;
      }

      .modal-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;

        & > img {
          margin-bottom: 20%;
        }
        .nav-menu-mobile {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 32px;

          a {
            text-decoration: none;
            font-size: 20px;
            text-transform: uppercase;
            color: #1F2F84;
            font-weight: 700;
          }
        }
      }
    }

    &__modal--active {
      left: 0;
    }
  }
`;
