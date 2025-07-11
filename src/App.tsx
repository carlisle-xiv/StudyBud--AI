import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Router } from "@/Router";
import { Suspense } from "react";
import TopBarProgress from "react-topbar-progress-indicator"
import Loader from "@/components/GlobalLoader/Loader";

const queryClient = new QueryClient();

const App = () => (
  <Suspense fallback={<TopBarProgress />}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Loader />
        <Toaster />
        <Sonner />
        <RouterProvider router={Router} />
      </TooltipProvider>
    </QueryClientProvider>
  </Suspense>
);

export default App;
