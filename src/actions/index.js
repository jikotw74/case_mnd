export const updateAppSelected = (selected, home) => ({
    type: 'UPDATE_APP_SELECTED',
    selected,
    home
});

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

export const openTaiwanLeft = () => ({
    type: 'OPEN_TAIWAN_LEFT'
});

export const openTaiwanRight = () => ({
    type: 'OPEN_TAIWAN_RIGHT'
});

export const moveTaiwanOrigin = () => ({
    type: 'MOVE_TAIWAN_ORIGIN'
});