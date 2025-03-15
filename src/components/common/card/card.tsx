type CardProps = {
    title: string;
    children: React.ReactNode;
    alert?: boolean;
  };
  
  export default function Card({ title, children, alert }: CardProps) {
      return (
          <div className={`flex flex-col gap-2 border-2 relative p-8 mt-3 ${alert ? "border-pink-700" : "border-purple-900"}`}>
            <h2 className="absolute -top-3 uppercase bg-white px-4 left-4 tracking-[.25em]">{title}</h2>
            <div>
                {children}
            </div>
          </div>
      );
    }
    