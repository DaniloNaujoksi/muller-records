// Every page lives under `[locale]`, and `[locale]/layout.tsx` renders
// <html lang={locale}> and <body>. Next requires a layout at the root of `app/`,
// so this one passes children straight through — rendering <html>/<body> here
// as well would nest them and every localised page would ship lang="en".
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
