"use client";

import { X } from "lucide-react";
import Image from "next/image";

export default function BurgerModal({ burger, isOpen, onClose, onAddToCart }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[20px] max-w-[620px] w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-[24px] font-semibold mb-4">{burger.name}</h2>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
            <Image
              src={burger.image || "/placeholder.svg"}
              alt={burger.name}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-700 mb-4">
            {burger.description ||
              "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести."}
          </p>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Состав:</h3>
            <ul className="text-gray-600 space-y-1">
              <li>Пшеничная булочка</li>
              <li>Котлета из говядины</li>
              <li>Красный лук</li>
              <li>Листья салата</li>
              <li>Соус горчичный</li>
            </ul>
          </div>

          <div className="text-gray-500 mb-4">{burger.weight}, ккал 430</div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => onAddToCart(burger)}
              className="bg-orange-500 text-white px-20 py-3 rounded-[12px] hover:bg-orange-600 font-semibold"
            >
              Добавить
            </button>

            <div className="flex items-center gap-4">
              <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md text-gray-400">
                -
              </button>
              <span>1</span>
              <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md text-gray-400">
                +
              </button>
            </div>

            <span className="font-bold text-[24px]">{burger.price}₽</span>
          </div>
        </div>
      </div>
    </div>
  );
}
