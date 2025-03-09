function Badge({ children, id }: { children: React.ReactNode; id: number }) {
  return (
    <div
      key={id}
      className="relative rounded bg-muted text-accent-foreground font-semibold px-[0.75rem] py-[0.1rem] italic text-xs  hover:bg-muted/70 w-fit hover:text-diff font-montserrat hover:cursor-pointer"
    >
      {children}
    </div>
  );
}

export default Badge;
