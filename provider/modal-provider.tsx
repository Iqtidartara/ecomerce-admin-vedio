"use client";

import { StoreModal } from "@/components/modal/store-modal";
import { useEffect, useState } from "react";


export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if(!isMounted){
    return null;
  }
  return (
    <>
    <StoreModal/>
    
    </>
  )
};
