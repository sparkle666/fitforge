import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";


const Layout = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* Ensure full viewport height */}
        <Header />
        <main style={{ flex: 1, padding: '20px' }}> {/* Main content takes available space */}
          <Outlet /> {/* Content of the current route */}
        </main>
        <Footer />
      </div>
    );
  };

export default Layout;