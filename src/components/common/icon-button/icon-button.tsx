import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type IconButtonProps = {
    icon: IconDefinition;
    url: string;
};

export default function IconButton({ icon, url }: IconButtonProps) {
    return (
        <Link
            className="button w-[50px] h-[50px] p-3 flex justify-center items-center"
            href={url}
        >
            <FontAwesomeIcon icon={icon} size="xs" />
        </Link>
    );
}
