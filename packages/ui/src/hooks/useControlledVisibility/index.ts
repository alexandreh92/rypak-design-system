import { useCallback, useState } from 'react';

export interface UseControlledVisibilityProps {
  visible?: boolean;
  onChange?: (visible: boolean) => void;
}

export function useControlledVisibility({
  visible,
  onChange,
}: UseControlledVisibilityProps) {
  const isControlled = visible !== undefined;

  const [internalVisible, setInternalVisible] = useState(Boolean(visible));

  const currentVisible = isControlled ? visible : internalVisible;

  const setVisible = useCallback(
    (newVisible: boolean) => {
      if (isControlled) {
        onChange?.(newVisible);
      }

      setInternalVisible(newVisible);
    },
    [isControlled, onChange]
  );

  return [currentVisible, setVisible] as const;
}
