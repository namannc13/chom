function Badge({ children, id }: { children: React.ReactNode; id: number }) {
  return (
    <div
      key={id}
      className="relative rounded bg-muted text-primary font-semibold px-[0.75rem] py-[0.1rem] italic text-sm w-fit font-montserrat hover:cursor-pointer"
    >
      {children}
    </div>
  );
}

export default Badge;
