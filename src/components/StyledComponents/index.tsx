import styled from '@emotion/styled';
import { typography, TypographyProps, space, SpaceProps } from 'styled-system';

export const H1 = styled.h1<TypographyProps>`
  ${typography};
`;
export const P = styled.p<TypographyProps & SpaceProps>`
  ${typography};
  ${space}
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
