import type { ColorHat, Role, } from "@/types/SixHats";

export interface Hat {
    color: ColorHat;
    role: Role;
    data: string[];
    // data: string[] | string;
}

export interface SixHats {
    hats: Hat[]
}


