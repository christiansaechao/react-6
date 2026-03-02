export const Sidebar = () => {
  return (
    <aside className="w-64 bg-neutral-900">
      <h1 className="text-xl font-bold">User Dashboard</h1>
      <nav className="flex flex-col gap-2">
        <a href="Stats" className="px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors">Stats</a>
      </nav>
      <nav>
        <a href="Friends" className="px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors">Stats</a>
      </nav>
      <nav>
        <a href="Achievements" className="px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors">Stats</a>
      </nav>
    </aside>
  );
};
