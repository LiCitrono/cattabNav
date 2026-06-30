import './globals.css';

export const metadata = {
  title: 'XXXX CloudNav',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
