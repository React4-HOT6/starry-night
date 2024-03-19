const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen flex-col justify-center items-center">
      {children}
      <p className="fixed bottom-12">by Team HOT6</p>
    </main>
  );
};

export default Layout;
