const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div>{children}</div>
      <div className="fixed bottom-5">by Team HOT6</div>
    </main>
  );
};

export default Layout;
