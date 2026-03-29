"use client";

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WhatsAppIcon, ShieldIcon, TruckIcon, SparkleIcon, ClockIcon, LeafSprig } from "./components/icons";
import { motion } from "framer-motion";

export default function Home() {
  // Animation for elements that should animate on load (Hero)
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Animation for elements that should animate when they scroll into view
  const fadeInView = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-cream">
          {/* Subtle background gradient */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-cream-dark)_0%,_transparent_60%)]"
          ></motion.div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="max-w-3xl text-center lg:text-left order-2 lg:order-1"
              >
                <motion.div 
                  variants={fadeIn}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 text-forest text-sm font-medium mb-8"
                >
                  <SparkleIcon className="w-4 h-4" />
                  Premium Mushroom Farm in Gujarat
                </motion.div>
                
                <motion.h1 
                  variants={fadeIn}
                  className="text-5xl sm:text-6xl lg:text-7xl font-display text-forest leading-tight tracking-tight mb-6"
                >
                  Pure. Fresh. <br />
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.9, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="italic text-forest/90"
                  >
                    Natural Goodness.
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className="text-lg sm:text-xl text-forest/80 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
                >
                  Experience the finest quality mushrooms, grown in climate-controlled environments and harvested at dawn. We bring farm-fresh nutrition directly to your kitchen, ensuring peak flavor and health benefits in every bite.
                </motion.p>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16"
                >
                  <motion.a 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest text-warm-white rounded-full font-bold hover:bg-forest-light transition-all shadow-lg shadow-forest/20 w-full sm:w-auto"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Order for Delivery
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href="#products"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-forest border-2 border-forest/20 rounded-full font-bold hover:bg-forest/5 transition-all w-full sm:w-auto"
                  >
                    Explore Varieties
                  </motion.a>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-center justify-center lg:justify-start gap-8 sm:gap-12 border-t border-forest/10 pt-8"
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ rotate: 5 }}
                      className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest"
                    >
                      <ShieldIcon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-forest">100% Quality</p>
                      <p className="text-sm text-forest/70">Lab Tested</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest"
                    >
                      <TruckIcon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-forest">Daily Supply</p>
                      <p className="text-sm text-forest/70">Across Gujarat</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full max-w-md lg:max-w-lg aspect-square order-1 lg:order-2"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-forest/5 rounded-full blur-3xl"
                ></motion.div>
                <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                   <div className="relative w-full h-full">
                    <Image
                      src="/main_logo.png"
                      alt="RD Naturals Main Logo"
                      fill
                      className="object-contain mix-blend-multiply"
                      priority
                    />
                   </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium tracking-widest text-forest/50 uppercase">Scroll</span>
            <motion.div 
              animate={{ height: [0, 32, 0], y: [0, 0, 32] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px bg-forest/40"
            ></motion.div>
          </motion.div>
        </section>

        {/* Brand Promise / Stats */}
        <section className="py-20 bg-warm-white border-y border-forest/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div {...fadeInView}>
                <p className="text-4xl font-display font-bold text-forest mb-2">500+</p>
                <p className="text-sm text-forest/60 font-medium uppercase tracking-wider">Happy Customers</p>
              </motion.div>
              <motion.div {...fadeInView} transition={{ delay: 0.1 }}>
                <p className="text-4xl font-display font-bold text-forest mb-2">12+</p>
                <p className="text-sm text-forest/60 font-medium uppercase tracking-wider">Districts Served</p>
              </motion.div>
              <motion.div {...fadeInView} transition={{ delay: 0.2 }}>
                <p className="text-4xl font-display font-bold text-forest mb-2">24h</p>
                <p className="text-sm text-forest/60 font-medium uppercase tracking-wider">Farm to Kitchen</p>
              </motion.div>
              <motion.div {...fadeInView} transition={{ delay: 0.3 }}>
                <p className="text-4xl font-display font-bold text-forest mb-2">100%</p>
                <p className="text-sm text-forest/60 font-medium uppercase tracking-wider">Natural Growth</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Features Grid */}
        <section id="about" className="py-24 bg-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div {...fadeInView} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold tracking-widest text-forest/50 uppercase mb-4">Our Commitment</h2>
              <h3 className="text-4xl font-display text-forest mb-6">Grown with Science, Harvested with Care</h3>
              <p className="text-forest/60 text-lg leading-relaxed">At RD Naturals, we don't just grow mushrooms; we cultivate wellness. Our process ensures that every mushroom that leaves our farm is at its peak nutritional value.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div {...fadeInView} className="group p-8 bg-warm-white rounded-3xl border border-forest/5 hover:border-forest/20 transition-all">
                <div className="w-14 h-14 bg-forest/5 rounded-2xl flex items-center justify-center text-forest mb-6 group-hover:bg-forest group-hover:text-warm-white transition-all">
                  <ClockIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-3">Time-Sensitive Harvest</h3>
                <p className="text-forest/60 leading-relaxed text-sm">Mushrooms are picked at their prime maturity level every single morning, ensuring the best texture and longest possible shelf life for your home or business.</p>
              </motion.div>
              <motion.div {...fadeInView} transition={{ delay: 0.2 }} className="group p-8 bg-warm-white rounded-3xl border border-forest/5 hover:border-forest/20 transition-all">
                <div className="w-14 h-14 bg-forest/5 rounded-2xl flex items-center justify-center text-forest mb-6 group-hover:bg-forest group-hover:text-warm-white transition-all">
                  <ShieldIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-3">Hygiene First Policy</h3>
                <p className="text-forest/60 leading-relaxed text-sm">Our farm follows strict sanitization protocols. Staff use protective gear, and our packing area is dust-free, ensuring that what you eat is as pure as nature intended.</p>
              </motion.div>
              <motion.div {...fadeInView} transition={{ delay: 0.4 }} className="group p-8 bg-warm-white rounded-3xl border border-forest/5 hover:border-forest/20 transition-all">
                <div className="w-14 h-14 bg-forest/5 rounded-2xl flex items-center justify-center text-forest mb-6 group-hover:bg-forest group-hover:text-warm-white transition-all">
                  <SparkleIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-3">Controlled Environment</h3>
                <p className="text-forest/60 leading-relaxed text-sm">Using advanced automation, we control CO2, humidity, and temperature 24/7 to mimic the perfect forest environment, regardless of the weather outside.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <motion.div {...fadeInView} className="max-w-2xl">
                <h2 className="text-sm font-bold tracking-widest text-forest/50 uppercase mb-4">Our Harvest</h2>
                <h3 className="text-4xl font-display text-forest">Premium Varieties</h3>
              </motion.div>
              <p className="text-forest/60 text-sm max-w-xs italic">Available in various pack sizes from 200g to bulk 5kg crates.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { 
                  title: "White Button Mushrooms", 
                  image: "/mushroom-button.png",
                  desc: "Firm, crisp, and mild. Our buttons are perfect for sautéing, salads, or classic mushroom soup. Rich in Vitamin B and Selenium.",
                  tag: "Customer Favorite"
                },
                { 
                  title: "Oyster Mushrooms", 
                  image: "/mushroom-oyster.png",
                  desc: "Exotic shape with a subtle, anise-like aroma. These are low in calories and high in protein, making them a vegan's delight.",
                  tag: "Gourmet Choice"
                },
                { 
                  title: "Milky Mushrooms", 
                  image: "/mushroom-milky.png",
                  desc: "A tropical gem with a meaty bite. Excellent for heavy gravies and curries. Holds its shape well even after long cooking.",
                  tag: "Long Shelf Life"
                }
              ].map((product, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-cream rounded-[2rem] overflow-hidden shadow-sm border border-forest/5 hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[4/3] bg-forest/5 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-10 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-forest text-warm-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 text-center lg:text-left">
                    <h4 className="text-2xl font-display font-bold text-forest mb-4">{product.title}</h4>
                    <p className="text-forest/70 text-sm leading-relaxed mb-8">
                      {product.desc}
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-2 text-forest font-bold text-sm group/link">
                      Order Now
                      <span className="w-6 h-px bg-forest/30 group-hover/link:w-10 group-hover/link:bg-forest transition-all"></span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us / Health Section */}
        <section id="why-us" className="py-24 bg-forest relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 text-warm-white/5 translate-x-1/2 -translate-y-1/2">
            <LeafSprig className="w-full h-full" />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInView}>
                <h2 className="text-sm font-bold tracking-[0.2em] text-sage uppercase mb-6">The Power of Fungi</h2>
                <h3 className="text-4xl font-display text-warm-white mb-8">Why Mushrooms Matter</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-sage/20 flex-shrink-0 flex items-center justify-center text-sage">
                      <SparkleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-warm-white text-lg">Immunity Shield</h4>
                      <p className="text-warm-white/60 text-sm">Natural compounds in mushrooms help activate white blood cells, strengthening your body's defense system.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-sage/20 flex-shrink-0 flex items-center justify-center text-sage">
                      <ShieldIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-warm-white text-lg">Brain Health</h4>
                      <p className="text-warm-white/60 text-sm">Rich in antioxidants like Ergothioneine which help reduce inflammation and support cognitive function.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-sage/20 flex-shrink-0 flex items-center justify-center text-sage">
                      <ClockIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-warm-white text-lg">Sustainable Protein</h4>
                      <p className="text-warm-white/60 text-sm">A perfect meat substitute that requires 90% less water and land than traditional livestock.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-warm-white/10 p-4 border border-warm-white/10"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                   <div className="relative w-full h-full">
                    <Image
                      src="/main_logo.png"
                      alt="Healthy Mushrooms"
                      fill
                      className="object-contain opacity-40"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center">
                        <p className="text-3xl font-display text-warm-white italic drop-shadow-lg mb-4">"Direct from Farm,"</p>
                        <p className="text-xl text-sage font-bold tracking-widest uppercase italic">"Delivered Fresh Every Day."</p>
                      </div>
                    </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section id="contact" className="py-24 bg-warm-white">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
            <motion.div {...fadeInView} className="p-12 sm:p-20 bg-forest rounded-[3rem] text-warm-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-forest-light)_0%,_transparent_50%)]"></div>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-display mb-8">Ready to Fresh Up Your Kitchen?</h2>
                <p className="text-warm-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of families and restaurants across Gujarat who trust RD Naturals for their daily dose of nutrition.
                </p>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-terracotta text-warm-white rounded-full font-bold text-xl hover:bg-terracotta-light transition-all shadow-xl"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Place Your Order Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
