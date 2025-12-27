import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import About from "@/pages/about";
import Services from "@/pages/services";
import Investment from "@/pages/investment";
import Claims from "@/pages/claims";
import Blog from "@/pages/blog";
import BlogDetail from "@/pages/blog-detail";
import NRI from "@/pages/nri";
import ServiceDetail from "@/pages/service-detail";
import GetQuote from "@/pages/get-quote";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:type" component={ServiceDetail} />
      <Route path="/investment" component={Investment} />
      <Route path="/claims" component={Claims} />
      <Route path="/nri" component={NRI} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/get-quote" component={GetQuote} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
