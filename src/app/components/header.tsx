import Image from "next/image";

export default function HeaderFn() {
  return (
    <header className="absolute top-0 w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-xl shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
            </div>
            <span className="text-gray-900 font-bold text-xl tracking-tight">by Dmytro Usoltsev</span>
          </div>

          {/* Minimal Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'Inefficiencies', 'Solutions', 'Impact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-white/50 rounded-full transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a href="#solutions" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            View Strategy
          </a>
        </div>
      </nav>
    </header>
  );
}
