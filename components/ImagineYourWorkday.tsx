'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { usePopup } from '@/context/PopupContext';

export default function ImagineYourWorkday() {
    const { openPopup } = usePopup();

    const items = [
        { title: "Start your day with focus", desc: "Walk into a distraction-free zone designed for deep work" },
        { title: "Take client calls with confidence", desc: "Professional meeting rooms make you look established" },
        { title: "Connect with like-minded professionals", desc: "Network with 500+ ambitious freelancers and founders" },
        { title: "End the day with progress", desc: "Leave work at work. Go home energized, not drained" }
    ];

    return (
        <section className="py-24 bg-white px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] text-center mb-16 font-headings">
                    Imagine Your Workday Here
                </h2>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-xl">
                        <Image
                            src="https://images.pexels.com/photos/8297852/pexels-photo-8297852.jpeg"
                            alt="Workday at Universe Coworks"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-10">
                        {items.map((item, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="mt-1 shrink-0">
                                    <div className="w-10 h-10 bg-[#e6f6f4] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#00a896] group-hover:scale-110">
                                        <CheckCircle2 className="w-6 h-6 text-[#00a896] group-hover:text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-2 font-headings">{item.title}</h3>
                                    <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}

                        <div className="pt-6">
                            <button
                                onClick={openPopup}
                                className="w-full sm:w-auto px-10 py-4 bg-[#00a896] text-white rounded-full font-bold text-xl shadow-xl hover:bg-teal-700 hover:scale-105 transition-all shadow-teal-700/10"
                            >
                                See It Yourself — Book Free Tour
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

