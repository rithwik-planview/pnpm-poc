import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DurationEditor } from './DurationEditor';

describe('DurationEditor', () => {
    const baseProps = {
        label: 'Duration',
        rowId: 'row-1',
        columnId: 'col-1',
        tabIndex: 0,
        mode: 'editing' as const,
        onConfirm: jest.fn(),
        onCancel: jest.fn(),
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render successfully', () => {
        const { baseElement } = render(<DurationEditor {...baseProps} value="1d" />);
        expect(baseElement).toBeTruthy();
    });

    it('should display the parsed value and scale', () => {
        render(<DurationEditor {...baseProps} value="5h" />);
        expect(screen.getByDisplayValue('5')).toBeInTheDocument();
        expect(screen.getByText('Hours')).toBeInTheDocument();
    });

    it('should default to Days if value is invalid', () => {
        render(<DurationEditor {...baseProps} value="invalid" />);
        expect(screen.getByDisplayValue('')).toBeInTheDocument();
        expect(screen.getByText('Days')).toBeInTheDocument();
    });

    it('should call onConfirm with correct value on submit', () => {
        render(<DurationEditor {...baseProps} value="2w" />);
        const input = screen.getByDisplayValue('2');
        fireEvent.change(input, { target: { value: '10' } });
        fireEvent.submit(input.closest('form')!);
        expect(baseProps.onConfirm).toHaveBeenCalledWith('10 w');
    });

    it('should call onCancel when escape is pressed', () => {
        render(<DurationEditor {...baseProps} value="3mo" />);
        const input = screen.getByDisplayValue('3');
        fireEvent.keyDown(input, { key: 'Escape', code: 'Escape' });
        expect(baseProps.onCancel).toHaveBeenCalled();
    });

    it('should call onConfirm with empty string if input is empty', () => {
        render(<DurationEditor {...baseProps} value="1d" />);
        const input = screen.getByDisplayValue('1');
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.submit(input.closest('form')!);
        expect(baseProps.onConfirm).toHaveBeenCalledWith('');
    });
});
