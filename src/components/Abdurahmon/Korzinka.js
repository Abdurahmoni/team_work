"use client";
import React, { useState, useEffect } from "react";

export default function Korzinka() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Супер сырный",
            weight: "512г",
            price: 550,
            quantity: 1,
            image: "./burger.png",
        },
        {
            id: 2,
            name: "Картошка фри",
            weight: "180г",
            price: 245,
            quantity: 2,
            image: "./fries.png",
        },
        {
            id: 3,
            name: "Жгучий хот-дог",
            weight: "245г",
            price: 239,
            quantity: 1,
            image: "./hotdog.png",
        },
    ]);
    const [isCartOpen, setIsCartOpen] = useState(false); 
    const [isMobile, setIsMobile] = useState(false);

    const handleQuantityChange = (id, action) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity:
                              action === "increment"
                                  ? item.quantity + 1
                                  : Math.max(item.quantity - 1, 0),
                      }
                    : item
            )
        );
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? (
                <div>
                    <div
                        className="flex justify-between items-center w-[300px] mb-4 bg-gray-100 p-4 rounded-lg cursor-pointer"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        <h2 className="text-lg font-bold">Корзина</h2>
                        <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
                            {totalItems}
                        </span>
                    </div>

                    {isCartOpen && (
                        <div className="p-4 w-[300px] bg-white rounded-lg shadow-md">
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between border-b pb-2"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-12 h-12 rounded"
                                            />
                                            <div>
                                                <h3 className="text-sm font-medium">
                                                    {item.name}
                                                </h3>
                                                <p className="text-xs text-gray-500">
                                                    {item.weight}
                                                </p>
                                                <p className="text-sm font-bold">
                                                    {item.price}Р
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        "decrement"
                                                    )
                                                }
                                                className="w-6 h-6 bg-gray-200 rounded text-sm flex items-center justify-center font-bold"
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        "increment"
                                                    )
                                                }
                                                className="w-6 h-6 bg-gray-200 rounded text-sm flex items-center justify-center font-bold"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-4 text-lg font-bold">
                                <span>Итого</span>
                                <span>{totalPrice}Р</span>
                            </div>

                            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg font-bold hover:bg-orange-600">
                                Оформить заказ
                            </button>

                            <div className="mt-2 flex items-center text-xs text-gray-500">
                                <img
                                    src="./delivery-icon.png"
                                    alt="delivery"
                                    className="w-4 h-4 mr-2"
                                />
                                Бесплатная доставка
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="p-4 w-full max-w-sm bg-white rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Корзина</h2>
                        <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
                            {totalItems}
                        </span>
                    </div>

                    <div className="space-y-4">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border-b pb-2"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded"
                                    />
                                    <div>
                                        <h3 className="text-sm font-medium">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            {item.weight}
                                        </p>
                                        <p className="text-sm font-bold">
                                            {item.price}Р
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(
                                                item.id,
                                                "decrement"
                                            )
                                        }
                                        className="w-6 h-6 bg-gray-200 rounded text-sm flex items-center justify-center font-bold"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(
                                                item.id,
                                                "increment"
                                            )
                                        }
                                        className="w-6 h-6 bg-gray-200 rounded text-sm flex items-center justify-center font-bold"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-4 text-lg font-bold">
                        <span>Итого</span>
                        <span>{totalPrice}Р</span>
                    </div>

                    <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg font-bold hover:bg-orange-600">
                        Оформить заказ
                    </button>

                    <div className="mt-2 flex items-center text-xs text-gray-500">
                        <img
                            src="./delivery-icon.png"
                            alt="delivery"
                            className="w-4 h-4 mr-2"
                        />
                        Бесплатная доставка
                    </div>
                </div>
            )}
        </div>
    );
}
