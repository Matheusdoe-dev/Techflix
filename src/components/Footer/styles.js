import styled from "styled-components";

export const FooterContainer = styled.footer`
  & {
    padding: var(--gap-lg) 0;
    background: var(--secondary-2);

    a {
      display: block;
      margin-bottom: var(--gap-sm);
      color: var(--support-1);
      transition: 0.2s;

      &:hover {
        color: var(--primary);
        transition: 0.2s;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    p {
      color: var(--support-2);
      font-size: 0.875rem;
      text-align: center;
      opacity: 85%;
      margin-top: var(--gap-md);
    }
  }
`;
