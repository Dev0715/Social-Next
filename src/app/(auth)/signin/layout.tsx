export default function SigninLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="relative z-[+9999] ">
        
   
        {children}
      </main>
    )
  }