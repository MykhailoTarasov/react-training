import styled from 'styled-components';

const getBorderColor = ({ theme, level }) => {
  switch (level) {
    case 'beginner':
      return theme.colors.green;
    case 'intermediate':
      return theme.colors.blue;
    case 'advanced':
      return theme.colors.orange;
    default:
      return null;
  }
};

export const Container = styled.div`
  border: 2px solid ${getBorderColor};
  border-radius: ${p => p.theme.radii.sm};
  position: relative;
`;



export const InfoWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(1)};
`;

export const ButtonBox = styled.div`
position: absolute;
top: 8px;
right: 8px;
display: flex;
gap: 8px;
`

export const Info = styled.p`
  margin: 0;
`;
