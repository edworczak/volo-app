import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import IconButton from "../icon-button/icon-button";

type DialogProps = {
    title: string;
    children: React.ReactNode;
    confirmPath?: string;
    cancelPath?: string;
};

export default function Dialog({
    title,
    children,
    confirmPath,
    cancelPath,
}: DialogProps) {
    return (
        <div className="w-full min-h-full flex flex-col">
            <div className="w-full p-4 flex">
                <h1>{title}</h1>
            </div>
            <div className="p-4 mb-[72px]">{children}</div>
            <div className="fixed bottom-0 left-0 bg-white w-full p-4 grid grid-cols-2 gap-4">
                <div>
                    {cancelPath && (
                        <Link className="button" href={cancelPath}>
                            anuluj
                        </Link>
                    )}
                </div>
                <div>
                    {confirmPath && (
                        <Link className="button primary" href={confirmPath}>
                            zapisz
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
