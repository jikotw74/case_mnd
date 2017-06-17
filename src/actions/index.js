export const updateBodyChildren = (children) => ({
    type: 'UPDATE_BODY_CHILDREN',
    children
});

export const updateDialogChildren = (children) => ({
    type: 'UPDATE_DIALOG_CHILDREN',
    children
});

export const openDialog = (children) => ({
    type: 'OPEN_DIALOG',
    children
});

export const closeDialog = () => ({
    type: 'CLOSE_DIALOG'
});