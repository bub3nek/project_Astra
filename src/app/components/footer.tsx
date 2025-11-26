import Image from "next/image";

export default function FooterFn() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="rounded-lg opacity-80"
                    />
                    <span className="text-gray-500 font-medium">by Dmytro Usoltsev</span>
                </div>

                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Internal Operations Strategy
                </p>
            </div>
        </footer>
    );
}
