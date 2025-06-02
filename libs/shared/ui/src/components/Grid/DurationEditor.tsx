import { useEffect, useRef, useState } from 'react';
import type { CellEditorParams } from '@planview/pv-grid';

import { theme, useEscapeListener, shadow } from '@planview/pv-utilities';

import { DropdownMenu, Input, ListItem } from '@planview/pv-uikit';

import styled from 'styled-components';

const DurationWrapper = styled.div`
    position: relative;
`;

const EditorWrap = styled.div<{ theme: { zindex: number } }>`
    position: absolute;
    display: flex;
    flex-flow: row no-wrap;
    background-color: ${theme.backgroundNeutral0};
    z-index: ${(props) => props.theme.zindex};
    ${shadow.regular};
`;

const Info = styled.span`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const TabTrap = styled(Info)``;

const SCALES = [
    'Minutes',
    'Hours',
    'Days',
    'Weeks',
    'Months',
    'Consecutive Minutes',
    'Consecutive Days',
    'Consecutive Weeks',
    'Consecutive Months',
];

const UNIT_MAP: Record<string, string> = {
    min: 'Minutes',
    h: 'Hours',
    d: 'Days',
    w: 'Weeks',
    mo: 'Months',
    cmin: 'Consecutive Minutes',
    ch: 'Consecutive Hours',
    cd: 'Consecutive Days',
    cw: 'Consecutive Weeks',
    cmo: 'Consecutive Months',
};

const REVERSE_UNIT_MAP: Record<string, string> = {
    Minutes: 'min',
    Hours: 'h',
    Days: 'd',
    Weeks: 'w',
    Months: 'mo',
    'Consecutive Minutes': 'cmin',
    'Consecutive Hours': 'ch',
    'Consecutive Days': 'cd',
    'Consecutive Weeks': 'cw',
    'Consecutive Months': 'cmo',
};

function parseDuration(value: string): { inputValue: string; unit: string } {
    const match = value.trim().match(/^(\d+)\s*([a-zA-Z]+)$/);
    if (!match) return { inputValue: '', unit: 'Days' };

    const [, num, unit] = match;
    return {
        inputValue: num,
        unit: UNIT_MAP[unit] ?? 'Days',
    };
}

export const DurationEditor = ({
    value: valueIncoming,
    onCancel,
    onConfirm,
}: CellEditorParams<{ id: string }>) => {
    const { inputValue: parsedValue, unit: parsedScale } = parseDuration(valueIncoming);
    const [value, setValue] = useState(parsedValue);
    const [scale, setScale] = useState(parsedScale);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const grandparent = ref.current.parentElement?.parentElement;
            if (grandparent) {
                // Save previous inline style to restore later
                const previousZIndex = grandparent.style.zIndex;
                // Apply new style
                grandparent.style.zIndex = '1';
                return () => {
                    grandparent.style.zIndex = previousZIndex;
                };
            }
        }
    }, []);

    //Handle escape key
    useEscapeListener({ onEscape: onCancel, stack: true });

    return (
        <DurationWrapper ref={ref}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onConfirm(value ? `${value} ${REVERSE_UNIT_MAP[scale]}` : '');
                }}
                aria-label="Edit duration"
                aria-describedby="form-info"
            >
                <EditorWrap>
                    <Info id="form-info">
                        Use enter or tab to confirm, escape to cancel editing.
                    </Info>
                    <TabTrap
                        aria-hidden="true"
                        onFocus={() =>
                            // If we end up here this means the user has shift-tabbed out of the form
                            onConfirm(value, {
                                continueEditing: 'previous',
                            })
                        }
                        tabIndex={0}
                    />
                    <Input onChange={setValue} focus value={value} style={{ width: '74px' }} />
                    <DropdownMenu trigger={{ label: scale, withCaret: true }} label="Time chooser">
                        {SCALES.map((s) => (
                            <ListItem label={s} onActivate={() => setScale(s)} key={s} />
                        ))}
                    </DropdownMenu>
                    <TabTrap
                        aria-hidden="true"
                        onFocus={() =>
                            // If we end up here this means the user has shift-tabbed out of the form
                            onConfirm(value, { continueEditing: 'next' })
                        }
                        tabIndex={0}
                    />
                </EditorWrap>
            </form>
        </DurationWrapper>
    );
};
