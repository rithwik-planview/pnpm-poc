import {
    FileExcel,
    MsProject,
    CheckmarkCircleFilled,
    Trash,
    IssueFilled,
    Reinvite,
    Info,
    Search,
    Filter,
    Eraser,
    Refresh,
    Warning,
} from '@planview/pv-icons';
import { ToolbarSeparator } from '@planview/pv-toolbar';
import {
    ButtonPrimary,
    Modal,
    ButtonGhost,
    Spinner,
    MODAL_LARGE,
    EmptyStateError,
    Input,
    Combobox,
    type ComboboxOption,
    ContentLayout,
} from '@planview/pv-uikit';
import { iconSizes, color, borderRadius, spacing, border } from '@planview/pv-utilities';
import { forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import {
    InfoContainer,
    IconContainer,
    InfoTextSecondary,
    SuccessText,
    InstructionText,
    ErrorText,
    ModalInfo,
    InfoText,
    LoaderText,
    ErrorLabelText,
} from './components';
import { useFileUploadMutation } from '../hooks/useFileUploadMutation';
import { Grid, type GridColumnBorder, type GridConfirmPayload } from '@planview/pv-grid';
import useImportedFileDataLoader from '../hooks/useImportedFileDataLoader';
import useValidateMutation from '../hooks/useValidateMutation';
import React from 'react';
import type { WorkplanData } from '../types';
import {
    filterOptions,
    formatErrorMessage,
    getColumnConfigForNullFields,
    getColumnConfigFromField,
} from '../utils/grid-utils';
import { DetailsPanel } from '@planview/pv-details';
import { useQuery } from '@tanstack/react-query';
import { metadataGetPicklistOptions, type EnrichedEntity } from '@unity/shared.hybrid';

interface ModalContentProps {
    isDragActive: boolean;
    file?: File | null;
}
interface ErrorItemProps {
    active: boolean;
}

export const ModalContent = styled.div<ModalContentProps>`
    display: flex;
    padding: 20px 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    ${borderRadius.medium};
    border: 1px dashed
        ${({ isDragActive, file }) => (isDragActive && !file ? color.blue400 : '#DDD')};
    background-color: ${({ isDragActive, file }) =>
        isDragActive && !file ? '#f0f8ff' : 'transparent'};
    transition:
        background 0.3s,
        border 0.3s;
`;

const GridContainer = styled.div`
  display: flex;
  padding: 0px;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  table tr {
  --grid-row-border-color: ${color.borderLight};
  border-bottom: 1px solid var(--grid-row-border-color);
`;

const ActionBar = styled.div`
    display: flex;
    min-height: 66px;
    padding: 0px ${spacing.medium}px;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background: ${color.backgroundNeutral50};
`;
const GridSearchWrapper = styled.div`
    width: 323px;
`;
const GridFilterWrapper = styled.div`
    width: 153px;
`;
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const LeftItemsWrapper = styled.div`
    display: flex;
    gap: 16px;
`;

const RightItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const ErrorItem = styled.div<ErrorItemProps>`
    padding: 10px;
    cursor: pointer;
    transition: background 0.2s ease;
    border: ${({ active }) => (active ? border.active : 'none')};
    border-bottom: ${({ active }) => (active ? border.active : '1px solid #ddd')};

    background: ${({ active }) => (active ? color.backgroundTranslucentActive : 'transparent')};
    ${({ active }) =>
        !active &&
        `
      &:hover {
        background: ${color.backgroundTranslucentHover};
      }
    `}
`;

const ErrorIconContainer = styled.div<{ isVisible?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 0.2s ease;

    ${ErrorItem}:hover & {
        opacity: 1;
    }
`;

type Props = {
    entityExternalId: string;
    entityType: string;
};

enum UploadType {
    Workplan = 'WORKPLAN',
    Normal = 'NORMAL',
}

export type WorkplanImportHandle = {
    refresh: () => void;
};

type ErrorItemType = {
    message: string;
    key: string;
};

export const WorkplanImport = forwardRef<WorkplanImportHandle, Props>(function WorkplanImport(
    { entityExternalId = '1', entityType = 'Workitem' },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _ref,
) {
    const [show, setShow] = useState<boolean>(true);
    const [isDragActive, setIsDragActive] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);
    const [errMsg, setErrMsg] = useState<string>('');
    const [isUploaded, setIsUploaded] = useState<boolean>(false);
    const [fileData, setFileData] = useState<WorkplanData | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<ComboboxOption>(filterOptions[0]);
    const [showErrorsPanel, setShowErrorsPanel] = useState<boolean>(false);
    const [activeErrorItem, setactiveErrorItem] = useState<number | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const mutation = useFileUploadMutation();
    const validateMutation = useValidateMutation();

    // TODO: Create a query to fetch the file by GUID - later invalidate it using queryKey after receiving mutation response
    /*
const queryClient = useQueryClient()
useImperativeHandle(
ref,
() => ({
  refresh: () => {
    queryClient.invalidateQueries({
      queryKey: [{ path: { entityId: entityExternalId } }],
      exact: false,
    })
  },
}),
[entityExternalId, queryClient]
)
*/

    // query to fetch picklist and store it app cache
    useQuery({
        ...metadataGetPicklistOptions({
            body: {
                entityType: 'workItem',
                propertyNames: ['trackStatus', 'state', 'workPolicy'],
            },
        }),
    });

    const resetState = () => {
        setFile(null);
        setErrMsg('');
        setShow(false);
        setIsUploaded(false);
        setFileData(null);
        mutation.reset();
    };

    const handleFileUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        const uploadedFile = files[0]; // Assuming only one file is uploaded
        setFile(uploadedFile);
        try {
            const res = await mutation.mutateAsync({
                file: uploadedFile,
                uploadType: UploadType.Workplan,
                entityType: entityType,
                entityExternalId: entityExternalId,
            });
            setFileData(res);
            setErrMsg('');
        } catch (error: unknown) {
            const errorMessage = (error as { message: string })?.message || 'Something went wrong!';
            setErrMsg(errorMessage);
            setFile(null);
        }
    };

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        setIsDragActive(true);
    };

    const handleDragLeave = () => {
        setIsDragActive(false);
    };

    const handleDrop = (event: React.DragEvent) => {
        if (file) {
            return false;
        } else {
            event.preventDefault();
            setIsDragActive(false);
            handleFileUpload(event.dataTransfer.files);
        }
    };

    const handleFileRender = useCallback(() => {
        setIsUploaded(true);
    }, []);

    const handleDelete = () => {
        setFile(null);
        setErrMsg('');
    };

    const FileStatus = () => {
        const renderTrashIcon = (isPending = false) => (
            <Trash
                style={{ cursor: isPending ? 'not-allowed' : 'pointer' }}
                size={iconSizes.SIZE_SMALL}
                color={isPending ? color.gray300 : color.gray500}
                onClick={!isPending ? handleDelete : undefined}
                data-testid="file-delete"
                aria-disabled={isPending}
            />
        );

        const renderFileInfo = (fileName: string) => (
            <IconContainer>
                <InstructionText>{fileName}</InstructionText>
                {renderTrashIcon(mutation.isPending)}
            </IconContainer>
        );

        if (mutation.isPending) {
            return (
                <>
                    <InfoContainer style={{ gap: '16px' }}>
                        <Spinner size="large" />
                        <LoaderText>Getting your file ready...</LoaderText>
                    </InfoContainer>
                    {renderFileInfo(file?.name || '')}
                </>
            );
        }

        if (mutation.isSuccess && file) {
            return (
                <InfoContainer>
                    <InfoContainer>
                        <CheckmarkCircleFilled
                            size={iconSizes.SIZE_LARGE}
                            color={color.iconSuccess}
                        />
                        <SuccessText>File Uploaded Successfully</SuccessText>
                    </InfoContainer>
                    {renderFileInfo(file.name)}
                </InfoContainer>
            );
        }
        return null;
    };

    const { importData, loading } = useImportedFileDataLoader(fileData);

    const columns = fileData?.headers
        .filter((header) => !header.error)
        .map((f) => {
            const field = f.fieldsResponse;
            const columnConfig = field
                ? getColumnConfigFromField(field)
                : getColumnConfigForNullFields(f);
            return {
                ...columnConfig,
                border: 'right' as GridColumnBorder,
                minWidth: field?.type === 'Relation' ? 200 : 36,
            };
        });

    const filteredRows = useMemo(() => {
        if (!importData?.rows) return {};
        if (!selectedFilter.value) return importData.rows;
        return Object.fromEntries(
            Object.entries(importData.rows).filter(
                ([, row]) => row['Operation']?.value === selectedFilter.value,
            ),
        );
    }, [importData, selectedFilter]);

    const errors: ErrorItemType[] = [];

    fileData?.rows.forEach((row, rowIndex) => {
        Object.entries(row.values).forEach(([key, field]) => {
            if (field.error) {
                errors.push({
                    message: formatErrorMessage(field.error),
                    key: `${rowIndex}-${key}`,
                });
            }
        });
    });

    const resolveErrors = () => {
        setShowErrorsPanel(true);
    };

    const handleErrorItemClick = (index: number) => {
        setactiveErrorItem(index);
    };

    const handleCellChange = async (confirm: GridConfirmPayload) => {
        setFileData((prev) => {
            if (!prev) return prev;
            return {
                ...prev,
                rows: prev.rows.map((row) => {
                    if (row.objectId !== confirm.rowId) return row;
                    return {
                        ...row,
                        values: {
                            ...row.values,
                            [confirm.columnId]: {
                                ...row.values[confirm.columnId],
                                value: Array.isArray(confirm.nextValue)
                                    ? null
                                    : (confirm.nextValue.value ?? confirm.nextValue),
                                isChanged: true,
                                error: null, // Reset error on change
                                ...(row.values[confirm.columnId].listValues && {
                                    listValues: confirm.nextValue,
                                }),
                                ...(row.values[confirm.columnId].serverValue && {
                                    serverValue: confirm.nextValue,
                                }),
                            },
                        },
                    };
                }),
            };
        });

        try {
            const res = await validateMutation.mutateAsync({
                fileId: fileData?.guid || '',
                rows: {
                    [confirm.rowId]: {
                        [confirm.columnId]: Array.isArray(confirm.nextValue)
                            ? confirm.nextValue.map((item) => item.internalId).join(';')
                            : (confirm.nextValue.value ?? confirm.nextValue),
                    },
                },
            });

            if (res.rowErrors[confirm.rowId].cellErrors[confirm.columnId].error) {
                const errorMessage =
                    res.rowErrors[confirm.rowId].cellErrors[confirm.columnId].error;
                setFileData((prev) => {
                    if (!prev) return prev;
                    return {
                        ...prev,
                        rows: prev.rows.map((row) => {
                            if (row.objectId !== confirm.rowId) return row;
                            return {
                                ...row,
                                values: {
                                    ...row.values,
                                    [confirm.columnId]: {
                                        ...row.values[confirm.columnId],
                                        error: errorMessage,
                                    },
                                },
                            };
                        }),
                    };
                });
            }
        } catch (error: unknown) {
            console.log('Error updating cell:', error);
        }
    };

    return (
        <>
            {show && (
                <Modal
                    headerText={isUploaded ? 'Imported work-plan preview' : 'Upload File'}
                    confirmText="Continue"
                    cancelText="Cancel"
                    onConfirm={() => handleFileRender()}
                    onCancel={resetState}
                    disableConfirm={mutation.isError || mutation.isPending || !file || !!errMsg}
                    aria-describedby="file-upload-modal-description"
                    size={isUploaded ? { height: '90vh', width: '90vw' } : MODAL_LARGE}
                    style={isUploaded ? { paddingRight: '0px', paddingLeft: '0px' } : {}}
                >
                    {!isUploaded && (
                        <ModalContent
                            isDragActive={isDragActive}
                            file={file}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDropCapture={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            {!file && !mutation.isError && !mutation.isPending && (
                                <InfoContainer>
                                    <IconContainer>
                                        <FileExcel
                                            size={iconSizes.SIZE_LARGE}
                                            color={color.iconSuccess}
                                        />
                                        <MsProject
                                            size={iconSizes.SIZE_LARGE}
                                            color={color.iconSuccess}
                                        />
                                    </IconContainer>
                                    <InfoTextSecondary>
                                        Supported file types: .xls, .xlsx, .xml
                                    </InfoTextSecondary>
                                </InfoContainer>
                            )}

                            <FileStatus />

                            {mutation.isError && (
                                <InfoContainer>
                                    <IssueFilled
                                        size={iconSizes.SIZE_LARGE}
                                        color={color.iconError}
                                    />
                                    <ErrorText>{errMsg}</ErrorText>
                                </InfoContainer>
                            )}

                            {!file && !mutation.isPending && (
                                <>
                                    <InstructionText>Drag and drop files</InstructionText>
                                    <InstructionText>or</InstructionText>
                                    <input
                                        type="file"
                                        accept=".xls,.xlsx,.xml"
                                        style={{ display: 'none' }}
                                        ref={fileInputRef}
                                        onChange={(e) => handleFileUpload(e.target.files)}
                                        data-testid="file-input"
                                    />
                                </>
                            )}

                            {!file && !mutation.isError && !mutation.isPending && (
                                <ButtonPrimary
                                    size="small"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    Choose file to upload
                                </ButtonPrimary>
                            )}

                            {mutation.isError && (
                                <ButtonGhost
                                    size="small"
                                    onClick={() => fileInputRef.current?.click()}
                                    icon={<Reinvite />}
                                >
                                    Upload Again
                                </ButtonGhost>
                            )}

                            <ModalInfo>
                                <Info size={iconSizes.SIZE_SMALL} color={color.iconNormal} />
                                <InfoText>
                                    Ensure the header matches AdaptiveWork Columns. Use Export Work
                                    Offline for a template.
                                </InfoText>
                            </ModalInfo>
                        </ModalContent>
                    )}
                    {isUploaded && (
                        <Wrapper>
                            <ContentLayout right={showErrorsPanel}>
                                <ContentLayout.Middle>
                                    <GridContainer>
                                        <ActionBar>
                                            <LeftItemsWrapper>
                                                <GridSearchWrapper>
                                                    <Input
                                                        placeholder="Search by name, attributes.."
                                                        icon={<Search />}
                                                    />
                                                </GridSearchWrapper>
                                                <GridFilterWrapper>
                                                    <Combobox
                                                        label=""
                                                        placeholder="Filter by"
                                                        inputMode="filter"
                                                        options={filterOptions}
                                                        multiSelectable={false}
                                                        icon={<Filter />}
                                                        clearable={false}
                                                        value={selectedFilter}
                                                        onSelect={(option) => {
                                                            setSelectedFilter(option);
                                                        }}
                                                    />
                                                </GridFilterWrapper>
                                            </LeftItemsWrapper>
                                            <RightItemsWrapper>
                                                <IconContainer>
                                                    <InfoText>
                                                        {' '}
                                                        {
                                                            Object.keys(importData?.rows || {})
                                                                .length
                                                        }{' '}
                                                        Entries Imported
                                                    </InfoText>
                                                </IconContainer>
                                                <ToolbarSeparator />
                                                <IconContainer>
                                                    <Warning
                                                        size={iconSizes.SIZE_SMALL_COMPACT}
                                                        color={color.iconError}
                                                        style={{
                                                            justifyContent: 'start',
                                                            width: '20px',
                                                        }}
                                                    />
                                                    <ErrorText>
                                                        {errors.length} Errors Found
                                                    </ErrorText>
                                                </IconContainer>
                                                {!showErrorsPanel && (
                                                    <ButtonGhost
                                                        size="small"
                                                        onClick={resolveErrors}
                                                        icon={<Refresh />}
                                                    >
                                                        Resolve
                                                    </ButtonGhost>
                                                )}
                                            </RightItemsWrapper>
                                        </ActionBar>
                                        <Grid
                                            rowHeight="small"
                                            loading={loading}
                                            columns={columns ? columns : []}
                                            rows={
                                                filteredRows
                                                    ? {
                                                          ids: Object.keys(filteredRows), // Extract the keys of rowData as ids
                                                          data: Object.entries(filteredRows).reduce(
                                                              (acc, [key, row]) => {
                                                                  acc[key] = {
                                                                      ...row,
                                                                      id: key, // Use the key from rowData as the id
                                                                      entityTypeApiName: entityType, // Add entityTypeApiName
                                                                      extensionData: {}, // Add extensionData
                                                                  };
                                                                  return acc;
                                                              },
                                                              {} as Record<string, EnrichedEntity>,
                                                          ),
                                                      }
                                                    : { ids: [], data: {} }
                                            }
                                            onCellChange={handleCellChange}
                                            emptyContent={<EmptyStateError />}
                                            sortMode="external"
                                            multiColumnSort={false}
                                            selectionMode="none"
                                        />
                                    </GridContainer>
                                </ContentLayout.Middle>
                                <ContentLayout.Right label="Details">
                                    <DetailsPanel
                                        header={{
                                            color: 'var(--pvds-color-red-500, #d41616)',
                                            label: 'Errors',
                                        }}
                                        onClose={() => {
                                            setShowErrorsPanel(false);
                                            setactiveErrorItem(null);
                                        }}
                                    >
                                        {errors.map((errorItem, index) => (
                                            <ErrorItem
                                                key={errorItem.key}
                                                active={activeErrorItem === index}
                                                onClick={() => handleErrorItemClick(index)}
                                            >
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                    }}
                                                >
                                                    <ErrorLabelText>{`ERROR #${
                                                        index + 1
                                                    }`}</ErrorLabelText>
                                                    <ErrorIconContainer
                                                        isVisible={activeErrorItem === index}
                                                    >
                                                        <Eraser
                                                            size={iconSizes.SIZE_SMALL_COMPACT}
                                                        />
                                                        <IssueFilled
                                                            size={iconSizes.SIZE_SMALL_COMPACT}
                                                            color={color.iconError}
                                                        />
                                                    </ErrorIconContainer>
                                                </div>
                                                <InfoText>{errorItem.message}</InfoText>
                                            </ErrorItem>
                                        ))}
                                    </DetailsPanel>
                                </ContentLayout.Right>
                            </ContentLayout>
                        </Wrapper>
                    )}
                </Modal>
            )}
        </>
    );
});

export default WorkplanImport;
