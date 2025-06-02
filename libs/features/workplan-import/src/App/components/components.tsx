import { color, text, borderRadius } from '@planview/pv-utilities';
import styled from 'styled-components';

export const StyledApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const ModalInfo = styled.div`
    display: flex;
    height: 24px;
    margin-top: 10px;
    padding: 5px 5px 5px 0;
    justify-content: center;
    align-items: center;
    ${borderRadius.medium};
    background: ${color.backgroundNeutral0Active};
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InstructionText = styled.span`
    ${text.h1};
    color: ${color.textPrimary};
`;

export const InfoTextSecondary = styled.span`
    ${text.small};
    color: ${color.textSecondary};
`;

export const InfoText = styled.span`
    ${text.regular};
    color: ${color.textPrimary};
`;

export const LoaderText = styled.div`
    ${text.regular};
    padding-bottom: 16px;
`;

export const SuccessText = styled.div`
    ${text.regular};
    color: ${color.textSuccess};
    padding-bottom: 10px;
`;

export const ErrorText = styled.div`
    ${text.regular};
    color: ${color.textError};
`;

export const ErrorLabelText = styled.div`
    ${text.regular};
    color: ${color.textSecondary};
`;
