import { UseDisclosureReturn } from "@chakra-ui/core/dist/useDisclosure";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProps {
  children: ReactNode;
}

type SidebarDrawerData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
