type CardProps = {
    title: string;
    children: React.ReactNode;
    alert?: boolean;
};

export default function Card({ title, children, alert }: CardProps) {
    return (
        <div
            className={`flex flex-col gap-2 border-2 relative p-6 mt-3 ${alert ? "border-pink-700" : "border-purple-900"}`}
        >
            <h2 className="absolute -top-3 uppercase bg-white px-2 left-4 tracking-[.25em]">
                {title}
            </h2>
            <div className="flex flex-col gap-4">{children}</div>
        </div>
    );
}
