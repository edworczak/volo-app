import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import IconButton from "../icon-button/icon-button";

type ContentWithStickyHeaderProps = {
    title: string;
    children: React.ReactNode;
    backPath?: string;
    editPath?: string;
  };
  
  export default function ContentWithStickyHeader({ title, children, backPath, editPath }: ContentWithStickyHeaderProps) {
      return (
          <div className="w-full min-h-full flex flex-col items-center justify-center gap-8">
                <div className="sticky top-0 w-full p-4 flex justify-center bg-white z-10">
                  <h1>{title}</h1>
                </div>
                <div className="p-4 mb-[72px]">
                    {children}
                </div>
                <div className="fixed bottom-0 left-0 bg-white w-full p-4 flex justify-between">
                  <div>
                    {editPath && <IconButton icon={faArrowLeft} url={editPath}/>}
                  </div>
                  <div>
                    {backPath && <IconButton icon={faArrowLeft} url={backPath}/>}
                  </div>                
              </div>
              </div>
      );
    }
    