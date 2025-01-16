"use client";
import React, { useState } from "react";
// import "./Categories.css"; // Import custom CSS to hide the scrollbar

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState("Бургеры");

    const categories = [
        {
            image: "./burger.svg",
            name: "Бургеры",
        },
        {
            image: "./zakuski.svg",
            name: "Закуски",
        },
        {
            image: "./xot_dog.svg",
            name: "Хот-доги",
        },
        {
            image: "./kombo.svg",
            name: "Комбо",
        },
        {
            image: "./shaurma.svg",
            name: "Шаурма",
        },
        {
            image: "./pitsa.svg",
            name: "Пицца",
        },
        {
            image: "./vok.svg",
            name: "Вок",
        },
    ];

    return (
        <div className="overflow-x-auto hide-scrollbar ">
            <div className="flex gap-10 w-max mx-auto">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className={`flex items-center gap-2 p-2 rounded-full cursor-pointer whitespace-nowrap ${
                            activeCategory === category.name
                                ? "bg-[#FFAB08] "
                                : "bg-white"
                        }`}
                        onClick={() => setActiveCategory(category.name)}
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            width={36}
                            height={36}
                        />
                        <p className="text-sm font-medium px-4">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
