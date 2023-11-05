"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";

function ModalProvider(): React.ReactElement | null {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect((): void => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
}

export default ModalProvider;
