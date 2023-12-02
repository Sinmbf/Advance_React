import AuthLayout from "./_auth/AuthLayout";
import RegistrationForm from "./_auth/forms/RegistrationForm";
import SignInForm from "./_auth/forms/SignInForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes --> Anybody can see*/}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Route>

        {/* Private Routes --> Only access if requirements meet */}
        {/* index means it is the starting page */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};
export default App;
