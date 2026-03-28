import { ArrowRight } from "lucide-react";

const NewsLetter = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="bg-[#111827] p-10 flex flex-col items-center gap-10 text-center rounded-2xl">

          <div className="space-y-2">
            <h3 className="text-white font-playFair text-2xl md:text-3xl lg:text-4xl font-medium"> Stay Inspired </h3>
            <p className="text-white/70 text-sm md:text-base max-w-2xl">
              Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.
            </p>
          </div>

          <form className="flex items-center gap-4">
            <input type="email" className="p-2 w-xs text-sm bg-[#282F3C] border border-white/20 text-white/90 outline-none rounded-sm" placeholder="Enter your email" />
            <button type="submit" className="flex items-center gap-2 bg-black text-white rounded-sm py-2 px-4 cursor-pointer group">
              View All Offers
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-all" />
            </button>
          </form>

          <p className="text-white/50 text-sm">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>

        </div>
      </div>
    </section>
  )
}

export default NewsLetter;
