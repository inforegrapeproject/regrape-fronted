import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0a2e] to-[#0f0518]">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          We Unlock Nature's Hidden Gold.
        </h1>
        <p className="text-xl text-purple-200 mb-8">
          Transforming biological liability into technological equity.
        </p>

      </div>
    </section>
  );
}
