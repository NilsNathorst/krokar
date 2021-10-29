import React  from "react";

export const useToggle = (initialState: boolean) => {
    const [isToggled, setIsToggled] = React.useState(initialState);
  
        const toggle = React.useCallback(
      () => setIsToggled(state => !state),
      [setIsToggled],
    );
  
    return [isToggled, toggle] as const;
  }