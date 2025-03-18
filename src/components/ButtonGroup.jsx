// import { secondaryButtons } from "../lib/constants";
import { useItemStore } from "../stores/itemsStore";
import Button from "./Button";

function ButtonGroup() {
  const markAllAsComplete = useItemStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemStore((state) => state.resetToInitial);
  const removeAllItems = useItemStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];
  return (
    <section className='button-group'>
      {/* <Button buttonType='secondary' onClick={handleMarkAllAsComplete}>
        Mark all as complete
      </Button>
      <Button buttonType='secondary' onClick={handleMarkAllAsIncomplete}>
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType='secondary'>
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType='secondary'>
        Remove all items
      </Button> */}
      {secondaryButtons.map((button) => {
        return (
          <Button
            buttonType='secondary'
            key={button.text + button.onClick.toString()}
            onClick={button.onClick}
          >
            {button.text}
          </Button>
        );
      })}
    </section>
  );
}

export default ButtonGroup;
