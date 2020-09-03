import styled, { css } from "styled-components";
import { FaHandshake } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 16px 16px;

  > .title {
    font-size: 16px;
    margin-left: 6px;
    color: var(--color-blue);
    font-weight: 600;
  }
`;

const iconCss = css`
  width: 30px;
  height: 30px;
  color: var(--color-white);
`;

export const ShakeHandsIcon = styled(FaHandshake)`
  ${iconCss}
`;

export const Rounded = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-header) 0.9;
  border: 2px solid var(--color-blue);

  display: flex;
  align-items: center;
  justify-content: center;
`;
