import { abeezee } from "@/app/ui/fonts";
import LongWrenchIcon from "@/app/ui/icons/LongWrenchIcon";
export default function SpoToolyLogo() {
  return (
    <div
      className={`${abeezee.className} flex flex-col leading-none text-white`}
    >
      <p className="text-[44px]">SpoTooly</p>
      <LongWrenchIcon className="stroke-white fill-none rotate-45 stroke-[1.4px] translate-x-[5.6rem] -translate-y-[1.85rem] h-[3.75rem] w-[3.75rem] " />
    </div>
  );
}
