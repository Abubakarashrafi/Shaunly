import { Menu } from "lucide-react";

const Navbar = ({ onToggleSidebar }) => {
    return (
        <nav className="w-full px-6 py-2 md:py-4 flex justify-between border-b items-center bg-black text-white shadow-md">
                <h1 className="text-xl md:text-3xl font-bold">Shaunly</h1>
            <div className="flex items-center gap-4">
                {/* Hamburger (only shows on mobile) */}
                <button
                    className="md:hidden text-white"
                    onClick={onToggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    <Menu className="h-6 w-6" />
                </button>

            </div>

            {/* Right side (optional) */}
          
        </nav>
    );
};

export default Navbar;
