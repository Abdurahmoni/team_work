"use client";

import Image from "next/image";
import { useState } from "react";
import BurgerModal from "../Jasur/Burger-modal";

export default function BurgerMenu() {
    const [cart, setCart] = useState([]);
    const [selectedBurger, setSelectedBurger] = useState(null);

    const burgers = [
        {
            id: 1,
            name: "Мясная бомба",
            price: 689,
            weight: "520г",
            image: "/1-photo.png",
        },
        {
            id: 2,
            name: "Супер сырный",
            price: 550,
            weight: "512г",
            image: "/2-photo.png",
        },
        {
            id: 3,
            name: "Сытный",
            price: 639,
            weight: "580г",
            image: "/3-photo.png",
        },
        {
            id: 4,
            name: "Тяжелый удар",
            price: 480,
            weight: "470г",
            image: "/4-photo.png",
        },
        {
            id: 5,
            name: "Вечная классика",
            price: 450,
            weight: "450г",
            image: "/5-photo.png",
        },
        {
            id: 6,
            name: "Итальянский",
            price: 560,
            weight: "510г",
            image: "/6-photo.png",
        },
    ];

    const addToCart = (burger) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === burger.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === burger.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...burger, quantity: 1 }];
        });
    };

    const updateQuantity = (id, delta) => {
        setCart((prevCart) => {
            return prevCart
                .map((item) => {
                    if (item.id === id) {
                        const newQuantity = item.quantity + delta;
                        return newQuantity > 0
                            ? { ...item, quantity: newQuantity }
                            : null;
                    }
                    return item;
                })
                .filter(Boolean);
        });
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-gray-100 p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-[40px] font-extrabold mb-8">Бургеры</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Sidebar */}
                    <div className="w-full lg:w-[300px] bg-white p-6 rounded-[20px] h-fit">
                        <div className="flex items-center gap-2 mb-6">
                            <h2 className="text-[24px] font-semibold">
                                Корзина
                            </h2>
                            <span className="bg-gray-200 px-[6px] py-[2px] rounded-md text-sm">
                                {totalItems}
                            </span>
                        </div>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 mb-4"
                            >
                                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">{item.name}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm text-gray-400">
                                            {item.weight}
                                        </p>
                                        <p className="text-sm font-medium">
                                            {item.price}₽
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-md text-gray-400"
                                        onClick={() =>
                                            updateQuantity(item.id, -1)
                                        }
                                    >
                                        -
                                    </button>
                                    <span className="text-sm">
                                        {item.quantity}
                                    </span>
                                    <button
                                        className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-md text-gray-400"
                                        onClick={() =>
                                            updateQuantity(item.id, 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex justify-between mb-4 text-lg">
                                <span>Итого</span>
                                <span className="font-bold">{totalPrice}₽</span>
                            </div>
                            <button className="w-full bg-orange-500 text-white py-3 rounded-[12px] hover:bg-orange-600 font-semibold">
                                Оформить заказ
                            </button>
                            <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
                                <span>🚚</span>
                                <span>Бесплатная доставка</span>
                            </div>
                        </div>
                    </div>

                    {/* Burgers Grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                        {burgers.map((burger) => (
                            <div
                                key={burger.id}
                                className="bg-white rounded-[20px] overflow-hidden"
                            >
                                <div
                                    className="relative aspect-square cursor-pointer"
                                    onClick={() => setSelectedBurger(burger)}
                                >
                                    <Image
                                        src={burger.image}
                                        alt={burger.name}
                                        width={800}
                                        height={600}
                                        priority={false}
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-[24px]">
                                                {burger.price}₽
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                {burger.weight}
                                            </span>
                                        </div>
                                        <h3 className="text-[16px]">
                                            {burger.name}
                                        </h3>
                                        <button
                                            onClick={() => addToCart(burger)}
                                            className="w-full bg-gray-200 py-[10px] rounded-[12px] hover:bg-gray-300 mt-2 font-semibold"
                                        >
                                            Добавить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <BurgerModal
                burger={selectedBurger}
                isOpen={!!selectedBurger}
                onClose={() => setSelectedBurger(null)}
                onAddToCart={addToCart}
            />
        </div>
    );
}
