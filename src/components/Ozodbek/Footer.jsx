import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around py-10 max-md:flex-col max-md:px-8">
      <div className="w-[300px] h-[58px] max-lg:w-[200px] max-lg:h-[40px] max-md:my-5">
        <Image src={"/logo (3).svg"} width={304} height={66} alt="logo" />
      </div>
      <ul className="flex items-center gap-10 max-sm:flex-col max-md:items-start">
        <li className="flex flex-col">
          <h2 className="text-[24px] max-lg:text-[18px]">Номер для заказа</h2>
          <a href="tel" className="flex py-5">
            <Image src={"/Call.svg"} width={24} height={24} alt="tel" />
            <h3>+7(930)833-38-11</h3>
          </a>
        </li>
        <li className="flex flex-col items-center">
          <h2 className="text-[24px] max-lg:text-[18px]">Мы в соцсетях</h2>
          <li className="flex gap-5 py-3">
            <a href="tel">
              <Image src={"/vk.svg"} width={36} height={36} alt="vk" />
            </a>
            <a href="tel">
              <Image src={"/bi_telegram.svg"} width={36} height={36} alt="tg" />
            </a>
          </li>
        </li>
      </ul>
      </div>
      <div className="flex flex-col ml-48 max-lg:ml-24 max-md:ml-10">
        <p>© YouMeal, 2022</p>
        <p>Design: Anastasia Ilina</p>
      </div>
    </div>
  );
}
