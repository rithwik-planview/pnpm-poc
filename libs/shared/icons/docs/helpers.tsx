import * as React from 'react';
import styled from 'styled-components';
import { size, text, spacing, theme } from '@planview/pv-utilities';
import { Filter } from '@planview/pv-icons';
import { Input } from '@planview/pv-form';

const IconVariantBox = styled.div`
    display: grid;
    place-content: center;
    height: ${size.large}px;
    width: ${size.large}px;
    background: ${theme.gray50};
    color: ${theme.iconNormal};
`;

const IconVariantContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1 1 150px;
    max-width: 150px;
    ${text.regular};
    margin-bottom: ${spacing.small}px;
    text-align: center;
`;

const Label = styled.p`
    text-align: center;
`;

export const IconVariant: React.FC<{
    name: string;
    children: React.ReactNode;
}> = ({ name, children }) => (
    <IconVariantContainer>
        <IconVariantBox>{children}</IconVariantBox>
        <Label>{name}</Label>
    </IconVariantContainer>
);

export const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

function nameToHyphen(name: string) {
    return name
        .split(/(?=[A-Z])/g)
        .join('-')
        .toLowerCase();
}

const showFigmaNames = window.location.search.includes('iconNames=figma');

type IconFinderDef = {
    name: string;
    icon: React.JSX.Element;
    description: string[];
};

export const IconFinder = ({ icons }: { icons: IconFinderDef[] }) => {
    const [filter, setFilter] = React.useState('');

    const normalizedFilter = filter.toLowerCase();
    return (
        <>
            <Input
                label="Filter icons"
                icon={<Filter />}
                value={filter}
                onChange={setFilter}
                placeholder="Name or related term"
            />
            <Wrapper style={{ marginTop: 20 }}>
                {icons
                    .filter((i) => {
                        if (!filter) {
                            return true;
                        }

                        const hyphenName = nameToHyphen(i.name);

                        return (
                            i.name.toLowerCase().includes(normalizedFilter) ||
                            hyphenName.includes(normalizedFilter) ||
                            i.description.some((d) => d.includes(normalizedFilter))
                        );
                    })
                    .map(({ icon, name }) => (
                        <IconVariant name={showFigmaNames ? nameToHyphen(name) : name} key={name}>
                            {icon}
                        </IconVariant>
                    ))}
            </Wrapper>
        </>
    );
};
