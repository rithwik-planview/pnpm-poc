import { Spinner } from '@planview/pv-uikit';
import styled from 'styled-components';

const StyledLoadingContainer = styled.div`
    display: flex;
    flex: 1;
    margin: auto;
    justify-content: center;
`;

export const LoadingContainer = (): React.ReactElement => {
    return (
        <StyledLoadingContainer data-testid="LoadingContainer">
            <Spinner size="large" />
        </StyledLoadingContainer>
    );
};
