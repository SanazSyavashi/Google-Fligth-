// components/StyleProvider.tsx
'use client'

//React
import { Suspense, useState, useEffect } from 'react'

//Components
import LoadingSpinner from "@/components/Loading/LoadingComponent"

export default function StyleProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
}