import { Inter } from "@next/font/google";
import useBearStore from "@/store/store";
import { Stack } from "@mui/material";

export default function Home() {
    const bears = useBearStore((state) => state);
    console.log(bears);

    return <Stack sx={{ background: "red" }}>home</Stack>;
}
