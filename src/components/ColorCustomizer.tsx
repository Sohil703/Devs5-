import { useState } from "react";
import { useThemeColor } from "@/context/ThemeColorContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Palette, Check, Settings } from "lucide-react";
import { motion } from "framer-motion";

const ColorCustomizer = () => {
  const { currentTheme, setThemeById, themes } = useThemeColor();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Gear Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(true)}
          className="p-3.5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-95 flex items-center justify-center transition-all cursor-pointer relative group"
          aria-label="Customize Colors"
        >
          <Settings size={22} className="animate-[spin_8s_linear_infinite] group-hover:animate-[spin_3s_linear_infinite]" />
          <span className="absolute right-full mr-2.5 px-2.5 py-1 rounded bg-popover border border-border text-[10px] font-bold text-popover-foreground tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
            Theme Customizer
          </span>
        </motion.button>
      </div>

      {/* Slide-over Customizer Panel */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="sm:max-w-md overflow-y-auto w-full border-l border-border/85 bg-background/95 backdrop-blur-xl">
          <SheetHeader className="text-left space-y-2 border-b border-border/40 pb-4">
            <div className="flex items-center gap-2 text-primary">
              <Palette size={24} />
              <SheetTitle className="font-display text-xl font-bold">Theme Customizer</SheetTitle>
            </div>
            <SheetDescription className="text-xs text-muted-foreground">
              Select one of the 25 premium color combinations to customize the entire portfolio layout in real-time.
            </SheetDescription>
          </SheetHeader>

          {/* Grid list of color presets */}
          <div className="grid grid-cols-2 gap-3.5 pt-6">
            {themes.map((theme) => {
              const isActive = theme.id === currentTheme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setThemeById(theme.id)}
                  className={`relative p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-20 ${
                    isActive
                      ? "border-primary bg-primary/5 shadow-md shadow-primary/5"
                      : "border-border/60 bg-secondary/10 hover:bg-secondary/40 hover:border-border"
                  }`}
                >
                  <span className="text-xs font-semibold text-foreground tracking-wide line-clamp-1">
                    {theme.name}
                  </span>

                  {/* Circular preview dots */}
                  <div className="flex items-center justify-between w-full mt-2">
                    <div className="flex gap-1">
                      {/* Light mode dot */}
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-border shadow-sm"
                        style={{ backgroundColor: `hsl(${theme.light.primary})` }}
                        title="Light Theme Primary"
                      />
                      {/* Dark mode dot */}
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-border shadow-sm"
                        style={{ backgroundColor: `hsl(${theme.dark.primary})` }}
                        title="Dark Theme Primary"
                      />
                      {/* Accent color dot */}
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-border shadow-sm"
                        style={{ backgroundColor: `hsl(${theme.dark.accent})` }}
                        title="Accent Color"
                      />
                    </div>

                    {isActive && (
                      <span className="p-0.5 rounded-full bg-primary text-primary-foreground">
                        <Check size={10} strokeWidth={3} />
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ColorCustomizer;
