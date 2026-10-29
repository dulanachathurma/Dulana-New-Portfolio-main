            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden pointer-events-auto bg-black/50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Dropdown Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="fixed z-50 left-0 right-0 lg:hidden pointer-events-auto"
              style={{ top: "72px" }}
            >
              <div
                className={cn(
                  "w-[92%] sm:w-[90%] mx-auto rounded-[28px] border shadow-2xl transition-colors",
                  isDarkMode
                    ? "bg-white text-black border-black/10"
                    : "bg-black text-white border-white/10"
                )}
              >
                <div className="flex flex-col p-4 gap-0.5">

                  {/* Mobile Navigation Links */}
                  {navItems.map((item) => {
                    const isActive =
                      activeSection === item.href.substring(1);

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) =>
                          handleNavClick(e, item.href)
                        }
                        className={cn(
                          "flex items-center text-left text-[15px] font-semibold py-2.5 px-4 rounded-2xl transition-all",
                          isActive
                            ? isDarkMode
                              ? "bg-blue-100 text-blue-600 font-bold border-l-4 border-blue-600"
                              : "bg-blue-600/30 text-blue-400 font-bold border-l-4 border-blue-500"
                            : isDarkMode
                              ? "text-black hover:bg-black/5"
                              : "text-white hover:bg-white/10"
                        )}
                      >
                        <span>{item.name}</span>
                      </a>
                    );
                  })}

                  {/* Mobile Contact Button */}
                  <div className="pt-2.5">
                    <div
                      className={cn(
                        "p-1 rounded-full border",
                        isDarkMode
                          ? "border-blue-200 bg-blue-50"
                          : "border-blue-500/30 bg-blue-500/10"
                      )}
                    >
                      <a
                        href="#contact"
                        onClick={(e) =>
                          handleNavClick(e, "#contact")
                        }
                        className="relative group flex items-center justify-center w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center text-sm shadow-[0_4px_15px_rgba(37,99,235,0.35)] transition-all active:scale-95 focus:outline-none"
                      >
                        <span className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-35 pointer-events-none" />

                        <span className="relative z-10">
                          Contact Me
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
