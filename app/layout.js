import './globals.css';

export const metadata = {
  title: 'TFBOYS YYDS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
