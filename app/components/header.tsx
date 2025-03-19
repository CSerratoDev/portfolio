import Navbar from "./navbar";

export default function Header() {
    return (
        <header className="bg-black text-white p-3">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">cserrato.dev</h1>
                <Navbar></Navbar>
            </div>
        </header>
    );
}