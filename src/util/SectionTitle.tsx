export default function SectionTitle({ title, className = '' }: { title: string; className?: string }) {
  return (
    <h1 className={` text-3xl my-4 md:my-6 md:text-4xl text-[#21272A] font-bold ${className}`}>
      {title}
    </h1>
  );
}

