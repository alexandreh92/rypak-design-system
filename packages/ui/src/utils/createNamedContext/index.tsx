import { useMemo, createContext, useContext as ReactUseContext } from 'react';
import type { ReactNode } from 'react';

export const createNamedContext = <T extends object | null | undefined>(
  name: string,
  deafultContext?: T | null
) => {
  const Context = createContext<T | null | undefined>(deafultContext);

  const Provider = ({
    ...props
  }: T & {
    children: ReactNode;
  }) => {
    const { children, ...rest } = props;

    // eslint-disable-next-line react-hooks/exhaustive-deps -- Only re-render when prop values change
    const value = useMemo(() => rest, Object.values(rest)) as T;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  Provider.displayName = `${name}Provider`;

  const useContext = () => {
    const context = ReactUseContext(Context);
    if (!context) {
      throw new Error(`use${name} must be used within a ${name}Provider`);
    }

    return context;
  };

  return [Provider, useContext] as const;
};
