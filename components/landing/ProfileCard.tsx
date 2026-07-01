export function ProfileCard() {
  return (
    <aside className="w-full md:w-80">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#071427] to-[#031020] p-6 shadow-2xl">
        <div
          className="mb-4 h-40 w-full overflow-hidden rounded-md bg-cover bg-center"
          style={{ backgroundImage: "url('/opengraph-image-bg.png')" }}
        />
        <h3 className="text-lg font-semibold text-white">About me</h3>
        <p className="mt-3 text-sm text-slate-300">
          I build intelligent voice AI solutions that help businesses automate conversations and
          deliver better customer experiences.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          <li>• Bangalore, India</li>
          <li>• Associate Solution Delivery Engineer</li>
          <li>• AI · Voice AI · Backend · Automation</li>
        </ul>
      </div>
    </aside>
  );
}
