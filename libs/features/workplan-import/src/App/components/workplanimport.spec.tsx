import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import WorkplanImport from './workplanimport';
import '@testing-library/jest-dom';

describe.skip('WorkplanImport', () => {
    it('should render the Import button', () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        expect(screen.getByText('Import')).toBeInTheDocument();
    });

    it('should open the modal when the Import button is clicked', () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        fireEvent.click(screen.getByText('Import'));
        expect(screen.getByText('Upload File')).toBeInTheDocument();
    });

    it('should display supported file types in the modal', () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        fireEvent.click(screen.getByText('Import'));
        expect(screen.getByText('Supported file types: .xls, .xlsx, .xml')).toBeInTheDocument();
    });

    it('should handle file upload successfully', async () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        fireEvent.click(screen.getByText('Import'));

        const file = new File(['dummy content'], 'test.xlsx', {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const input = screen.getByTestId('file-input');
        fireEvent.change(input, { target: { files: [file] } });

        await waitFor(
            () => expect(screen.getByText('File Uploaded Successfully')).toBeInTheDocument(),
            { timeout: 3000 },
        );

        expect(screen.getByText('test.xlsx')).toBeInTheDocument();
    });

    it('should display an error for unsupported file types', async () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        fireEvent.click(screen.getByText('Import'));

        const file = new File(['dummy content'], 'test.txt', {
            type: 'text/plain',
        });
        const input = screen.getByTestId('file-input');
        fireEvent.change(input, { target: { files: [file] } });

        await waitFor(
            () =>
                expect(
                    screen.getByText(
                        `This type of file isn't supported. Please upload a compatible file.`,
                    ),
                ).toBeInTheDocument(),
            { timeout: 3000 },
        );
    });

    it('should reset the state when the Cancel button is clicked', () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        fireEvent.click(screen.getByText('Import'));

        const file = new File(['dummy content'], 'test.xlsx', {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const input = screen.getByTestId('file-input');
        fireEvent.change(input, { target: { files: [file] } });

        fireEvent.click(screen.getByText('Cancel'));
        expect(screen.queryByText('File Uploaded Successfully')).not.toBeInTheDocument();
    });

    it('should handle drag-and-drop file upload', async () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        fireEvent.click(screen.getByText('Import'));

        const file = new File(['dummy content'], 'test.xlsx', {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const dropZone = screen.getByText('Drag and drop files');

        fireEvent.dragOver(dropZone);
        fireEvent.drop(dropZone, { dataTransfer: { files: [file] } });

        await waitFor(
            () => expect(screen.getByText('File Uploaded Successfully')).toBeInTheDocument(),
            { timeout: 3000 },
        );
        expect(screen.getByText('test.xlsx')).toBeInTheDocument();
    });

    it('should disable the delete icon when loading', () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        fireEvent.click(screen.getByText('Import')); // Open the modal

        const file = new File(['dummy content'], 'test.xlsx', {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const input = screen.getByTestId('file-input');
        fireEvent.change(input, { target: { files: [file] } });

        const trashIcon = screen.getByTestId('file-delete');

        expect(trashIcon).toHaveAttribute('aria-disabled', 'true');
        expect(trashIcon).toHaveStyle('cursor: not-allowed');
    });

    it('should delete the uploaded file when the trash icon is clicked', async () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        fireEvent.click(screen.getByText('Import'));

        const file = new File(['dummy content'], 'test.xlsx', {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const input = screen.getByTestId('file-input');
        fireEvent.change(input, { target: { files: [file] } });
        expect(screen.getByText('test.xlsx')).toBeInTheDocument();

        await waitFor(
            () => {
                const trashIcon = screen.getByTestId('file-delete');
                fireEvent.click(trashIcon);
                expect(screen.queryByText('test.xlsx')).not.toBeInTheDocument();
            },
            { timeout: 3000 },
        );

        expect(screen.queryByText('File Uploaded Successfully')).not.toBeInTheDocument();
    });

    it('should disable the Continue button if no file is uploaded', () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        fireEvent.click(screen.getByText('Import'));

        const continueButton = screen.getByRole('button', { name: /continue/i });
        expect(continueButton).toHaveAttribute('aria-disabled', 'true');
    });

    it('should enable the Continue button when a valid file is uploaded', () => {
        render(<WorkplanImport entityExternalId="1" entityType="Workitem" />);
        fireEvent.click(screen.getByText('Import'));

        const file = new File(['dummy content'], 'test.xlsx', {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const input = screen.getByTestId('file-input');
        fireEvent.change(input, { target: { files: [file] } });

        const continueButton = screen.getByRole('button', { name: /continue/i });
        expect(continueButton).toBeEnabled();
    });
});
