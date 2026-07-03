export interface ColorVariables {
  primary: string;
  accent: string;
  gradientPrimary: string;
  gradientAccent: string;
}

export interface ColorScheme {
  id: string;
  name: string;
  light: ColorVariables;
  dark: ColorVariables;
}

export const colorThemes: ColorScheme[] = [
  {
    id: "mint-breeze",
    name: "Mint Breeze",
    light: {
      primary: "165 80% 38%",
      accent: "260 60% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(165, 80%, 38%), hsl(200, 90%, 45%))",
      gradientAccent: "linear-gradient(135deg, hsl(260, 60%, 55%), hsl(300, 60%, 50%))"
    },
    dark: {
      primary: "165 80% 48%",
      accent: "260 60% 58%",
      gradientPrimary: "linear-gradient(135deg, hsl(165, 80%, 48%), hsl(200, 90%, 50%))",
      gradientAccent: "linear-gradient(135deg, hsl(260, 60%, 58%), hsl(300, 60%, 50%))"
    }
  },
  {
    id: "royal-sapphire",
    name: "Royal Sapphire",
    light: {
      primary: "221 83% 53%",
      accent: "199 89% 48%",
      gradientPrimary: "linear-gradient(135deg, hsl(221, 83%, 53%), hsl(210, 100%, 65%))",
      gradientAccent: "linear-gradient(135deg, hsl(199, 89%, 48%), hsl(175, 80%, 45%))"
    },
    dark: {
      primary: "217 91% 60%",
      accent: "199 89% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(200, 100%, 70%))",
      gradientAccent: "linear-gradient(135deg, hsl(199, 89%, 55%), hsl(175, 80%, 55%))"
    }
  },
  {
    id: "sunset-fire",
    name: "Sunset Fire",
    light: {
      primary: "24 95% 53%",
      accent: "346 87% 53%",
      gradientPrimary: "linear-gradient(135deg, hsl(24, 95%, 53%), hsl(12, 95%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(346, 87%, 53%), hsl(310, 80%, 50%))"
    },
    dark: {
      primary: "24 95% 60%",
      accent: "346 87% 60%",
      gradientPrimary: "linear-gradient(135deg, hsl(24, 95%, 60%), hsl(12, 95%, 62%))",
      gradientAccent: "linear-gradient(135deg, hsl(346, 87%, 60%), hsl(310, 80%, 60%))"
    }
  },
  {
    id: "neon-orchid",
    name: "Neon Orchid",
    light: {
      primary: "272 72% 47%",
      accent: "316 70% 50%",
      gradientPrimary: "linear-gradient(135deg, hsl(272, 72%, 47%), hsl(290, 80%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(316, 70%, 50%), hsl(350, 80%, 55%))"
    },
    dark: {
      primary: "272 72% 58%",
      accent: "316 70% 58%",
      gradientPrimary: "linear-gradient(135deg, hsl(272, 72%, 58%), hsl(290, 80%, 65%))",
      gradientAccent: "linear-gradient(135deg, hsl(316, 70%, 58%), hsl(350, 80%, 65%))"
    }
  },
  {
    id: "forest-moss",
    name: "Forest Moss",
    light: {
      primary: "142 76% 36%",
      accent: "84 80% 40%",
      gradientPrimary: "linear-gradient(135deg, hsl(142, 76%, 36%), hsl(160, 84%, 39%))",
      gradientAccent: "linear-gradient(135deg, hsl(84, 80%, 40%), hsl(110, 70%, 40%))"
    },
    dark: {
      primary: "142 72% 45%",
      accent: "84 75% 48%",
      gradientPrimary: "linear-gradient(135deg, hsl(142, 72%, 45%), hsl(160, 80%, 45%))",
      gradientAccent: "linear-gradient(135deg, hsl(84, 75%, 48%), hsl(110, 70%, 50%))"
    }
  },
  {
    id: "cyberpunk-neon",
    name: "Cyberpunk Neon",
    light: {
      primary: "318 96% 54%",
      accent: "180 100% 40%",
      gradientPrimary: "linear-gradient(135deg, hsl(318, 96%, 54%), hsl(270, 95%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(180, 100%, 40%), hsl(150, 90%, 45%))"
    },
    dark: {
      primary: "318 96% 60%",
      accent: "180 100% 50%",
      gradientPrimary: "linear-gradient(135deg, hsl(318, 96%, 60%), hsl(270, 95%, 65%))",
      gradientAccent: "linear-gradient(135deg, hsl(180, 100%, 50%), hsl(150, 90%, 55%))"
    }
  },
  {
    id: "golden-amber",
    name: "Golden Amber",
    light: {
      primary: "38 92% 50%",
      accent: "20 90% 50%",
      gradientPrimary: "linear-gradient(135deg, hsl(38, 92%, 50%), hsl(48, 95%, 48%))",
      gradientAccent: "linear-gradient(135deg, hsl(20, 90%, 50%), hsl(5, 90%, 55%))"
    },
    dark: {
      primary: "38 92% 58%",
      accent: "20 90% 58%",
      gradientPrimary: "linear-gradient(135deg, hsl(38, 92%, 58%), hsl(48, 95%, 54%))",
      gradientAccent: "linear-gradient(135deg, hsl(20, 90%, 58%), hsl(5, 90%, 63%))"
    }
  },
  {
    id: "crimson-rose",
    name: "Crimson Rose",
    light: {
      primary: "350 89% 50%",
      accent: "280 65% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(350, 89%, 50%), hsl(330, 90%, 45%))",
      gradientAccent: "linear-gradient(135deg, hsl(280, 65%, 55%), hsl(240, 70%, 55%))"
    },
    dark: {
      primary: "350 89% 58%",
      accent: "280 65% 63%",
      gradientPrimary: "linear-gradient(135deg, hsl(350, 89%, 58%), hsl(330, 90%, 52%))",
      gradientAccent: "linear-gradient(135deg, hsl(280, 65%, 63%), hsl(240, 70%, 63%))"
    }
  },
  {
    id: "skyline-cyan",
    name: "Skyline Cyan",
    light: {
      primary: "188 86% 40%",
      accent: "210 90% 50%",
      gradientPrimary: "linear-gradient(135deg, hsl(188, 86%, 40%), hsl(200, 90%, 45%))",
      gradientAccent: "linear-gradient(135deg, hsl(210, 90%, 50%), hsl(230, 85%, 55%))"
    },
    dark: {
      primary: "188 86% 50%",
      accent: "210 90% 60%",
      gradientPrimary: "linear-gradient(135deg, hsl(188, 86%, 50%), hsl(200, 90%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(210, 90%, 60%), hsl(230, 85%, 65%))"
    }
  },
  {
    id: "electric-indigo",
    name: "Electric Indigo",
    light: {
      primary: "243 75% 59%",
      accent: "320 80% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(243, 75%, 59%), hsl(220, 85%, 50%))",
      gradientAccent: "linear-gradient(135deg, hsl(320, 80%, 55%), hsl(280, 70%, 50%))"
    },
    dark: {
      primary: "243 75% 65%",
      accent: "320 80% 63%",
      gradientPrimary: "linear-gradient(135deg, hsl(243, 75%, 65%), hsl(220, 85%, 60%))",
      gradientAccent: "linear-gradient(135deg, hsl(320, 80%, 63%), hsl(280, 70%, 60%))"
    }
  },
  {
    id: "warm-copper",
    name: "Warm Copper",
    light: {
      primary: "27 80% 45%",
      accent: "45 80% 45%",
      gradientPrimary: "linear-gradient(135deg, hsl(27, 80%, 45%), hsl(15, 85%, 50%))",
      gradientAccent: "linear-gradient(135deg, hsl(45, 80%, 45%), hsl(30, 90%, 40%))"
    },
    dark: {
      primary: "27 80% 55%",
      accent: "45 80% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(27, 80%, 55%), hsl(15, 85%, 60%))",
      gradientAccent: "linear-gradient(135deg, hsl(45, 80%, 55%), hsl(30, 90%, 50%))"
    }
  },
  {
    id: "sage-soft",
    name: "Sage Soft",
    light: {
      primary: "150 40% 40%",
      accent: "180 30% 45%",
      gradientPrimary: "linear-gradient(135deg, hsl(150, 40%, 40%), hsl(165, 45%, 45%))",
      gradientAccent: "linear-gradient(135deg, hsl(180, 30%, 45%), hsl(200, 35%, 45%))"
    },
    dark: {
      primary: "150 40% 50%",
      accent: "180 30% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(150, 40%, 50%), hsl(165, 45%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(180, 30%, 55%), hsl(200, 35%, 55%))"
    }
  },
  {
    id: "plum-luxury",
    name: "Plum Luxury",
    light: {
      primary: "291 70% 40%",
      accent: "340 75% 45%",
      gradientPrimary: "linear-gradient(135deg, hsl(291, 70%, 40%), hsl(270, 75%, 45%))",
      gradientAccent: "linear-gradient(135deg, hsl(340, 75%, 45%), hsl(310, 70%, 40%))"
    },
    dark: {
      primary: "291 70% 52%",
      accent: "340 75% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(291, 70%, 52%), hsl(270, 75%, 58%))",
      gradientAccent: "linear-gradient(135deg, hsl(340, 75%, 55%), hsl(310, 70%, 50%))"
    }
  },
  {
    id: "bora-bora",
    name: "Bora Bora",
    light: {
      primary: "174 85% 40%",
      accent: "195 90% 45%",
      gradientPrimary: "linear-gradient(135deg, hsl(174, 85%, 40%), hsl(150, 80%, 42%))",
      gradientAccent: "linear-gradient(135deg, hsl(195, 90%, 45%), hsl(210, 95%, 50%))"
    },
    dark: {
      primary: "174 85% 50%",
      accent: "195 90% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(174, 85%, 50%), hsl(150, 80%, 52%))",
      gradientAccent: "linear-gradient(135deg, hsl(195, 90%, 55%), hsl(210, 95%, 60%))"
    }
  },
  {
    id: "desert-sunset",
    name: "Desert Sunset",
    light: {
      primary: "14 90% 55%",
      accent: "45 90% 50%",
      gradientPrimary: "linear-gradient(135deg, hsl(14, 90%, 55%), hsl(350, 85%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(45, 90%, 50%), hsl(30, 95%, 50%))"
    },
    dark: {
      primary: "14 90% 63%",
      accent: "45 90% 58%",
      gradientPrimary: "linear-gradient(135deg, hsl(14, 90%, 63%), hsl(350, 85%, 63%))",
      gradientAccent: "linear-gradient(135deg, hsl(45, 90%, 58%), hsl(30, 95%, 58%))"
    }
  },
  {
    id: "monochrome-slate",
    name: "Monochrome Slate",
    light: {
      primary: "215 25% 40%",
      accent: "215 15% 50%",
      gradientPrimary: "linear-gradient(135deg, hsl(215, 25%, 40%), hsl(215, 20%, 50%))",
      gradientAccent: "linear-gradient(135deg, hsl(215, 15%, 50%), hsl(215, 10%, 60%))"
    },
    dark: {
      primary: "215 25% 55%",
      accent: "215 15% 65%",
      gradientPrimary: "linear-gradient(135deg, hsl(215, 25%, 55%), hsl(215, 20%, 65%))",
      gradientAccent: "linear-gradient(135deg, hsl(215, 15%, 65%), hsl(215, 10%, 75%))"
    }
  },
  {
    id: "neon-lime",
    name: "Neon Lime",
    light: {
      primary: "76 100% 40%",
      accent: "160 85% 40%",
      gradientPrimary: "linear-gradient(135deg, hsl(76, 100%, 40%), hsl(60, 95%, 45%))",
      gradientAccent: "linear-gradient(135deg, hsl(160, 85%, 40%), hsl(190, 80%, 42%))"
    },
    dark: {
      primary: "76 100% 48%",
      accent: "160 85% 48%",
      gradientPrimary: "linear-gradient(135deg, hsl(76, 100%, 48%), hsl(60, 95%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(160, 85%, 48%), hsl(190, 80%, 50%))"
    }
  },
  {
    id: "ocean-depths",
    name: "Ocean Depths",
    light: {
      primary: "199 95% 38%",
      accent: "175 90% 38%",
      gradientPrimary: "linear-gradient(135deg, hsl(199, 95%, 38%), hsl(215, 90%, 45%))",
      gradientAccent: "linear-gradient(135deg, hsl(175, 90%, 38%), hsl(150, 80%, 40%))"
    },
    dark: {
      primary: "199 95% 48%",
      accent: "175 90% 48%",
      gradientPrimary: "linear-gradient(135deg, hsl(199, 95%, 48%), hsl(215, 90%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(175, 90%, 48%), hsl(150, 80%, 50%))"
    }
  },
  {
    id: "ultra-lavender",
    name: "Ultra Lavender",
    light: {
      primary: "258 75% 55%",
      accent: "288 70% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(258, 75%, 55%), hsl(240, 80%, 60%))",
      gradientAccent: "linear-gradient(135deg, hsl(288, 70%, 55%), hsl(310, 75%, 55%))"
    },
    dark: {
      primary: "258 75% 63%",
      accent: "288 70% 63%",
      gradientPrimary: "linear-gradient(135deg, hsl(258, 75%, 63%), hsl(240, 80%, 70%))",
      gradientAccent: "linear-gradient(135deg, hsl(288, 70%, 63%), hsl(310, 75%, 63%))"
    }
  },
  {
    id: "volcanic-fire",
    name: "Volcanic Fire",
    light: {
      primary: "12 90% 50%",
      accent: "30 95% 45%",
      gradientPrimary: "linear-gradient(135deg, hsl(12, 90%, 50%), hsl(0, 95%, 45%))",
      gradientAccent: "linear-gradient(135deg, hsl(30, 95%, 45%), hsl(15, 90%, 45%))"
    },
    dark: {
      primary: "12 90% 58%",
      accent: "30 95% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(12, 90%, 58%), hsl(0, 95%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(30, 95%, 55%), hsl(15, 90%, 55%))"
    }
  },
  {
    id: "electric-lemon",
    name: "Electric Lemon",
    light: {
      primary: "48 100% 48%",
      accent: "250 85% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(48, 100%, 48%), hsl(38, 95%, 52%))",
      gradientAccent: "linear-gradient(135deg, hsl(250, 85%, 55%), hsl(270, 90%, 55%))"
    },
    dark: {
      primary: "48 100% 55%",
      accent: "250 85% 65%",
      gradientPrimary: "linear-gradient(135deg, hsl(48, 100%, 55%), hsl(38, 95%, 60%))",
      gradientAccent: "linear-gradient(135deg, hsl(250, 85%, 65%), hsl(270, 90%, 65%))"
    }
  },
  {
    id: "lilac-dream",
    name: "Lilac Dream",
    light: {
      primary: "275 60% 52%",
      accent: "235 60% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(275, 60%, 52%), hsl(295, 65%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(235, 60% ,55%), hsl(210, 70%, 55%))"
    },
    dark: {
      primary: "275 60% 60%",
      accent: "235 60% 63%",
      gradientPrimary: "linear-gradient(135deg, hsl(275, 60%, 60%), hsl(295, 65%, 65%))",
      gradientAccent: "linear-gradient(135deg, hsl(235, 60%, 63%), hsl(210, 70%, 65%))"
    }
  },
  {
    id: "peach-fizz",
    name: "Peach Fizz",
    light: {
      primary: "16 95% 58%",
      accent: "345 85% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(16, 95%, 58%), hsl(35, 95%, 52%))",
      gradientAccent: "linear-gradient(135deg, hsl(345, 85%, 55%), hsl(315, 80%, 50%))"
    },
    dark: {
      primary: "16 95% 65%",
      accent: "345 85% 63%",
      gradientPrimary: "linear-gradient(135deg, hsl(16, 95%, 65%), hsl(35, 95%, 60%))",
      gradientAccent: "linear-gradient(135deg, hsl(345, 85%, 63%), hsl(315, 80%, 60%))"
    }
  },
  {
    id: "skyline-blue",
    name: "Skyline Blue",
    light: {
      primary: "207 90% 50%",
      accent: "190 90% 45%",
      gradientPrimary: "linear-gradient(135deg, hsl(207, 90%, 50%), hsl(220, 95%, 45%))",
      gradientAccent: "linear-gradient(135deg, hsl(190, 90%, 45%), hsl(170, 85%, 40%))"
    },
    dark: {
      primary: "207 90% 58%",
      accent: "190 90% 55%",
      gradientPrimary: "linear-gradient(135deg, hsl(207, 90%, 58%), hsl(220, 95%, 55%))",
      gradientAccent: "linear-gradient(135deg, hsl(190, 90%, 55%), hsl(170, 85%, 50%))"
    }
  },
  {
    id: "charcoal-bronze",
    name: "Charcoal Bronze",
    light: {
      primary: "30 50% 45%",
      accent: "210 20% 40%",
      gradientPrimary: "linear-gradient(135deg, hsl(30, 50%, 45%), hsl(45, 45%, 40%))",
      gradientAccent: "linear-gradient(135deg, hsl(210, 20%, 40%), hsl(220, 15%, 50%))"
    },
    dark: {
      primary: "30 50% 55%",
      accent: "210 20% 50%",
      gradientPrimary: "linear-gradient(135deg, hsl(30, 50%, 55%), hsl(45, 45%, 50%))",
      gradientAccent: "linear-gradient(135deg, hsl(210, 20%, 50%), hsl(220, 15%, 60%))"
    }
  }
];
