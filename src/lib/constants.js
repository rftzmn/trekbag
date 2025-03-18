export const initialItems = [
    { id: 1, name: "good mood", packed: true },
    { id: 2, name: "passport", packed: false },
    { id: 3, name: "phone charger", packed: false },
];

export const secondaryButtons = [
    {
        text: "Mark all as complete",
        onClick: "handleMarkAllAsComplete"
    },
    {
        text: "Mark all as incomplete",
        onClick: "handleMarkAllAsIncomplete"
    },
    {
        text: "Reset to initial",
        onClick: "handleResetToInitial"
    },
    {
        text: "Remove all items",
        onClick: "handleRemoveAllItems"
    },
];