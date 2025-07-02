export default function SectionTitle({ title, className = '' }: { title: string; className?: string }) {
  return (
    <h2 className={` text-xl sm:text-2xl my-6 md:text-4xl 2xl:text-5xl text-[#21272A] font-bold ${className}`}>
      {title}
    </h2>
  );
}

