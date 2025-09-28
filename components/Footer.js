export default function Footer(){
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 grid gap-3 md:grid-cols-3 items-center">
        <div>
          <div className="font-extrabold">Leo Club of Dhaka Luminary</div>
          <div className="text-sm text-gray-500">District 315 B1, Dhaka, Bangladesh</div>
        </div>
        <div className="text-sm text-gray-500 md:text-center">
          © {new Date().getFullYear()} Leo Club of Dhaka Luminary
        </div>
        <div className="flex md:justify-end gap-4 text-sm">
          <a className="link" href="https://www.facebook.com/share/16xqDiQFRb/">Facebook</a>
          <a className="link" href="https://www.instagram.com/lco.dhakaluminary?igsh=MW1yd3BudWZmeDQ2bw==">Instagram</a>
          <a className="link" href="mailto:lco.dhakaluminary@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
