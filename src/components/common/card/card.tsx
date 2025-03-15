type CardProps = {
    title: string;
    children: React.ReactNode;
  };
  
  export default function Card({ title, children }: CardProps) {
      return (
          <div className="flex flex-col gap-2 border-2 border-purple-900 relative p-8 mt-3">
            <h2 className="absolute -top-3 uppercase bg-white px-4 left-4 tracking-[.25em]">{title}</h2>
            <div>
                {children}
            </div>
          </div>
      );
    }
    