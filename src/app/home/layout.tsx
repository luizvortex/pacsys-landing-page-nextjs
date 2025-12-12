export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Removemos html e body. Use uma div ou Fragment (<>...</>)
    <div className="antialiased"> 
      {children}
    </div>
  );
}