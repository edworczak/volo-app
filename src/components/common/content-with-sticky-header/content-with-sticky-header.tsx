type ContentWithStickyHeaderProps = {
    title: string;
    children: React.ReactNode;
  };
  
  export default function ContentWithStickyHeader({ title, children }: ContentWithStickyHeaderProps) {
      return (
          <div className="w-full min-h-full flex flex-col items-center justify-center gap-8">
                <div className="sticky top-0 w-full p-4 flex justify-center bg-white z-10">
                  <h1>{title}</h1>
                </div>
                <div className="p-4">
                    {children}
                </div>
              </div>
      );
    }
    