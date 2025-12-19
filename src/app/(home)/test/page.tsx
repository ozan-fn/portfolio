import Image from "next/image";
import test from "@/assets/028c7f187f32db8a7007b08adf304cf0(1).jpeg";

export default function Test() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="max-w-md">
                <Image src={test} alt="Image" width={512} height={512} />
            </div>
        </div>
    );
}
