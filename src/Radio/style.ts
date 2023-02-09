import styled from 'styled-components';
import theme from '../theme/theme';

export const RadioStyle = styled.input`
  &[type='radio'] {
    width: 12px;
    height: 12px;
    appearance: none;
    border-radius: 50%;
    position: relative;
    border: 1px solid ${theme.color.primary40};
  }
  &[type='radio']:checked::before {
    content: '';
    background: ${theme.color.primary40};
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
  }
  &[type]:disabled {
    border: 1px solid #767676;
    background-color: #e1e1e1;
  }
`;
