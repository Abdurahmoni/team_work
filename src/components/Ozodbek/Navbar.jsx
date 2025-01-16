import Image from "next/image";
import React from "react";

export default function Navbar() {
    return (
        <div className="w-full bg-[url(/Ellipse1.svg)] bg-cover pb-24 bg-center flex flex-col items-center gap-10">
            <div className="w-[150px] h-[29px] py-5 ">
                <Image
                    src={"/logo (2).svg"}
                    width={150}
                    height={29}
                    alt="logs"
                />
            </div>
            <div className="flex gap-10 max-sm:flex-col-reverse max-sm:items-center">
                <div className="w-[253px] h-[289px] max-md:w-[177px] max-md:h-[203px] ">
                    <Image
                        src={"/desctopB.svg"}
                        width={253}
                        height={289}
                        alt="burger"
                    />
                </div>

                <div className="">
                    <h1 className="text-[50px] text-white max-md:text-[36px] max-sm:text-[30px]">
                        Только самые
                        <br />{" "}
                        <span className="text-[#ff5c00]">сочные бургеры!</span>
                    </h1>
                    <p className="text-white max-md:text-[12px] max-sm:text-center">
                        Бесплатная доставка от 599₽
                    </p>
                </div>
            </div>
        </div>
    );
}
