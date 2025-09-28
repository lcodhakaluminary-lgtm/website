export default function Footer(){
  return (
    <footer className="border-t">
      <div className="container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-extrabold">Leo Club of Dhaka Luminary</div>
          <div className="text-sm text-muted">District 315 B1, Dhaka, Bangladesh</div>
        </div>
        <div className="text-sm text-muted">© {new Date().getFullYear()} Leo Club of Dhaka Luminary</div>
        <div className="flex gap-4 text-sm">
          <a href="https://www.facebook.com/share/16xqDiQFRb/" className="hover:underline">Facebook</a>
          <a href="https://www.instagram.com/lco.dhakaluminary?igsh=MW1yd3BudWZmeDQ2bw==" className="hover:underline">Instagram</a>
          <a href="mailto:lco.dhakaluminary@gmail.com" className="hover:underline">Email</a>
        </div>
      </div>
    </footer>
  )
}
