import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <nav>Navbar</nav>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
