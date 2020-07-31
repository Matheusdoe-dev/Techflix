import styled from "styled-components";
// imgs
import introBg from "../../assets/img/intro-bg.jpg";

export const HeroContainer = styled.main`
  & {
    background: url(${introBg});
    height: 720px;

    h1,
    p {
      text-align: center;
      color: var(--support-1);
    }

    h1 {
      width: 710px;
      margin: 164px auto 0 auto;

      @media (max-width: 600px) {
        & {
          max-width: 100%;
          margin-top: var(--gap-lg);
        }
      }
    }

    p {
      margin-top: var(--gap-sm);

      @media (max-width: 600px) {
        & {
          margin-bottom: var(--gap-lg);
        }
      }
    }

    @media (max-width: 600px) {
      height: auto;
    }
  }
`;
