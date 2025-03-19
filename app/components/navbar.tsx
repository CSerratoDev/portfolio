export default function Navbar(){
    return (
        <nav>
            <ul className="flex space-x-6">
                <li><a href="/about_me" className="text-white-300 hover:text-red-300">About me</a></li>
                <li><a href="/proyects" className="text-white-300 hover:text-yellow-300">Proyects</a></li>
                <li><a href="/achievements" className="text-white-300 hover:text-teal-300">Achievements</a></li>
                <li><a href="/contact" className="text-white-300 hover:text-blue-300">Contact</a></li>
            </ul>
        </nav>
    );
}