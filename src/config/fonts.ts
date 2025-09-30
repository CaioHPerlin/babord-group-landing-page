import localFont from "next/font/local";

export const bluuSuperstarFont = localFont({
   src: [
    {
      path: '../app/assets/fonts/bluu-superstar/BluuSuuperstarRegular.ttf',
      weight: '400',
    },
    {
      path: '../app/assets/fonts/bluu-superstar/BluuSuuperstarBold.ttf',
      weight: '600',
    },
    {
      path: '../app/assets/fonts/bluu-superstar/BluuSuuperstarBlack.ttf',
      weight: '700',
    },
  ],
  variable: "--font-bluu",
  display: "swap",
});

export const maisonNeueFont = localFont({
  src: [
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueThin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueThinItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueLightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueBook.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueBookItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueMediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueDemi.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueDemiItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueBoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueBlack.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/maison-neue/MaisonNeueBlackItalic.otf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: "--font-maison",
  display: "swap",
});
